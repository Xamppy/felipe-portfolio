# Angel Code Soluciones - Contexto Completo del Proyecto Web

## 📋 Información General

- **Nombre del Proyecto:** Angel Code Soluciones
- **URL de Producción:** https://angelcodesoluciones.cl
- **Framework:** Next.js 14.2.30
- **Lenguaje:** TypeScript
- **Estilo:** TailwindCSS 3.4.1 + CSS Custom Properties

---

## 🛠️ Stack Tecnológico

### Dependencias Principales
| Dependencia | Versión | Propósito |
|-------------|---------|-----------|
| Next.js | 14.2.30 | Framework React con SSR/SSG |
| React | 18.x | Librería UI |
| TypeScript | 5.x | Tipado estático |
| TailwindCSS | 3.4.1 | Framework CSS utilitario |
| Framer Motion | 12.23.12 | Animaciones e interacciones |
| Lucide React | 0.534.0 | Iconos SVG |
| React Hook Form | 7.61.1 | Manejo de formularios |
| Zod | 4.0.14 | Validación de esquemas |
| React Hot Toast | 2.5.2 | Notificaciones toast |
| EmailJS Browser | 4.4.1 | Envío de emails desde cliente |
| Vercel Analytics | 1.5.0 | Métricas y analytics |

---

## 🎨 Sistema de Diseño

### Paleta de Colores

#### Colores Primarios (Purple)
| Nombre | Valor Hex | Variable CSS | Uso |
|--------|-----------|--------------|-----|
| Primary | `#8B5CF6` | `--purple-primary` | Botones principales, acentos |
| Hover | `#7C3AED` | `--purple-hover` | Estados hover |
| Light | `#A78BFA` | `--purple-light` | Títulos de sección, badges |
| Dark | `#6D28D9` | `--purple-dark` | Variantes oscuras |

#### Colores Neutrales
| Nombre | Valor Hex | Variable CSS | Uso |
|--------|-----------|--------------|-----|
| Black | `#0A0A0A` | `--black-primary` | Fondo principal |
| Gray Dark | `#1A1A1A` | `--gray-dark` | Fondo de cards |
| Gray Medium | `#2A2A2A` | `--gray-medium` | Hover de cards |
| Gray Light | `#404040` | `--gray-light` | Bordes |
| White | `#FFFFFF` | `--white` | Texto principal |
| Gray Text | `#A0A0A0` | `--gray-text` | Texto secundario |

#### Colores de Texto
| Nombre | Valor Hex | Uso |
|--------|-----------|-----|
| Primary | `#FFFFFF` | Títulos, texto importante |
| Secondary | `#A78BFA` | Subtítulos, acentos |
| Subtitle | `#A0A0A0` | Subtítulos grises |
| Body | `#CCCCCC` | Texto de párrafos |
| Accent | `#8B5CF6` | Texto destacado |

#### Colores de Cards
| Estado | Fondo | Borde |
|--------|-------|-------|
| Normal | `#1A1A1A` | `rgba(139, 92, 246, 0.2)` |
| Hover | `#2A2A2A` | `rgba(139, 92, 246, 0.4)` |

#### Colores de Botones
| Variante | Fondo | Texto | Borde |
|----------|-------|-------|-------|
| Primary | `#8B5CF6` | `#FFFFFF` | - |
| Secondary | `transparent` | `#FFFFFF` | `white/50` |
| Contact | `rgba(139, 92, 246, 0.1)` | `#8B5CF6` | `purple-primary/30` |

---

### Tipografía

#### Fuentes
| Fuente | Variable | Uso |
|--------|----------|-----|
| Inter | `--font-inter` | Fuente principal sans-serif |
| JetBrains Mono | `--font-jetbrains-mono` | Código, etiquetas, badges |

#### Escala Tipográfica
| Clase | Tamaño Desktop | Tamaño Mobile | Line Height | Font Weight |
|-------|----------------|---------------|-------------|-------------|
| `hero-title` | 4rem (64px) | 2.5rem (40px) | 1.1 | 700 |
| `section-title` | 2.5rem (40px) | 2rem (32px) | 1.2 | 600 |
| `card-title` | 1.5rem (24px) | 1.5rem | 1.3 | 600 |
| `metric-number` | 3rem (48px) | 2rem (32px) | 1 | 700 |
| `body-large` | 1.125rem (18px) | 1rem | 1.6 | 400 |
| `body-normal` | 1rem (16px) | 0.875rem | 1.6 | 400 |
| `label` | 0.875rem (14px) | - | 1.4 | 500 |
| `code` | 0.9rem | - | 1.5 | 400 |

