import { Card, CardContent } from "./ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Hospired ha facilitado enormemente la comunicación con mis pacientes. Puedo revisar historiales y responder consultas desde cualquier lugar.",
    author: "Dr. Carlos Mendoza",
    role: "Cardiólogo, Hospital San José",
    avatar: "/doctor-latino-profesional.jpg",
    initials: "CM",
    rating: 5,
  },
  {
    quote:
      "Como paciente con diabetes, necesito estar en contacto constante con mi médico. Esta app me ha dado tranquilidad y control sobre mi salud.",
    author: "María González",
    role: "Paciente",
    avatar: "/mujer-latina-sonriente.jpg",
    initials: "MG",
    rating: 5,
  },
  {
    quote:
      "La gestión de citas y recordatorios automáticos han reducido significativamente las ausencias de pacientes en nuestra clínica.",
    author: "Dra. Ana Ramírez",
    role: "Directora Médica, Clínica Salud Total",
    avatar: "/doctora-profesional-latina.jpg",
    initials: "AR",
    rating: 5,
  },
  {
    quote:
      "Poder acceder a mis resultados de laboratorio y recetas médicas desde mi teléfono es increíblemente conveniente. Excelente servicio.",
    author: "Roberto Silva",
    role: "Paciente",
    avatar: "/hombre-latino-profesional.jpg",
    initials: "RS",
    rating: 5,
  },
  {
    quote:
      "Hospired nos ha permitido digitalizar nuestros procesos y ofrecer una mejor experiencia a nuestros pacientes. Altamente recomendado.",
    author: "Dr. Luis Fernández",
    role: "Jefe de Urgencias, Hospital Central",
    avatar: "/doctor-maduro-profesional.jpg",
    initials: "LF",
    rating: 5,
  },
  {
    quote:
      "Como madre de tres niños, esta app me ayuda a mantener organizadas todas las citas médicas y vacunas de mis hijos. Es un salvavidas.",
    author: "Patricia Morales",
    role: "Paciente",
    avatar: "/mujer-madre-latina.jpg",
    initials: "PM",
    rating: 5,
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Testimonios reales de médicos y pacientes que confían en Hospired
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border bg-card transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary/30 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 fill-primary text-primary transition-transform duration-200 ${
                        hoveredIndex === index ? "scale-110" : ""
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-6 text-base leading-relaxed text-pretty">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 transition-transform duration-300 hover:scale-110">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
