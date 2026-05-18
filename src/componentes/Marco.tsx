import { Scale } from "lucide-react";

function Marco() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Scale className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Marco Normativo Nacional e Internacional
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
        <p>
          Para evaluar legalmente este incidente bajo un estándar riguroso, se analiza el caso de Dropbox (2012) aplicando un escenario hipotético bajo la legislación chilena actual y el marco internacional vigente.
        </p>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-3">1. Detalle de las Normas Aplicables</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Ley N° 21.459 (Chile):</strong> Dicta normas sobre delitos informáticos.</li>
            <li><strong>Ley N° 19.628 (Chile):</strong> Regula la protección de la vida privada y tratamiento de datos personales.</li>
            <li><strong>GDPR (Unión Europea):</strong> Reglamento General de Protección de Datos.</li>
            <li><strong>ISO/IEC 27001:</strong> Estándar internacional de gestión de la seguridad de la información.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-3">2. Justificación de Aplicabilidad</h3>
          <div className="space-y-4">
            <div className="bg-slate-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-slate-800">Ley N° 21.459:</strong> Plenamente aplicable debido al método de intrusión. Los atacantes emplearon credenciales corporativas robadas de LinkedIn para vulnerar la VPN, burlando el perímetro sin autorización.
            </div>
            <div className="bg-slate-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-slate-800">Ley N° 19.628:</strong> Aplica de forma directa dado que el resultado de la intrusión fue la extracción de 68,6 millones de correos (datos personales). Dropbox falló en su obligación legal de resguardar la confidencialidad.
            </div>
            <div className="bg-slate-50 p-4 rounded border-l-4 border-blue-500">
              <strong className="text-slate-800">GDPR:</strong> Si ocurriera hoy, aplicaría de forma extraterritorial. Ocultar la magnitud de la brecha desde 2012 hasta 2016 violaría el artículo 33, que exige reportar en un plazo máximo de 72 horas.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Marco;