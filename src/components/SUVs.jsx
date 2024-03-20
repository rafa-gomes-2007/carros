import iconSUVs from "../assets/icon-suvs.svg"

export default function SUVs() {
    return (
  
      <div className="bg-green p-12"> 
          <img src={iconSUVs} alt="icone dos Suvs" className="mb-7"/>
          <h2 className="font-showders mb-7 uppercase text-4xl font-bold text-offwhite-bg">SUVs</h2>
          <p className="font-lexend text-offwhite mb-7 lg: mb-20" >Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target = "_blank" className="font-lexend bg-offwhite-bg px-10 py-3 w-fit rounded-3xl border-2 border-offwhite-bg text-green hover:bg-green hover:text-offwhite" >Ver Mais</a>
      </div>
    )
  
  }