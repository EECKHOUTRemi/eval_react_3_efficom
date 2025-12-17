import { useState } from "react";
import "./ItemDetails.css";
import { useParams } from "react-router-dom";

export default function ItemDetails(){
    let params = useParams();
    const [data, setData] = useState([]);

    async function getMovieById(){
        fetch(`http://www.omdbapi.com/?apikey=112d69b3&i=${params.id}`, {method: 'POST', 
            body: JSON.stringify({terms: [params.id]})
        })
        .then(response => response.json())
        .then(data => setData(data.Search));
    }

    return(
        <div>
            
        </div>
    )
}