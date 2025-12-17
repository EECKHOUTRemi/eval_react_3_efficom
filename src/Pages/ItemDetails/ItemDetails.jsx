import { useEffect, useState } from "react";
import "./ItemDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Heart } from 'lucide-react';


export default function ItemDetails(){
    let params = useParams();
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://www.omdbapi.com/?apikey=112d69b3&i=${params.id}`, {method: 'POST', 
            body: JSON.stringify({terms: [params.id]})
        })
        .then(response => response.json())
        .then(data => setData(data));
    }, [params.id]);

    return(
        <>
            <div className="movieCard">
                <div className="icons">
                    <ArrowLeft onClick={() => navigate(-1)} />
                    <Heart />
                </div>
                <img src={data.Poster} alt={data.Title} />
                <div className="cardHeader">{data.Title} ({data.Released})</div>
                <div className="genre">{data.Genre}</div>
                <div className="runtime">{data.Runtime}</div>
            </div>
        </>
    )
}