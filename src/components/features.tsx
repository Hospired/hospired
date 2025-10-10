import { Calendar, FileText, Bell, Shield } from "lucide-react"
import { Card, CardContent } from "./ui/card"

const features = [
  {
    icon: Calendar,
    title: "Gestión de Citas",
    description:
      "Agenda, reprograma y cancela citas médicas fácilmente. Recibe recordatorios automáticos para no olvidar tus consultas.",
    color: "turquoise", // Added turquoise color
  },
  {
    icon: FileText,
    title: "Historial Médico Digital",
    description:
      "Accede a tu historial clínico completo desde cualquier lugar. Resultados de laboratorio, recetas y diagnósticos en un solo lugar.",
    color: "primary",
  },
  {
    icon: Bell,
    title: "Notificaciones en Tiempo Real",
    description: "Mantente informado con alertas sobre tus citas, resultados médicos y recordatorios de medicamentos.",
    color: "turquoise", // Added turquoise color
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Tus datos médicos protegidos con encriptación de nivel hospitalario. Cumplimos con todas las normativas de privacidad.",
    color: "primary",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Todo lo que necesitas para cuidar tu salud
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Funcionalidades diseñadas para facilitar la comunicación entre pacientes y profesionales de la salud.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-border bg-card transition-colors hover:bg-accent/5">
                <CardContent className="p-6">
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${feature.color === "turquoise" ? "bg-turquoise/10" : "bg-primary/10"}`}
                  >
                    <feature.icon
                      className={`h-6 w-6 ${feature.color === "turquoise" ? "text-turquoise" : "text-primary"}`}
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