---

### Sistema de Espaciado

| Token | Valor |
|-------|-------|
| `xs` | 4px |
| `sm` | 8px |
| `md` | 16px |
| `lg` | 24px |
| `xl` | 32px |
| `2xl` | 48px |
| `3xl` | 64px |
| `4xl` | 80px |
| `5xl` | 96px |

### Bordes y Radios
| Tamaño | Valor |
|--------|-------|
| small | 8px |
| medium | 12px |
| large | 16px |
| full | 50% |

### Sombras
| Nombre | Valor | Uso |
|--------|-------|-----|
| card | `0 4px 24px rgba(0, 0, 0, 0.4)` | Cards normales |
| card-hover | `0 8px 32px rgba(139, 92, 246, 0.2)` | Cards en hover |
| button-primary | `0 4px 16px rgba(139, 92, 246, 0.3)` | Botones primarios |
| button-hover | `0 6px 20px rgba(139, 92, 246, 0.4)` | Botones en hover |

---

## 📐 Breakpoints Responsivos

| Nombre | Valor |
|--------|-------|
| mobile | 768px |
| tablet | 1024px |
| desktop | 1200px |

---

## 🏗️ Estructura de Secciones

### 1. Hero Section (`hero.tsx`)
**ID:** `#hero`

**Características:**
- Ocupa min-height: 100vh
- Imagen de fondo pixel art con overlays gradientes
- Efecto typing animado en subtítulo
- Cursor blinking (█)
- Partículas flotantes púrpuras animadas con Framer Motion

**Contenido:**
- **Título:** "Angel Code Soluciones"
- **Subtítulo animado:** "Transformamos ideas en soluciones tecnológicas escalables"
- **Descripción:** "Especializados en desarrollo de software y automatización de procesos empresariales"

**CTAs:**
1. **Primario:** "Solicitar Consulta Gratuita" → scroll a #contact
2. **Secundario:** "Ver Nuestros Proyectos" → scroll a #projects

**Overlays:**
- Dark gradient: `linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(26,26,26,0.9) 100%)`
- Purple gradient: `linear-gradient(45deg, rgba(139,92,246,0.2) 0%, rgba(124,58,237,0.12) 100%)`
- Black overlay: `bg-black/30`

---

### 2. Services Section (`services.tsx`)
**ID:** `#services`
**Background:** `bg-neutral-gray-dark`

**Título:** "Soluciones Tecnológicas de Vanguardia"
**Subtítulo:** "Transformamos tu visión en realidad con nuestros servicios especializados en desarrollo de software, inteligencia artificial y automatización empresarial."

**Servicios (4 cards):**

| Servicio | Icono | Precio | Features |
|----------|-------|--------|----------|
| Desarrollo de Software | Code | $200.000 | Apps web/móviles, Sistemas empresariales, APIs/microservicios, Integración con sistemas existentes |
| Integración de IA | Bot | $400.000 | Chatbots empresariales, Automatización inteligente, Análisis predictivo, Procesamiento de lenguaje natural |
| DevOps & Automatización | Settings | $300.000 | CI/CD pipelines, Infraestructura como código, Monitoreo/alertas, Contenedorización Docker |
| Consultoría Tecnológica | Database | $150.000 | Auditoría de sistemas, Arquitectura de soluciones, Migración de aplicaciones, Optimización de rendimiento |

**CTA Bottom:** "Consulta Personalizada"

---

### 3. Projects Section (`projects.tsx`)
**ID:** `#projects`
**Background:** `bg-neutral-black`

**Título:** "Proyectos Destacados"

**Proyectos (3):**

#### 1. Sistema Podoclinic
- **Industria:** Salud
- **Timeline:** 2 meses
- **ROI:** +70% eficiencia
- **Stack:** React, Django, PostgreSQL, Docker, Nginx, Cloudflare, CI/CD, Bizagi
- **Descripción:** Sistema integral de gestión para clínica podológica que optimiza el manejo de pacientes, fichas clínicas, inventario y costos operacionales.
- **Screenshots:** 11 imágenes WebP
- **Achievements:**
  - Eficiencia Mejorada: 70% mejora en gestión de pacientes
  - Automatización: Procesos manuales automatizados
  - Satisfacción Cliente: 5 estrellas

