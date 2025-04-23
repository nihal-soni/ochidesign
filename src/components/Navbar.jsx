
const navlinks = [
    { name: "Service", href: "/service" },
    { name: "Our Work", href: "/our work" },
    { name: "About Us", href: "/about" },
    { name: "Insights", href: "/insights" }

]

const Navbar = () => {
    return (
        <nav className="w-full px-20 py-8">
            <div className="flex justify-between items-center text-center ">
            <div className="logo text-white ">
                <h1>Ochi.</h1>
            </div>
            <div className="links flex gap-4">
                {navlinks.map((link) => (
                    <a key={link.name} href={link.href} className="text-white hover:text-gray-400 px-4 py-2">
                        {link.name}
                    </a>
                ))}
            <div className="">
                <button className="text-white hover:text-gray-400 px-4 py-2">Contact</button>
            </div>
            </div>
            </div>
        </nav>
    )
}
export default Navbar