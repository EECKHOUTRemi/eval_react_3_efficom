import { useState } from "react";
import "./SearchBar.css";

export default function SearchBar( ){
    const [data, SetData] = useState([]);

    async function getMovies(){
        const term = document.querySelector('.searchProduct').value;
        fetch(`http://www.omdbapi.com/?apikey=112d69b3&t=${term}`, {method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({terms: [term]})
        })
        .then(response => response.json())
        .then(data => SetData(data));
    }

    return(
        <div className="searchContainer">
            <input 
                type="text" 
                placeholder='Rechercher un film' 
                className='searchProduct' 
            />
            <button onClick={getMovies()}>Rechercher</button>
            <div className="filteredData">
                {data.map((item, index) => (
                    <div key={index} className="dataItem">
                        {item.Title}
                    </div>
                ))}
            </div>
        </div>
    )
}