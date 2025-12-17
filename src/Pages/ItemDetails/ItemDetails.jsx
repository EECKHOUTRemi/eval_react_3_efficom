import { useEffect, useState } from "react";
import "./ItemDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart } from 'lucide-react';


export default function ItemDetails(){
    let params = useParams();
    const [data, setData] = useState([]);
    const [buttonText, setButtonText] = useState("Ajouter aux favoris");
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=112d69b3&i=${params.id}`, {method: 'POST', 
            body: JSON.stringify({terms: [params.id]})
        })
        .then(response => response.json())
        .then(data => setData(data));
    }, [params.id]);

    function addToFavorites(){
        localStorage.setItem('favorite', params.id);
        setButtonText("Retirer des favoris");
        setIsFavorite(true);
    }

    function removeFromFavorites(){
        localStorage.removeItem('favorite', params.id);
        setButtonText("Ajouter aux favoris");
        setIsFavorite(false);
    }

    return(
        <>
            <div className="movieCard">
                <div className="icons">
                    <div className="arrow">
                        <ArrowLeft onClick={() => navigate(-1)} />
                    </div>
                    <div className="heart">
                        <button onClick={isFavorite ? removeFromFavorites : addToFavorites} >{buttonText}</button>
                    </div>
                </div>
                <img src={data.Poster} alt={data.Title} />
                <div className="cardHeader">{data.Title} ({data.Released})</div>
                <div className="genre"><strong>Genre:</strong> {data.Genre}</div>
                <div className="runtime"><strong>Runtime:</strong> {data.Runtime}</div>
                <div className="plot"><strong>Plot:</strong> {data.Plot}</div>
                <div className="director"><strong>Director:</strong> {data.Director}</div>
                <div className="actors"><strong>Actors:</strong> {data.Actors}</div>
                <div className="language"><strong>Language:</strong> {data.Language}</div>
                <div className="awards"><strong>Awards:</strong> {data.Awards}</div>
            </div>
        </>
    )
}