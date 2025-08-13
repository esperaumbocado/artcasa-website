import * as React from "react"

const CallToAction = ({ productName }) => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase tracking-wide">
          Interessado {productName ? ` ${productName}` : 'nos nossos produtos'}?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">
          Contacte-nos para um orçamento personalizado e consulta gratuita.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/#contact"
            className="bg-[#B5720A] text-white px-10 py-4 rounded-xl font-black hover:bg-[#9A5D07] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 uppercase tracking-wide"
          >
            Pedir Orçamento
          </a>
          <a 
            href="/"
            className="border-2 border-white text-white px-10 py-4 rounded-xl font-black hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide"
          >
            Voltar ao Início
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
