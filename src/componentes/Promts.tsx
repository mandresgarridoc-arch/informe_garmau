import { Bot, CheckCircle } from "lucide-react";

function Prompts() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-8 border-b border-fuchsia-500/20 pb-4">
        <Bot className="text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.6)]" size={32} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
          Bitácora de Uso de IA en el Desarrollo
        </h2>
      </div>

      <div className="space-y-8 text-slate-300 text-justify">
        <p className="text-slate-400 leading-relaxed">
          Durante la investigación y el desarrollo de la aplicación web, se utilizó un chatbot de Inteligencia Artificial (Google Gemini) como asistente de programación e investigación legal. A continuación, se documentan los <em className="text-fuchsia-300">prompts</em> reales utilizados, las correcciones aplicadas a sus respuestas y la justificación académica.
        </p>

        <div className="space-y-6">
          {/* Interacción 1 */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex justify-between items-center">
              <h3 className="font-bold text-fuchsia-400">Interacción 1: Investigación Legal y Normativa</h3>
              <span className="text-xs font-mono bg-fuchsia-950/50 border border-fuchsia-900 px-2 py-1 rounded text-fuchsia-300">Resumen y Marco Jurídico</span>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <strong className="text-sm text-slate-400 block mb-2 uppercase tracking-wider">Prompts Utilizados:</strong>
                <ul className="list-disc pl-5 space-y-3 text-fuchsia-200/80 text-sm bg-black/50 p-4 rounded border border-slate-800 font-mono shadow-inner">
                  <li>&gt; "Hola Gemini, tengo que hacer un informe sobre ciberseguridad para la universidad. Elegí el caso de Dropbox de 2012. Dame un resumen ejecutivo del hackeo enfocado en cómo consiguieron las credenciales."</li>
                  <li>&gt; "Ahora necesito analizar esto bajo el marco legal chileno. ¿Qué leyes aplican? Mapea las acciones del atacante con la Ley 21.459 de Delitos Informáticos y la Ley 19.628 de Protección de Datos."</li>
                  <li>&gt; "Te quedó muy general. Necesito que te explayes en los artículos exactos (ej: Art. 2° y 4°) y cómo se asignan las responsabilidades civiles y penales para el atacante, Dropbox y el empleado."</li>
                </ul>
              </div>
              <div className="flex gap-3 items-start bg-fuchsia-950/20 p-4 rounded-lg border border-fuchsia-900/50">
                <CheckCircle className="text-fuchsia-500 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-slate-300">
                  <strong className="text-fuchsia-400">Corrección y Justificación:</strong> Inicialmente, la IA entregó un análisis muy superficial y centrado en leyes de EE.UU. Se le tuvo que corregir con un *prompt* directivo, forzando la vinculación explícita con artículos específicos del código chileno. Esto permitió cumplir con el nivel de profundidad técnica exigido por la rúbrica (Criterios 2.1.1 y 2.1.2).
                </p>
              </div>
            </div>
          </div>

          {/* Interacción 2 */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex justify-between items-center">
              <h3 className="font-bold text-fuchsia-400">Interacción 2: Depuración de React y Tailwind CSS</h3>
              <span className="text-xs font-mono bg-fuchsia-950/50 border border-fuchsia-900 px-2 py-1 rounded text-fuchsia-300">Troubleshooting Web</span>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <strong className="text-sm text-slate-400 block mb-2 uppercase tracking-wider">Prompts Utilizados:</strong>
                <ul className="list-disc pl-5 space-y-3 text-fuchsia-200/80 text-sm bg-black/50 p-4 rounded border border-slate-800 font-mono shadow-inner">
                  <li>&gt; "[Captura adjunta] Estoy armando el proyecto con Vite y React, pero al ejecutar 'npm install' la terminal me lanza 'npm no se reconoce como un comando interno'. ¿Cómo soluciono esto en Windows?"</li>
                  <li>&gt; "[Captura adjunta] Le puse clases de Tailwind a los componentes pero la página se ve toda blanca. Mis archivos vite.config.js y tailwind.config.js están así, ¿qué me falta configurar?"</li>
                  <li>&gt; "Me está tirando este error en la consola de Vite: 'Failed to resolve import ./components/Resumen from src/App.tsx'. Ya revisé y el archivo sí existe en la carpeta."</li>
                </ul>
              </div>
              <div className="flex gap-3 items-start bg-fuchsia-950/20 p-4 rounded-lg border border-fuchsia-900/50">
                <CheckCircle className="text-fuchsia-500 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-slate-300">
                  <strong className="text-fuchsia-400">Corrección y Justificación:</strong> La IA fue clave para la depuración (*debugging*). Al analizar el error de las rutas, la IA no notó de inmediato la discrepancia de extensiones. La corrección consistió en indicarle que estábamos usando TypeScript, lo que llevó a renombrar los componentes de `.jsx` a `.tsx` y arreglar las importaciones en `App.tsx`.
                </p>
              </div>
            </div>
          </div>

          {/* Interacción 3 */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            <div className="bg-slate-900 border-b border-slate-800 px-5 py-3 flex justify-between items-center">
              <h3 className="font-bold text-fuchsia-400">Interacción 3: Control de Versiones y Despliegue CI/CD</h3>
              <span className="text-xs font-mono bg-fuchsia-950/50 border border-fuchsia-900 px-2 py-1 rounded text-fuchsia-300">Git, GitHub & Vercel</span>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <strong className="text-sm text-slate-400 block mb-2 uppercase tracking-wider">Prompts Utilizados:</strong>
                <ul className="list-disc pl-5 space-y-3 text-fuchsia-200/80 text-sm bg-black/50 p-4 rounded border border-slate-800 font-mono shadow-inner">
                  <li>&gt; "Ya tengo mi código listo localmente. Dame los comandos paso a paso para inicializar Git, hacer el primer commit y pushearlo a un repositorio nuevo en GitHub."</li>
                  <li>&gt; "Hoy trabajé en los equipos del laboratorio de INACAP, pero quiero seguir editando el finde en mi notebook personal. ¿Cómo clono el repo y bajo los cambios sin romper el proyecto de React?"</li>
                  <li>&gt; "Tengo mi repositorio de GitHub al día. Ahora quiero desplegarlo gratis para la evaluación. ¿Cómo conecto el repo a Vercel para que se actualice solo cada vez que haga un git push?"</li>
                </ul>
              </div>
              <div className="flex gap-3 items-start bg-fuchsia-950/20 p-4 rounded-lg border border-fuchsia-900/50">
                <CheckCircle className="text-fuchsia-500 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-slate-300">
                  <strong className="text-fuchsia-400">Corrección y Justificación:</strong> Las instrucciones genéricas de Git entregadas por la IA no contemplaban la instalación de módulos de Node. Se tuvo que corregir el flujo de trabajo estableciendo como regla obligatoria ejecutar `npm install` justo después del `git clone` en equipos nuevos, asegurando así el correcto funcionamiento del entorno local antes del despliegue en Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reflexión Final */}
        <section className="mt-8 border-t border-slate-800 pt-6">
          <h3 className="text-lg font-bold text-fuchsia-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-[0_0_5px_rgba(217,70,239,1)]"></span>
            Reflexión Final sobre la IA como Herramienta
          </h3>
          <p className="text-slate-400 leading-relaxed bg-slate-950/50 p-6 rounded-lg border border-slate-800 shadow-inner">
            El uso de modelos de lenguaje grande (LLMs) demostró ser altamente efectivo para acelerar la maquetación de código y el Troubleshooting de React/Vite. Sin embargo, para la redacción académica y legal, la IA tiende a generar respuestas genéricas si no recibe un contexto restrictivo. La experiencia concluye que la IA no reemplaza el criterio del estudiante; exige la capacidad de formular <em className="text-slate-300">prompts</em> técnicos, validar la información frente a las leyes chilenas reales y estructurar el producto final (código y texto) según los estándares de la evaluación.
          </p>
        </section>

      </div>
    </div>
  );
}

export default Prompts;