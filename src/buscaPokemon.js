import { useState, useEffect } from 'react';

function buscaPokemon (searchTerm) {
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

  return (pokemon, loading, error)
}

export default buscaPokemon