import { Users } from "lucide-react";

function Responsabilidades() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-8 border-b border-purple-500/20 pb-4">
        <Users className="text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
          Responsabilidades Legales de los Actores
        </h2>
      </div>

      <div className="space-y-5">
        
        {/* Fila 1: El Atacante (Acento Rojo/Rose) */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-rose-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(243,24,113,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-rose-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-rose-900/20 transition-colors">
            
            <h3 className="text-xl font-bold text-rose-400 group-hover:text-rose-300 transition-colors">El Atacante</h3>
          </div>
          <div className="md:w-3/4 p-6 grid sm:grid-cols-2 gap-6">
            <div>
              <strong className="text-rose-400 block mb-2 text-sm uppercase tracking-wider">Responsabilidad Penal</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Enfrenta penas de presidio por el delito de Acceso Ilícito (Art. 2°) al vulnerar la VPN, y por Receptación de datos informáticos (Art. 4°) al vender la base de datos (Ley N° 21.459).</p>
            </div>
            <div>
              <strong className="text-rose-400 block mb-2 text-sm uppercase tracking-wider">Responsabilidad Civil</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Según el Art. 2314 del Código Civil, es responsable de indemnizar a Dropbox y a los usuarios por el daño emergente y lucro cesante causado por su actuar doloso.</p>
            </div>
          </div>
        </div>

        {/* Fila 2: Dropbox (Acento Cyan) */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-cyan-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(34,211,238,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-cyan-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-cyan-900/20 transition-colors">
            
            <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">Dropbox</h3>
          </div>
          <div className="md:w-3/4 p-6 grid sm:grid-cols-2 gap-6">
            <div>
              <strong className="text-cyan-400 block mb-2 text-sm uppercase tracking-wider">Responsabilidad Civil</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Por negligencia al no exigir MFA. Según el Art. 11 de la Ley N° 19.628, el responsable debe cuidar los datos con "debida diligencia", haciéndose responsable por los daños (Art. 23).</p>
            </div>
            <div>
              <strong className="text-cyan-400 block mb-2 text-sm uppercase tracking-wider">Responsabilidad Administrativa</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Frente al SERNAC (Ley N° 19.496) por fallas en la seguridad del servicio prestado y por no informar veraz y oportunamente del incidente a sus clientes en 2012.</p>
            </div>
          </div>
        </div>

        {/* Fila 3: El Empleado (Acento Morado) */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-purple-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(168,85,247,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-purple-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-purple-900/20 transition-colors">
            
            <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">El Empleado</h3>
          </div>
          <div className="md:w-3/4 p-6 grid sm:grid-cols-2 gap-6">
            <div>
              <strong className="text-purple-400 block mb-2 text-sm uppercase tracking-wider">Responsabilidad Laboral</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Cometió negligencia grave al reutilizar credenciales. Causal de despido sin indemnización (Art. 160 N° 7 del Código del Trabajo) por incumplir políticas internas de seguridad.</p>
            </div>
            <div>
              <strong className="text-purple-400 block mb-2 text-sm uppercase tracking-wider">Responsabilidad Civil</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Teóricamente, la empresa podría ejercer acciones de repetición si demuestra que su actuar culposo generó directamente las millonarias pérdidas.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Responsabilidades;