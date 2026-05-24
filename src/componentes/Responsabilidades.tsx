import { Users } from "lucide-react";

function Responsabilidades() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-purple-500/20 pb-4">
        <Users className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Responsabilidades Legales de los Actores
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Atacante */}
        <div className="bg-slate-950/60 rounded-lg p-6 border border-slate-800 hover:border-purple-500/50 transition-colors shadow-inner">
          <h3 className="text-xl font-bold text-purple-300 mb-4 border-b border-slate-800 pb-2">1. El Atacante</h3>
          <div className="space-y-4 text-sm text-slate-400">
            <div>
              <strong className="text-purple-400 block mb-1">Responsabilidad Penal:</strong>
              Enfrenta penas de presidio por el delito de Acceso Ilícito (Art. 2°) al vulnerar la VPN, y por Receptación de datos informáticos (Art. 4°) al vender la base de datos (Ley N° 21.459).
            </div>
            <div>
              <strong className="text-purple-400 block mb-1">Responsabilidad Civil:</strong>
              Según el Art. 2314 del Código Civil, es responsable de indemnizar a Dropbox y a los usuarios por el daño emergente y lucro cesante causado por su actuar doloso.
            </div>
          </div>
        </div>

        {/* Dropbox */}
        <div className="bg-slate-950/60 rounded-lg p-6 border border-slate-800 hover:border-purple-500/50 transition-colors shadow-inner">
          <h3 className="text-xl font-bold text-purple-300 mb-4 border-b border-slate-800 pb-2">2. Dropbox</h3>
          <div className="space-y-4 text-sm text-slate-400">
            <div>
              <strong className="text-purple-400 block mb-1">Responsabilidad Civil:</strong>
              Por negligencia al no exigir MFA. Según el Art. 11 de la Ley N° 19.628, el responsable debe cuidar los datos con "debida diligencia", haciéndose responsable por los daños (Art. 23).
            </div>
            <div>
              <strong className="text-purple-400 block mb-1">Responsabilidad Administrativa:</strong>
              Frente al SERNAC (Ley N° 19.496) por fallas en la seguridad del servicio prestado y por no informar veraz y oportunamente del incidente a sus clientes en 2012.
            </div>
          </div>
        </div>

        {/* Empleado */}
        <div className="bg-slate-950/60 rounded-lg p-6 border border-slate-800 hover:border-purple-500/50 transition-colors shadow-inner">
          <h3 className="text-xl font-bold text-purple-300 mb-4 border-b border-slate-800 pb-2">3. El Empleado</h3>
          <div className="space-y-4 text-sm text-slate-400">
            <div>
              <strong className="text-purple-400 block mb-1">Responsabilidad Laboral:</strong>
              Cometió negligencia grave al reutilizar credenciales. Causal de despido sin indemnización (Art. 160 N° 7 del Código del Trabajo) por incumplir políticas internas de seguridad.
            </div>
            <div>
              <strong className="text-purple-400 block mb-1">Responsabilidad Civil:</strong>
              Teóricamente, la empresa podría ejercer acciones de repetición si demuestra que su actuar culposo generó directamente las millonarias pérdidas.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Responsabilidades;