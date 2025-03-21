import { useState, useEffect } from 'react';
import './App.css';

function App () {
  const [searchTerm, setSearchTerm] = useState("")
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (searchTerm.length === 0) return;

    const fetchPokemon = async () => {
      setLoading(true)
      setError(null)
      setPokemon(null)

      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`)
        if (!response.ok) throw new Error("Pokemon no encontrado")
        
        const data = await response.json()
        setPokemon({
          name: data.name,
          image: data.sprites.front_default
        })
      
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [searchTerm])

  return (
    <>
      <h1>Buscador de Pokemon</h1>
      <input type='text' placeholder='Escrbe el nombre del pokemon' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

      {loading && <p>Cargando...</p>}
      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.image} alt={pokemon.name} />
        </div>
      )}

      {error && <p>{error}</p>}

    </>
  )
  
};

export default App;
