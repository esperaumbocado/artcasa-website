import * as React from "react"
import logoImage from "../images/logo.png"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center bg-cover bg-center bg-gray-800" 
               style={{backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80')"}}>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Logo in Hero */}
            <div>
              <img src={logoImage} alt="ArtCasa Logo" className="h-40 w-auto mx-auto brightness-0 invert opacity-90" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight uppercase tracking-tight">
              Transforme a sua casa num
              <span className="block text-[#B5720A] mt-2">lar de sonho</span>
            </h1>
            <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Especialistas em decoração de interiores. 
              Criamos ambientes únicos e personalizados para o seu conforto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#B5720A] text-white px-10 py-4 rounded-xl font-black hover:bg-[#9A5D07] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide">
                Orçamento Gratuito
              </button>
              <a href="/projects" className="border-2 border-white text-white px-10 py-4 rounded-xl font-black hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide text-center">
                Ver Projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4">
                OS NOSSOS
                <span className="block text-[#B5720A]">PRODUTOS</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8"></div>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Descubra a nossa ampla gama de produtos para decoração de interiores. 
                Qualidade premium e design exclusivo.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Estores", 
                description: "Estores de rolo, venezianas e plissados de alta qualidade",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                link: "/estores"
              },
              { 
                name: "Cortinados", 
                description: "Cortinas elegantes e funcionais para todos os espaços",
                image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                link: "#"
              },
              { 
                name: "Tapetes", 
                description: "Tapetes premium que complementam qualquer decoração",
                image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                link: "/tapetes"
              },
              { 
                name: "Papel de Parede", 
                description: "Papéis de parede modernos e clássicos",
                image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                link: "/papel-parede"
              },
              { 
                name: "Têxteis Lar", 
                description: "Almofadas, colchas e outros têxteis decorativos",
                image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                link: "/texteis-lar"
              },
              { 
                name: "Estofos", 
                description: "Revestimentos e estofados personalizados",
                image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
                link: "/estofos"
              }
            ].map((category, index) => (
              <div key={index} className="group cursor-pointer h-full">
                <div className="bg-white rounded-lg p-8 hover:bg-gray-50 transition-colors border border-gray-200 hover:border-black shadow-sm hover:shadow-lg h-full flex flex-col">
                  <div className="h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-6 overflow-hidden border border-gray-100">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-3 uppercase tracking-wide">{category.name}</h3>
                  <p className="text-gray-700 mb-4 font-medium flex-1">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <a href={category.link} className="text-[#B5720A] font-medium hover:underline">Saber mais</a>
                    <span className="text-black font-bold">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects/Services Section */}
      <section id="projects" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4 lg:text-right">
                PROJETOS &
                <span className="block text-[#B5720A]">SERVIÇOS</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8 lg:ml-auto"></div>
            </div>
            <div className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium lg:text-right">
                Veja alguns dos nossos trabalhos recentes e os serviços que oferecemos. 
                Qualidade e dedicação ao seu serviço.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-3xl font-black text-black mb-6 border-b border-gray-200 pb-4 uppercase tracking-wide">OS NOSSOS SERVIÇOS</h3>
              <div className="space-y-4">
                {[
                  "Consulta domiciliária gratuita",
                  "Medições e orçamentos sem compromisso",
                  "Instalação profissional",
                  "Projetos personalizados",
                  "Assistência pós-venda"
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-black rounded-full mr-4"></div>
                    <span className="text-gray-800 font-bold">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden border border-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Projeto sala de estar"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden border border-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Projeto quarto"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden border border-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Projeto cozinha"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden border border-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Projeto escritório"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4">
                O QUE DIZEM
                <span className="block text-[#B5720A]">OS CLIENTES</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8"></div>
            </div>
            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                A satisfação dos nossos clientes é a nossa maior motivação. 
                Veja o que dizem sobre os nossos serviços.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                text: "Excelente atendimento e qualidade. Transformaram completamente a nossa sala de estar!",
                rating: 5
              },
              {
                name: "João Santos",
                text: "Profissionais muito competentes. Recomendo vivamente os serviços da ArtCasa.",
                rating: 5
              },
              {
                name: "Ana Costa",
                text: "Desde a consulta até à instalação, tudo foi perfeito. Muito satisfeita com o resultado.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200 hover:border-black transition-colors shadow-sm">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#B5720A] text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-800 mb-4 italic font-bold text-lg">"{testimonial.text}"</p>
                <p className="font-black text-black uppercase tracking-wide">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between mb-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-4 lg:text-right">
                ENTRE EM
                <span className="block text-[#B5720A]">CONTACTO</span>
              </h2>
              <div className="w-32 h-2 bg-black mt-6 lg:mt-8 lg:ml-auto"></div>
            </div>
            <div className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0 flex items-center">
              <p className="text-xl text-gray-700 leading-relaxed font-medium lg:text-right">
                Teremos todo o gosto em criar um orçamento personalizado para si. 
                Contacte-nos hoje mesmo.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-gray-200">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Nome</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Email</label>
                    <input type="email" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Telefone</label>
                    <input type="tel" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Localidade</label>
                    <input type="text" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-black mb-2 uppercase tracking-wide">Mensagem</label>
                  <textarea rows="4" className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B5720A] focus:border-[#B5720A] transition-colors font-medium" placeholder="Conte-nos sobre o seu projeto..."></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-black text-white px-12 py-4 rounded-lg font-black hover:bg-gray-800 transition-colors shadow-lg uppercase tracking-wide">
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>ArtCasa - Decoração de Interiores</title>
