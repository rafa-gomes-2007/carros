import Sedans from "./components/Sedans"
import SUVs from "./components/SUVs"
import Luxury from "./components/Luxury"

export default function App() {
  return (

    <main className="min-h-svh bg-offwhite py-20 px-6 antialissed lg:flex justify-content items-center">
      <section className="lg:flex max-w-[920px]">
        
        <Sedans/>

        <SUVs/>

        <Luxury/>
        
      </section>
    </main>
  )

}