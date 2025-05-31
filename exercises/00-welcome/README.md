# NAT Network Interface Configuration in VirtualBox

In this exercise, you will work with **two virtual machines**: one running Debian and the other running Windows. The goal is to configure them so they can **communicate with each other through an internal NAT network**, simulating a local network environment with internet access.

### Requirements

If you haven't installed the virtual machines yet, download them from the following links:

- [Debian Virtual Machine](https://storage.googleapis.com/breathecode/virtualbox/deb.ova)
- [Windows Virtual Machine (installation guide)](https://4geeks.com/interactive-exercise/installing-windows-on-virtual-machine)

> ⚠️ Make sure to select the correct operating system type when creating or importing each machine:
> - For Debian: select a type like `Debian (64-bit)` or `Linux`
> - For Windows: select any valid version that contains `Windows` in its type (for example: `Windows 10`, `Windows 2019`, etc.)

---

Steps you will perform

1. **Import the virtual machines** into VirtualBox.
2. **Create an internal NAT network** from the global VirtualBox settings.
3. **Assign that NAT network to the network interface** of each virtual machine.
4. **Start both machines** and verify that they have IP addresses assigned within the same range.
5. **Test connectivity** using `ping` from one machine to the other.
6. **Automatically validate** the configuration using the verification system.
