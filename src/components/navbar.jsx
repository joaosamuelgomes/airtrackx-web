import Logo from "../../airtrackx.svg?react"

const Navbar = () => {

    const handleScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <nav className="flex justify-between items-center py-2 px-32 bg-p1 text-p5">
        <Logo className="w-[307px] h-[43px]"/>
        <div className="flex gap-4">
            <a href="#stats" onClick={handleScroll} className="hover:underline font-bebas">
                DADOS ESTATÍSTICOS
            </a>
            <a href="#plans" onClick={handleScroll} className="hover:underline font-bebas">
                PLANOS
            </a>
            <a href="#contact" onClick={handleScroll} className="hover:underline font-bebas">
                CONTATO
            </a>
        </div>
        </nav>
    );
};

export default Navbar;
