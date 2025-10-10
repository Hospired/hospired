import { Button } from "./ui/button"
import { Download, Smartphone } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-turquoise px-8 py-16 sm:px-16 sm:py-24">
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl text-balance">
              Transforma la experiencia hospitalaria hoy
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/90 text-pretty">
              Únete a los hospitales y clínicas que ya están mejorando la atención al paciente con Hospired. Descarga la
              app o solicita una demostración para tu institución.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" />
                Descargar App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
              >
                <Smartphone className="mr-2 h-4 w-4" />
                Solicitar Demo
              </Button>
            </div>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Disponible para iOS y Android • Integración rápida y sencilla
            </p>
          </div>

          {/* Background decoration */}
          <div className="absolute inset-0 -z-0">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
