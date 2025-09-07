import { Link } from "react-router-dom";

const DonationCampaign = ({campaignData}) => {

    const {id, img, title, description, division} = campaignData;
    return (
        <div className="card bg-base-100 border border-gray-300 p-5 transition-transform duration-400 hover:scale-105">
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
                <Link to={`/donation-details/${id}`}>
                  <button className="btn bg-orange-600 text-white">Donate Now</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default DonationCampaign;