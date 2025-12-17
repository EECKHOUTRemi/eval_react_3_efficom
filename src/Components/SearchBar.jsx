import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar( { setData } ){
    const [term , setTerm] = useState("");

    async function getMoviesByName(){
        fetch(`http://www.omdbapi.com/?apikey=112d69b3&s=${term}`, {method: 'POST', 
            body: JSON.stringify({terms: [term]})
        })
        .then(response => response.json())
        .then(data => setData(data.Search));
    }

    return(
        <div className="searchContainer">
            <input 
                type="text" 
                placeholder='Rechercher un film' 
                className='searchProduct' 
                onKeyUp={(e) => setTerm(e.target.value)}
            />
            <button onClick={() => {getMoviesByName()}}>Rechercher</button>
        </div>
    )
}