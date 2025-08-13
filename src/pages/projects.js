import * as React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import CallToAction from "../components/CallToAction"

const ProjectsPage = () => {
  const [activeGallery, setActiveGallery] = React.useState(null)
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  const openGallery = () => {
    setActiveGallery(true)
    setCurrentImageIndex(0)
  }

  const closeGallery = () => {
    setActiveGallery(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projects.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const projects = [
    {
      title: "Sala de Estar Moderna",
      location: "Lisboa",
      description: "Transformação completa de sala de estar com estores plissados, tapetes premium e têxteis coordenados. Combinação perfeita entre funcionalidade e elegância.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Residencial"
    },
    {
      title: "Quarto Principal Elegante",
      location: "Porto",
      description: "Decoração completa de quarto principal com cortinados blackout, papel de parede texturizado e coordenação de têxteis para criar um ambiente relaxante.",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Residencial"
    },
    {
      title: "Escritório Corporativo",
      location: "Braga",
      description: "Espaço de trabalho moderno com estores de rolo para controlo de luz, tapetes acústicos e elementos decorativos que promovem produtividade.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Comercial"
    },
    {
      title: "Cozinha Contemporânea",
      location: "Coimbra",
      description: "Remodelação de cozinha com venezianas exteriores, estofos personalizados para bancadas e coordenação de cores elegante.",
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Residencial"
    },
    {
      title: "Espaço Comercial Premium",
      location: "Aveiro",
      description: "Loja de luxo com painéis japoneses, tapetes statement e têxteis de alta qualidade que criam uma experiência única para clientes.",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Comercial"
    },
    {
      title: "Apartamento Minimalista",
      location: "Faro",
      description: "Decoração minimalista com estores de rolo discretos, papel de parede neutro e têxteis em tons naturais para um ambiente zen.",
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Residencial"
    },
    {
      title: "Sala de Jantar Clássica",
      location: "Viseu",
      description: "Ambiente clássico com cortinados elegantes, tapete persa e coordenação de têxteis que criam uma atmosfera sofisticada para jantares.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Residencial"
    },
    {
      title: "Hotel Boutique",
      location: "Óbidos",
      description: "Projeto completo para hotel boutique com estores térmicos, papel de parede artístico e têxteis de luxo em todos os quartos.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      category: "Hotelaria"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-none mb-6">
            NOSSOS
            <span className="block text-[#B5720A]">PROJETOS</span>
          </h1>
          <div className="w-32 h-2 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Descubra alguns dos nossos projetos mais marcantes. Cada espaço é único e reflete a personalidade e necessidades dos nossos clientes.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg border-2 border-gray-200 hover:border-black shadow-sm hover:shadow-lg transition-all overflow-hidden flex flex-col h-full group cursor-pointer"
                   onClick={openGallery}>
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#B5720A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <h3 className="text-2xl font-black text-black mb-1 uppercase tracking-wide">{project.title}</h3>
                    <p className="text-[#B5720A] font-medium text-sm uppercase tracking-wide">{project.location}</p>
                  </div>
                  <p className="text-gray-700 leading-relaxed flex-1 font-medium">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={openGallery}
              className="bg-[#B5720A] text-white px-12 py-4 rounded-xl font-black hover:bg-[#9A5D07] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide"
            >
              Ver Todos os Projetos
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-black text-[#B5720A] mb-2">150+</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Projetos Concluídos</div>
              <p className="text-gray-600 mt-2">Mais de 150 projetos realizados com sucesso em todo o país</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-black text-[#B5720A] mb-2">5★</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Avaliação Média</div>
              <p className="text-gray-600 mt-2">Classificação média baseada em avaliações de clientes</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl font-black text-[#B5720A] mb-2">98%</div>
              <div className="text-xl font-bold text-black uppercase tracking-wide">Clientes Satisfeitos</div>
              <p className="text-gray-600 mt-2">Taxa de satisfação baseada em feedback direto dos clientes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {activeGallery && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                Projetos - {currentImageIndex + 1} de {projects.length}
              </h3>
              <button 
                onClick={closeGallery}
                className="text-white hover:text-[#B5720A] text-3xl font-bold transition-colors"
              >
                ×
              </button>
            </div>
            
            {/* Main Image */}
            <div className="relative">
              <img 
                src={projects[currentImageIndex].image} 
                alt={projects[currentImageIndex].title}
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
              >
                ←
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
              >
                →
              </button>
            </div>
            
            {/* Project Info */}
            <div className="mt-6 bg-white p-6 rounded-lg">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-black text-black uppercase tracking-wide">{projects[currentImageIndex].title}</h4>
                  <p className="text-[#B5720A] font-medium uppercase tracking-wide">{projects[currentImageIndex].location}</p>
                </div>
                <span className="bg-[#B5720A] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {projects[currentImageIndex].category}
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed">{projects[currentImageIndex].description}</p>
            </div>
            
            {/* Thumbnails */}
            <div className="flex justify-center mt-6 space-x-2 overflow-x-auto">
              {projects.map((project, index) => (
                <div key={index} className="flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={`Projeto ${index + 1}`}
                    className={`h-16 w-20 object-cover rounded cursor-pointer transition-all ${
                      currentImageIndex === index ? 'ring-2 ring-[#B5720A] opacity-100' : 'opacity-60 hover:opacity-80'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <CallToAction productName="nos nossos serviços" />

      <Footer />
    </div>
  )
}

export default ProjectsPage

export const Head = () => <title>Projetos - ArtCasa</title>