#### 2. Sistema de Venta Mayorista
- **Industria:** Retail
- **Timeline:** 2 meses
- **ROI:** +90% eficiencia
- **Stack:** Next.js, TypeScript, Supabase, PostgreSQL, TailwindCSS, CI/CD, Bizagi
- **Descripción:** Plataforma completa de ventas mayoristas con gestión de inventario, clientes, pedidos y análisis de ventas en tiempo real.
- **Screenshots:** 11 imágenes WebP
- **Achievements:**
  - ROI Excepcional: 90% mejora en eficiencia operacional
  - Escalabilidad: Arquitectura serverless escalable
  - UX Moderna: Interfaz intuitiva y responsive

#### 3. Sistema Kinesiológico Deportivo
- **Industria:** Salud y deporte
- **Timeline:** 3 meses
- **ROI:** +80% eficiencia
- **Stack:** React, Django, PostgreSQL, Docker, Nginx, Cloudflare
- **Descripción:** Sistema especializado para gestión kinesiológica de equipos de fútbol con seguimiento de lesiones, tratamientos y rendimiento.
- **Screenshots:** 19 imágenes WebP
- **Achievements:**
  - Gestión Médica: Seguimiento completo de lesiones
  - Rendimiento: Análisis de performance deportiva
  - Usabilidad: Interfaz intuitiva para profesionales

---

### 4. Process Section (`process.tsx`)
**ID:** `#process`
**Background:** `bg-neutral-gray-dark`

**Título:** "Metodología Ágil Garantizada"

**4 Etapas del Proceso:**

| Etapa | Título | Timeline | Color | Actividades | Entregables |
|-------|--------|----------|-------|-------------|-------------|
| 1 | Análisis y Consultoría | Semana 1 | blue→cyan | Auditoría técnica, Definición de requerimientos, Propuesta de arquitectura, Análisis de viabilidad | Documento técnico, Presupuesto, Cronograma, Propuesta de arquitectura |
| 2 | Diseño y Prototipado | Semanas 2-3 | purple→pink | UX/UI design, Mockups interactivos, Validación con stakeholders, Refinamiento | Prototipo funcional, Guía de estilos, Wireframes, Especificaciones |
| 3 | Desarrollo Iterativo | Semanas 4-N | green→emerald | Sprints 2 semanas, Demos semanales, Testing continuo, Integración continua | Releases incrementales, Documentación técnica, Tests automatizados, Código fuente |
| 4 | Deploy y Soporte | Semana Final | orange→red | Puesta en producción, Capacitación, Documentación, Monitoreo inicial | Sistema en vivo, Manual de usuario, Documentación técnica, 3 meses de soporte |

---

### 5. Testimonials Section (`testimonials.tsx`)
**ID:** `#testimonials`
**Background:** `bg-neutral-black`

**Título:** "Lo Que Dicen Nuestros Clientes"

**Testimonios (3):**

| Cliente | Rol | Empresa | Proyecto | Rating |
|---------|-----|---------|----------|--------|
| Esmeralda Valdevenito V. | Podóloga Clínica | Esmeralda Podología Clínica | Sistema de Gestión Clínica | ⭐⭐⭐⭐⭐ |
| Roberto Silva | Propietario | Minimarket Silva | Sistema de Ventas Mayoristas | ⭐⭐⭐⭐⭐ |
| Dr. Carlos Mendoza | Kinesiólogo Deportivo | Club Deportivo Profesional | Sistema Kinesiológico Deportivo | ⭐⭐⭐⭐⭐ |

**Animación:** Carrusel infinito horizontal con `animate-scroll-left`

**Métricas de Impacto:**
- 100% Satisfacción del Cliente
- 10+ Proyectos Completados
- 2 Años de Experiencia

---

### 6. Contact Section (`contact.tsx`)
**ID:** `#contact`
**Background:** `bg-neutral-gray-dark`

**Título:** "¿Listo para Transformar tu Negocio?"

**Layout:** 2 columnas (formulario + info de contacto)

