import { Database } from "lucide-react";

function Datos() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Database className="text-emerald-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Tratamiento de Datos Personales (Ley N° 19.628)
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 text-justify">
        <section className="bg-emerald-50 border border-emerald-100 rounded-lg p-5">
          <h3 className="text-lg font-semibold text-emerald-900 mb-2">1. Tipos de Datos y Clasificación Legal</h3>
          <p className="mb-3">La filtración expuso <strong>correos electrónicos</strong>, <strong>contraseñas cifradas</strong> y <strong>metadatos</strong> de 68.6 millones de cuentas.</p>
          <p>
            Según el Artículo 2°, letra f) de la Ley N° 19.628, califican como <strong>Datos Personales</strong> (conciernen a personas naturales identificables). 
            No constituyen <em>Datos Sensibles</em> (Art. 2°, letra g), ya que no revelan origen racial, ideologías, ni estados de salud.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-4">2. Derechos ARCO Afectados</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0"></div>
              <div>
                <strong className="text-slate-800">Derecho de Acceso e Información (Art. 12):</strong>
                <p className="text-sm mt-1">Se vulneró al no notificar a los usuarios en 2012. Al ocultarse el alcance de la brecha hasta 2016, los usuarios no pudieron ejercer su derecho a saber qué pasaba con su información.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0"></div>
              <div>
                <strong className="text-slate-800">Derecho de Cancelación (Art. 13):</strong>
                <p className="text-sm mt-1">Los usuarios perdieron este derecho sobre la base filtrada. Aunque exijan a Dropbox cancelar su cuenta, los datos ya están en manos de terceros maliciosos sobre los cuales la ley no tiene alcance.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-2 h-2 mt-2 rounded-full bg-emerald-500 shrink-0"></div>
              <div>
                <strong className="text-slate-800">Derecho de Oposición (Art. 13):</strong>
                <p className="text-sm mt-1">El titular pierde la capacidad de oponerse a que ciberdelincuentes utilicen su correo para phishing, ya que el dato salió de la esfera de control de Dropbox.</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Datos;