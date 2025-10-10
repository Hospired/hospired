import { Users, Heart, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return { count, ref }
}

export function AboutUs() {
  const patients = useCountUp(50000)
  const hospitals = useCountUp(200)

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                Sobre Nosotros
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Hospired nació con la visión de transformar la experiencia hospitalaria mediante la tecnología. Somos un
                equipo de profesionales de la salud y tecnología comprometidos con mejorar la comunicación entre
                pacientes y proveedores de atención médica.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra plataforma conecta a pacientes con sus médicos, facilita el acceso a información médica y
                simplifica la gestión de citas y tratamientos, todo desde la comodidad de un dispositivo móvil.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div
                ref={patients.ref}
                className="rounded-2xl bg-primary/5 p-6 border border-primary/10 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-primary/10 cursor-pointer"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{patients.count.toLocaleString()}+</h3>
                <p className="text-sm text-muted-foreground">Pacientes activos</p>
              </div>

              <div
                ref={hospitals.ref}
                className="rounded-2xl bg-secondary/5 p-6 border border-secondary/10 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-secondary/10 cursor-pointer"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 transition-colors duration-300 group-hover:bg-secondary/20">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{hospitals.count}+</h3>
                <p className="text-sm text-muted-foreground">Hospitales asociados</p>
              </div>

              <div className="rounded-2xl bg-accent/5 p-6 border border-accent/10 sm:col-span-2 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:bg-accent/10 cursor-pointer">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Certificación ISO 27001</h3>
                <p className="text-sm text-muted-foreground">
                  Cumplimos con los más altos estándares de seguridad y privacidad de datos médicos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
