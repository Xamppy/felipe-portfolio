'use client';

import { motion } from 'framer-motion';
import { Server, Code2, Database, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-900/50 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Encabezado de Sección */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-50">Más que código, soluciones completas</h2>
            <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-5 gap-12 items-start">
            
            {/* Texto Bio - Ocupa 3 columnas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-3 space-y-6 text-slate-300 leading-relaxed text-lg"
            >
              <p>
                Actualmente curso mi último año de <strong className="text-indigo-400">Ingeniería en Informática</strong>, 
                pero mi formación va mucho más allá del aula. He fundado y liderado 
                <span className="text-slate-100 font-semibold"> Angel Code Soluciones</span>, 
                donde aprendí que el código es solo una parte de la ecuación.
              </p>
              <p>
                Mi experiencia real viene de las trincheras: diseñar arquitecturas, lidiar con 
                servidores VPS, configurar pipelines de CI/CD y asegurar que los sistemas de mis 
                clientes funcionen 24/7.
              </p>
              <p>
                Soy un entusiasta del diseño de aplicaciones con un enfoque sólido en la 
                <span className="text-indigo-400 mx-1">experiencia del usuario</span>. Para mí, 
                todo entra primero por la vista, y si le sumamos una buena usabilidad, logramos 
                soluciones reales para problemas reales.
              </p>
            </motion.div>

            {/* Stats / Highlights - Ocupa 2 columnas */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 grid grid-cols-1 gap-4"
            >
              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-400">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">DevOps Focused</h4>
                  <p className="text-sm text-slate-400">Docker, VPS, Nginx</p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Data Science</h4>
                  <p className="text-sm text-slate-400">Python, SQL, BI</p>
                </div>
              </div>

              <div className="p-4 bg-slate-800/50 border border-slate-700/50 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100">Security Aware</h4>
                  <p className="text-sm text-slate-400">OWASP, TryHackMe</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
