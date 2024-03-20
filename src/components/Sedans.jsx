import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {
    
    return (
  
    <div className="bg-orange p-12 max-lg:rounded-t-lg lg: rounded-l-lg">
        <img src={iconSedans} alt="iconde de carros sedans" className="mb-7"/>
        <h2 className="font-showders mb-7 uppercase text-4xl font-bold text-offwhite-bg">Sedans</h2>
        <p className="font-lexend text-offwhite mb-7 lg: mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
        <a href="https://www.webmotors.com.br/sedans" target = "_blank" className="font-lexend bg-offwhite-bg px-10 py-3 w-fit border-2 border-offwhite-bg rounded-3xl text-orange hover:bg-orange hover:text-offwhite" >Ver Mais</a>
    </div>
    )
  
  }