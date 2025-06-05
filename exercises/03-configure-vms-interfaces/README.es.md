# `03` Configuración de interfaces de red

Ahora que creaste tu Red NAT (`NatNetwork`), el siguiente paso es **conectar ambas máquinas virtuales a esa red** a través de su adaptador de red principal.



Instrucciones para cada máquina virtual

1. En VirtualBox, **selecciona una de tus máquinas (Debian o Windows)** y haz clic en el botón `Configuración`.
2. En el panel lateral izquierdo, selecciona la categoría `Red`.
3. Asegúrate de que la pestaña **Adaptador 1** esté habilitada (casilla "Habilitar adaptador de red").
4. En el campo `Conectado a:` selecciona la opción **Red NAT**.
5. En el campo `Nombre de la red`, selecciona la red que creaste previamente, por ejemplo: `NatNetwork`.

> 🔁 Repite exactamente los mismos pasos para la **otra máquina virtual**.



### Ejemplo de configuración correcta de interfaz NAT

![Configuración de red NAT](../../.learn/assets/vbox-vm-nat-network.png)


## ⚠️ A tener en cuenta

- Debes realizar esta configuración en **ambas máquinas** (Windows y Debian).
- El nombre de la red debe coincidir exactamente con el nombre definido en el paso anterior (`NatNetwork` u otro que hayas usado).
- La conexión solo funcionará si ambas máquinas están encendidas y correctamente conectadas a la **misma red NAT**.
