# `02` Creating a NAT Network

To allow your virtual machines to communicate with each other as if they were on a local network with internet access, you need to create an **internal NAT Network** in VirtualBox.

This network will act as a kind of virtual router that connects both machines and allows them to share the same network without being directly exposed to the host or external networks.

Step-by-step: Creating a NAT Network

1. Open **VirtualBox**.
2. In the top menu, click on `File > Tools > NAT Networks`.
3. Go to the **NAT Networks** tab.
4. Click the **Create** button (green `+` icon).
5. A network with a default name will be generated. Change it to something clear, such as: `NatNetwork`.
6. In the lower section:
    - Leave the **IPv4 Prefix** as is (`10.0.2.0/24`).
    - Make sure the **Enable DHCP** box is checked.
7. You do not need to enable IPv6 for this exercise.
8. Click **Apply** and then **Close** to save the changes.

### Example configuration

![Network Manager](../../.learn/assets/vbox-network-manager.png)

## ⚠️ Important

- **Write down the exact name of the network** (`NatNetwork`). This name is **case-sensitive** and you will need to use it in the next step when configuring the network interfaces on your virtual machines.
- If you already had a NAT network created with another name, you can reuse it, as long as both machines are connected to it.
