# Tipificación de Delitos Informáticos según la Ley N° 21.459 (Chile)

Si los hechos de la brecha de Dropbox hubieran ocurrido bajo la jurisdicción de la legislación chilena actual, las conductas de los atacantes se encuadrarían en los siguientes delitos penales:

### 1. Artículo 2° - Acceso Ilícito
* **Cita de la Norma:** El Artículo 2° sanciona al que, con ánimo de apoderarse, usar o conocer la información contenida en un sistema informático, acceda a él en su totalidad o en parte, sin la debida autorización o excediendo la que posea, vulnerando las medidas de seguridad que se hayan dispuesto.
* **Mapeo de la Acción del Atacante:** Los cibercriminales utilizaron credenciales de acceso remoto (VPN) obtenidas de manera ilegítima a través de un tercero (LinkedIn) para ingresar a los repositorios de datos internos de Dropbox. Al ejecutar la autenticación simulando ser el empleado real, vulneraron el perímetro de control de accesos sin autorización del propietario legal del sistema informático, consumando el delito de acceso ilícito.

### 2. Artículo 4° - Receptación de Datos Informáticos
* **Cita de la Norma:** El Artículo 4° penaliza al que, a sabiendas de su origen ilícito, comercialice, transfiera, comercialice a cualquier título, almacene o introduzca en un sistema informático datos provenientes de los delitos de acceso ilícito o interceptación de datos.
* **Mapeo de la Acción del Atacante:** Con posterioridad a la extracción del año 2012, la base de datos con los hashes de contraseñas y correos de 68 millones de usuarios fue almacenada, estructurada y posteriormente **puesta a la venta en el mercado negro de internet (Dark Web)** en 2016 por el pseudónimo "TheRealDeal". Toda la cadena de distribución, almacenamiento y venta de este paquete de información robada se tipifica bajo la figura de receptación de datos informáticos.

### 3. Artículo 7° - Abuso de Dispositivos
* **Cita de la Norma:** El Artículo 7° sanciona a quien, para la comisión de alguno de los delitos previstos en esta ley, produzca, adquiera, introduzca, expenda, envíe, remita o ponga a disposición contraseñas, códigos de acceso o datos similares que permitan acceder a un sistema informático o parte de él.
* **Mapeo de la Acción del Atacante:** Los atacantes inicialmente adquirieron o extrajeron el listado de contraseñas filtradas de LinkedIn con el propósito directo de utilizarlas como llaves de acceso en otros sistemas corporativos de alto valor (como Dropbox). El procesamiento y uso automatizado de estos códigos y contraseñas ajenas para vulnerar un sistema informático configura el delito de abuso de dispositivos informáticos de acceso.