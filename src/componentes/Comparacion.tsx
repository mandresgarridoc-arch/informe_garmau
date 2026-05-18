import { Table } from "lucide-react";

function Comparacion() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Table className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Comparación de Marcos Regulatorios
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
        <p>
          A continuación, se presenta una comparación analítica entre tres marcos de control aplicables al escenario corporativo y tecnológico del caso Dropbox:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200">
            <thead>
              <tr className="bg-slate-100 text-slate-800">
                <th className="border border-slate-200 p-3 font-semibold">Eje de Comparación</th>
                <th className="border border-slate-200 p-3 font-semibold">Ley N° 19.628 (Chile)</th>
                <th className="border border-slate-200 p-3 font-semibold">GDPR (Unión Europea)</th>
                <th className="border border-slate-200 p-3 font-semibold">Ley N° 21.459 (Chile)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="border border-slate-200 p-3 font-semibold text-slate-800">Alcance y Enfoque</td>
                <td className="border border-slate-200 p-3">Regula la protección y tratamiento de datos personales por parte de entidades públicas o privadas.</td>
                <td className="border border-slate-200 p-3">Regula la privacidad, derechos y protección de datos personales de ciudadanos de la UE, con aplicación global.</td>
                <td className="border border-slate-200 p-3">Define y sanciona penalmente las conductas delictivas dirigidas contra sistemas informáticos y datos digitales.</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="border border-slate-200 p-3 font-semibold text-slate-800">Jurisdicción</td>
                <td className="border border-slate-200 p-3">Nacional (Territorio de la República de Chile).</td>
                <td className="border border-slate-200 p-3">Extraterritorial (Aplica a cualquier empresa del mundo si procesa datos de la UE).</td>
                <td className="border border-slate-200 p-3">Nacional (Tribunales de Garantía y Penales del Estado de Chile).</td>
              </tr>
              <tr className="hover:bg-slate-50 transition-colors">
                <td className="border border-slate-200 p-3 font-semibold text-slate-800">Sujeto Regulado</td>
                <td className="border border-slate-200 p-3">El Responsable del Registro o Banco de Datos (Dropbox).</td>
                <td className="border border-slate-200 p-3">El Responsable y el Encargado del Tratamiento de Datos a nivel global.</td>
                <td className="border border-slate-200 p-3">El sujeto activo (cibercriminal o hacker) que ejecuta la acción típica.</td>
              </tr>
              <tr className="bg-blue-50 hover:bg-blue-100 transition-colors">
                <td className="border border-blue-200 p-3 font-bold text-blue-900">Aplicabilidad al Caso</td>
                <td className="border border-blue-200 p-3 text-blue-900"><strong>Alta:</strong> Por la pérdida de confidencialidad de los correos de usuarios chilenos.</td>
                <td className="border border-blue-200 p-3 text-blue-900"><strong>Crítica:</strong> Obligaría a reportar en menos de 72 horas bajo amenaza de multas gigantescas.</td>
                <td className="border border-blue-200 p-3 text-blue-900"><strong>Directa:</strong> Permite perseguir penalmente a los atacantes por acceso ilícito y receptación.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Comparacion;