import { Button } from "./ui/button"
import { Apple, Smartphone } from "lucide-react"

export function AppShowcase() {
  return (
    <section id="app" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground mb-6">
                Disponible en todas las plataformas
              </div>

              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                Tu clínica en tu bolsillo
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-muted-foreground text-pretty">
                Descarga Hospired y lleva el control de tu salud a donde vayas. Interfaz intuitiva diseñada para que
                cualquier persona pueda usarla sin complicaciones.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Acceso instantáneo</h4>
                    <p className="text-sm text-muted-foreground">Consulta tu información médica en segundos</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sincronización automática</h4>
                    <p className="text-sm text-muted-foreground">
                      Tus datos siempre actualizados en todos tus dispositivos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Modo offline</h4>
                    <p className="text-sm text-muted-foreground">Accede a tu información incluso sin conexión</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="w-full sm:w-auto">
                  <Apple className="mr-2 h-5 w-5" />
                  App Store
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-card">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Google Play
                </Button>
              </div>
            </div>

            {/* Right side - Phone mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="relative w-[280px] sm:w-[320px] h-[560px] sm:h-[640px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
                    {/* Status bar */}
                    <div className="h-12 bg-primary flex items-center justify-between px-6 text-primary-foreground">
                      <span className="text-xs font-medium">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-3 border border-current rounded-sm"></div>
                      </div>
                    </div>

                    {/* App content mockup */}
                    <div className="p-6 space-y-4">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 rounded-full bg-muted"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-muted rounded w-32 mb-2"></div>
                          <div className="h-3 bg-muted/60 rounded w-24"></div>
                        </div>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="h-4 bg-primary/20 rounded w-32"></div>
                          <div className="h-6 w-6 rounded-full bg-primary/20"></div>
                        </div>
                        <div className="h-3 bg-muted rounded w-full"></div>
                        <div className="h-3 bg-muted rounded w-3/4"></div>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="h-4 bg-accent/20 rounded w-28"></div>
                          <div className="h-6 w-6 rounded-full bg-accent/20"></div>
                        </div>
                        <div className="h-3 bg-muted rounded w-full"></div>
                        <div className="h-3 bg-muted rounded w-2/3"></div>
                      </div>

                      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="h-4 bg-muted rounded w-36"></div>
                          <div className="h-6 w-6 rounded-full bg-muted"></div>
                        </div>
                        <div className="h-3 bg-muted rounded w-full"></div>
                        <div className="h-3 bg-muted rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
