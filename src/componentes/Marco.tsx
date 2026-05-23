import { Scale } from "lucide-react";

function Marco() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/20 pb-4">
        <Scale className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          Marco Normativo Aplicable
        </h2>
      </div>

      <div className="space-y-6 text-slate-300 leading-relaxed text-justify">
        <p>
          El incidente de Dropbox involucra múltiples dimensiones legales. Para efectos de este análisis, nos centraremos en la legislación chilena aplicable si los usuarios afectados estuvieran bajo esta jurisdicción, junto con una mención al estándar internacional.
        </p>
        <ul className="space-y-4">
          <li className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 border-l-4 border-l-cyan-500">
            <strong className="text-cyan-300 block mb-1">Ley N° 21.459 (Delitos Informáticos)</strong>
            Es la norma penal chilena que tipifica las conductas maliciosas en el ciberespacio. Permite perseguir a los atacantes que vulneraron la VPN y comercializaron la base de datos.
          </li>
          <li className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 border-l-4 border-l-purple-500">
            <strong className="text-purple-300 block mb-1">Ley N° 19.628 (Protección de la Vida Privada)</strong>
            Regula el tratamiento de datos personales en Chile. Establece la responsabilidad de Dropbox al ser el custodio de los correos electrónicos y contraseñas de sus clientes.
          </li>
          <li className="bg-slate-950/50 p-4 rounded-lg border border-slate-800 border-l-4 border-l-blue-500">
            <strong className="text-blue-300 block mb-1">GDPR (Reglamento General de Protección de Datos de la UE)</strong>
            Aunque es europeo, aplica a cualquier empresa que procese datos de sus ciudadanos. Se menciona porque es el estándar global que hoy obligaría a Dropbox a reportar una brecha similar en 72 horas.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Marco;