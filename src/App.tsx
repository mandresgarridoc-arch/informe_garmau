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
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans text-slate-300">
      
      <header className="bg-slate-950/80 backdrop-blur-md py-5 px-6 border-b border-cyan-500/30 shadow-[0_4px_20px_rgba(6,182,212,0.1)] sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-slate-900 border border-cyan-500/50 p-2 rounded-lg shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              <Shield size={32} className="text-cyan-400 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 drop-shadow-sm">
                Análisis Legal de Ciberseguridad
              </h1>
              <p className="text-cyan-600/80 text-sm font-medium tracking-wide">CASO DROPBOX 2012 | LEGISLACIÓN CHILENA</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 py-8 px-6">
        
        <aside className="w-full md:w-64 shrink-0">
          <nav className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-800 overflow-hidden sticky top-28 shadow-lg">
            <div className="p-4 border-b border-slate-800 bg-slate-900">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sistemas En Línea</h2>
            </div>
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all duration-300 border-l-2 ${
                      activeTab === item.id
                        ? 'bg-cyan-950/30 border-cyan-400 text-cyan-300 shadow-[inset_4px_0_0_rgba(34,211,238,0.5)]'
                        : 'border-transparent text-slate-400 hover:bg-slate-800 hover:text-cyan-200'
                    }`}
                  >
                    <item.icon 
                      size={18} 
                      className={activeTab === item.id ? 'text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]' : 'text-slate-500'} 
                    />
                    <span className="text-sm tracking-wide">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 min-w-0">
          <div className="[&>div]:mb-0 transition-opacity duration-500">
            {renderContent()}
          </div>
        </main>

      </div>

      <footer className="bg-slate-950 border-t border-slate-800/50 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-slate-600">
          <div className="font-medium text-slate-500">ESTUDIANTE: MAURICIO ANDRÉS GARRIDO CONTRERAS</div>
          <div>T13034 SEGURIDAD DE LA INFORMACIÓN | INACAP VALPARAÍSO</div>
        </div>
      </footer>

    </div>
  );
}

export default App;