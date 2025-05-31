# `05` Validar tu instalación

Hemos desarrollado dos scripts para ayudarte a medir tu éxito durante este proyecto.

Dos scripts dentro de la carpeta `./.learn/assets` se encargan de llevar la información desde VirtualBox de vuelta a LearnPack para su validación.

- `report_linux.sh` será ejecutado automáticamente por LearnPack.
- `report_windows.bat` debes copiar y pegar este archivo en el Escritorio de tu máquina anfitriona, ejecutar el archivo, y luego copiar el archivo "windows_report.txt" que genera y pegarlo en la raíz de estos ejercicios de LearnPack para su validación.

## 1. Agrega el comando VBoxManage al path de tu maquina anfitriona

Para asegurar el exito del script `report_windows.bat` es posible que necesites agregar **VBoxManage** al PATH de la maquina anfitriona windows. A continuación te indicamos como hacerlo:


- **Encuentra la ubicación de VBoxManage.** Normalmente, VBoxManage.exe se encuentra en el directorio de instalación de VirtualBox, que suele ser `C:\Program Files\Oracle\VirtualBox` copia esta ruta.

- **Accede a la configuración de variables de entorno y modifica la variable Path:**

    * Haz clic derecho en el botón de inicio de Windows y selecciona `Sistema`.
    * En Sistema, selecciona `Configuración avanzada del sistema`.
    * En Propiedades del sistema, haz clic en `Variables de entorno....`
    * En la sección `Variables del sistema`, busca y selecciona la variable `Path`, y luego haz clic en Editar....
    * En la ventana `Editar variable de entorno`, haz clic en `Nuevo` e inserta la ruta que copiaste `C:\Program Files\Oracle\VirtualBox``.
    * Finalmente, haz clic en Aceptar para cerrar todas las ventanas.
    * Para verificar que hemos hecho estos pasos con exito, abre la linea de comando  y escribe: 

        ```bash
        VBoxManage --version
        ```

## 2. Ejecuta el archivo `report_windows.bat`

* Si pegaste el archivo `report_windows.bat` en el ./Escritorio de tu máquina anfitriona haz doble clic para ejecutarlo. 
* Copia el archivo `windows_report.txt` que genera y pegalo en la raíz de estos ejercicios para su validación. 

> ⚠️  El archivo "windows_report.txt" debe estar en el mismo nivel del archivo `learn.json`.


## 3. Ejecutar la prueba

Una vez que hayas pegado el archivo `windows_report.txt` en la raíz de los ejercicios de LearnPack, puedes ejecutar la prueba para validar tu instalación de Linux y Windows en VirtualBox.

## 4. ¡Todo listo!

Si ves el mensaje de que pasaste las pruebas, ¡felicidades!. Ya tienes un entorno virtualizado funcional con `Windows` y `Debian`, conectado mediante una **red NAT**. Este entorno será tu espacio seguro para experimentar durante el curso.

Si tienes algún problema, no dudes en contactar a un mentor o a los otros canales de soporte ofrecidos por 4Geeks.
