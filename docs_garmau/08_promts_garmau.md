# Bitácora de Uso de IA en el Desarrollo

Durante la investigación y el desarrollo de la aplicación web, se utilizó un chatbot de Inteligencia Artificial (Google Gemini) como asistente de programación e investigación legal. A continuación, se documentan los *prompts* reales utilizados, las correcciones aplicadas a sus respuestas y la justificación académica.

---

## Interacción 1: Investigación Legal y Normativa
**Objetivo:** Resumen y Marco Jurídico

**Prompts Utilizados:**
> * "Hola Gemini, tengo que hacer un informe sobre ciberseguridad para la universidad. Elegí el caso de Dropbox de 2012. Dame un resumen ejecutivo del hackeo enfocado en cómo consiguieron las credenciales."
> * "Ahora necesito analizar esto bajo el marco legal chileno. ¿Qué leyes aplican? Mapea las acciones del atacante con la Ley 21.459 de Delitos Informáticos y la Ley 19.628 de Protección de Datos."
> * "Te quedó muy general. Necesito que te explayes en los artículos exactos (ej: Art. 2° y 4°) y cómo se asignan las responsabilidades civiles y penales para el atacante, Dropbox y el empleado."

**Corrección y Justificación:**
Inicialmente, la IA entregó un análisis muy superficial y centrado en leyes de EE.UU. Se le tuvo que corregir con un prompt directivo, forzando la vinculación explícita con artículos específicos del código chileno. Esto permitió cumplir con el nivel de profundidad técnica exigido por la rúbrica.

---

## Interacción 2: Depuración de React y Tailwind CSS
**Objetivo:** Troubleshooting Web

**Prompts Utilizados:**
> * "[Captura adjunta] Estoy armando el proyecto con Vite y React, pero al ejecutar 'npm install' la terminal me lanza 'npm no se reconoce como un comando interno'. ¿Cómo soluciono esto en Windows?"
> * "Me está tirando este error en la consola de Vite: 'Failed to resolve import ./components/Resumen from src/App.tsx'. Ya revisé y el archivo sí existe en la carpeta."

**Corrección y Justificación:**
La IA fue clave para la depuración (*debugging*). Al analizar el error de las rutas, la IA identificó la discrepancia de nombres de carpetas y extensiones (`.tsx`), guiando la refactorización de la estructura de archivos en React.

---

## Interacción 3: Control de Versiones y Despliegue CI/CD
**Objetivo:** Git, GitHub & Vercel

**Prompts Utilizados:**
> * "Hoy trabajé en los equipos del laboratorio de INACAP, pero quiero seguir editando el finde en mi notebook personal. ¿Cómo clono el repo y bajo los cambios sin romper el proyecto de React?"
> * "Tengo mi repositorio de GitHub al día. Ahora quiero desplegarlo gratis para la evaluación. ¿Cómo conecto el repo a Vercel para que se actualice solo?"

**Corrección y Justificación:**
Se tuvo que corregir el flujo de trabajo estableciendo como regla obligatoria ejecutar `npm install` justo después del `git clone`, asegurando la sincronización de dependencias antes del despliegue en la plataforma CI/CD (Vercel).

---

## Interacción 4: Refinamiento UX/UI y QA
**Objetivo:** Calidad y Metadatos

**Prompts Utilizados:**
> * "En general, ¿crees que haya algo que podamos mejorar en cuanto a diseño visual o experiencia de usuario?"
> * "Ayúdame a generar un escudo en SVG para usarlo como Favicon en la pestaña del navegador."
> * "Guardé la imagen en la carpeta public, pero no aparece el cambio en mi web al recargar. ¿Qué hago?"

**Corrección y Justificación:**
La IA se utilizó en la fase final de Aseguramiento de Calidad (QA) para inyectar CSS global (modificando la scrollbar) y configurar metadatos en `index.html`. Para resolver el problema de persistencia del Favicon, se aplicó la técnica de versionado de caché (`?v=2`), demostrando dominio sobre el comportamiento de los navegadores.

---

## Reflexión Final sobre la IA como Herramienta

El uso de modelos de lenguaje grande (LLMs) demostró ser altamente efectivo para abarcar el ciclo de vida completo del desarrollo: desde la maquetación inicial y el troubleshooting de React, hasta el pulido final de la interfaz de usuario. Sin embargo, en el ámbito legal, la IA exige dirección técnica humana para no generar respuestas genéricas. La experiencia concluye que un LLM no reemplaza el criterio del estudiante; sino que potencia la capacidad de ejecutar un despliegue profesional si se sabe guiar con prompts precisos y validación constante.