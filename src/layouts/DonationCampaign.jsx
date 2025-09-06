const DonationCampaign = ({campaignData}) => {

    const {img, title, description, division} = campaignData;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                className="h-[200px] w-full object-cover"
                src={img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <p>{description}</p>
                <div className="mt-4">
                    <p className="font-bold bg-gray-100 inline p-3 rounded-3xl text-gray-500">{division}</p>
                </div>
                <div className="card-actions justify-end">
                <button className="btn bg-orange-600 text-white">Donate Now</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaign;