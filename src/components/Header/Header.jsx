import Logo from "./Logo"

const Header = () =>{
    return(
        <header className="grid grid-cols-2 py-4 px-6 items-center bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
            <Logo/>
            <nav>
                <ul className="flex gap-6 place-content-end">
                    <li>Home</li>
                    <li>Endpoints</li>
                    <li>About</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header