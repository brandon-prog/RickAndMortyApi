import { useEffect, useState } from "react"
import useFetchApi from "./hooks/useFetchApi"
import { getRandomNumber } from "./utils"
import Hero from "./components/Hero"
import Search from "./components/Search"
import LocationInfo from "./components/LocationInfo"
import ResidentsList from "./components/ResidentsList"
import './App.css'

const baseUrl = 'https://rickandmortyapi.com/api/location'

function App() {
  const{ data: location, request, loading } = useFetchApi()
const [locationId, setLocationId] = useState(getRandomNumber())

  useEffect(() =>{
    request(`${baseUrl}/${locationId}`)
  }, [locationId])

  return (
     <div className='fondo'>
      
      <Hero />

      <Search setLocationId={setLocationId} />

{loading ? <p style={{textAlign: 'center'}}>Cargando...</p> : (
  location && <LocationInfo location={location} />
)}

   {location && <ResidentsList residents={location?.residents} />}
</div>
  )
}

export default App
 