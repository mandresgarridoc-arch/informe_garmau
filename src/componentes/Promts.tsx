import { Bot, CheckCircle } from "lucide-react";

function Prompts() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8">
      <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-5">
        <div className="bg-purple-100 p-2 rounded-lg">
          <Bot className="text-purple-700" size={28} />
        </div>
        <h2 className="text-2xl font-bold text-slate-800">
          Bitácora de Uso de IA en el Desarrollo
        </h2>
      </div>

      <div className="space-y-8 text-slate-600 text-justify">
        <p className="text-slate-600 leading-relaxed">
          Durante la investigación y el desarrollo de la aplicación web, se utilizó un chatbot de Inteligencia Artificial (Google Gemini) como asistente transversal. A continuación, se documentan los <em>prompts</em> literales utilizados, las correcciones aplicadas y la justificación académica.
        </p>

        <div className="space-y-6">
          {/* Tarjeta 1 */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800">Interacción 1: Investigación Legal</h3>
              <span className="text-xs font-medium bg-white border border-slate-200 px-2 py-1 rounded text-slate-500">Resumen, Marco y Delitos</span>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <strong className="text-sm text-slate-800 block mb-2">Prompts Utilizados:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm bg-slate-50 p-3 rounded border border-slate-100 font-mono">
                  <li>"Tengo en mente el hackeo a dropbox en 2012"</li>
                  <li>"investiguemos los detalles legales y todo lo que se pueda para ir armando los markdown"</li>
                  <li>"Puedes explayarte un poco mas para los md"</li>
                </ul>
              </div>
              <div className="flex gap-3 items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                <CheckCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-slate-700">
                  <strong className="text-blue-900">Corrección y Justificación:</strong> Inicialmente, la IA generó un resumen básico. Se corrigió pidiendo "explayarse" para forzar el enfoque jurídico estricto exigido por la rúbrica (Criterios 2.1.1 y 2.1.2), logrando mapear los Artículos 2°, 4° y 7° de la Ley N° 21.459.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800">Interacción 2: Depuración de Vite/Tailwind</h3>
              <span className="text-xs font-medium bg-white border border-slate-200 px-2 py-1 rounded text-slate-500">Estructura Web</span>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <strong className="text-sm text-slate-800 block mb-2">Prompts Utilizados:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm bg-slate-50 p-3 rounded border border-slate-100 font-mono">
                  <li>"'npm' no se reconoce como un comando interno o externo..."</li>
                  <li>"asi se ve hasta ahora ayudame manito" (Con captura)</li>
                  <li>"Failed to resolve import ./components/Resumen from src/App.tsx"</li>
                </ul>
              </div>
              <div className="flex gap-3 items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                <CheckCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-slate-700">
                  <strong className="text-blue-900">Corrección y Justificación:</strong> Al enviar capturas, la IA identificó el uso de TypeScript (.tsx) en lugar de JavaScript (.jsx) en Vite. La corrección consistió en renombrar la extensión de los archivos y ajustar las rutas relativas en App.tsx.
                </p>
              </div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="border border-slate-200 rounded-lg overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800">Interacción 3: Git y Vercel</h3>
              <span className="text-xs font-medium bg-white border border-slate-200 px-2 py-1 rounded text-slate-500">Despliegue</span>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <strong className="text-sm text-slate-800 block mb-2">Prompts Utilizados:</strong>
                <ul className="list-disc pl-5 space-y-1 text-slate-600 text-sm bg-slate-50 p-3 rounded border border-slate-100 font-mono">
                  <li>"enseñame como hacerlo (commit y push)"</li>
                  <li>"como puedo seguir editando mi proyecto desde mi casa en github"</li>
                  <li>"hagamos lo del vercel que me dijistes"</li>
                </ul>
              </div>
              <div className="flex gap-3 items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                <CheckCircle className="text-blue-600 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-slate-700">
                  <strong className="text-blue-900">Corrección y Justificación:</strong> Se adaptó el flujo a un escenario de laboratorio/hogar, estableciendo el uso riguroso de `git clone`, `npm install` y `git pull` antes de retomar el trabajo, asegurando la sincronización previa al despliegue continuo en Vercel.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8 border-t border-slate-200 pt-6">
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Reflexión Final</h3>
          <p className="text-slate-600 leading-relaxed bg-slate-50 p-5 rounded-lg border border-slate-200">
            El uso del chatbot (Gemini) fue altamente efectivo. Para el análisis legal, fue necesario guiar iterativamente a la IA hacia un análisis normativo profundo, demostrando que requiere dirección técnica humana. Frente a errores de código, adjuntar capturas permitió identificar fallas de configuración (como el uso de TypeScript) en segundos. Un chatbot externo exige que el desarrollador aplique criterio crítico para integrar el código final.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Prompts;