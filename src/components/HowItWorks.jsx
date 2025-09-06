const HowItWorks = () => {
    return (
        <div className="text-center my-20">
            <h1 className="text-4xl font-bold">How It Works</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 my-20 mx-auto text-center">
            <div className="space-y-5 w-2/3">
                <p className="text-5xl">📦</p>
                <h1 className="font-semibold text-xl">Collect & Sort</h1>
                <p className="text-gray-500">Gather your gently used clothing and sort by type and size</p>
            </div>
            <div className="space-y-5 w-2/3">
                <p className="text-5xl">📱</p>
                <h1 className="font-semibold text-xl">Schedule Pickup</h1>
                <p className="text-gray-500">Use our platform to schedule a convenient pickup time</p>
            </div>
            <div className="space-y-5 w-2/3">
                <p className="text-5xl">🤝</p>
                <h1 className="font-semibold text-xl">We Distribute</h1>
                <p className="text-gray-500">We ensure your donations reach families and individuals in need</p>
            </div>
            <div className="space-y-5 w-2/3">
                <p className="text-5xl">❤️</p>
                <h1 className="font-semibold text-xl">Track Impact</h1>
                <p className="text-gray-500">Receive updates on how your donations are making a difference</p>
            </div>
           </div>
        </div>
    );
};

export default HowItWorks;