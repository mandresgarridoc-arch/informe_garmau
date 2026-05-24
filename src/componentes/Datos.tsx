import { Database } from "lucide-react";

function Datos() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-8">
      <div className="flex items-center gap-3 mb-8 border-b border-emerald-500/20 pb-4">
        <Database className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">
          Tratamiento de Datos Personales (Ley N° 19.628)
        </h2>
      </div>

      <div className="space-y-8 text-slate-300 text-justify">
        
        {/* Clasificación de Datos */}
        <section className="bg-slate-950/80 border border-slate-800 border-t-2 border-t-emerald-500 rounded-lg p-6 shadow-inner">
          <h3 className="text-lg font-bold text-emerald-400 mb-3 uppercase tracking-wider text-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,1)]"></span>
            1. Tipos de Datos y Clasificación Legal
          </h3>
          <p className="mb-3 text-slate-400">La filtración expuso <strong className="text-emerald-300">correos electrónicos</strong>, <strong className="text-emerald-300">contraseñas cifradas</strong> y <strong className="text-emerald-300">metadatos</strong> de 68.6 millones de cuentas.</p>
          <p className="text-slate-400">
            Según el Artículo 2°, letra f) de la Ley N° 19.628, califican como <strong className="text-emerald-300">Datos Personales</strong> (conciernen a personas naturales identificables). 
            No constituyen <em className="text-slate-500">Datos Sensibles</em> (Art. 2°, letra g), ya que no revelan origen racial, ideologías, ni estados de salud.
          </p>
        </section>

        {/* Derechos ARCO */}
        <section>
          <h3 className="text-lg font-bold text-slate-200 mb-5 border-b border-slate-800 pb-2">2. Derechos ARCO Afectados</h3>
          <div className="grid gap-4">
            
            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-5 hover:border-emerald-500/50 transition-colors group">
              <strong className="text-emerald-400 block mb-2 group-hover:text-emerald-300">Derecho de Acceso e Información (Art. 12)</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Se vulneró al no notificar a los usuarios en 2012. Al ocultarse el alcance de la brecha hasta 2016, los usuarios no pudieron ejercer su derecho a saber qué pasaba con su información.</p>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-5 hover:border-emerald-500/50 transition-colors group">
              <strong className="text-emerald-400 block mb-2 group-hover:text-emerald-300">Derecho de Cancelación (Art. 13)</strong>
              <p className="text-sm text-slate-400 leading-relaxed">Los usuarios perdieron este derecho sobre la base filtrada. Aunque exijan a Dropbox cancelar su cuenta, los datos ya están en manos de terceros maliciosos sobre los cuales la ley no tiene alcance.</p>
            </div>

            <div className="bg-slate-950/50 border border-slate-800 rounded-lg p-5 hover:border-emerald-500/50 transition-colors group">
              <strong className="text-emerald-400 block mb-2 group-hover:text-emerald-300">Derecho de Oposición (Art. 13)</strong>
              <p className="text-sm text-slate-400 leading-relaxed">El titular pierde la capacidad de oponerse a que ciberdelincuentes utilicen su correo para phishing, ya que el dato salió de la esfera de control de Dropbox.</p>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Datos;