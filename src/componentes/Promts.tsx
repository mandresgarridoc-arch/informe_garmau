import { Bot } from "lucide-react";

function Prompts() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Bot className="text-purple-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Bitácora de Uso de IA en el Desarrollo
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 text-justify">
        <p>
          Durante la investigación y desarrollo de este proyecto, se utilizaron herramientas de Inteligencia Artificial como apoyo técnico y conceptual, siguiendo las buenas prácticas de validación de respuestas.
        </p>

        <div className="grid gap-5">
          <div className="border border-purple-100 bg-purple-50 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-2">Interacción 1: Contenido Legal</h3>
            <p className="text-sm mb-2"><strong>Sección:</strong> Delitos Informáticos</p>
            <p className="text-sm mb-2"><strong>Prompt:</strong> "Actúa como un experto en derecho informático chileno. Analiza el hackeo a Dropbox de 2012, donde un hacker usó la contraseña de un empleado robada de LinkedIn para entrar a la VPN. ¿Qué artículos específicos de la nueva Ley N° 21.459 se están violando?"</p>
            <p className="text-sm bg-white p-3 rounded border border-purple-100"><strong>Corrección:</strong> La IA sugirió el delito de "Sabotaje Informático" (Art. 1°). Corregí esta respuesta descartando ese artículo, ya que el atacante no destruyó el sistema, sino que su objetivo fue la copia de datos, lo cual encaja exclusivamente en "Acceso Ilícito" (Art. 2°) y "Receptación" (Art. 4°).</p>
          </div>

          <div className="border border-purple-100 bg-purple-50 rounded-lg p-5">
            <h3 className="font-bold text-purple-900 mb-2">Interacción 2: Desarrollo React</h3>
            <p className="text-sm mb-2"><strong>Sección:</strong> Componente Resumen.jsx</p>
            <p className="text-sm mb-2"><strong>Prompt:</strong> "Crea un componente React con JSX llamado Resumen. Debe mostrar el Resumen del Caso Dropbox. Usa Tailwind CSS para crear una tarjeta blanca con sombra, texto gris oscuro, y usa el ícono 'FileText' de Lucide React."</p>
            <p className="text-sm bg-white p-3 rounded border border-purple-100"><strong>Corrección:</strong> El agente generó correctamente la estructura, pero olvidó importar el ícono de Lucide React en la cabecera. Tuve que agregar manualmente la importación para evitar errores de compilación en Vite.</p>
          </div>
        </div>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">Reflexión sobre el uso de IA</h3>
          <p>
            El uso dual de IA fue altamente efectivo. Utilizar un chatbot externo resultó útil para debatir conceptos legales abstractos y encontrar artículos de las leyes chilenas, aunque requirió aplicar criterio humano para filtrar los delitos. Por otro lado, utilizar el agente integrado en VS Code aceleró drásticamente la creación de componentes en React, evitando escribir las clases repetitivas de Tailwind CSS. Esto confirma que el agente integrado es superior para programar, mientras que el chatbot es mejor como motor de investigación.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Prompts;