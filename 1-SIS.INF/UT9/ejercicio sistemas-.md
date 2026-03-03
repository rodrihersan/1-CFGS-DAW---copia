--------------------------

Ejercicio 4

--------------------------





cd /proc

ls



Ver subdirectorios:

ls /proc/bus

ls /proc/modules

ls /proc/devices-tree



Ver un proceso concreto (por ejemplo el 1):

cd /proc/1

ls

cat status

cat cmdline



Los directorios con número representan procesos activos.



modules muestra los módulos del kernel cargados.



cmdline muestra cómo fue ejecutado el proceso.



status muestra información más legible del estado del proceso.



| Color                      | Significado          |

| -------------------------- | -------------------- |

| Azul                       | Directorios          |

| Verde                      | Ejecutables          |

| Celeste                    | Enlaces simbólicos   |

| Rojo                       | Archivos comprimidos |

| Amarillo sobre fondo negro | Dispositivo          |

| Blanco                     | Archivo normal       |

&nbsp; Magenta/Rosa  	       Archivos de imagen 

&nbsp;			       gráfica o sockets.

&nbsp; Rojo con fondo negro: Enlaces rotos (apuntan a un archivo que no existe)









--------------------------

EJERCICIO 5

-------------------------- 



1\. Ejecutar lsmod



&nbsp;	Dispositivos/módulos habituales que puedes ver:



&nbsp;	snd\_\* → sonido



&nbsp;	i915 → gráficos Intel



&nbsp;	vboxguest → si es máquina virtual VirtualBox



&nbsp;	usbcore → USB



&nbsp;	bluetooth



&nbsp;	nf\_tables → firewall





2\. Ver contenido de /etc/modules



cat /etc/modules





3\. Ver nuevos directorios de configuración



ls /etc/modules-load.d

ls /etc/modprobe.d







Buscar archivos:



ls /etc/modprobe.d/alsa-base.conf

ls /etc/modprobe.d/blacklist.conf



**alsa-base.conf**

Configura opciones del sistema de sonido ALSA (Advanced Linux Sound Architecture).



**blacklist.conf**

Sirve para bloquear módulos del kernel que no queremos que se carguen automáticamente.





------------------

EJERCICIO 6

------------------





En máquina virtual (VirtualBox):



Se usa:



Ctrl + tecla Host + F1-F7



La tecla Host normalmente es:



Ctrl derecho



Por tanto:



Ctrl derecho + F7







---------------------

EJERCICIO 7

--------------------

 **1. ¿Qué significa la N en runlevel?**

La N significa que no hay un nivel anterior (no había otro runlevel previo porque acabamos de iniciar el sistema).



**2. Cambiar de nivel**

sudo init 3

runlevel



Ahora aparecerá algo como:

5 3



Significa:

&nbsp;	5 → nivel anterior

&nbsp;	3 → nivel actual



Sí cambia respecto al punto anterior.





**3. Ver contenido de rc del entorno gráfico**

El entorno gráfico es el nivel 5:

&nbsp;	ls /etc/rc5.d



archivos que empiezan por:

&nbsp;	S → Start

&nbsp;	K → Kill



whoopsie



Es un servicio que envía informes de errores a Ubuntu para mejorar el sistema.



Sirve para reportar fallos automáticamente.





**4. Ver contenido de rc6.d**

ls /etc/rc6.d



El nivel 6 es:

&nbsp;	- Reinicio del sistema



Aquí normalmente verás muchos archivos que empiezan por K (Kill).



¿Por qué?

Porque al reiniciar el sistema deben detenerse todos los servicios antes de reiniciar.





-----------------------------

EJERCICIO 8

---------------------------

1. **Ver nivel de ejecución por defecto**



systemctl get-default



Normalmente devuelve:

&nbsp;	graphical.target  : Corresponde al Nivel 5



¿Qué pasaría si lo cambiamos a nivel 3?

sudo systemctl set-default multi-user.target



El sistema arrancaría sin entorno gráfico, solo en modo texto.



**2. Revisar /etc/init.d**



ls /etc/init.d



Servicios conocidos:



&nbsp;	-cron

&nbsp;	-cups

&nbsp;	-apache2

&nbsp;	-networking





***Servicio cron:***



Servicio que ejecuta tareas programadas automáticamente.



Ejemplo: copias de seguridad diarias.





***Servicio cups:***



Sistema de impresión de Linux (Common Unix Printing System).



Probar detener y arrancar:

sudo systemctl stop cron

sudo systemctl start cron



sudo systemctl stop cups

sudo systemctl start cups





Ver estado: systemctl status cron





3\. Diferencia entre restart y reload



| Comando           | Qué hace                                             |

| ------------------| ---------------------------------------------------- |

| systemctl restart | Detiene y vuelve a iniciar completamente el servicio |

| systemctl reload  | Recarga la configuración sin detener el servicio     |









