import { Lightbulb } from "lucide-react";

function Conclusiones() {
  return (
    <div className="bg-white rounded-lg shadow p-8 mb-8">
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="text-amber-500" size={28} />
        <h2 className="text-2xl font-bold text-slate-800">
          Recomendaciones de Seguridad y Conclusiones
        </h2>
      </div>

      <div className="space-y-6 text-slate-600 leading-relaxed text-justify">
        <section>
          <h3 className="text-lg font-semibold text-slate-800 mb-3">Recomendaciones Técnicas y Operativas</h3>
          <ul className="list-decimal pl-5 space-y-3">
            <li>
              <strong>Autenticación Multifactor (MFA) Obligatoria:</strong> Todos los accesos a la red corporativa (como VPNs o paneles de administración) deben requerir un segundo factor de autenticación, neutralizando el riesgo de credenciales robadas.
            </li>
            <li>
              <strong>Políticas Estrictas de Contraseñas (Zero Trust):</strong> Implementar controles técnicos que impidan a los empleados utilizar contraseñas que hayan aparecido en brechas de datos conocidas, además de prohibir contractualmente la reutilización de claves corporativas.
            </li>
            <li>
              <strong>Cifrado Robusto Universal:</strong> Migrar todas las bases de datos a estándares criptográficos modernos (como Argon2 o bcrypt robusto) para resistir ataques de fuerza bruta en caso de filtración.
            </li>
          </ul>
        </section>

        <section className="bg-amber-50 p-5 rounded-lg border border-amber-100">
          <h3 className="text-lg font-semibold text-amber-900 mb-2">Reflexión Final del Análisis</h3>
          <p className="text-amber-800">
            El caso de Dropbox evidencia que en ciberseguridad, el eslabón más débil casi siempre es el factor humano. Una arquitectura técnica robusta puede colapsar por una mala práctica de higiene digital de un solo empleado. Legalmente, el caso demuestra la importancia de la actualización normativa: si Dropbox hubiera estado sujeta a leyes modernas como el GDPR, el ocultamiento de la brecha por cuatro años habría resultado en multas paralizantes. La ciberseguridad ya no es solo un problema del departamento de TI, sino una obligación legal y fiduciaria de la empresa hacia sus usuarios.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Conclusiones;