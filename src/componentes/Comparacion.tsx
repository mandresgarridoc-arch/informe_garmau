import { Table } from "lucide-react";

function Comparacion() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/20 pb-4">
        <Table className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          Comparación de Marcos Regulatorios
        </h2>
      </div>

      <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
        <p>
          A continuación, se presenta una comparación analítica entre tres marcos de control aplicables al escenario corporativo y tecnológico del caso Dropbox:
        </p>

        <div className="overflow-x-auto pb-4">
          {/* border-separate y border-spacing-y-3 crean el efecto de filas separadas */}
          <table className="w-full text-left border-separate border-spacing-y-3">
            <thead>
              {/* Cabeceras con fuente tipo consola de comandos (mono) */}
              <tr className="text-cyan-600 font-mono text-xs uppercase tracking-widest">
                <th className="p-3 border-b border-cyan-900/50">Eje de Comparación</th>
                <th className="p-3 border-b border-cyan-900/50">Ley N° 19.628 (Chile)</th>
                <th className="p-3 border-b border-cyan-900/50">GDPR (UE)</th>
                <th className="p-3 border-b border-cyan-900/50">Ley N° 21.459 (Chile)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              
              {/* Fila 1 */}
              <tr className="bg-slate-950/80 hover:bg-slate-800/80 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.3)] group">
                <td className="p-4 font-semibold text-slate-200 border-l-2 border-cyan-500 rounded-l-lg group-hover:shadow-[inset_4px_0_0_rgba(34,211,238,0.6)]">Alcance y Enfoque</td>
                <td className="p-4 text-slate-400">Regula la protección y tratamiento de datos personales por parte de entidades públicas o privadas.</td>
                <td className="p-4 text-slate-400">Regula la privacidad, derechos y protección de datos personales de ciudadanos de la UE, con aplicación global.</td>
                <td className="p-4 text-slate-400 rounded-r-lg">Define y sanciona penalmente las conductas delictivas dirigidas contra sistemas informáticos y datos digitales.</td>
              </tr>

              {/* Fila 2 */}
              <tr className="bg-slate-950/80 hover:bg-slate-800/80 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.3)] group">
                <td className="p-4 font-semibold text-slate-200 border-l-2 border-cyan-500 rounded-l-lg group-hover:shadow-[inset_4px_0_0_rgba(34,211,238,0.6)]">Jurisdicción</td>
                <td className="p-4 text-slate-400">Nacional (Territorio de la República de Chile).</td>
                <td className="p-4 text-slate-400">Extraterritorial (Aplica a cualquier empresa del mundo si procesa datos de la UE).</td>
                <td className="p-4 text-slate-400 rounded-r-lg">Nacional (Tribunales de Garantía y Penales del Estado de Chile).</td>
              </tr>

              {/* Fila 3 */}
              <tr className="bg-slate-950/80 hover:bg-slate-800/80 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.3)] group">
                <td className="p-4 font-semibold text-slate-200 border-l-2 border-cyan-500 rounded-l-lg group-hover:shadow-[inset_4px_0_0_rgba(34,211,238,0.6)]">Sujeto Regulado</td>
                <td className="p-4 text-slate-400">El Responsable del Registro o Banco de Datos (Dropbox).</td>
                <td className="p-4 text-slate-400">El Responsable y el Encargado del Tratamiento de Datos a nivel global.</td>
                <td className="p-4 text-slate-400 rounded-r-lg">El sujeto activo (cibercriminal o hacker) que ejecuta la acción típica.</td>
              </tr>

              {/* Fila 4 - Destacada en Morado para romper la monotonía */}
              <tr className="bg-purple-950/20 hover:bg-purple-900/40 transition-all shadow-[0_2px_10px_rgba(0,0,0,0.3)] group">
                <td className="p-4 font-bold text-purple-300 border-l-2 border-purple-500 rounded-l-lg group-hover:shadow-[inset_4px_0_0_rgba(168,85,247,0.6)]">Aplicabilidad al Caso</td>
                <td className="p-4 text-purple-100/80"><strong className="text-purple-400">Alta:</strong> Por la pérdida de confidencialidad de los correos de usuarios chilenos.</td>
                <td className="p-4 text-purple-100/80"><strong className="text-purple-400">Crítica:</strong> Obligaría a reportar en menos de 72 horas bajo amenaza de multas gigantescas.</td>
                <td className="p-4 text-purple-100/80 rounded-r-lg"><strong className="text-purple-400">Directa:</strong> Permite perseguir penalmente a los atacantes por acceso ilícito y receptación.</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Comparacion;