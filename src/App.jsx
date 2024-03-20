import Sedans from "./components/Sedans"
import SUVs from "./components/SUVs"
import Luxury from "./components/Luxury"

export default function App() {
  return (

    <main className="min-h-svh bg-offwhite py-20 px-6 antialissed lg:flex justify-content items-center">
<<<<<<< HEAD
      <section className="lg:flex max-w-[920px]">
        
        <Sedans/>
=======
      <section className="lg:flex">
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="iconde de carros sedans" className="mb-7"/>
          <h2 className="font-showders mb-7 uppercase text-4xl font-bold text-offwhite-bg">Sedans</h2>
          <p className="font-lexend text-offwhite mb-7">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a className="font-lexend bg-offwhite-bg px-10 py-3 w-fit rounded-3xl text-orange hover:bg-orange hover:text-offwhite" href="https://www.webmotors.com.br/sedans" target="_blank">Ver Mais</a>
        </div>
>>>>>>> 1266eab5e871438384d2ae56c06a2326648e8826

        <SUVs/>

        <Luxury/>
        
      </section>
    </main>
  )

}