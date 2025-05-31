# `01` Importar las máquinas virtuales

Antes de comenzar la configuración de red, necesitas tener disponibles **dos máquinas virtuales** en VirtualBox:

1. Una máquina con **Debian**.
2. Una máquina con **Windows** (puedes instalarla manualmente o seguir una guía paso a paso).

## Importar Debian

- 01. **Descarga el archivo OVA:** Este archivo contiene una imagen completa del sistema operativo Debian, con su disco virtual y configuraciones listas para su ejecución. [Descarga aquí](https://storage.googleapis.com/breathecode/virtualbox/deb.ova).



- 02. **Abre el archivo OVA:** Una vez descargado el archivo, haz doble clic sobre él. Esto abrirá automáticamente VirtualBox y mostrará el **asistente de importación** con todos los detalles de la máquina.

        Si por algún motivo **VirtualBox no se abre automáticamente**, también puedes hacer la importación manual:

        1. Abre VirtualBox.
        2. Dirígete a `Archivo` > `Importar servicio virtualizado...`.
        3. Selecciona el archivo `.ova` que descargaste.
        4. Haz clic en `Siguiente` y luego en `Importar` para confirmar.

        ### Importar archivo OVA

        ![Importación de archivo ova en VirtualBox](../../.learn/assets/vbox-import-select-ova.png)

        ### Confirmación de la configuración

        ![Confirmación de configuración de maquina virtual importada](../../.learn/assets/vbox-import-confirm.png)

- 03. **Ejecuta tu nueva máquina virtual:** Una vez termine el proceso de importación, estas listo para arrancar tu nueva máquina Debian. La máquina ya viene configurada con claves de acceso, pero como buen estudiante de ciberseguridad, sabes que deberías cambiarlas por alguna más segura.

        > **Información de acceso**<br>
        **Usuario**: debian<br>
        **Clave**: 123456<br>
        **ClaveRoot**: 123456


## Importar Windows

Para la máquina con Windows, puedes usar cualquier imagen ISO válida que tengas (por ejemplo, Windows 10, Windows 11, o Windows Server). Si no sabes cómo hacerlo, sigue esta guía detallada:

> [Guía para instalar Windows en VirtualBox](https://4geeks.com/interactive-exercise/installing-windows-on-virtual-machine)

### Requisitos importantes para la VM de Windows

- **Tipo de sistema operativo**: selecciona una opción que contenga `"Windows"` (por ejemplo, `Windows 10`, `Windows 2019`, etc.).
- **Red**: Aún no configures la red. Eso lo harás en el siguiente paso.
- **Usuario y contraseña**: Puedes establecer las que desees, pero recuerda anotarlas para el acceso posterior.

> 💡 Si ya tienes una máquina Windows previamente instalada en VirtualBox, puedes usarla directamente, sin necesidad de instalar una nueva.
