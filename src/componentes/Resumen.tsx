import { FileText } from 'lucide-react'

function Resumen() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <FileText className="text-blue-600" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Resumen Ejecutivo: Brecha de Seguridad de Dropbox (2012)
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">1. ¿Qué pasó?</h3>
          <p>
            En el año 2012, la plataforma de almacenamiento en la nube Dropbox sufrió una intrusión no autorizada en su infraestructura informática corporativa. Un grupo de atacantes informáticos logró eludir los mecanismos de autenticación perimetral y acceder a la red interna de la compañía. El vector de ataque inicial no se debió a un exploit de día cero (zero-day) o a una vulnerabilidad técnica directa en el software de Dropbox, sino a un fallo de seguridad operacional: la reutilización de credenciales por parte de un empleado de la empresa. Dicho colaborador había utilizado la misma contraseña de su cuenta corporativa en la red social profesional LinkedIn, la cual sufrió una filtración masiva de datos a principios de ese mismo año. Los atacantes obtuvieron las credenciales filtradas de LinkedIn, realizaron un ataque de relleno de credenciales (credential stuffing) contra los accesos remotos (VPN) de Dropbox y consiguieron acceso total a la red interna.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">2. ¿Cuándo pasó y quiénes participaron?</h3>
          <p>
            El incidente ocurrió originalmente en el año 2012. Sin embargo, la magnitud real y los detalles técnicos de la brecha no fueron totalmente transparentes ni conocidos por el público general y los usuarios afectados hasta agosto de 2016, cuando la base de datos robada comenzó a comercializarse en foros de la Dark Web. En el incidente participaron un empleado negligente (cuyas credenciales fueron el vector de entrada), el equipo de ingenieros de seguridad de Dropbox (quienes detectaron anomalías con posterioridad) y un grupo de cibercriminales no identificados formalmente en ese momento, asociados a la compraventa de información confidencial a gran escala.
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Impacto y Alcance</h3>
          <p>
            El impacto de esta brecha de seguridad fue masivo y global. Los atacantes lograron extraer un archivo de respaldo que contenía una base de datos con los registros de <strong>68.680.741 usuarios</strong> únicos de Dropbox. La información comprometida incluía direcciones de correo electrónico asociadas a las cuentas y contraseñas protegidas mediante funciones hash criptográficas (aproximadamente 32 millones de registros protegidos con la función robusta <em>bcrypt</em> y el resto con <em>SHA-1</em> modificado con <em>salt</em>). A pesar del cifrado, la exposición de los correos facilitó campañas de phishing, dañando severamente la reputación corporativa de la empresa.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Resumen