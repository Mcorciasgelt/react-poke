

function PokemonInfo({ pokemon, loading, error}) {
    return (
        <>
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
}