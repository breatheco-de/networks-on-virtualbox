# Configuración de interfaces de red NAT en VirtualBox

En esta práctica trabajarás con **dos máquinas virtuales**: una con Debian y otra con Windows. El objetivo es configurarlas para que puedan **comunicarse entre sí a través de una red NAT interna**, simulando un entorno de red local con salida a internet.

### Requisitos

Si aún no has instalado las máquinas virtuales, descárgalas desde los siguientes enlaces:

- [Máquina virtual Debian](https://storage.googleapis.com/breathecode/virtualbox/deb.ova)
- [Máquina virtual Windows (guía de instalación)](https://4geeks.com/interactive-exercise/installing-windows-on-virtual-machine)

> ⚠️ Asegúrate de seleccionar el tipo correcto de sistema operativo al crear o importar cada máquina:
> - Para Debian: selecciona un tipo como `Debian (64-bit)` o `Linux`
> - Para Windows: selecciona cualquier versión válida que contenga `Windows` en su tipo (por ejemplo: `Windows 10`, `Windows 2019`, etc.)

---

Pasos que vas a realizar

1. **Importar las máquinas virtuales** en VirtualBox.
2. **Crear una red NAT interna** desde la configuración global de VirtualBox.
3. **Asignar esa red NAT a la interfaz de red** de cada máquina virtual.
4. **Iniciar ambas máquinas**, verificar que tienen direcciones IP asignadas dentro del mismo rango.
5. **Probar la conectividad** usando `ping` desde una máquina hacia la otra.
6. **Validar automáticamente** la configuración usando el sistema de verificación.
