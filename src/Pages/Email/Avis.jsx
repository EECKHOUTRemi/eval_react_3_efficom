import { useState } from "react";
import EmailField from "../../Components/EmailField/EmailField";
import "./Avis.css";

export default function Avis(){
    const [email, setEmail] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    return(
        <div>
            <EmailField email={email} setEmail={setEmail} isInvalid={isInvalid} setIsInvalid={setIsInvalid} />
            <input type="text" placeholder="Votre avis ici" />
            <br />
            <button>Envoyer</button>
        </div>
    )
}