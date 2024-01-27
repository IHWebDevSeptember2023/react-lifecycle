import { useEffect, useState } from "react";

function PokeList() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => { // para llamar a una api usamos el useffect, solo haremos una llamada
        fetch("https://pokeapi.co/api/v2/pokemon/")
            .then(response => response.json())
            .then(data => {
                setPokemons(data.results)
            })

    }, [])

    
    return (
        <>
            {
                pokemons.length === 0 ? <h2>cargando...</h2> :
                    pokemons.map((pokemon) => {
                        return (
                            <>
                                <h3>Name: {pokemon.name}</h3>
                                <a href={pokemon.url}>Details</a>
                            </>
                        )
                    })
            }
        </>
    )
}

export default PokeList;