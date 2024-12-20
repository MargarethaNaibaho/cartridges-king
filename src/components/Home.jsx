import { ChevronDown } from "lucide-react";
import { useState } from "react";

const Home = () => {
    const [activeNavBar, setActiveNavBar] = useState("ThreeStep");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [selectedSeri, setSelectedSeri] = useState("");
    const [selectedModel, setSelectedModel] = useState("");

    const [filteredSeries, setFilteredSeries] = useState([]);
    const [filteredModels, setFilteredModels] = useState([]);

    const dataPrinter = [
        {
            id: 1,
            name: 'Canon',
            series: [
                {
                    id: 1,
                    name: 'Pixma G',
                    models: [
                        {
                            id: 1,
                            name: 'G1000'
                        },
                        {
                            id: 2,
                            name: 'G2000'
                        },
                        {
                            id: 3,
                            name: 'G3000'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Pixma IP',
                    models: [
                        {
                            id: 1,
                            name: 'IP1000'
                        },
                        {
                            id: 2,
                            name: 'IP2000'
                        },
                        {
                            id: 3,
                            name: 'IP3000'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Pixma E',
                    models: [
                        {
                            id: 1,
                            name: 'E1000'
                        },
                        {
                            id: 2,
                            name: 'E2000'
                        },
                        {
                            id: 3,
                            name: 'E3000'
                        }
                    ]
                },
                {
                    id: 4,
                    name: 'Pixma TS',
                    models: [
                        {
                            id: 1,
                            name: 'TS1000'
                        },
                        {
                            id: 2,
                            name: 'TS2000'
                        },
                        {
                            id: 3,
                            name: 'TS3000'
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Brothers',
            series: [
                {
                    id: 1,
                    name: 'Brothers G',
                    models: [
                        {
                            id: 1,
                            name: 'BG1000'
                        },
                        {
                            id: 2,
                            name: 'BG2000'
                        },
                        {
                            id: 3,
                            name: 'BG3000'
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Brothers IP',
                    models: [
                        {
                            id: 1,
                            name: 'BIP1000'
                        },
                        {
                            id: 2,
                            name: 'BIP2000'
                        },
                        {
                            id: 3,
                            name: 'BIP3000'
                        }
                    ]
                },
                {
                    id: 3,
                    name: 'Brothers E',
                    models: [
                        {
                            id: 1,
                            name: 'BE1000'
                        },
                        {
                            id: 2,
                            name: 'BE2000'
                        },
                        {
                            id: 3,
                            name: 'BE3000'
                        }
                    ]
                }
            ]
        }
    ]

    const handleSelectBrandChange = (event) => {
        setSelectedBrand(event.target.value);

        const brand = dataPrinter.find((printer) => printer.name === event.target.value)
        setFilteredSeries(brand ? brand.series : [])

        setSelectedSeri("")
        setSelectedModel("")
        setFilteredModels([])
    }

    const handleSelectSeri = (event) => {
        setSelectedSeri(event.target.value)

        const seri = filteredSeries.find((seri) => seri.name === event.target.value)
        setFilteredModels(seri ? seri.models : [])

        setSelectedModel("")
    }

    const handleSelectModel = (event) => {
        setSelectedModel(event.target.value)
    }
    const Dropdown = ({printers, defaultVal}) => {
        return(
            <>
                <option value="" disabled className="text-black">{defaultVal}</option>
                {printers.map((printer) => (
                    <option key={printer.id} value={printer.name}>{printer.name}</option>
                ))}
            </>
        )
    }
  
    return (
        <>
            <div className="bg-[url('src/assets/images/color.jpg')] bg-cover bg-center w-full h-[500px]">
                <div className="mx-72 py-10 flex  justify-center">
                    <h1 className="text-white text-shadow-lg font-medium text-center w-full" 
                        style={{ fontSize: "clamp(2rem, 15vw, 3.5rem)" }}
                    >
                        FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
                    </h1>
                </div>

                <div className="mx-72">
                    <div className="flex flex-row items-center">
                        <div className="w-full flex flex-row justify-around">
                            <div 
                                className={`w-full py-5 px-auto text-xl font-semibold ${activeNavBar === "ThreeStep" ? "bg-blue-500 text-white" : "bg-gray-200"} cursor-pointer`} 
                                onClick={() => setActiveNavBar("ThreeStep")}
                            >
                                <button>
                                    <a href="#">3-stepEasySearch&reg;</a>
                                </button>
                            </div>
                            <div 
                                className={`w-full py-5 px-autotext-xl font-semibold ${activeNavBar === "SerialNumber" ? "bg-blue-500 text-white" : "bg-gray-200"} cursor-pointer`}
                                onClick={() => setActiveNavBar("SerialNumber")}
                            >
                                <button>
                                    <a href="#">Search by Serial Number</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-10 py-11 bg-white">
                        <div className="flex flex-row gap-5 items-center justify-between">
                            <div className="flex-1 flex flex-row justify-center items-center bg-gray-200 border-black border w-full">
                                <div className="relative w-full">
                                    <select name="brands" id="brands" value={selectedBrand} onChange={handleSelectBrandChange} className="flex flex-row appearance-none bg-gray-200 w-full px-3 py-3 text-black focus:outline-none focus:ring-blue-500">
                                        <Dropdown printers={dataPrinter} defaultVal={"1. Printer Brand"}/>
                                    </select>

                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-row justify-center items-center bg-gray-200 border-black border w-full">
                                <div className="relative w-full">
                                    <select name="brands" id="brands" value={selectedSeri} onChange={handleSelectSeri} className="flex flex-row appearance-none bg-gray-200 w-full px-3 py-3 text-black focus:outline-none focus:ring-blue-500">
                                        <Dropdown printers={filteredSeries} defaultVal={"2. Printer Series"}/>
                                    </select>

                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-row justify-center items-center bg-gray-200 border-black border w-full">
                                <div className="relative w-full">
                                    <select name="brands" id="brands" value={selectedModel} onChange={handleSelectModel} className="flex flex-row appearance-none bg-gray-200 w-full px-3 py-3 text-black focus:outline-none focus:ring-blue-500">
                                        <Dropdown printers={filteredModels} defaultVal={"3. Printer Models"}/>
                                    </select>

                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                        <ChevronDown />
                                    </div>
                                </div>
                            </div>

                            <button type="Submit" className="flex-1 bg-orange-400 w-full font-bold text-xl text-white px-10 py-3">
                                FIND CARTRIDGES
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;