import { Database } from "lucide-react";

function Datos() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-5 md:p-8">
      {/* TÍTULO PRINCIPAL CORREGIDO CON LA LEY */}
      <div className="flex items-center gap-3 mb-8 border-b border-emerald-500/20 pb-4">
        <Database className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400">
          Tratamiento de Datos Personales (Ley N° 19.628)
        </h2>
      </div>

      <div className="space-y-5">
        
        {/* Fila 1: Tipos de Datos (TEXTO ORIGINAL RESTAURADO) */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-emerald-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(16,185,129,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-emerald-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-emerald-900/20 transition-colors">
            
            <h3 className="text-lg font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors leading-tight">
              1. Tipos de Datos y Clasificación Legal
            </h3>
          </div>
          <div className="md:w-3/4 p-6">
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              La filtración expuso <strong className="text-emerald-300">correos electrónicos</strong>, <strong className="text-emerald-300">contraseñas cifradas</strong> y <strong className="text-emerald-300">metadatos</strong> de 68.6 millones de cuentas.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Según el Artículo 2°, letra f) de la Ley N° 19.628, califican como <strong className="text-emerald-300">Datos Personales</strong> (conciernen a personas naturales identificables). No constituyen <em className="text-slate-500">Datos Sensibles</em> (Art. 2°, letra g), ya que no revelan origen racial, ideologías, ni estados de salud.
            </p>
          </div>
        </div>

        {/* Separador Visual Pequeño */}
        <div className="pt-4 pb-2">
          <h3 className="text-lg font-bold text-slate-200 border-b border-slate-800 pb-2">2. Derechos ARCO Afectados</h3>
        </div>

        {/* Fila 2: ARCO 1 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-emerald-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(16,185,129,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-emerald-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-emerald-900/20 transition-colors">
            
            <h3 className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">Acceso</h3>
          </div>
          <div className="md:w-3/4 p-6">
            <strong className="text-emerald-400 block mb-2 text-sm uppercase tracking-wider">Derecho de Acceso e Información (Art. 12)</strong>
            <p className="text-sm text-slate-400 leading-relaxed">Se vulneró al no notificar a los usuarios en 2012. Al ocultarse el alcance de la brecha hasta 2016, los usuarios no pudieron ejercer su derecho a saber qué pasaba con su información.</p>
          </div>
        </div>

        {/* Fila 3: ARCO 2 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-emerald-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(16,185,129,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-emerald-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-emerald-900/20 transition-colors">
            
            <h3 className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">Cancelación</h3>
          </div>
          <div className="md:w-3/4 p-6">
            <strong className="text-emerald-400 block mb-2 text-sm uppercase tracking-wider">Derecho de Cancelación (Art. 13)</strong>
            <p className="text-sm text-slate-400 leading-relaxed">Los usuarios perdieron este derecho sobre la base filtrada. Aunque exijan a Dropbox cancelar su cuenta, los datos ya están en manos de terceros maliciosos sobre los cuales la ley no tiene alcance.</p>
          </div>
        </div>

        {/* Fila 4: ARCO 3 */}
        <div className="bg-slate-950/80 rounded-lg border border-slate-800 border-l-2 border-l-emerald-500 hover:bg-slate-800/80 transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.3)] group hover:shadow-[inset_4px_0_0_rgba(16,185,129,0.6)] flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/4 bg-emerald-950/20 p-6 flex flex-col justify-center items-start border-b md:border-b-0 md:border-r border-slate-800 group-hover:bg-emerald-900/20 transition-colors">
            
            <h3 className="text-xl font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">Oposición</h3>
          </div>
          <div className="md:w-3/4 p-6">
            <strong className="text-emerald-400 block mb-2 text-sm uppercase tracking-wider">Derecho de Oposición (Art. 13)</strong>
            <p className="text-sm text-slate-400 leading-relaxed">El titular pierde la capacidad de oponerse a que ciberdelincuentes utilicen su correo para phishing, ya que el dato salió de la esfera de control de Dropbox.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Datos;