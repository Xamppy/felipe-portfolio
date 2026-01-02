'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, Rocket, Code2, GraduationCap, Sparkles } from 'lucide-react';
import { 
  SiNextdotjs, 
  SiDjango, 
  SiDocker, 
  SiNginx, 
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiAngular
} from 'react-icons/si';

// Browser Mockup Component
function BrowserMockup({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-2xl border border-white/10 ${className}`}>
      {/* Browser Header */}
      <div className="bg-slate-800 h-7 flex items-center px-3 gap-2">
        {/* Traffic Lights */}
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        {/* URL Bar */}
        <div className="flex-1 ml-2">
          <div className="bg-slate-700/50 rounded h-4 w-32 mx-auto" />
        </div>
      </div>
      {/* Browser Content */}
      <div className="relative overflow-hidden bg-slate-900">
        {children}
      </div>
    </div>
  );
}

interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  longDescription?: string;
  stack: { name: string; icon: React.ReactNode }[];
  metrics?: { label: string; value: string }[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  status?: string;
  tag?: string;
}

const featuredProjects: Project[] = [
  {
    id: 'estetikflow',
    title: 'EstetikFlow',
    role: 'Founder & Lead Developer',
    description: 'SaaS de Gestión para Estética Integral',
    longDescription: 'Plataforma SaaS moderna con Landing Page de alta conversión y aplicativo web para gestión de agendas, fichas clínicas e inventario. Diseño UI/UX premium orientado a profesionales de la estética.',
    stack: [
      { name: 'Next.js 14', icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="w-4 h-4" /> },
      { name: 'Django', icon: <SiDjango className="w-4 h-4" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
    ],
    metrics: [
      { label: 'Landing', value: 'Prod' },
      { label: 'App', value: 'Beta' },
    ],
    image: '/images/projects/screenshots/estetikflow/1.webp',
    liveUrl: 'https://estetikflow.cl',
    isFeatured: true,
    status: 'En producción',
  },
  {
    id: 'angel-code',
    title: 'Angel Code Soluciones',
    role: 'Founder & Lead Engineer',
    description: 'Agencia de Desarrollo de Software',
    longDescription: 'Emprendimiento técnico donde lideré el desarrollo full-stack de 5+ sistemas de gestión empresarial. Diseñé arquitecturas escalables, administré servidores VPS y aseguré 100% de entregas on-time.',
    stack: [
      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: 'Django', icon: <SiDjango className="w-4 h-4" /> },
      { name: 'Docker', icon: <SiDocker className="w-4 h-4" /> },
      { name: 'Nginx', icon: <SiNginx className="w-4 h-4" /> },
    ],
    metrics: [
      { label: 'Sistemas', value: '5+' },
      { label: 'On-time', value: '100%' },
    ],
    image: '/images/projects/screenshots/podoclinic/1.webp',
    liveUrl: 'https://angelcodesoluciones.cl',
    isFeatured: true,
  },
];

const gridProjects: Project[] = [
  {
    id: 'dara',
    title: 'DARA - Gestor Documental',
    role: 'Full Stack Developer',
    description: 'Sistema de Gestión Académica desarrollado para Duoc UC. Plataforma centralizada para el flujo y control de documentos institucionales.',
    stack: [
      { name: 'Angular', icon: <SiAngular className="w-4 h-4" /> },
      { name: 'Django', icon: <SiDjango className="w-4 h-4" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
    ],
    image: '/images/projects/screenshots/dara/1.webp',
    tag: 'Academic',
  },
  {
    id: 'podoclinic',
    title: 'Podoclinic',
    role: 'Full Stack Developer',
    description: 'Sistema de gestión clínica para podología con agendamiento, fichas de pacientes y facturación integrada.',
    stack: [
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
      { name: 'Django', icon: <SiDjango className="w-4 h-4" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
    ],
    image: '/images/projects/screenshots/podoclinic/1.webp',
    tag: 'Healthcare',
  },
  {
    id: 'minimarket',
    title: 'Minimarket Don Ale',
    role: 'Full Stack Developer',
    description: 'E-commerce B2B con catálogo dinámico y despliegue automatizado con Dokploy en VPS propio.',
    stack: [
      { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
      { name: 'TypeScript', icon: <SiTypescript className="w-4 h-4" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-4 h-4" /> },
    ],
    image: '/images/projects/screenshots/mayorista/1.webp',
    tag: 'E-commerce',
  },
  {
    id: 'kinesiologia',
    title: 'Sistema Kinesiológico',
    role: 'Full Stack Developer',
    description: 'Sistema de gestión deportiva para seguimiento de lesiones y planes de tratamiento personalizados.',
    stack: [
      { name: 'React', icon: <SiReact className="w-4 h-4" /> },
      { name: 'Django', icon: <SiDjango className="w-4 h-4" /> },
      { name: 'Docker', icon: <SiDocker className="w-4 h-4" /> },
    ],
    image: '/images/projects/screenshots/kinesiologia/1.webp',
    tag: 'Healthcare',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-transparent relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-50">
            Proyectos Destacados
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sistemas reales en producción, usados por clientes reales.
          </p>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-500"
            >
              {/* Featured Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/30 rounded-full backdrop-blur-sm">
                  {index === 0 ? <Sparkles className="w-4 h-4 text-indigo-400" /> : <Rocket className="w-4 h-4 text-indigo-400" />}
                  <span className="text-sm font-medium text-indigo-400">
                    {index === 0 ? 'Nuevo' : 'Case Study'}
                  </span>
                </div>
              </div>

              {/* Project Image with Browser Mockup */}
              <div className="p-6 pt-14">
                <BrowserMockup className="group-hover:scale-[1.02] group-hover:-translate-y-1 transition-transform duration-500">
                  {project.image && (
                    <div className="relative h-48 lg:h-56">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                </BrowserMockup>
              </div>

              {/* Content */}
              <div className="p-6 pt-2">
                <div className="flex items-center gap-2 text-indigo-400 text-sm font-medium mb-2">
                  <Code2 className="w-4 h-4" />
                  {project.role}
                </div>

                <h3 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 mb-3">{project.description}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {project.longDescription}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-800/50 border border-slate-700/50 rounded-lg text-xs text-slate-300"
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Metrics & Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  {project.metrics && (
                    <div className="flex gap-6">
                      {project.metrics.map((metric) => (
                        <div key={metric.label}>
                          <div className="text-lg font-bold text-indigo-400">{metric.value}</div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm rounded-lg transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver Sitio
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Grid Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative flex flex-col bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-all"
            >
              {/* Tag */}
              {project.tag && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-0.5 text-[10px] font-medium bg-slate-800/80 border border-slate-700 rounded text-slate-400 backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>
              )}

              {/* Image */}
              <div className="relative p-3 pb-0">
                <BrowserMockup className="group-hover:scale-[1.02] transition-transform duration-300">
                  {project.image && (
                    <div className="relative h-32">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                </BrowserMockup>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-4">
                <div className="text-xs text-indigo-400 font-medium mb-1">
                  {project.role}
                </div>
                <h3 className="text-sm font-semibold text-slate-100 mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Stack (compact) - pushed to bottom */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-slate-700/30">
                  {project.stack.map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-slate-900/50 border border-slate-700/50 rounded text-[10px] text-slate-400"
                      title={tech.name}
                    >
                      {tech.icon}
                      <span className="hidden sm:inline">{tech.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Xamppy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors"
          >
            Ver más en GitHub
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}