# `05` Validate Your Installation

We have developed two scripts to help you measure your success during this project.

Two scripts inside the `./.learn/assets` folder are responsible for bringing information from VirtualBox back to LearnPack for validation.

- `report_linux.sh` will be executed automatically by LearnPack.
- `report_windows.bat` must be copied and pasted onto the Desktop of your host machine, executed, and then you need to copy the generated "windows_report.txt" file and paste it into the root of these LearnPack exercises for validation.

## 1. Add VBoxManage to the Path on Your Host Machine

To ensure the `report_windows.bat` script works correctly, you may need to add **VBoxManage** to the PATH of your Windows host machine. Here’s how to do it:

- **Find the location of VBoxManage.** Usually, VBoxManage.exe is located in the VirtualBox installation directory, typically `C:\Program Files\Oracle\VirtualBox`. Copy this path.

- **Access the environment variables settings and modify the Path variable:**

    * Right-click the Windows Start button and select `System`.
    * In System, select `Advanced system settings`.
    * In System Properties, click on `Environment Variables...`
    * In the `System variables` section, find and select the `Path` variable, then click Edit...
    * In the `Edit Environment Variable` window, click `New` and insert the path you copied: `C:\Program Files\Oracle\VirtualBox`.
    * Finally, click OK to close all windows.
    * To verify that you have completed these steps successfully, open the command line and type:

        ```bash
        VBoxManage --version
        ```

## 2. Run the `report_windows.bat` File

* If you placed the `report_windows.bat` file on your host machine's Desktop, double-click it to run.
* Copy the generated `windows_report.txt` file and paste it into the root of these exercises for validation.

> ⚠️  The "windows_report.txt" file must be at the same level as the `learn.json` file.

## 3. Run the Test

Once you have pasted the `windows_report.txt` file into the root of the LearnPack exercises, you can run the test to validate your Linux and Windows installation in VirtualBox.

## 4. All Set!

If you see the message that you passed the tests, congratulations! You now have a functional virtualized environment with `Windows` and `Debian`, connected via a **NAT network**. This environment will be your safe space to experiment during the course.

If you have any issues, feel free to contact a mentor or use the other support channels offered by 4Geeks.
