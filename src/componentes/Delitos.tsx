import { AlertOctagon } from "lucide-react";

function Delitos() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <AlertOctagon className="text-red-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Tipificación de Delitos (Ley N° 21.459)
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
        <p>
          Si los hechos de la brecha de Dropbox hubieran ocurrido bajo la jurisdicción de la legislación chilena actual, las conductas de los atacantes se encuadrarían en los siguientes delitos penales:
        </p>

        <div className="grid gap-6">
          {/* Artículo 2 */}
          <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Artículo 2° - Acceso Ilícito</h3>
            <p className="mb-3">
              <strong>La Norma:</strong> Sanciona al que, con ánimo de apoderarse, usar o conocer la información contenida en un sistema informático, acceda a él sin autorización, vulnerando las medidas de seguridad.
            </p>
            <p className="text-sm bg-red-50 p-3 rounded text-red-900 border-l-4 border-red-500">
              <strong>Mapeo del Caso:</strong> Los cibercriminales utilizaron credenciales de VPN obtenidas ilegítimamente de LinkedIn para ingresar a los repositorios internos de Dropbox, vulnerando el perímetro de control sin autorización.
            </p>
          </div>

          {/* Artículo 4 */}
          <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Artículo 4° - Receptación de Datos Informáticos</h3>
            <p className="mb-3">
              <strong>La Norma:</strong> Penaliza al que, a sabiendas de su origen ilícito, comercialice, transfiera, almacene o introduzca en un sistema datos provenientes de delitos informáticos.
            </p>
            <p className="text-sm bg-red-50 p-3 rounded text-red-900 border-l-4 border-red-500">
              <strong>Mapeo del Caso:</strong> La base de datos con 68 millones de cuentas fue almacenada y posteriormente puesta a la venta en el mercado negro (Dark Web) en 2016. Toda esta cadena de distribución configura este delito.
            </p>
          </div>

          {/* Artículo 7 */}
          <div className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow">
            <h3 className="text-lg font-bold text-slate-800 mb-2">Artículo 7° - Abuso de Dispositivos</h3>
            <p className="mb-3">
              <strong>La Norma:</strong> Sanciona a quien produzca, adquiera o ponga a disposición contraseñas, códigos de acceso o datos similares que permitan acceder a un sistema informático.
            </p>
            <p className="text-sm bg-red-50 p-3 rounded text-red-900 border-l-4 border-red-500">
              <strong>Mapeo del Caso:</strong> Los atacantes adquirieron el listado de contraseñas filtradas de LinkedIn con el propósito directo de utilizarlas como llaves de acceso en sistemas corporativos de alto valor como Dropbox.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delitos;