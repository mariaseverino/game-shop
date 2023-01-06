function Header() {
    return (
        <div className="flex justify-center w-full bg-background">
            <header className="flex relative space-x-6 items-center pt-12  max-w-6xl w-11/12 ">
                <div className="flex bg-secundary w-96 p-3 rounded-2xl h-12 items-center">
                    O{" "}
                    <input
                        className="w-5/6 ml-3 bg-secundary text-text outline-0 text-lg placeholder-shown:text-slate-600"
                        placeholder="Search ..."
                    />
                </div>
                <nav>
                    <ul className="flex space-x-6 ">
                        <li>
                            <a
                                href="#"
                                className="text-primary hover:text-primary text-xl"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-text selection:text-primary text-xl"
                            >
                                Navegar
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="absolute right-3 top-4 bg-secundary text-primary text-xl pl-4 pr-4 pt-2 pb-2 rounded-2xl">
                Login
            </div>
        </div>
    );
}

export default Header;
