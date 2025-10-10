"use client"

import { Target, Eye } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { useState } from "react"

export function MissionVision() {
  const [hoveredCard, setHoveredCard] = useState<"mission" | "vision" | null>(null)

  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Nuestra Misión y Visión
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Guiados por el compromiso de mejorar la atención médica a través de la innovación
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          <Card
            className="border-turquoise/20 bg-card transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-turquoise/50 cursor-pointer"
            onMouseEnter={() => setHoveredCard("mission")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-8">
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-turquoise/10 transition-all duration-300 ${
                  hoveredCard === "mission" ? "scale-110 bg-turquoise/20" : ""
                }`}
              >
                <Target className="h-7 w-7 text-turquoise" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Nuestra Misión</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Empoderar a pacientes y profesionales de la salud con herramientas digitales intuitivas que faciliten el
                acceso a la atención médica, mejoren la comunicación y promuevan una gestión eficiente de la salud
                personal. Nos comprometemos a hacer que la tecnología médica sea accesible, segura y centrada en el
                paciente.
              </p>
            </CardContent>
          </Card>

          <Card
            className="border-primary/20 bg-card transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/50 cursor-pointer"
            onMouseEnter={() => setHoveredCard("vision")}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-8">
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-all duration-300 ${
                  hoveredCard === "vision" ? "scale-110 bg-primary/20" : ""
                }`}
              >
                <Eye className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Nuestra Visión</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ser la plataforma líder en América Latina para la gestión de salud digital, transformando la manera en
                que pacientes y hospitales interactúan. Aspiramos a crear un ecosistema de salud conectado donde cada
                persona tenga control total sobre su información médica y acceso inmediato a atención de calidad.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
