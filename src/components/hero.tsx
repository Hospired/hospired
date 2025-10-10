import { Button } from "./ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left column - Text content */}
            <div className="text-center lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-turquoise opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-turquoise"></span>
                </span>
                Disponible ahora para iOS y Android
              </div>

              <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
                Tu salud en tus manos.{" "}
                <span className="bg-gradient-to-r from-primary to-turquoise bg-clip-text text-transparent">
                  Siempre conectado.
                </span>
              </h1>

              <p className="mb-10 text-lg leading-relaxed text-muted-foreground sm:text-xl text-pretty lg:max-w-xl">
                La aplicación móvil que conecta pacientes con sus clínicas y hospitales. Gestiona citas médicas, accede
                a tu historial clínico y mantente informado sobre tu salud desde cualquier lugar.
              </p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-turquoise hover:opacity-90"
                >
                  Descargar App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-card">
                  <Play className="mr-2 h-4 w-4" />
                  Ver Demo
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
                Gratis para pacientes • Compatible con iOS y Android • Datos seguros y encriptados
              </p>
            </div>

            {/* Right column - Phone mockup image */}
            <div className="relative mx-auto w-full max-w-md lg:mx-0">
              <div className="relative flex items-center justify-center">
                {/* Enhanced glow effects */}
                <div className="absolute inset-0 -z-10">
                  <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30 blur-[120px]"></div>
                  <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-turquoise/40 blur-[80px]"></div>
                </div>

                {/* Phone mockup image - larger and centered */}
                <div className="relative mx-auto w-full max-w-[450px] lg:max-w-[500px]">
                  <img
                    src="/modern-smartphone-mockup-showing-hospired-medical-.jpg"
                    alt="Hospired App Interface"
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-turquoise/10 blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
