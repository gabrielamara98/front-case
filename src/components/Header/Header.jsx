import { Link } from "react-router-dom"
import Logo from "./Logo"

const Header = () =>{
    return(
        <header className="grid grid-cols-2 py-4 px-6 items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
            <Logo/>
            <nav>
                <ul className="flex gap-6 place-content-end">
                    <Link to = "/"><li>Home</li></Link>
                    <Link to = "/endpoint"><li>Endpoints</li></Link>
                    <Link to = "/about"><li>About</li></Link>
                </ul>
            </nav>
        </header>
    )
}
export default Header