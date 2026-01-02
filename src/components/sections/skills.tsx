'use client';

import { motion } from 'framer-motion';
import { Code2, Server, Database, Cloud, Brain, Palette, BarChart3 } from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiDocker,
  SiNginx,
  SiGit,
  SiPostman,
  SiScikitlearn,
  SiFramer,
  SiAngular,
  SiIonic,
  SiJquery,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMariadb,
  SiOracle,
  SiSwagger,
  SiJsonwebtokens,
  SiCloudflare,
  SiGithubactions,
  SiFigma,
  SiCanva,
  SiPandas,
  SiNumpy,
  SiGooglecolab
} from 'react-icons/si';
import { FaJava, FaAws, FaUbuntu } from 'react-icons/fa';

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  iconBg: string;
  techs: TechItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Code2 className="w-5 h-5" />,
    iconBg: 'bg-blue-500/10 text-blue-400',
    techs: [
      { name: 'HTML5', icon: <SiHtml5 className="w-7 h-7" />, color: 'hover:border-orange-500 hover:text-orange-500' },
      { name: 'CSS3', icon: <SiCss3 className="w-7 h-7" />, color: 'hover:border-blue-500 hover:text-blue-500' },
      { name: 'JavaScript', icon: <SiJavascript className="w-7 h-7" />, color: 'hover:border-yellow-400 hover:text-yellow-400' },
      { name: 'TypeScript', icon: <SiTypescript className="w-7 h-7" />, color: 'hover:border-blue-600 hover:text-blue-600' },
      { name: 'React', icon: <SiReact className="w-7 h-7" />, color: 'hover:border-cyan-400 hover:text-cyan-400' },
      { name: 'Next.js', icon: <SiNextdotjs className="w-7 h-7" />, color: 'hover:border-white hover:text-white' },
      { name: 'Angular', icon: <SiAngular className="w-7 h-7" />, color: 'hover:border-red-500 hover:text-red-500' },
      { name: 'Ionic', icon: <SiIonic className="w-7 h-7" />, color: 'hover:border-blue-400 hover:text-blue-400' },
      { name: 'jQuery', icon: <SiJquery className="w-7 h-7" />, color: 'hover:border-blue-600 hover:text-blue-600' },
      { name: 'TailwindCSS', icon: <SiTailwindcss className="w-7 h-7" />, color: 'hover:border-teal-400 hover:text-teal-400' },
      { name: 'Bootstrap', icon: <SiBootstrap className="w-7 h-7" />, color: 'hover:border-purple-500 hover:text-purple-500' },
      { name: 'Framer Motion', icon: <SiFramer className="w-7 h-7" />, color: 'hover:border-pink-500 hover:text-pink-500' },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-5 h-5" />,
    iconBg: 'bg-emerald-500/10 text-emerald-400',
    techs: [
      { name: 'Python', icon: <SiPython className="w-7 h-7" />, color: 'hover:border-yellow-400 hover:text-yellow-400' },
      { name: 'Django', icon: <SiDjango className="w-7 h-7" />, color: 'hover:border-green-600 hover:text-green-600' },
      { name: 'Flask', icon: <SiFlask className="w-7 h-7" />, color: 'hover:border-slate-300 hover:text-slate-300' },
      { name: 'Java', icon: <FaJava className="w-7 h-7" />, color: 'hover:border-red-500 hover:text-red-500' },
      { name: 'REST APIs', icon: <Server className="w-7 h-7" />, color: 'hover:border-indigo-400 hover:text-indigo-400' },
      { name: 'Swagger', icon: <SiSwagger className="w-7 h-7" />, color: 'hover:border-green-500 hover:text-green-500' },
      { name: 'Postman', icon: <SiPostman className="w-7 h-7" />, color: 'hover:border-orange-500 hover:text-orange-500' },
      { name: 'JWT', icon: <SiJsonwebtokens className="w-7 h-7" />, color: 'hover:border-pink-400 hover:text-pink-400' },
    ],
  },
  {
    title: 'Datos & BD',
    icon: <Database className="w-5 h-5" />,
    iconBg: 'bg-amber-500/10 text-amber-400',
    techs: [
      { name: 'MySQL', icon: <SiMysql className="w-7 h-7" />, color: 'hover:border-blue-500 hover:text-blue-500' },
      { name: 'PostgreSQL', icon: <SiPostgresql className="w-7 h-7" />, color: 'hover:border-blue-400 hover:text-blue-400' },
      { name: 'SQL Server', icon: <Database className="w-7 h-7" />, color: 'hover:border-red-400 hover:text-red-400' },
      { name: 'Oracle', icon: <SiOracle className="w-7 h-7" />, color: 'hover:border-red-500 hover:text-red-500' },
      { name: 'MariaDB', icon: <SiMariadb className="w-7 h-7" />, color: 'hover:border-amber-600 hover:text-amber-600' },
      { name: 'Power BI', icon: <BarChart3 className="w-7 h-7" />, color: 'hover:border-yellow-500 hover:text-yellow-500' },
    ],
  },
  {
    title: 'Data Science / IA',
    icon: <Brain className="w-5 h-5" />,
    iconBg: 'bg-purple-500/10 text-purple-400',
    techs: [
      { name: 'Google Colab', icon: <SiGooglecolab className="w-7 h-7" />, color: 'hover:border-yellow-500 hover:text-yellow-500' },
      { name: 'Pandas', icon: <SiPandas className="w-7 h-7" />, color: 'hover:border-blue-400 hover:text-blue-400' },
      { name: 'NumPy', icon: <SiNumpy className="w-7 h-7" />, color: 'hover:border-blue-500 hover:text-blue-500' },
      { name: 'Scikit-Learn', icon: <SiScikitlearn className="w-7 h-7" />, color: 'hover:border-orange-400 hover:text-orange-400' },
    ],
  },
  {
    title: 'Infraestructura / DevOps',
    icon: <Cloud className="w-5 h-5" />,
    iconBg: 'bg-orange-500/10 text-orange-400',
    techs: [
      { name: 'AWS', icon: <FaAws className="w-7 h-7" />, color: 'hover:border-orange-400 hover:text-orange-400' },
      { name: 'VPS Ubuntu', icon: <FaUbuntu className="w-7 h-7" />, color: 'hover:border-orange-500 hover:text-orange-500' },
      { name: 'Docker', icon: <SiDocker className="w-7 h-7" />, color: 'hover:border-blue-500 hover:text-blue-500' },
      { name: 'NGINX', icon: <SiNginx className="w-7 h-7" />, color: 'hover:border-green-500 hover:text-green-500' },
      { name: 'Gunicorn', icon: <Server className="w-7 h-7" />, color: 'hover:border-green-400 hover:text-green-400' },
      { name: 'Cloudflare', icon: <SiCloudflare className="w-7 h-7" />, color: 'hover:border-orange-400 hover:text-orange-400' },
      { name: 'GitHub Actions', icon: <SiGithubactions className="w-7 h-7" />, color: 'hover:border-blue-400 hover:text-blue-400' },
      { name: 'Git', icon: <SiGit className="w-7 h-7" />, color: 'hover:border-orange-500 hover:text-orange-500' },
    ],
  },
  {
    title: 'Metodologías & Diseño',
    icon: <Palette className="w-5 h-5" />,
    iconBg: 'bg-pink-500/10 text-pink-400',
    techs: [
      { name: 'Scrum', icon: <Code2 className="w-7 h-7" />, color: 'hover:border-blue-400 hover:text-blue-400' },
      { name: 'PMBOK', icon: <Code2 className="w-7 h-7" />, color: 'hover:border-indigo-400 hover:text-indigo-400' },
      { name: 'Figma', icon: <SiFigma className="w-7 h-7" />, color: 'hover:border-purple-400 hover:text-purple-400' },
      { name: 'Canva', icon: <SiCanva className="w-7 h-7" />, color: 'hover:border-cyan-400 hover:text-cyan-400' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-50">
            Stack Tecnológico
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Herramientas y tecnologías que uso para construir soluciones completas.
          </p>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid - 3 columns on large screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-lg ${category.iconBg}`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Tech Icons Grid */}
              <div className="grid grid-cols-4 gap-2">
                {category.techs.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.3, 
                      delay: (categoryIndex * 0.05) + (techIndex * 0.02) 
                    }}
                    className={`
                      group flex flex-col items-center justify-center p-2.5
                      bg-slate-900/50 border border-slate-700/50 rounded-lg
                      transition-all duration-300 cursor-default
                      hover:bg-slate-800/50 hover:scale-105
                      ${tech.color}
                    `}
                    title={tech.name}
                  >
                    <div className="text-slate-400 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-1.5 text-[10px] text-slate-500 group-hover:text-slate-300 transition-colors text-center leading-tight truncate w-full">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
