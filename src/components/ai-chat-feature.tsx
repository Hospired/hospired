import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Sparkles, MessageCircle, Clock, Shield, Zap } from "lucide-react"

export function AIChatFeature() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-turquoise/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-turquoise/10 border border-turquoise/20">
                <Sparkles className="h-4 w-4 text-turquoise" />
                <span className="text-sm font-medium text-turquoise">Tecnología Innovadora</span>
              </div>

              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-balance">
                  Asistente Médico con{" "}
                  <span className="bg-gradient-to-r from-primary to-turquoise bg-clip-text text-transparent">
                    Inteligencia Artificial
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Obtén respuestas instantáneas a tus consultas médicas las 24 horas del día. Nuestro asistente de IA
                  está entrenado para brindarte información confiable y orientación personalizada sobre tu salud.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-turquoise" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Disponible 24/7</h3>
                    <p className="text-sm text-muted-foreground">Asistencia inmediata en cualquier momento</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Información Confiable</h3>
                    <p className="text-sm text-muted-foreground">Respuestas basadas en datos médicos verificados</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-turquoise/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-turquoise" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Respuestas Rápidas</h3>
                    <p className="text-sm text-muted-foreground">Obtén orientación en segundos</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Conversación Natural</h3>
                    <p className="text-sm text-muted-foreground">Interactúa como si hablaras con un profesional</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-turquoise hover:opacity-90">
                <Sparkles className="h-5 w-5" />
                Probar Asistente IA
              </Button>
            </div>

            {/* Right side - Chat mockup */}
            <div className="relative">
              {/* Glow effects */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-turquoise/20 rounded-full blur-3xl" />

              {/* Chat interface mockup */}
              <Card className="relative z-10 p-6 bg-card/80 backdrop-blur-sm border-2">
                <div className="space-y-4">
                  {/* Chat header */}
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-turquoise flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Asistente Médico IA</h3>
                      <p className="text-xs text-muted-foreground">En línea</p>
                    </div>
                  </div>

                  {/* Chat messages */}
                  <div className="space-y-4">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-primary to-turquoise text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm">¿Cuáles son los síntomas de la gripe?</p>
                      </div>
                    </div>

                    {/* AI response */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-turquoise flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm">Los síntomas comunes de la gripe incluyen:</p>
                        <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                          <li>Fiebre alta (38-40°C)</li>
                          <li>Dolor de cabeza</li>
                          <li>Fatiga y debilidad</li>
                          <li>Tos seca</li>
                          <li>Dolor muscular</li>
                        </ul>
                        <p className="text-sm mt-2 text-muted-foreground">¿Necesitas agendar una consulta médica?</p>
                      </div>
                    </div>

                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-gradient-to-r from-primary to-turquoise text-primary-foreground rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
                        <p className="text-sm">Sí, por favor</p>
                      </div>
                    </div>

                    {/* AI typing indicator */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-turquoise flex items-center justify-center flex-shrink-0">
                        <Sparkles className="h-4 w-4 text-white" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-sm px-4 py-3">
                        <div className="flex gap-1">
                          <div
                            className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                            style={{ animationDelay: "0ms" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                            style={{ animationDelay: "150ms" }}
                          />
                          <div
                            className="w-2 h-2 rounded-full bg-muted-foreground/40 animate-bounce"
                            style={{ animationDelay: "300ms" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-turquoise/10 rounded-full blur-xl animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-turquoise/10 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
