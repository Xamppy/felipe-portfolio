'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Briefcase } from 'lucide-react'

interface Technology {
  name: string
  icon?: string
}

interface ProjectCardProps {
  title: string
  role?: string
  description: string
  stack: Technology[]
  metrics?: {
    label: string
    value: string
  }[]
  githubUrl?: string
  liveUrl?: string
  caseStudyUrl?: string
  previewImage?: string
  className?: string
}

export function ProjectCard({
  title,
  role,
  description,
  stack,
  metrics,
  githubUrl,
  liveUrl,
  caseStudyUrl,
  previewImage,
  className = ''
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className={`glass-card group h-full flex flex-col ${className}`}
    >
      {/* Preview Image */}
      {previewImage && (
        <div className="relative h-48 overflow-hidden rounded-t-xl -mx-6 -mt-6 mb-6">
          <Image
            src={previewImage}
            alt={`${title} preview`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-text-primary mb-1 group-hover:text-primary-light transition-colors">
          {title}
        </h3>
        {role && (
          <div className="flex items-center gap-2 text-sm text-primary-light">
            <Briefcase className="w-4 h-4" />
            <span>{role}</span>
          </div>
        )}
      </div>

      {/* Description */}
      <p className="text-text-body text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
          Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="tech-badge px-3 py-1 text-xs"
            >
              {tech.icon && <span className="mr-1">{tech.icon}</span>}
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      {metrics && metrics.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-card-border">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-xs text-text-muted uppercase tracking-wider">
                {metric.label}
              </div>
              <div className="text-lg font-semibold text-primary-light">
                {metric.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-text-primary bg-neutral-gray-medium/50 border border-card-border rounded-lg hover:bg-neutral-gray-medium hover:border-card-border-hover transition-all"
          >
            <Github className="w-4 h-4" />
            <span>Código</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-primary-DEFAULT hover:bg-primary-hover rounded-lg transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Demo</span>
          </a>
        )}
        {caseStudyUrl && (
          <a
            href={caseStudyUrl}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-primary-light bg-primary-DEFAULT/10 border border-primary-DEFAULT/30 rounded-lg hover:bg-primary-DEFAULT/20 transition-all"
          >
            <span>Ver Caso</span>
          </a>
        )}
      </div>
    </motion.div>
  )
}

// Pre-configured Angel Code project card
export function AngelCodeProjectCard() {
  return (
    <ProjectCard
      title="Angel Code Soluciones"
      role="Fundador & Lead Engineer"
      description="Emprendimiento técnico donde diseñé e implementé plataformas de gestión empresarial (ERP/SaaS) con arquitectura React + Django REST + PostgreSQL. Gestioné infraestructura completa (VPS, Docker, Nginx, CI/CD) y logré un 100% de entregas on-time."
      stack={[
        { name: 'Next.js 14' },
        { name: 'Django' },
        { name: 'PostgreSQL' },
        { name: 'Docker' },
        { name: 'Nginx' },
        { name: 'GitHub Actions' },
      ]}
      metrics={[
        { label: 'Sistemas', value: '5+' },
        { label: 'On-time', value: '100%' },
        { label: 'Uptime', value: '99.5%' },
        { label: 'Eficiencia', value: '+70%' },
      ]}
      previewImage="/images/projects/screenshots/podoclinic/1.webp"
      liveUrl="https://angelcodesoluciones.cl"
    />
  )
}
