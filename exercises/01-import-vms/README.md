# `01` Import Virtual Machines

Before starting the network configuration, you need to have **two virtual machines** available in VirtualBox:

1. A machine with **Debian**.
2. A machine with **Windows** (you can install it manually or follow a step-by-step guide).

## Import Debian

- 01. **Download the OVA file:** This file contains a complete image of the Debian operating system, with its virtual disk and configurations ready to run. [Download here](https://storage.googleapis.com/breathecode/virtualbox/deb.ova).

- 02. **Open the OVA file:** Once the file is downloaded, double-click it. This will automatically open VirtualBox and display the **import wizard** with all the machine details.

    If for some reason **VirtualBox does not open automatically**, you can also import manually:

    1. Open VirtualBox.
    2. Go to `File` > `Import Appliance...`.
    3. Select the `.ova` file you downloaded.
    4. Click `Next` and then `Import` to confirm.

    ### Import OVA File

    ![Importing OVA file in VirtualBox](../../.learn/assets/vbox-import-select-ova.png)

    ### Configuration Confirmation

    ![Confirmation of imported virtual machine configuration](../../.learn/assets/vbox-import-confirm.png)

- 03. **Start your new virtual machine:** Once the import process is complete, you are ready to start your new Debian machine. The machine already comes with access credentials, but as a good cybersecurity student, you know you should change them to something more secure.

        > **Access Information**<br>
        **User**: debian<br>
        **Password**: 123456<br>
        **Root Password**: 123456

## Import Windows

For the Windows machine, you can use any valid ISO image you have (for example, Windows 10, Windows 11, or Windows Server). If you don't know how to do this, follow this detailed guide:

> [Guide to installing Windows on VirtualBox](https://4geeks.com/interactive-exercise/installing-windows-on-virtual-machine)

### Important requirements for the Windows VM

- **Operating system type**: select an option that contains `"Windows"` (for example, `Windows 10`, `Windows 2019`, etc.).
- **Network**: Do not configure the network yet. You will do this in the next step.
- **User and password**: You can set any you want, but remember to write them down for later access.

> 💡 If you already have a previously installed Windows machine in VirtualBox, you can use it directly without needing to install a new one.
