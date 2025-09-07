import { useLoaderData, useParams } from "react-router-dom";
import DonationForm from "./DonationForm";

const DonationDetails = () => {
    
    const {id} = useParams();
    const idNum = parseInt(id)
    const details = useLoaderData();

    if (!Array.isArray(details)) {
    return <p>Loading...</p>;
  }

    const detail = details.find(detail => detail.id === idNum)

    if (!detail) {
    return <p>No donation detail found.</p>;
  }

    const {img, title, description, division, quantity, itemType,
        pickupLocation
     } = detail;

    
    return (
        <div>
             <div className="text-center space-y-3 bg-orange-600 text-white py-7 rounded-lg">
                 <h1 className="text-2xl md:text-3xl font-bold">Donation Details</h1>
                 <p>“This winter, let’s open our hearts and closets. Your unused jackets, sweaters, or blankets can bring warmth, hope, and protection <br /> to someone in need. A small donation can make a big difference in saving lives from the cold.”</p>
             </div>
              <div className="grid md:grid-cols-12 mt-16 gap-7">
            <div className="card bg-base-100 border border-gray-300 p-7 col-span-4 md:col-span-8">
                <figure>
                    <img
                    className="w-full h-[400px] object-cover"
                    src={img}
                    alt={title} />
                </figure>
                <div className="card-body px-0">
                    <h2 className="card-title text-2xl md:text-3xl font-bold pb-2">
                    {title}
                    </h2>
                    <div className="grid grid-cols-2 bg-gray-100 text-center py-7 rounded-lg space-y-5">
                        <div>
                            <p className="text-gray-600">🎯 Item Type</p>
                            <h1 className="md:text-xl font-semibold">{itemType}</h1>
                        </div>
                        <div>
                            <p className="text-gray-600">⚡ Quantity</p>
                            <h1 className="md:text-2xl font-semibold">{quantity}</h1>
                        </div>
                        <div>
                            <p className="text-gray-600">📌 Pickup Location</p>
                            <h1 className="md:text-xl font-semibold">{pickupLocation}</h1>
                        </div>
                        <div>
                            <p className="text-gray-600">🔰 Division</p>
                            <h1 className="md:text-2xl font-semibold">{division}</h1>
                        </div>
                    </div>
                    <p className="md:text-lg text-gray-500">{description}</p>
                </div>
            </div>
             <div className="col-span-4 border border-gray-300 rounded-lg">
                <DonationForm></DonationForm>
             </div>
        </div>
        </div>
    );
};

export default DonationDetails;