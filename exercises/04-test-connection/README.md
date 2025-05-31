# `04` Testing the Connection

Once inside each virtual machine, you can see that the interfaces appear as normal connections on a computer.

If you check the IP addresses of each one, you can confirm that they are in the same IP range. To do this, run the following commands in the terminals of each system.

> **On Windows**: `ipconfig`
![IP Configuration on Windows](../../.learn/assets/vbox-win-ip-config.png)

> **On Debian**: `ip addr`
![IP Configuration on Debian](../../.learn/assets/vbox-deb-ip-addr.png)

## Connectivity Test (`ping`)

Once you have verified the addresses, you can perform a `ping` test to check connectivity between both machines. The command is identical in Windows and Debian; you just need to follow it with the IP address of the machine you want to test the connection with.

For example, below you can see how 2 virtual machines can ping each other.

```bash
ping 10.0.2.15 # IP address of the Debian machine
``` 
![Ping on Debian](../../.learn/assets/vbox-deb-ping-test.png)


```bash
ping 10.0.2.4 # IP address of the Windows machine
```
![Ping on Windows](../../.learn/assets/vbox-win-ping-test.png)

### ⚠️ Important Note for Windows

By default, there is something in Windows that prevents it from responding to ping requests received by the machine. Find out what it is and disable it to perform the test.