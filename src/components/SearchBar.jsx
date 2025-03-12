

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <input type='text' placeholder='Escrbe el nombre del pokemon' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    )
}

export default SearchBar