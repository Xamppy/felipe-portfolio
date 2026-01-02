'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Code2 } from 'lucide-react';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  organization: string;
  role: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  tags?: string[];
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    year: '2024 - Presente',
    title: 'Angel Code Soluciones',
    organization: 'Emprendimiento Propio',
    role: 'Founder & Lead Engineer',
    description: 'Lideré el desarrollo full-stack de 5+ sistemas SaaS para clientes privados. Diseño de arquitecturas, administración de servidores VPS, configuración de pipelines CI/CD y entrega de soluciones con 100% de entregas on-time.',
    icon: <Rocket className="w-5 h-5" />,
    iconBg: 'bg-indigo-500',
    tags: ['Next.js', 'Django', 'Docker', 'VPS'],
  },
  {
    id: '2',
    year: '2025',
    title: 'Minimarket Don Ale',
    organization: 'Proyecto Cliente',
    role: 'Full Stack Developer',
    description: 'Desarrollo de plataforma E-commerce B2B con Next.js 14 y backend serverless. Despliegue containerizado con Dokploy en infraestructura propia.',
    icon: <Code2 className="w-5 h-5" />,
    iconBg: 'bg-emerald-500',
    tags: ['Next.js 14', 'Supabase', 'Dokploy'],
  },
  {
    id: '3',
    year: '2023 - Presente',
    title: 'Duoc UC',
    organization: 'Educación Superior',
    role: 'Estudiante de Ing. en Informática',
    description: 'Especialización en Ingeniería de Software y Data Science. Formación sólida en algoritmos, estructuras de datos, bases de datos y arquitectura de sistemas.',
    icon: <GraduationCap className="w-5 h-5" />,
    iconBg: 'bg-amber-500',
    tags: ['Software Engineering', 'Data Science', 'Algorithms'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/30 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-50">
            Trayectoria
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Mi evolución como desarrollador: desde las aulas hasta sistemas en producción.
          </p>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-slate-700 to-slate-800" />

            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full ${event.iconBg} flex items-center justify-center text-white shadow-lg shadow-${event.iconBg}/30`}>
                      {event.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-slate-600/50 transition-colors">
                      {/* Year Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/50 text-xs font-medium text-indigo-400 mb-3">
                        {event.year}
                      </div>

                      {/* Title & Organization */}
                      <h3 className="text-lg font-semibold text-slate-100 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-sm text-indigo-400 mb-1">
                        {event.role}
                      </p>
                      <p className="text-xs text-slate-500 mb-3">
                        {event.organization}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-slate-400 leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Tags */}
                      {event.tags && (
                        <div className="flex flex-wrap gap-2">
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-mono bg-slate-700/50 text-slate-300 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Spacer for alternating layout (desktop only) */}
                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
