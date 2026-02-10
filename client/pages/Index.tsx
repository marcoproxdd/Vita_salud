import {
  Phone,
  MapPin,
  CheckCircle,
  Users,
  Stethoscope,
  FileCheck,
  Moon,
  SunMedium,
  MessageCircle,
  Target,
  Lightbulb,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Index() {
  const [isDark, setIsDark] = useState(false);
  const whatsappLink =
    "https://wa.me/593958838126?text=Hola%20doctor%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20programa%20m%C3%A9dico%20para%20mi%20instituci%C3%B3n.";

  const schoolServices = [
    "Control de salud para estudiantes",
    "Campañas de vacunación",
    "Control de crecimiento y desarrollo",
    "Evaluaciones pediátricas completas",
    "Atención de primeros auxilios",
    "Consultoría en salud escolar",
    "Programas de promoción de salud",
    "Manejo de enfermedades crónicas en estudiantes",
  ];

  const benefits = [
    {
      icon: Users,
      title: "Salud Integral",
      description: "Atención médica completa para toda la comunidad educativa.",
    },
    {
      icon: Stethoscope,
      title: "Profesionales Calificados",
      description: "Dr. Iván Espín, especialista en medicina general y salud escolar.",
    },
    {
      icon: FileCheck,
      title: "Respaldados y Organizados",
      description: "Reportes y certificados médicos claros para tu institución.",
    },
  ];

  const missionText =
    "Brindar atención médica a la comunidad educativa, enfocándose en la detección temprana de patologías y estilos de vida saludables, garantizando un entorno seguro que favorezca el rendimiento académico y el desarrollo físico de los estudiantes.";

  const visionText =
    "Ser el referente de salud escolar, reconocido por la excelencia en la prevención y el manejo de riesgos sanitarios, contribuyendo a la formación de ciudadanos sanos y conscientes de su autocuidado.";

  const advantages = [
    "Atención inmediata y reducción de riesgos",
    "Reducción del ausentismo escolar",
    "Control de enfermedades",
    "Seguimiento nutricional",
    "Capacitaciones sobre temas de salud",
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const pageClasses = isDark
    ? "min-h-screen overflow-x-hidden bg-slate-950 text-slate-50"
    : "min-h-screen overflow-x-hidden bg-white text-foreground";

  const headerClasses = "sticky top-0 z-50 bg-white border-b border-gray-200";

  const whySectionClasses = isDark
    ? "py-12 md:py-16 bg-slate-900"
    : "py-12 md:py-16 bg-gray-50";

  const contactSectionClasses = isDark
    ? "bg-slate-900 py-12 md:py-16"
    : "bg-gray-50 py-12 md:py-16";

  return (
    <div className={pageClasses}>
      <header className={headerClasses}>
        <div className="container mx-auto px-3 py-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-16 h-10 sm:w-20 sm:h-12 flex items-center justify-center">
              <img
                src="/vita_salud.jpg"
                alt="VITASALUD Centro Médico"
                className="max-h-10 sm:max-h-12 w-auto"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg font-bold text-medical-green">
                VITASALUD
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-600 font-medium">
                Centro Médico
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2">
            {/* Iconos solo en móvil */}
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="inline-flex sm:hidden items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 transition"
            >
              {isDark ? (
                <SunMedium className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center justify-center w-8 h-8 rounded-full bg-medical-green text-white shadow-sm hover:bg-medical-green/90 transition"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Botones con texto en pantallas medianas y grandes */}
            <button
              type="button"
              onClick={() => setIsDark((prev) => !prev)}
              className="hidden sm:inline-flex items-center gap-1 text-[10px] sm:text-xs px-3 py-1 rounded-full bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 transition whitespace-nowrap"
            >
              {isDark ? (
                <SunMedium className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <Moon className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
              <span>{isDark ? "Modo claro" : "Modo noche"}</span>
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex text-[10px] sm:text-xs bg-medical-green text-white px-3 py-1 rounded-full font-semibold hover:bg-medical-green/90 hover:shadow-lg transition whitespace-nowrap"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm overflow-hidden">
              <div className="absolute inset-0 bg-medical-green/10 rounded-3xl transform -rotate-6 scale-110" />
              <div className="relative bg-gradient-to-br from-medical-green to-medical-blue p-1 rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/doctor.jpg"
                  alt="Dr. Iván Espín"
                  className="w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="text-medical-red font-bold text-sm sm:text-base md:text-lg mb-2">
              Servicios de Salud para tu Institución
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Programa Médico Integral para
              <span className="block text-medical-green">
                Escuelas e Institutos
              </span>
            </h2>

            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
              Un aliado médico permanente para tu institución: prevención,
              atención oportuna y documentación clara para cuidar la salud y el
              rendimiento de tus estudiantes.
            </p>

            <div className="mb-8">
              <h3 className="text-medical-blue font-bold text-lg mb-4">
                Servicios para Instituciones:
              </h3>
              <ul className="space-y-2">
                {schoolServices.slice(0, 4).map((service, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-medical-green" />
                    </div>
                    <span className="text-base font-medium">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="bg-medical-green hover:bg-medical-green/90 text-white px-8 py-6 text-lg rounded-lg font-bold transition transform hover:scale-105"
            >
              Solicitar Propuesta por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-medical-green/30 bg-medical-green/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-medical-green" />
                <h3 className="text-xl md:text-2xl font-bold text-medical-blue">Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{missionText}</p>
            </div>
            <div className="rounded-2xl border border-medical-green/30 bg-medical-green/10 p-6 md:p-8">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-6 h-6 text-medical-green" />
                <h3 className="text-xl md:text-2xl font-bold text-medical-blue">Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{visionText}</p>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-medical-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="h-1 w-12 bg-medical-green rounded-full" />
            <h3 className="text-2xl md:text-3xl font-bold">DR. IVAN ESPIN</h3>
          </div>
          <p className="text-blue-100 mt-2 ml-16">
            Medicina General – Enfoque especial en Salud Escolar
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Objetivo General
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Garantizar un entorno escolar seguro y saludable mediante la
            prestación de servicios de salud preventivos y de primer auxilio,
            fomentando hábitos de vida sanos en la comunidad educativa para
            potenciar el rendimiento académico y el desarrollo integral de los
            estudiantes.
          </p>
        </div>
      </section>
            <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-medical-blue mb-8">
            Ventajas
          </h2>
          <div className="space-y-4 max-w-3xl">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className={
                  isDark
                    ? "rounded-xl border border-slate-700 bg-slate-800 px-6 py-4 text-slate-100 shadow-sm flex items-start gap-3"
                    : "rounded-xl border border-medical-green/30 bg-medical-green/10 px-6 py-4 text-gray-800 shadow-sm flex items-start gap-3"
                }
              >
                <CheckCircle
                  className={
                    isDark
                      ? "w-5 h-5 text-medical-green flex-shrink-0 mt-0.5"
                      : "w-5 h-5 text-medical-green flex-shrink-0 mt-0.5"
                  }
                />
                <span className="font-medium">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={whySectionClasses}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-medical-blue text-center mb-12">
            ¿Por qué elegir VITASALUD?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 hover:bg-medical-green/5 border-l-4 border-medical-green"
                >
                  <Icon className="w-12 h-12 text-medical-green mb-4" />
                  <h3 className="text-xl font-bold text-medical-blue mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-medical-blue mb-8">
            Servicios Completos
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {schoolServices.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4">
                <CheckCircle className="w-6 h-6 text-medical-green flex-shrink-0 mt-1" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-medical-blue mb-6">
                Servicios de Enfermería
              </h2>
              <ul className="space-y-3">
                {[
                  "Primeros auxilios",
                  "Toma de signos vitales y control de parámetros",
                  "Administración de medicamentos",
                  "Curaciones y cuidado de heridas",
                  "Aplicación de sueros e inyecciones",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-medical-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-medical-green/10 -rotate-6 scale-105" />
              <img
                src="/servicio_enfermeria.jpg"
                alt="Atención de enfermería a estudiantes"
                className="relative w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 rounded-3xl bg-medical-blue/10 rotate-6 scale-105" />
              <img
                src="/ficha_medica.webp"
                alt="Gestión de fichas médicas"
                className="relative w-full rounded-3xl object-cover shadow-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-medical-blue mb-6">
                Fichas médicas de cada estudiante
              </h2>
              <ul className="space-y-3">
                {[
                  "Registros actualizados sobre alergias y condiciones médicas",
                  "Indicadores técnicos de evaluación nutricional",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-medical-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={contactSectionClasses}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-medical-blue mb-8">
            Contáctanos para una Propuesta Personalizada
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-medical-green/10 p-3 rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Teléfono</h3>
                  <p className="text-medical-green font-bold text-lg">
                    0958838126
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-medical-green/10 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-medical-green" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-600">JOCAY</p>
                </div>
              </div>

              <div className="bg-medical-green/5 border border-medical-green/20 rounded-lg p-6">
                <p className="text-sm text-gray-600 mb-4">
                  Escríbenos o llámanos para diseñar un plan médico adaptado a
                  las necesidades de tu institución educativa.
                </p>
                <a
                  href="tel:0958838126"
                  className="inline-flex items-center gap-2 bg-medical-green text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition"
                >
                  <Phone className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>
            </div>

            <div
              className={
                isDark
                  ? "rounded-2xl p-8 text-white shadow-xl bg-[#020617]"
                  : "rounded-2xl p-8 text-white shadow-xl bg-gradient-to-br from-[#0b4a85] via-[#0f5ca3] to-[#1a75c9]"
              }
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Programa de Salud para tu Instituto
                </h3>

              </div>
              <p className="text-blue-100 mt-3">
                Soluciones integrales de medicina general para garantizar la salud
                y el bienestar de tus estudiantes. Documentación completa y reporte
                detallado.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-medical-green text-xl">✓</span>
                  <span>Atención médica profesional</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-medical-green text-xl">✓</span>
                  <span>Evaluaciones de salud</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-medical-green text-xl">✓</span>
                  <span>Certificados médicos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-medical-green text-xl">✓</span>
                  <span>Programas preventivos</span>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-medical-green hover:bg-medical-green/90 text-white font-bold px-6 py-3 rounded-lg transition transform hover:scale-105"
                >
                  Solicitar Propuesta
                </a>

              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-medical-blue text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="font-bold mb-2 text-lg">VITASALUD</h4>
              <p className="text-blue-100 text-sm">
                Servicios médicos profesionales para escuelas, colegios e
                institutos educativos.
              </p>
            </div>
            <div className="text-blue-100 text-sm">
              Teléfono: 0958838126 · Ubicación: JOCAY
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
