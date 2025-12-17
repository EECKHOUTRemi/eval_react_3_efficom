import { useState } from "react";
import SearchField from "../../Components/SearchBar/SearchBar";
import "./Items.css";
import Item from "../../Components/Item/Item";

export default function Items(){
    const [data, SetData] = useState([]);

    return(
        <>
            <div>
                <SearchField setData={SetData} />
                {data.map((item) => (
                    <Item item={item} />
                ))}
            </div>
        </>
    )
}