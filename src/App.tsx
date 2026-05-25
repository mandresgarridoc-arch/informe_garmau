import { useState } from 'react';
import { Shield, BookOpen, Scale, AlertOctagon, Table as TableIcon, Users, Database, Lightbulb, Bot } from 'lucide-react';

import Resumen from './componentes/Resumen';
import Marco from './componentes/Marco';
import Delitos from './componentes/Delitos';
import Comparacion from './componentes/Comparacion';
import Responsabilidades from './componentes/Responsabilidades';
import Datos from './componentes/Datos';
import Conclusiones from './componentes/Conclusiones';
import Prompts from './componentes/Promts';

function App() {
  const [activeTab, setActiveTab] = useState('Resumen');

  const menuItems = [
    { id: 'Resumen', name: 'Resumen Ejecutivo', icon: BookOpen },
    { id: 'Marco', name: 'Marco Normativo', icon: Scale },
    { id: 'Delitos', name: 'Tipificación de Delitos', icon: AlertOctagon },
    { id: 'Comparacion', name: 'Tabla Comparativa', icon: TableIcon },
    { id: 'Responsabilidades', name: 'Responsabilidades', icon: Users },
    { id: 'Datos', name: 'Datos Personales', icon: Database },
    { id: 'Conclusiones', name: 'Conclusiones', icon: Lightbulb },
    { id: 'Prompts', name: 'Bitácora IA', icon: Bot },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Resumen': return <Resumen />;
      case 'Marco': return <Marco />;
      case 'Delitos': return <Delitos />;
      case 'Comparacion': return <Comparacion />;
      case 'Responsabilidades': return <Responsabilidades />;
      case 'Datos': return <Datos />;
      case 'Conclusiones': return <Conclusiones />;
      case 'Prompts': return <Prompts />;
      default: return <Resumen />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      <header className="bg-slate-950/80 backdrop-blur-md py-5 px-6 border-b border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.1)] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 border border-cyan-500/50 p-2 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.3)] shrink-0">
              <Shield size={32} className="text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-sm">
                Análisis Legal de Ciberseguridad
              </h1>
              <p className="text-cyan-600/80 text-xs md:text-sm font-medium tracking-wide">CASO DROPBOX 2012 | LEGISLACIÓN CHILENA</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 py-6 md:py-8 px-4 md:px-6">
        
        <aside className="w-full md:w-64 shrink-0 z-20">
          <nav className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden md:sticky md:top-28 shadow-lg">
            <div className="p-4 border-b border-slate-800 bg-slate-900 hidden md:block">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sistemas En Línea</h2>
            </div>
            
            <ul className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible no-scrollbar">
              {menuItems.map((item) => (
                <li key={item.id} className="shrink-0 md:shrink">
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-2 md:gap-3 px-4 md:px-5 py-3 md:py-4 text-left transition-all duration-300 md:border-l-2 border-b-2 md:border-b-0 ${
                      activeTab === item.id
                        ? 'bg-cyan-950/30 md:border-l-cyan-400 border-b-cyan-400 md:border-b-transparent text-cyan-300 md:shadow-[inset_4px_0_0_rgba(34,211,238,0.5)]'
                        : 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-cyan-200'
                    }`}
                  >
                    <item.icon 
                      size={18} 
                      className={activeTab === item.id ? 'text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'text-slate-500'} 
                    />
                    <span className="text-sm tracking-wide whitespace-nowrap md:whitespace-normal">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          <div key={activeTab} className="animate-fade-in [&>div]:mb-0">
            {renderContent()}
          </div>
        </main>

      </div>

      <footer className="bg-slate-950 border-t border-slate-800/50 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-slate-600 text-center md:text-left">
          
          {/* SECCIÓN DEL ALUMNO Y GITHUB */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span className="font-medium text-slate-500">ESTUDIANTE: MAURICIO ANDRÉS GARRIDO CONTRERAS</span>
            
            <a 
              href="https://github.com/mandresgarridoc-arch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-cyan-500/80 hover:text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)] transition-all duration-300 group"
>
              {/* Reemplazamos <Github /> por este SVG incrustado */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="group-hover:scale-110 transition-transform"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span className="lowercase">https://github.com/mandresgarridoc-arch</span>
            </a>
          </div>

          <div>T13034 SEGURIDAD DE LA INFORMACIÓN | INACAP VALPARAÍSO</div>
        </div>
      </footer>

    </div>
  );
}

export default App;