**Formulario (Campos):**
| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| Nombre completo | text | ✅ | Zod |
| Email corporativo | email | ✅ | Zod |
| Empresa | text | ✅ | Zod |
| Teléfono | tel | ❌ | Formato chileno |
| Tipo de proyecto | select | ✅ | software, ai, devops, other |
| Presupuesto estimado | select | ✅ | 200k-300k, 400k-600k, 700k-900k, 1000k+ |
| Mensaje/Requerimientos | textarea | ✅ | Min caracteres |
| Aceptar comunicaciones | checkbox | ✅ | Boolean |

**Información de Contacto:**
- **Email:** contacto@angelcodesoluciones.cl
- **WhatsApp:** +56 9 2212 6103
- **LinkedIn:** Felipe Orellana Álvarez
- **GitHub:** /Xamppy

**Calendly:** https://calendly.com/felipe-orellana-angelcodesoluciones/30min

---

## 🧩 Componentes UI

### Service Card (`service-card.tsx`)
**Estructura:**
```
┌─────────────────────────────┐
│ [Icono 16x16]               │
│                             │
│ Título                      │
│ Descripción                 │
│                             │
│ • Feature 1                 │
│ • Feature 2                 │
│ • Feature 3                 │
│ • Feature 4                 │
│                             │
│ Precio desde:               │
│ $XXX.XXX                    │
│                             │
│ [Solicitar Presupuesto]     │
└─────────────────────────────┘
```

**Estilos:**
- Contenedor: `bg-neutral-gray-dark`, border `rgba(139, 92, 246, 0.2)`
- Icono: `w-16 h-16 bg-purple-primary/10 rounded-lg`
- Hover: `translateY(-4px)`, border más visible

---

### Project Card (`project-card.tsx`)
**Estructura:**
```
┌─────────────────────────────┐
│ [Preview Image h-48]       │
│ [Industry Icon]   [Loading] │
│                             │
├─────────────────────────────┤
│ Título                      │
│ Industria                   │
│                             │
│ Descripción                 │
│                             │
│ TECH STACK (6 badges)       │
│ [⚛️ React] [🐍 Django] ... │
│                             │
│ ACHIEVEMENTS                │
│ [📈] [🤖] [⭐]              │
│                             │
│ TIME: 2 meses  ROI: +70%    │
│                             │
│ [Ver Imágenes] [Consultar]  │
└─────────────────────────────┘
```

**Estilos Tech Badge:**
- Clip-path con esquinas cortadas (pixel art style)
- Border `border-purple-primary/60`
- Sombra offset para efecto 3D retro

**Estados de Carga:**
- idle: Botón play con fondo blur
- loading: Spinner + "Loading..."
- success: Trophy icon + "Success!"

---

### Navigation (`navigation.tsx`)
**Items:**
1. Inicio → #hero
2. Servicios → #services
3. Proyectos → #projects
4. Proceso → #process
5. Testimonios → #testimonials
6. Contacto → #contact

**Comportamiento:**
- Fixed top, z-50
- Estado normal: `bg-transparent`
- Scrolled (>50px): `bg-neutral-gray-dark/95 backdrop-blur-lg`
- Active section tracking
- Mobile: hamburger menu

**Estilo nav-link:**
- Underline animado de 0 a 100% width en hover
- `text-purple-light` cuando activo

---

## 🎬 Animaciones

### Framer Motion
- **Fade In Up:** `initial={{ opacity: 0, y: 50 }}` → `animate={{ opacity: 1, y: 0 }}`
- **Scale:** `whileHover={{ scale: 1.05 }}`
- **Card Lift:** `whileHover={{ y: -4 }}`
- **Carousel Slide:** `initial={{ opacity: 0, x: -100 }}`

### CSS Keyframes
```css
/* Scroll infinito horizontal */
@keyframes scroll-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

/* Pulse glow para elementos importantes */
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 5px rgba(139, 92, 246, 0.5); }
  50% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6); }
}
```

### Transiciones
| Velocidad | Duración |
|-----------|----------|
| fast | 200ms |
| normal | 300ms |
| slow | 500ms |

### Efectos Hover
- `.hover-lift`: `translateY(-8px)` + `brightness(1.1)`
- `.hover-scale`: `scale(1.1)` + `brightness(1.1)`
- `.hover-glow`: Pseudo-element con blur gradient

---

