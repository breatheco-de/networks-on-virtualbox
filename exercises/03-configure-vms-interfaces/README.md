# `03` Network Interface Configuration

Now that you have created your NAT Network (`NatNetwork`), the next step is to **connect both virtual machines to that network** through their primary network adapter.

Instructions for each virtual machine

1. In VirtualBox, **select one of your machines (Debian or Windows)** and click the `Settings` button.
2. In the left sidebar, select the `Network` category.
3. Make sure the **Adapter 1** tab is enabled (check the "Enable Network Adapter" box).
4. In the `Attached to:` field, select the **NAT Network** option.
5. In the `Network Name` field, select the network you created earlier, for example: `NatNetwork`.

> 🔁 Repeat exactly the same steps for the **other virtual machine**.

### Example of correct NAT interface configuration

![NAT Network Configuration](../../.learn/assets/vbox-vm-nat-network.png)

## ⚠️ Keep in mind

- You must perform this configuration on **both machines** (Windows and Debian).
- The network name must match exactly the name defined in the previous step (`NatNetwork` or any other you used).
- The connection will only work if both machines are powered on and properly connected to the **same NAT network**.
