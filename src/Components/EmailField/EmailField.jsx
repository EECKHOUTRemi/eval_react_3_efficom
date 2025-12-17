import "./EmailField.css";

export default function EmailField({ email, setEmail, isInvalid, setIsInvalid }){

    const re = /^[^@]+@[^@]+\.[^@]+$/;
    setIsInvalid(!re.test(email) && email.length > 0);

    return(
        <div className="emailField">
            <input 
                type="text" 
                className="email"
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {isInvalid && <p>Email invalide</p>}
        </div>
    )
}