## 📁 Estructura de Archivos

```
webpage/
├── src/
│   ├── app/
│   │   ├── globals.css          # Estilos globales y CSS custom properties
│   │   ├── layout.tsx           # Layout principal con metadata SEO
│   │   ├── page.tsx             # Página principal que renderiza secciones
│   │   └── fonts/               # Fuentes locales
│   ├── components/
│   │   ├── sections/
│   │   │   ├── hero.tsx
│   │   │   ├── services.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── process.tsx
│   │   │   ├── testimonials.tsx
│   │   │   └── contact.tsx
│   │   ├── ui/
│   │   │   ├── navigation.tsx
│   │   │   ├── service-card.tsx
│   │   │   ├── image-gallery.tsx
│   │   │   └── optimized-image.tsx
│   │   ├── pixel-art/
│   │   │   ├── project-card.tsx
│   │   │   └── project-modal.tsx
│   │   ├── seo/
│   │   │   └── structured-data.tsx
│   │   └── forms/
│   ├── lib/
│   │   ├── validations.ts       # Esquemas Zod
│   │   ├── email.ts             # EmailJS integration
│   │   ├── scroll.ts            # Scroll utilities
│   │   ├── hooks.ts             # Custom hooks
│   │   └── utils.ts             # cn() utility
│   └── types/
├── public/
│   └── images/
│       ├── background-image.png
│       ├── og-image.png
│       └── projects/
│           ├── podoclinic.svg
│           ├── mayorista.svg
│           ├── kinesiologia.svg
│           └── screenshots/
│               ├── podoclinic/
│               ├── mayorista/
│               └── kinesiologia/
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

---

## 🔍 SEO y Metadata

**Meta Title:** "Angel Code Soluciones - Desarrollo de Software y Consultoría Tecnológica"

**Meta Description:** "Transformamos ideas en soluciones tecnológicas escalables. Especializados en desarrollo de software, integración de IA, DevOps y automatización empresarial. Más de 15 proyectos exitosos en Chile."

**Keywords:**
- desarrollo software
- consultoría tecnológica
- Next.js, React
- automatización empresarial
- integración IA
- DevOps
- Chile, Santiago
- desarrollo web
- aplicaciones móviles
- sistemas empresariales
- transformación digital

**Open Graph:**
- Tipo: website
- Locale: es_CL
- Imagen: 1200x630px

---

## 📞 Datos de Contacto

| Canal | Valor |
|-------|-------|
| Email | contacto@angelcodesoluciones.cl |
| WhatsApp | +56 9 2212 6103 |
| LinkedIn | Felipe Orellana Álvarez |
| GitHub | /Xamppy |
| Calendly | felipe-orellana-angelcodesoluciones/30min |

---

## 🎯 CTAs (Calls to Action)

| Ubicación | Texto | Acción |
|-----------|-------|--------|
| Hero | Solicitar Consulta Gratuita | scroll #contact |
| Hero | Ver Nuestros Proyectos | scroll #projects |
| Services | Solicitar Presupuesto | scroll #contact + guardar servicio |
| Services | Consulta Personalizada | scroll #contact |
| Projects | Ver Imágenes | Abre galería modal |
| Projects | Consultar | scroll #contact + guardar proyecto |
| Projects | Iniciar Proyecto | scroll #contact |
| Process | Agendar Consulta | scroll #contact |
| Testimonials | Iniciar Mi Proyecto | scroll #contact |
| Contact | Enviar Mensaje | Submit formulario EmailJS |
| Contact | Agendar Reunión | Abre Calendly |

---

## ⚙️ Configuraciones Importantes

### Container Max Width
- **Desktop:** 1200px
- **Padding:** 4px (mobile) → 6px (sm) → 8px (lg) → 12px (xl)

### Grid Layouts
- **Services:** 1 col (mobile) → 2 cols (sm) → 3 cols (lg) → 4 cols (xl)
- **Projects:** 1 col (mobile) → 2 cols (sm) → 3 cols (lg)
- **Metrics:** 1 col (mobile) → 3 cols (sm)

### Toaster Configuration
```javascript
{
  position: "bottom-right",
  duration: 4000,
  style: {
    background: '#1A1A1A',
    color: '#CCCCCC',
    border: '1px solid rgba(139, 92, 246, 0.2)'
  }
}
```
