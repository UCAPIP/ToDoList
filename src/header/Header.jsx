import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <h1 className="text-center container mx-auto mt-5 text-xl font-bold">ДЕЛОВЫЕ ДЕЛА</h1>
            <article className="text-center container mx-auto mb-5 italic text-sm">СДЕЛАЙ ПЛАН НА НЕДЕЛЮ</article>
            {/* <nav>
                <ul className="flex flex-row gap-2" >
                    <li>
                    <Link to="/login" class="no-underline hover:underline">Login</Link>
                    </li>
                    <li>
                    <Link to="/main" class="no-underline hover:underline">Main</Link>
                    </li>
                </ul>
            </nav> */}
        </header>
    )
}