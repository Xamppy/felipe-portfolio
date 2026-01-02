'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Calendar } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-50">
            Hablemos
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto interesante o una oportunidad laboral? Me encantaría escucharte.
          </p>
          <div className="w-20 h-1 bg-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Availability Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 p-6 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/30 rounded-xl text-center"
          >
            <div className="flex items-center justify-center gap-2 text-indigo-400 mb-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-medium">Actualmente disponible</span>
            </div>
            <p className="text-slate-300">
              Buscando roles de <span className="text-indigo-400 font-semibold">Software Engineer</span> o <span className="text-indigo-400 font-semibold">Full Stack Developer</span>
            </p>
            <div className="flex items-center justify-center gap-4 mt-3 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                Chile (Remoto OK)
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                Egreso 2026
              </span>
            </div>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Email Card */}
            <motion.a
              href="mailto:f.orellanalvarez@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-slate-100 mb-1">Email</h3>
              <p className="text-sm text-indigo-400">f.orellanalvarez@gmail.com</p>
              <p className="text-xs text-slate-500 mt-2">Click para enviar email</p>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com/Xamppy"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-slate-500/50 hover:bg-slate-800/80 transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-slate-700/50 rounded-xl flex items-center justify-center text-slate-300 group-hover:scale-110 transition-transform">
                <Github className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-slate-100 mb-1">GitHub</h3>
              <p className="text-sm text-slate-400">@Xamppy</p>
              <p className="text-xs text-slate-500 mt-2">Ver mi código</p>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://www.linkedin.com/in/felipe-orellana-álvarez-965984333/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-blue-500/50 hover:bg-slate-800/80 transition-all text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                <Linkedin className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-slate-100 mb-1">LinkedIn</h3>
              <p className="text-sm text-blue-400">Felipe Orellana</p>
              <p className="text-xs text-slate-500 mt-2">Conectemos</p>
            </motion.a>
          </div>

          {/* Simple Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8"
          >
            <h3 className="text-xl font-semibold text-slate-100 mb-6 text-center">
              O envíame un mensaje directo
            </h3>

            <form className="space-y-4 max-w-xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-lg transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-slate-500 mt-8"
          >
            Respondo todos los mensajes dentro de 24 horas.
          </motion.p>
        </div>
      </div>
    </section>
  );
}