import { Header } from "./components/header"
import { Hero } from "./components/hero"
import { Features } from "./components/features"
import { AppShowcase } from "./components/app-showcase"
import { AppointmentsSection } from "./components/appointments-section"
import { AIChatFeature } from "./components/ai-chat-feature"
import { AboutUs } from "./components/about-us"
import { MissionVision } from "./components/mission-vision"
import { Testimonials } from "./components/testimonials"
import { FAQSection } from "./components/faq-section"
import { Pricing } from "./components/pricing"
import { FinalCTA } from "./components/final-cta"
import { Footer } from "./components/footer"

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <AppShowcase />
      <AppointmentsSection />
      <AIChatFeature />
      <AboutUs />
      <MissionVision />
      <Testimonials />
      <FAQSection />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  )
}

export default App
