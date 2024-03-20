import iconSedans from "./assets/icon-sedans.svg"
import iconSUVs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (

    <main className="min-h-svh bg-offwhite py-20 px-6 antialissed lg:flex justify-content items-center">
      <section className="lg:flex max-w-[920px]">
        <div className="bg-orange p-12 max-lg:rounded-t-lg lg: rounded-l-lg">
          <img src={iconSedans} alt="iconde de carros sedans" className="mb-7"/>
          <h2 className="font-showders mb-7 uppercase text-4xl font-bold text-offwhite-bg">Sedans</h2>
          <p className="font-lexend text-offwhite mb-7 lg: mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target = "_blank" className="font-lexend bg-offwhite-bg px-10 py-3 w-fit border-2 border-offwhite-bg rounded-3xl text-orange hover:bg-orange hover:text-offwhite" >Ver Mais</a>
        </div>

        <div className="bg-green p-12"> 
          <img src={iconSUVs} alt="icone dos Suvs" className="mb-7"/>
          <h2 className="font-showders mb-7 uppercase text-4xl font-bold text-offwhite-bg">SUVs</h2>
          <p className="font-lexend text-offwhite mb-7 lg: mb-20" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target = "_blank" className="font-lexend bg-offwhite-bg px-10 py-3 w-fit rounded-3xl border-2 border-offwhite-bg text-green hover:bg-green hover:text-offwhite" >Ver Mais</a>
        </div>

        <div className="bg-dark-green p-12 max-lg: rounded-b-lg lg: rounded-r-lg">
          <img src={iconLuxury} alt="icone de carros de luxo" className="mb-7"/>
          <h2 className="font-showders mb-7 uppercase text-4xl font-bold text-offwhite-bg">Luxuosos</h2>
          <p className="font-lexend text-offwhite mb-7 lg: mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo " target = "_blank" className="font-lexend bg-offwhite-bg px-10 py-3 w-fit rounded-3xl border-2 border-offwhite-bg text-dark-green hover:bg-dark-green hover:text-offwhite">Ver Mais</a>
        </div>
      </section>
    </main>
  )

}