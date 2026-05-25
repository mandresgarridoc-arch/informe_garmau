import { Lightbulb } from "lucide-react";

function Conclusiones() {
  return (
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-5 md:p-8">
      <div className="flex items-center gap-3 mb-8 border-b border-amber-500/20 pb-4">
        <Lightbulb className="text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
          Recomendaciones de Seguridad y Conclusiones
        </h2>
      </div>

      <div className="space-y-8 text-slate-300 leading-relaxed text-justify">
        
        <section>
          <h3 className="text-lg font-bold text-slate-200 mb-5 border-b border-slate-800 pb-2">Recomendaciones Técnicas y Operativas</h3>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-slate-950/80 border border-slate-800 border-t-2 border-t-amber-500 rounded-lg p-5 shadow-inner hover:bg-slate-800/50 transition-colors">
              <strong className="text-amber-400 block mb-2">1. MFA Obligatoria</strong>
              <p className="text-sm text-slate-400">Todos los accesos a la red corporativa (como VPNs o paneles de administración) deben requerir un segundo factor de autenticación, neutralizando el riesgo de credenciales robadas.</p>
            </div>
            
            <div className="bg-slate-950/80 border border-slate-800 border-t-2 border-t-amber-500 rounded-lg p-5 shadow-inner hover:bg-slate-800/50 transition-colors">
              <strong className="text-amber-400 block mb-2">2. Políticas Estrictas (Zero Trust)</strong>
              <p className="text-sm text-slate-400">Implementar controles técnicos que impidan a los empleados utilizar contraseñas que hayan aparecido en brechas conocidas, además de prohibir contractualmente la reutilización de claves.</p>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 border-t-2 border-t-amber-500 rounded-lg p-5 shadow-inner hover:bg-slate-800/50 transition-colors">
              <strong className="text-amber-400 block mb-2">3. Cifrado Robusto Universal</strong>
              <p className="text-sm text-slate-400">Migrar todas las bases de datos a estándares criptográficos modernos (como Argon2 o bcrypt robusto) para resistir ataques de fuerza bruta en caso de filtración.</p>
            </div>
          </div>
        </section>

        <section className="bg-amber-950/20 p-6 rounded-lg border border-amber-900/50 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
          <h3 className="text-lg font-bold text-amber-400 mb-3 flex items-center gap-2">
            Reflexión Final del Análisis
          </h3>
          <p className="text-amber-100/70 text-sm md:text-base">
            El caso de Dropbox evidencia que en ciberseguridad, el eslabón más débil casi siempre es el factor humano. Una arquitectura técnica robusta puede colapsar por una mala práctica de higiene digital de un solo empleado. Legalmente, el caso demuestra la importancia de la actualización normativa: si Dropbox hubiera estado sujeta a leyes modernas como el GDPR, el ocultamiento de la brecha por cuatro años habría resultado en multas paralizantes. La ciberseguridad ya no es solo un problema del departamento de TI, sino una obligación legal y fiduciaria de la empresa hacia sus usuarios.
          </p>
        </section>

      </div>
    </div>
  );
}

export default Conclusiones;