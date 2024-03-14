import iconSedans from "./assets/icon-sedans.svg"
import iconSUVs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (

    <main>
      <section>
        <div className="bg-orange">
          <img src={iconSedans} alt="iconde de carros sedans"/>
          <h2 className="font-showders">Sedans</h2>
          <p className="font-lexend">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target = "_blenk" className="font-lexend">Ver Mais</a>
        </div>

        <div className="bg-green"> 
          <img src={iconSUVs} alt="icone dos Suvs" />
          <h2 className="font-showders">SUVs</h2>
          <p className="font-lexend">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target = "_blenk" className="font-lexend">Ver Mais</a>
        </div>

        <div className="bg-dark-green">
          <img src={iconLuxury} alt="icone de carros de luxo" />
          <h2 className="font-showders">Luxuosos</h2>
          <p className="font-lexend">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros-de-luxo " target = "_blenk" className="font-lexend">Ver Mais</a>
        </div>
      </section>
    </main>
  )

}