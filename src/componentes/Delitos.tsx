import { AlertOctagon } from "lucide-react";

function Delitos() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-8 border-b border-rose-500/20 pb-4">
        <AlertOctagon className="text-rose-500 drop-shadow-[0_0_8px_rgba(243,24,113,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
          Tipificación de Delitos (Ley N° 21.459)
        </h2>
      </div>

      <div className="space-y-5">
        <p className="text-slate-300 mb-6">Si los hechos hubieran ocurrido bajo jurisdicción chilena actual, las conductas se encuadrarían en:</p>

        {/* Fila 1 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-rose-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(243,24,113,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-rose-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-rose-900/20 transition-colors">
            <span className="text-xs font-mono text-rose-500/70 uppercase tracking-widest mb-1">Artículo_02</span>
            <h3 className="text-xl font-bold text-rose-400 group-hover:text-rose-300 transition-colors">Acceso Ilícito</h3>
          </div>
          <div className="md:w-3/4 p-6 grid sm:grid-cols-2 gap-6">
            <div>
              <strong className="text-rose-400 block mb-2 text-sm uppercase tracking-wider">La Norma</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Sanciona al que acceda a un sistema informático vulnerando medidas de seguridad.</p>
            </div>
            <div>
              <strong className="text-rose-400 block mb-2 text-sm uppercase tracking-wider">Mapeo del Caso</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Los cibercriminales utilizaron credenciales de VPN para ingresar a repositorios internos de Dropbox sin autorización.</p>
            </div>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-rose-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(243,24,113,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-rose-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-rose-900/20 transition-colors">
            <span className="text-xs font-mono text-rose-500/70 uppercase tracking-widest mb-1">Artículo_04</span>
            <h3 className="text-xl font-bold text-rose-400 group-hover:text-rose-300 transition-colors">Receptación</h3>
          </div>
          <div className="md:w-3/4 p-6 grid sm:grid-cols-2 gap-6">
            <div>
              <strong className="text-rose-400 block mb-2 text-sm uppercase tracking-wider">La Norma</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Penaliza comercializar o transferir datos provenientes de delitos informáticos.</p>
            </div>
            <div>
              <strong className="text-rose-400 block mb-2 text-sm uppercase tracking-wider">Mapeo del Caso</strong>
              <p className="text-sm text-slate-400 leading-relaxed">La base de datos fue almacenada y puesta a la venta en foros de la Dark Web en el año 2016.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delitos;