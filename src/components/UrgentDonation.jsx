const UrgentDonation = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold my-20">Urgent Needs This Week</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 p-10 gap-10 my-10">
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-l-4 border-l-orange-600">
                <h1 className="text-xl font-semibold mb-5 text-orange-600">HIGH PRIORITY</h1>
                <p className="font-bold">Winter Coats</p>
                <p className="text-gray-500 font-semibold">Children sizes 6-14</p>
            </div>
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-l-4 border-l-orange-600">
                <h1 className="text-xl font-semibold mb-5 text-orange-600">URGENT</h1>
                <p className="font-bold">Professional Wear</p>
                <p className="text-gray-500 font-semibold">Business suits & shoes</p>
            </div>
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-l-4 border-l-orange-600">
                <h1 className="text-xl font-semibold mb-5 text-orange-600">NEEDED</h1>
                <p className="font-bold">Baby Clothes</p>
                <p className="text-gray-500 font-semibold">0-24 months</p>
            </div>
            <div className="bg-white p-14 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border-l-4 border-l-orange-600">
                <h1 className="text-xl font-semibold mb-5 text-orange-600">NEEDED</h1>
                <p className="font-bold">School Uniforms</p>
                <p className="text-gray-500 font-semibold">Elementary & Middle School</p>
            </div>
        </div>
        </div>
    );
};

export default UrgentDonation;