import { Heart, Twitter, Facebook, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  pacientes: [
    { name: "Descargar App", href: "#" },
    { name: "Cómo Funciona", href: "#features" },
    { name: "Preguntas Frecuentes", href: "#" },
    { name: "Testimonios", href: "#testimonials" },
  ],
  hospitales: [
    { name: "Para Clínicas", href: "#pricing" },
    { name: "Para Hospitales", href: "#pricing" },
    { name: "Solicitar Demo", href: "#" },
    { name: "Integraciones", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#about" },
    { name: "Misión y Visión", href: "#mission" },
    { name: "Carreras", href: "#" },
    { name: "Contacto", href: "#" },
  ],
  legal: [
    { name: "Privacidad", href: "#" },
    { name: "Términos de Uso", href: "#" },
    { name: "Seguridad", href: "#" },
    { name: "HIPAA", href: "#" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Heart className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Hospired</span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Transformando la atención médica a través de la tecnología. Tu salud, siempre conectada.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Pacientes</h3>
            <ul className="space-y-3">
              {footerLinks.pacientes.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Hospitales</h3>
            <ul className="space-y-3">
              {footerLinks.hospitales.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hospired. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
