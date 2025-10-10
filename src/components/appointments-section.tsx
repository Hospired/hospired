"use client"

import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { Calendar, Clock, Bell, CheckCircle2, Smartphone, Video } from "lucide-react"

export function AppointmentsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-turquoise/5 via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-turquoise/10 text-turquoise-foreground px-4 py-2 rounded-full text-sm font-medium">
                  Gestión de Citas
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Agenda tus citas médicas en <span className="text-turquoise">segundos</span>
              </h2>

              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Olvídate de las largas esperas telefónicas. Con Hospired, agenda, reprograma o cancela tus citas médicas
                desde tu móvil en cualquier momento y lugar.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <Card className="p-4 border-turquoise/20 bg-turquoise/5">
                  <div className="flex items-start gap-3">
                    <div className="bg-turquoise/10 p-2 rounded-lg">
                      <Calendar className="h-5 w-5 text-turquoise" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Agenda Rápida</h3>
                      <p className="text-sm text-muted-foreground">Reserva en menos de 2 minutos</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-primary/20 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Bell className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Recordatorios</h3>
                      <p className="text-sm text-muted-foreground">Notificaciones automáticas</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-turquoise/20 bg-turquoise/5">
                  <div className="flex items-start gap-3">
                    <div className="bg-turquoise/10 p-2 rounded-lg">
                      <Clock className="h-5 w-5 text-turquoise" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Disponibilidad Real</h3>
                      <p className="text-sm text-muted-foreground">Horarios actualizados al instante</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-turquoise/20 bg-turquoise/5">
                  <div className="flex items-start gap-3">
                    <div className="bg-turquoise/10 p-2 rounded-lg">
                      <Video className="h-5 w-5 text-turquoise" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telemedicina</h3>
                      <p className="text-sm text-muted-foreground">Consultas virtuales disponibles</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-turquoise hover:bg-turquoise/90 text-turquoise-foreground">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Agendar Cita Ahora
                </Button>
                <Button size="lg" variant="outline">
                  Ver Disponibilidad
                </Button>
              </div>
            </div>

            {/* Right side - Visual mockup */}
            <div className="relative">
              <div className="relative z-10">
                <Card className="p-6 bg-card/80 backdrop-blur-sm border-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold">Próximas Citas</h3>
                      <Button size="sm" variant="ghost" className="text-turquoise">
                        <Calendar className="h-4 w-4 mr-2" />
                        Nueva
                      </Button>
                    </div>

                    {/* Appointment Card 1 */}
                    <Card className="p-4 border-turquoise/30 bg-turquoise/5">
                      <div className="flex gap-4">
                        <div className="bg-turquoise text-turquoise-foreground rounded-lg p-3 text-center min-w-[60px]">
                          <div className="text-2xl font-bold">24</div>
                          <div className="text-xs">ENE</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">Dr. Carlos Méndez</h4>
                              <p className="text-sm text-muted-foreground">Cardiología</p>
                            </div>
                            <span className="bg-turquoise/20 text-turquoise-foreground px-2 py-1 rounded text-xs font-medium">
                              Confirmada
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              10:30 AM
                            </span>
                            <span className="flex items-center gap-1">
                              <Smartphone className="h-4 w-4" />
                              Presencial
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Appointment Card 2 */}
                    <Card className="p-4 border-primary/30 bg-primary/5">
                      <div className="flex gap-4">
                        <div className="bg-primary text-primary-foreground rounded-lg p-3 text-center min-w-[60px]">
                          <div className="text-2xl font-bold">28</div>
                          <div className="text-xs">ENE</div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">Dra. Ana Rodríguez</h4>
                              <p className="text-sm text-muted-foreground">Medicina General</p>
                            </div>
                            <span className="bg-primary/20 text-primary-foreground px-2 py-1 rounded text-xs font-medium">
                              Pendiente
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              3:00 PM
                            </span>
                            <span className="flex items-center gap-1">
                              <Video className="h-4 w-4" />
                              Virtual
                            </span>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 pt-4 border-t">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-turquoise">12</div>
                        <div className="text-xs text-muted-foreground">Completadas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">2</div>
                        <div className="text-xs text-muted-foreground">Próximas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-turquoise">5</div>
                        <div className="text-xs text-muted-foreground">Doctores</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-turquoise/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>

          {/* Bottom features */}
          <div className="mt-16 mx-auto max-w-7xl">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-turquoise/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="h-6 w-6 text-turquoise" />
                </div>
                <h4 className="font-semibold mb-1">Sin Papeleos</h4>
                <p className="text-sm text-muted-foreground">Todo digital y seguro</p>
              </div>

              <div className="text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Historial Completo</h4>
                <p className="text-sm text-muted-foreground">Accede a todas tus citas</p>
              </div>

              <div className="text-center">
                <div className="bg-turquoise/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Bell className="h-6 w-6 text-turquoise" />
                </div>
                <h4 className="font-semibold mb-1">Recordatorios Smart</h4>
                <p className="text-sm text-muted-foreground">Nunca olvides una cita</p>
              </div>

              <div className="text-center">
                <div className="bg-turquoise/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-turquoise" />
                </div>
                <h4 className="font-semibold mb-1">Reprogramación Fácil</h4>
                <p className="text-sm text-muted-foreground">Cambia horarios al instante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
