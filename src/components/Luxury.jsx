import iconLuxury from "../assets/icon-luxury.svg"

export default function Luxury() {
    return (
  
      <section className="bg-dark-green p-12 max-lg: rounded-b-lg lg: rounded-r-lg">
          <img src={iconLuxury} alt="icone de carros de luxo" className="mb-7"/>
          <h2 className="font-showders mb-7 uppercase text-4xl font-bold text-offwhite-bg">Luxuosos</h2>
          <p className="font-lexend text-offwhite mb-7 lg: mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo " target = "_blank" className="font-lexend bg-offwhite-bg px-10 py-3 w-fit rounded-3xl border-2 border-offwhite-bg text-dark-green hover:bg-dark-green hover:text-offwhite">Ver Mais</a>
      </section>
    )
  
  }