# Bitácora de Uso de IA en el Desarrollo

Durante la investigación y desarrollo de este proyecto, se utilizaron herramientas de Inteligencia Artificial como apoyo técnico y conceptual, siguiendo las buenas prácticas de validación de respuestas.

### Interacciones para Contenido Legal
* **Sección:** Delitos Informáticos (03_delitos_garmau.md)
* **Prompt utilizado (en Chatbot externo):** *"Actúa como un experto en derecho informático chileno. Analiza el hackeo a Dropbox de 2012, donde un hacker usó la contraseña de un empleado robada de LinkedIn para entrar a la VPN. ¿Qué artículos específicos de la nueva Ley N° 21.459 se están violando?"*
* **Corrección y justificación:** La IA sugirió inicialmente que aplicaba el delito de "Sabotaje Informático" (Art. 1°). Corregí esta respuesta descartando ese artículo, ya que el atacante no destruyó, alteró ni inutilizó el sistema de Dropbox, sino que su objetivo fue la copia y sustracción de datos, lo cual encaja exclusivamente en "Acceso Ilícito" (Art. 2°) y "Receptación" (Art. 4°).

### Interacciones para Desarrollo React
* **Sección:** Componente Resumen.jsx
* **Prompt utilizado (en GitHub Copilot integrado):** *"Crea un componente React con JSX llamado Resumen. Debe mostrar una sección con el título 'Resumen del Caso Dropbox'. El contenido debe estar dividido en tres párrafos: Qué pasó, Cuándo pasó, y el Impacto. Usa Tailwind CSS para crear una tarjeta blanca con sombra, texto gris oscuro, y usa el ícono 'FileText' de Lucide React para el título."*
* **Corrección y justificación:** El agente Copilot generó correctamente la estructura, pero olvidó importar el ícono de Lucide React en la cabecera del archivo. Tuve que agregar manualmente la línea `import { FileText } from 'lucide-react'` para que la página no arrojara un error de compilación en Vite.

### Reflexión sobre el uso de herramientas IA
El uso dual de IA fue altamente efectivo. Utilizar un chatbot externo resultó útil para debatir conceptos legales abstractos y encontrar rápidamente los números de los artículos de las leyes chilenas, aunque requirió aplicar criterio humano para filtrar los delitos que realmente aplicaban al caso. [cite_start]Por otro lado, utilizar GitHub Copilot como agente integrado en VS Code aceleró drásticamente la creación de componentes en React [cite: 288, 289][cite_start], ya que evitó tener que escribir las clases repetitivas de Tailwind CSS[cite: 290]. [cite_start]Esto confirma que el agente integrado es muy superior para programar[cite: 291], mientras que el chatbot es mejor como motor de investigación documental.