import Logo from "../../airtrackx.svg"

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-2 px-32 bg-p1 text-p5">
        <img src={Logo} alt="Logo" className="w-[307px] h-[43px]"/>
        <div className="flex gap-4">
            <a href="/quality" className="hover:underline font-bebas">
                QUALIDADE DO AR
            </a>
            <a href="/stats" className="hover:underline font-bebas">
                DADOS ESTATÍSTICOS
            </a>
            <a href="/plans" className="hover:underline font-bebas">
                PLANOS
            </a>
            <a href="/contact" className="hover:underline font-bebas">
                CONTATO
            </a>
        </div>
        </nav>
    );
};

export default Navbar;
