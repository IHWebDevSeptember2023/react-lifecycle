import axios from "axios";
import { useEffect, useState } from "react";


function PokeAxios() {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/")
            .then((response) => {
                setPokemons(response.data.results)
            })

    }, [])

    return (
        <>
            {
                pokemons.length === 0 ? <h2>cargando...</h2> :
                    pokemons.map((pokemon) => {
                        return (
                            <div key={pokemon.url}>
                                <h3>Name: {pokemon.name}</h3>
                                <a href={pokemon.url}>Details</a>
                            </div>
                        )
                    })
            }
        </>
    )
}
export default PokeAxios;