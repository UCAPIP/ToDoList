import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <h1 className="text-center container mx-auto">TO DO LIST</h1>
            <nav>
                <ul className="flex flex-row gap-2" >
                    <li>
                    <Link to="/login" class="no-underline hover:underline">Login</Link>
                    </li>
                    <li>
                    <Link to="/main" class="no-underline hover:underline">Main</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}