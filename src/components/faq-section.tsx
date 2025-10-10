import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion"

const faqs = [
  {
    question: "¿Cómo puedo descargar la aplicación Hospired?",
    answer:
      "Hospired está disponible para iOS y Android. Puedes descargarla desde la App Store o Google Play Store buscando 'Hospired'. También puedes hacer clic en los botones de descarga en nuestra página principal.",
  },
  {
    question: "¿Es segura mi información médica en Hospired?",
    answer:
      "Absolutamente. Hospired cumple con todas las regulaciones de privacidad de datos médicos, incluyendo HIPAA y GDPR. Utilizamos encriptación de extremo a extremo y contamos con certificación ISO 27001 para garantizar la máxima seguridad de tu información.",
  },
  {
    question: "¿Cuánto cuesta usar Hospired?",
    answer:
      "Para pacientes, Hospired es completamente gratuito. Los hospitales y clínicas pueden elegir entre diferentes planes según sus necesidades. Ofrecemos un plan básico gratuito y planes premium con funcionalidades avanzadas.",
  },
  {
    question: "¿Puedo usar Hospired con cualquier hospital?",
    answer:
      "Hospired funciona con más de 200 hospitales y clínicas asociadas. Si tu hospital aún no está en nuestra red, puedes recomendarles que se unan a Hospired. Estamos expandiendo constantemente nuestra red de proveedores de salud.",
  },
  {
    question: "¿Cómo funciona el chat con inteligencia artificial?",
    answer:
      "Nuestro asistente de IA está disponible 24/7 para responder preguntas generales sobre salud, ayudarte a entender tus síntomas y guiarte en el uso de la aplicación. Es importante notar que el chat de IA no reemplaza la consulta médica profesional, sino que complementa tu atención médica.",
  },
  {
    question: "¿Puedo agendar citas médicas a través de la app?",
    answer:
      "Sí, puedes agendar, reprogramar y cancelar citas médicas directamente desde la aplicación. Recibirás recordatorios automáticos antes de cada cita y podrás ver tu historial completo de citas pasadas y futuras.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 sm:py-28 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Encuentra respuestas a las preguntas más comunes sobre Hospired
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card transition-all duration-300 hover:shadow-md hover:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
