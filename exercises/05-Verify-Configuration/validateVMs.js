const fs = require('fs');

function parseVMConfig(filePath) {
  const config = fs.readFileSync(filePath, 'utf8');
  const machines = config.split('---------').map(section => {
    const lines = section.split('\n').filter(line => line.trim() !== '');
    const machine = {};
    lines.forEach(line => {
      if (line.includes('=')) {
        const [key, value] = line.split('=').map(str => str.trim().replace(/"/g, ''));
        if (key && value) {
          machine[key] = value;
        }
      }
    });
    return machine;
  });
  return machines.filter(machine => Object.keys(machine).length > 0);
}

function validateVMs(configPath) {
  const machines = parseVMConfig(configPath);

  const results = {
    foundWindows: false,
    foundDebian: false,
    windowsHasNatNetwork: false,
    windowsNatNetworkConnected: false,
    debianHasNatNetwork: false,
    debianNatNetworkConnected: false,
    sameNatNetwork: false,
  };

  let windowsNatNetworkName = '';
  let debianNatNetworkName = '';

  machines.forEach(machine => {
    const osType = machine.ostype?.toLowerCase() || '';

    // Prioriza nat_network1, pero si no existe, usa nat-network1
    const natNetworkKey = machine['nat_network1'] || machine['nat-network1'];

    if (osType.includes('windows')) {
      results.foundWindows = true;
      if (machine.nic1 === 'natnetwork') {
        results.windowsHasNatNetwork = true;
        windowsNatNetworkName = natNetworkKey;
        if (machine.cableconnected1 === 'on') {
          results.windowsNatNetworkConnected = true;
        }
      }
    } else if (osType.includes('debian') || osType.includes('linux') || osType.includes('ubuntu')) {
      results.foundDebian = true;
      if (machine.nic1 === 'natnetwork') {
        results.debianHasNatNetwork = true;
        debianNatNetworkName = natNetworkKey;
        if (machine.cableconnected1 === 'on') {
          results.debianNatNetworkConnected = true;
        }
      }
    }
  });

  if (
    results.windowsHasNatNetwork &&
    results.debianHasNatNetwork &&
    windowsNatNetworkName &&
    windowsNatNetworkName === debianNatNetworkName
  ) {
    results.sameNatNetwork = true;
  }

  return results;
}

module.exports = { validateVMs };

