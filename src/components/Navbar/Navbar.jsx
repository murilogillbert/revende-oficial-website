import { useState } from "react"
import { Link } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(1);


    return (
        <div className={'navbar'}>
            <h1>Navbar</h1>
            <div>
                <Link to='/produtos'>Produtos</Link>
                <Link to='/categorias'>Categorias</Link>
                <Link to='/sobre'>Sobre</Link>
            </div>
            {isAuthenticated && (<div>
                <Link to='/login'>Login</Link>
                <Link to='/cadastro'>Cadastro</Link>
            </div>)}
        </div>
    )
}