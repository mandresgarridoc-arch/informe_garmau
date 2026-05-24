import { AlertOctagon } from "lucide-react";

function Delitos() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-rose-500/20 pb-4">
        <AlertOctagon className="text-rose-500 drop-shadow-[0_0_8px_rgba(243,24,113,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
          Tipificación de Delitos (Ley N° 21.459)
        </h2>
      </div>

      <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
        <p>
          Si los hechos hubieran ocurrido bajo jurisdicción chilena actual, las conductas se encuadrarían en:
        </p>

        <div className="grid gap-6">
          <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-5 hover:border-rose-500/50 transition-colors shadow-inner">
            <h3 className="text-lg font-bold text-rose-400 mb-2">Artículo 2° - Acceso Ilícito</h3>
            <p className="mb-3 text-slate-400">
              <strong className="text-slate-300">La Norma:</strong> Sanciona al que acceda a un sistema informático vulnerando medidas de seguridad.
            </p>
            <p className="text-sm bg-rose-950/30 p-3 rounded text-rose-200 border-l-4 border-rose-600">
              <strong>Mapeo del Caso:</strong> Los cibercriminales utilizaron credenciales de VPN para ingresar a repositorios internos de Dropbox sin autorización.
            </p>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-5 hover:border-rose-500/50 transition-colors shadow-inner">
            <h3 className="text-lg font-bold text-rose-400 mb-2">Artículo 4° - Receptación de Datos</h3>
            <p className="mb-3 text-slate-400">
              <strong className="text-slate-300">La Norma:</strong> Penaliza comercializar o transferir datos provenientes de delitos informáticos.
            </p>
            <p className="text-sm bg-rose-950/30 p-3 rounded text-rose-200 border-l-4 border-rose-600">
              <strong>Mapeo del Caso:</strong> La base de datos fue almacenada y puesta a la venta en la Dark Web en 2016.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delitos;