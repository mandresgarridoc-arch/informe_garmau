import { Table } from "lucide-react";

function Comparacion() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-5 md:p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/20 pb-4">
        <Table className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" size={28} />
        <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          Comparación de Marcos Regulatorios
        </h2>
      </div>

      <div className="space-y-6 text-slate-300 leading-relaxed text-left md:text-justify">
        <p className="text-sm md:text-base">
          A continuación, se presenta una comparación analítica entre tres marcos de control aplicables al escenario corporativo y tecnológico del caso Dropbox:
        </p>

        <div className="space-y-4">
          {/* Tarjeta 1 */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-5 shadow-md border-l-2 border-l-cyan-500">
            <h3 className="text-lg font-bold text-cyan-400 mb-4 border-b border-slate-800 pb-2">Alcance y Enfoque</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
              <div><strong className="text-slate-200 block mb-1">Ley N° 19.628 (Chile)</strong><p className="text-slate-400">Regula la protección y tratamiento de datos por entidades públicas o privadas.</p></div>
              <div><strong className="text-slate-200 block mb-1">GDPR (UE)</strong><p className="text-slate-400">Regula la privacidad y protección de datos de ciudadanos de la UE, con aplicación global.</p></div>
              <div><strong className="text-slate-200 block mb-1">Ley N° 21.459 (Chile)</strong><p className="text-slate-400">Define y sanciona penalmente las conductas delictivas contra sistemas informáticos y datos.</p></div>
            </div>
          </div>
          
          {/* Tarjeta 2 */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-5 shadow-md border-l-2 border-l-cyan-500">
            <h3 className="text-lg font-bold text-cyan-400 mb-4 border-b border-slate-800 pb-2">Jurisdicción</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
              <div><strong className="text-slate-200 block mb-1">Ley N° 19.628</strong><p className="text-slate-400">Nacional (Territorio de la República de Chile).</p></div>
              <div><strong className="text-slate-200 block mb-1">GDPR</strong><p className="text-slate-400">Extraterritorial (Aplica a cualquier empresa si procesa datos de la UE).</p></div>
              <div><strong className="text-slate-200 block mb-1">Ley N° 21.459</strong><p className="text-slate-400">Nacional (Tribunales de Garantía y Penales del Estado de Chile).</p></div>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-5 shadow-md border-l-2 border-l-cyan-500">
            <h3 className="text-lg font-bold text-cyan-400 mb-4 border-b border-slate-800 pb-2">Sujeto Regulado</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
              <div><strong className="text-slate-200 block mb-1">Ley N° 19.628</strong><p className="text-slate-400">El Responsable del Registro o Banco de Datos (Dropbox).</p></div>
              <div><strong className="text-slate-200 block mb-1">GDPR</strong><p className="text-slate-400">El Responsable y el Encargado del Tratamiento de Datos a nivel global.</p></div>
              <div><strong className="text-slate-200 block mb-1">Ley N° 21.459</strong><p className="text-slate-400">El sujeto activo (cibercriminal o hacker) que ejecuta la acción típica.</p></div>
            </div>
          </div>

          {/* Tarjeta 4 - Destacada */}
          <div className="bg-purple-950/20 border border-purple-900/50 rounded-lg p-5 shadow-md border-l-2 border-l-purple-500">
            <h3 className="text-lg font-bold text-purple-400 mb-4 border-b border-purple-900/50 pb-2">Aplicabilidad al Caso</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-sm">
              <div><strong className="text-purple-300 block mb-1">Ley N° 19.628</strong><p className="text-purple-200/80"><strong className="text-purple-400">Alta:</strong> Pérdida de confidencialidad de correos de usuarios chilenos.</p></div>
              <div><strong className="text-purple-300 block mb-1">GDPR</strong><p className="text-purple-200/80"><strong className="text-purple-400">Crítica:</strong> Obligaría a reportar en menos de 72 horas bajo amenaza de multa.</p></div>
              <div><strong className="text-purple-300 block mb-1">Ley N° 21.459</strong><p className="text-purple-200/80"><strong className="text-purple-400">Directa:</strong> Permite perseguir penalmente por acceso ilícito y receptación.</p></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Comparacion;