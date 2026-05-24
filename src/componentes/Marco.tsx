import { Scale } from "lucide-react";

function Marco() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-8 border-b border-cyan-500/20 pb-4">
        <Scale className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          Marco Normativo Aplicable
        </h2>
      </div>

      <div className="space-y-5">
        <p className="text-slate-300 mb-6">El incidente involucra múltiples dimensiones legales. Nos centraremos en la legislación chilena aplicable, junto con el estándar internacional.</p>

        {/* Fila 1 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-cyan-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(34,211,238,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-cyan-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-cyan-900/20 transition-colors">
            <span className="text-xs font-mono text-cyan-500/70 uppercase tracking-widest mb-1">Norma_01</span>
            <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">Ley N° 21.459</h3>
          </div>
          <div className="md:w-3/4 p-6">
            <strong className="text-cyan-400 block mb-2 text-sm uppercase tracking-wider">Delitos Informáticos</strong>
            <p className="text-sm text-slate-400 leading-relaxed">Es la norma penal chilena que tipifica las conductas maliciosas en el ciberespacio. Permite perseguir a los atacantes que vulneraron la VPN y comercializaron la base de datos.</p>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-purple-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(168,85,247,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-purple-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-purple-900/20 transition-colors">
            <span className="text-xs font-mono text-purple-500/70 uppercase tracking-widest mb-1">Norma_02</span>
            <h3 className="text-xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors">Ley N° 19.628</h3>
          </div>
          <div className="md:w-3/4 p-6">
            <strong className="text-purple-400 block mb-2 text-sm uppercase tracking-wider">Protección de la Vida Privada</strong>
            <p className="text-sm text-slate-400 leading-relaxed">Regula el tratamiento de datos personales en Chile. Establece la responsabilidad de Dropbox al ser el custodio de los correos electrónicos y contraseñas de sus clientes.</p>
          </div>
        </div>

        {/* Fila 3 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-blue-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(59,130,246,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-blue-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-blue-900/20 transition-colors">
            <span className="text-xs font-mono text-blue-500/70 uppercase tracking-widest mb-1">Estándar_UE</span>
            <h3 className="text-xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors">GDPR</h3>
          </div>
          <div className="md:w-3/4 p-6">
            <strong className="text-blue-400 block mb-2 text-sm uppercase tracking-wider">Reglamento General Europeo</strong>
            <p className="text-sm text-slate-400 leading-relaxed">Aunque es europeo, aplica a cualquier empresa que procese datos de sus ciudadanos. Se menciona porque es el estándar global que hoy obligaría a Dropbox a reportar una brecha similar en 72 horas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marco;