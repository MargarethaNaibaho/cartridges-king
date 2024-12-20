const Home = () => {
    return (
        <>
            <div className="bg-[url('src/assets/images/color.jpg')] bg-cover bg-center w-full h-[400px]">
                <div className="mx-72 py-10 flex  justify-center">
                    <h1 className="text-white text-shadow-lg font-medium text-center w-full mb-10" 
                        style={{ fontSize: "clamp(2rem, 15vw, 3.5rem)" }}
                    >
                        FIND THE RIGHT CARTRIDGES FOR YOUR PRINTER
                    </h1>
                </div>

                <div className="mx-72">
                    <div className="flex flex-row items-center py-5">
                        <div className="w-full flex">
                            <div className="py-5 px-auto text-white font-bold bg-blue-500">
                                3-stepEasySearch
                            </div>
                            <div className="py-5 px-auto text-black font-bold bg-gray-200">
                                3-stepEasySearch
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;