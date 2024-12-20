import { useState } from "react"

const NavBar = () => {
    const menuItems = [
        "HOME",
        "INK CARTRIDGES",
        "TONER CARTRIDGES",
        "CONTACT US",
        "LOGIN / REGISTER"
    ]

    const [activeNavBar, setActiveNavBar] = useState("HOME");

    const NavBarItems = ({textNavBar}) => {
        const isActive = activeNavBar === textNavBar;
        return (
            <div 
                className={`w-full py-5 px-auto text-white font-bold ${isActive ? "bg-blue-600" : "bg-blue-500"} cursor-pointer`}
                onClick={() => setActiveNavBar(textNavBar)}
            >
                <button>
                    <a href="#">{textNavBar}</a>
                </button>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-row items-center mx-72 mb-10">
                <div className="w-full flex flex-row justify-around">
                    {menuItems.map((item, index) => (
                        <NavBarItems key={index} textNavBar={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default NavBar;