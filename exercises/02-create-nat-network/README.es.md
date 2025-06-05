# `02` Creacion de una Red NAT

Para que tus máquinas virtuales puedan comunicarse entre sí como si estuvieran en una red local con acceso a internet, es necesario crear una **Red NAT interna** en VirtualBox.

Esta red actuará como una especie de router virtual que conectará ambas máquinas y les permitirá compartir una misma red sin exponerse directamente al host ni a redes externas.

Crear una Red NAT paso a paso:

1. Abre **VirtualBox**.
2. En el menú superior, haz clic en `Archivo > Herramientas > Redes NAT`.
3. Ve a la pestaña **Redes NAT**.
4. Haz clic en el botón **Crear** (ícono de `+` verde).
5. Se generará una red con nombre por defecto. Cámbialo a algo claro como: `NatNetwork`.
6. En la sección inferior:
   - Deja el **Prefijo IPv4** como está (`10.0.2.0/24`).
   - Asegúrate de que esté marcada la casilla **Habilitar DHCP**.
7. No es necesario habilitar IPv6 para esta práctica.
8. Haz clic en **Aplicar** y luego en **Cerrar** para guardar los cambios.

### Ejemplo de configuración

![Administrador de red](../../.learn/assets/vbox-network-manager.png)

## ⚠️ Importante

- **Anota exactamente el nombre de la red** (`NatNetwork`). Este nombre es **sensible a mayúsculas y minúsculas** y deberás usarlo en el próximo paso al configurar las interfaces de red en tus máquinas virtuales.
- Si ya tenías una red NAT creada con otro nombre, puedes reutilizarla, siempre que ambas máquinas estén conectadas a ella.
