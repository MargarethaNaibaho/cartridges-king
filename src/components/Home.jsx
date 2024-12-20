const Home = () => {
    return (
        <>
            <div className="bg-[url('src/assets/images/color.jpg')] bg-cover bg-center w-full h-[400px]">
                <div className="mx-72 py-10 flex  justify-center">
                    <h1 className="text-white text-shadow-lg font-medium text-center w-full" 
                        style={{ fontSize: "clamp(2rem, 15vw, 3.5rem)" }}
                    >
                        FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
                    </h1>
                </div>

                <div className="mx-72">
                    <div className="flex flex-row items-center py-5">
                        <div className="w-full flex flex-row justify-around">
                            <div className="w-full py-5 px-auto text-white text-xl font-semibold bg-blue-500">
                                <button>
                                    <a href="#">3-stepEasySearch&reg;</a>
                                </button>
                            </div>
                            <div className="w-full py-5 px-auto text-black text-xl font-semibold bg-gray-200">
                                <button>
                                    <a href="#">Search by Serial Number</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;