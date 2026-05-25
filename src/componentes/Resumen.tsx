import { FileText } from "lucide-react";

function Resumen() {
  return (
    // Contenedor principal de la tarjeta: Fondo oscuro, borde sutil y desenfoque
    <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.5)] p-5 md:p-8">
      
      {/* Cabecera de la tarjeta con línea neón */}
      <div className="flex items-center gap-3 mb-6 border-b border-cyan-500/20 pb-4">
        <FileText className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]" size={28} />
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
          Resumen Ejecutivo del Caso
        </h2>
      </div>

      {/* Contenedor dividido: Texto a la izquierda, Imagen a la derecha */}
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Columna de Texto */}
        <div className="space-y-4 text-slate-300 leading-relaxed text-justify flex-1">
          <p>
            En 2012, Dropbox sufrió una brecha de seguridad masiva que resultó en la filtración de más de <strong className="text-cyan-400 font-semibold">68 millones de credenciales</strong> de usuarios. El incidente se originó a partir de la reutilización de contraseñas corporativas.
          </p>
          <p>
            Un empleado de la compañía utilizó su contraseña del trabajo en su cuenta personal de LinkedIn. Cuando LinkedIn fue hackeado meses antes, los ciberdelincuentes obtuvieron esa clave y la utilizaron para acceder a la red interna de Dropbox a través de su Red Privada Virtual (VPN).
          </p>
          <div className="bg-slate-950/50 border border-slate-800 border-l-2 border-l-purple-500 p-4 rounded-r-lg mt-4 shadow-inner">
            <p className="text-sm text-slate-400">
              <strong className="text-purple-400 block mb-1">Impacto Crítico:</strong> 
              El atacante accedió a un documento que contenía las direcciones de correo electrónico y contraseñas cifradas de los usuarios. La empresa mantuvo un silencio parcial sobre la magnitud real del ataque hasta el año 2016, exponiendo a millones de personas a ataques de phishing.
            </p>
          </div>
        </div>

        {/* Columna de Imagen con efecto "Glow" (Resplandor) */}
        <div className="md:w-1/3 shrink-0 flex flex-col items-center justify-start">
          <div className="relative group w-full">
            {/* Este div crea el resplandor que está detrás de la imagen */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
            
            {/* La imagen real */}
            <img 
              src="/dropbox-hacker.jpg" 
              alt="Representación del incidente" 
              className="relative rounded-lg border border-slate-700 w-full h-auto object-cover shadow-xl"
            />
          </div>
           
          
        </div>

      </div>
    </div>
  );
}

export default Resumen;