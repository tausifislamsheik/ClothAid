const StoriesOfImpacts = () => {
    return (
        <div className="rounded-xl py-20 bg-gradient-to-b from-orange-300 via-orange-400 to-orange-500">
            <h1 className="text-center font-bold text-3xl md:text-5xl">Stories of Impact</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-16 text-white space-y-5">
            <div className="w-3/4 mx-auto bg-white/30 backdrop-blur-md p-6 rounded-lg border">
                <i className="text-xl">"Thanks to ClothAid, my children have warm winter coats for the first time in years. This platform truly connects hearts."</i>
                <h1 className="mt-3 font-semibold">- Maria, Single Mother of 3</h1>
            </div>
            <div className="w-3/4 mx-auto bg-white/30 backdrop-blur-md p-6 rounded-lg border">
                <i className="text-xl">"I donated my professional wardrobe after retirement. Knowing it's helping someone land their dream job feels amazing."</i>
                <h1 className="mt-3 font-semibold">- Robert, Retired Executive</h1>
            </div>
            <div className="w-3/4 mx-auto bg-white/30 backdrop-blur-md p-6 rounded-lg border">
                <i className="text-xl">"The interview suit I received through ClothAid helped me get my first job. Now I'm giving back too."</i>
                <h1 className="mt-3 font-semibold">- Sarah, Recent Graduate</h1>
            </div>
            </div>
        </div>
    );
};

export default StoriesOfImpacts;