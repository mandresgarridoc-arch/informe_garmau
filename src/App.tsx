import { useState } from 'react';
import { Shield, BookOpen, Scale, AlertOctagon, Table as TableIcon, Users, Database, Lightbulb, Bot } from 'lucide-react';

// Importación de tus componentes. 
// OJO: Verifica que las rutas y nombres coincidan con tus archivos exactos.
import Resumen from './componentes/Resumen';
import Marco from './componentes/Marco';
import Delitos from './componentes/Delitos';
import Comparacion from './componentes/Comparacion';
import Responsabilidades from './componentes/Responsabilidades';
import Datos from './componentes/Datos';
import Conclusiones from './componentes/Conclusiones';
import Prompts from './componentes/Promts'; // Ajustado al nombre que tenías en tu terminal

function App() {
  // Estado para controlar qué sección está visible (por defecto, el Resumen)
  const [activeTab, setActiveTab] = useState('Resumen');

  // Arreglo con la información de nuestro menú
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

  // Función que decide qué componente mostrar según el menú seleccionado
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
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Header Corporativo (Barra Superior) */}
      <header className="bg-slate-900 text-white py-5 px-6 shadow-md border-b-4 border-blue-600 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-2 rounded-lg shadow-inner">
              <Shield size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Análisis Legal de Ciberseguridad</h1>
              <p className="text-slate-400 text-sm font-medium">Caso Dropbox 2012 | Legislación Chilena</p>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 py-8 px-6">
        
        {/* Menú Lateral (Sidebar) */}
        <aside className="w-full md:w-64 shrink-0">
          <nav className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden sticky top-28">
            <div className="p-4 border-b border-slate-100 bg-slate-50">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Índice del Informe</h2>
            </div>
            <ul className="flex flex-col">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all duration-200 border-l-4 ${
                      activeTab === item.id
                        ? 'bg-blue-50 border-blue-600 text-blue-700 font-semibold'
                        : 'border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <item.icon size={18} className={activeTab === item.id ? 'text-blue-600' : 'text-slate-400'} />
                    <span className="text-sm">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Contenido Principal Dinámico */}
        <main className="flex-1 min-w-0">
          {/* Este bloque envuelve el contenido para que las tarjetas interiores no tengan margen inferior doble */}
          <div className="[&>div]:mb-0 transition-all duration-300 ease-in-out">
            {renderContent()}
          </div>
        </main>

      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="font-medium text-slate-700">Estudiante: Mauricio Andrés Garrido Contreras</div>
          <div>T13034 Fundamentos de Seguridad - Evaluación 2 | INACAP Valparaíso</div>
        </div>
      </footer>

    </div>
  );
}

export default App;