const ImpactCounter = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 text-center p-10 gap-10 my-10">
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-t-4 border-t-orange-600">
                <h1 className="text-5xl font-bold mb-5 text-orange-600">15,847</h1>
                <p className="text-gray-500 font-semibold">Items Donated</p>
            </div>
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-t-4 border-t-orange-600">
                <h1 className="text-5xl font-bold mb-5 text-orange-600">3,256</h1>
                <p className="text-gray-500 font-semibold">Families Helped</p>
            </div>
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-t-4 border-t-orange-600">
                <h1 className="text-5xl font-bold mb-5 text-orange-600">89</h1>
                <p className="text-gray-500 font-semibold">Partner Organizations</p>
            </div>
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-t-4 border-t-orange-600">
                <h1 className="text-5xl font-bold mb-5 text-orange-600">2</h1>
                <p className="text-gray-500 font-semibold">Tons Recycled</p>
            </div>
        </div>
    );
};

export default ImpactCounter;