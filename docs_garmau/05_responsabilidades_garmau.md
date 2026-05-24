# Responsabilidades Legales de los Actores

En el incidente de seguridad de Dropbox (2012), es posible identificar tres actores principales, cada uno con distintos niveles y tipos de responsabilidades legales si los hechos fuesen juzgados bajo la normativa chilena:

### 1. El Atacante / Cibercriminal
* **Responsabilidad Penal:** Es el autor material del delito informático. Según la **Ley N° 21.459**, incurre en responsabilidad penal directa por la comisión del delito de *Acceso Ilícito* (Art. 2°) y *Receptación de datos informáticos* (Art. 4°), enfrentando penas privativas de libertad.
* **Responsabilidad Civil:** Conforme al **Artículo 2314 del Código Civil chileno** ("El que ha cometido un delito o cuasidelito que ha inferido daño a otro, es obligado a la indemnización..."), el atacante tiene responsabilidad civil extracontractual y está obligado a resarcir económicamente los daños causados tanto a Dropbox (daño emergente y lucro cesante) como a los usuarios (daño moral).

### 2. La Empresa (Dropbox)
* **Responsabilidad Civil:** Dropbox actúa como el "Responsable del Registro o Banco de Datos". Según el **Artículo 11 de la Ley N° 19.628**, la empresa tiene la obligación legal de cuidar los datos personales con la debida diligencia. Al no implementar el doble factor de autenticación (2FA) para sus empleados en 2012, cometió negligencia, generándole responsabilidad civil por los perjuicios ocasionados a los titulares de las cuentas.
* **Responsabilidad Administrativa:** Bajo regulaciones sectoriales y de protección al consumidor (como la Ley del Consumidor y SERNAC en Chile), la empresa enfrenta responsabilidad administrativa por no garantizar la seguridad del servicio ofrecido, exponiéndose a fuertes multas institucionales.

### 3. El Empleado de Dropbox
* **Responsabilidad Laboral/Administrativa:** El trabajador obró con negligencia grave al reutilizar sus credenciales corporativas en servicios externos (LinkedIn). Bajo el **Artículo 160 del Código del Trabajo de Chile** (específicamente incumplimiento grave de las obligaciones que impone el contrato), esta acción justifica la terminación del contrato laboral sin derecho a indemnización por poner en riesgo la seguridad de la empresa.
* **Responsabilidad Civil (Subsidiaria):** Aunque actuó sin dolo (no quería hackear su propia empresa), su descuido (cuasidelito civil) fue el vector de entrada. La empresa podría accionar civilmente contra el empleado por las pérdidas generadas a raíz de su negligencia, aunque en la práctica corporativa esto es infrecuente.