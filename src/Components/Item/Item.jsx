import { useNavigate } from "react-router-dom";
import "./Item.css";

export default function Item({ item }){
    const navigate = useNavigate();

    return(
        <div className="itemlist" onClick={() => navigate(`/items/${item.imdbID}`)}>
            <img src={item.Poster} alt={item.Title} />
            <div className="title">{item.Title} ({item.Year})</div>
            <div className="type">{item.Type}</div>
        </div>
    )
}