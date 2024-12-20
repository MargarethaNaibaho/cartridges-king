import { Search } from "lucide-react";

const SecondHeader = () => {
    return (
        <>
            <div className="mx-72 my-4">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start py-5">
                        <img src="src/assets/images/logo.png"
                            alt="logo"
                            className="w-full h-auto"
                        />
                    </div>

                    <div className="flex flex-col items-end">
                        <div className="flex flex-row space-x-4 items-center">
                            <div className="flex items-center border border-black bg-white px-5 py-3 w-56">
                                <input 
                                    type="text" 
                                    placeholder="SEARCH" 
                                    className="bg-transparent w-40 flex-grow focus:outline-none"
                                />
                                <Search className="text-black w-5 h-5" />
                            </div>
                                
                            <div>
                                <button type="Submit" className="bg-orange-400 text-white px-10 py-3">
                                    CART (1)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondHeader;