"use client"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Check } from "lucide-react"
import { useState } from "react"

const plans = [
  {
    name: "Plan Básico",
    price: "Gratis",
    description: "Para pacientes individuales",
    features: [
      "Gestión de citas médicas",
      "Acceso a historial médico",
      "Recordatorios automáticos",
      "Chat con médicos",
      "Recetas digitales",
    ],
    cta: "Descargar App",
    popular: false,
    audience: "pacientes",
    color: "turquoise", // Added turquoise color
  },
  {
    name: "Plan Clínica",
    price: "$299",
    description: "Para clínicas y consultorios pequeños",
    features: [
      "Hasta 10 médicos",
      "Gestión de pacientes ilimitada",
      "Sistema de citas integrado",
      "Historiales médicos digitales",
      "Reportes y estadísticas",
      "Soporte prioritario",
    ],
    cta: "Solicitar Demo",
    popular: true,
    audience: "clínicas",
    color: "primary",
  },
  {
    name: "Plan Hospital",
    price: "Personalizado",
    description: "Para hospitales y redes de salud",
    features: [
      "Médicos ilimitados",
      "Integración con sistemas existentes",
      "API personalizada",
      "Soporte dedicado 24/7",
      "Capacitación del personal",
      "Cumplimiento HIPAA",
      "Análisis avanzados",
    ],
    cta: "Contactar Ventas",
    popular: false,
    audience: "hospitales",
    color: "turquoise", // Added turquoise color
  },
]

export function Pricing() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Planes para cada necesidad
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Desde pacientes individuales hasta grandes hospitales, tenemos el plan perfecto para ti
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20"
                  : plan.color === "turquoise"
                    ? "border-turquoise/30 hover:border-turquoise/50 hover:shadow-xl hover:shadow-turquoise/10"
                    : "hover:shadow-xl hover:border-primary/30"
              } ${hoveredIndex === index ? "z-10" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground animate-pulse">
                    Más Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Gratis" && plan.price !== "Personalizado" && (
                    <span className="text-muted-foreground">/mes</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check
                        className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                          hoveredIndex === index ? "scale-110" : ""
                        } ${plan.color === "turquoise" ? "text-turquoise" : "text-primary"}`}
                      />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full transition-all duration-300 ${
                    plan.color === "turquoise" && !plan.popular
                      ? "bg-turquoise hover:bg-turquoise/90 text-turquoise-foreground hover:shadow-lg hover:shadow-turquoise/30"
                      : plan.popular
                        ? "hover:shadow-lg hover:shadow-primary/30"
                        : ""
                  }`}
                  variant={plan.popular ? "default" : plan.color === "turquoise" ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
