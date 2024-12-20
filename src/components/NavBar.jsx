const NavBar = () => {
    const menuItems = [
        "HOME",
        "INK CARTRIDGES",
        "TONER CARTRIDGES",
        "CONTACT US",
        "LOGIN / REGISTER"
    ]

    const NavBarItems = ({textNavBar}) => {
        return (
            <div className="py-5 px-auto text-white font-bold">
                <button>
                    <a href="#">{textNavBar}</a>
                </button>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-row items-center mx-72 mb-10">
                <div className="w-full flex flex-row bg-blue-500 justify-around">
                    {menuItems.map((item, index) => (
                        <NavBarItems key={index} textNavBar={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavBar;