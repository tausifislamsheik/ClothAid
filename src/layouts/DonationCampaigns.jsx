import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import DonationCampaign from "./DonationCampaign";

const DonationCampaigns = () => {

    const data = useLoaderData();
    
    return (
        <div>
            <Helmet>
                <title>Donation Campaigns || ClothAid</title>
            </Helmet>
            <div>
                <section className="bg-white shadow-2xl p-10 my-10 rounded-xl">
                    <div>
                        <h2 className="mb-7 text-3xl font-bold">Find Campaigns</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            <div className="flex flex-col">
                                <label className="mb-2 font-semibold">Location</label>
                                <select className="border p-2 border-gray-400 rounded-lg text-gray-600" id="locationFilter">
                                    <option value="">All Locations</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chattogram">Chattogram</option>
                                    <option value="rajshahi">Rajshahi</option>
                                    <option value="khulna">Khulna</option>
                                    <option value="barishal">Barishal</option>
                                    <option value="sylhet">Sylhet</option>
                                    <option value="rangpur">Rangpur</option>
                                    <option value="mymensingh">Mymensingh</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 font-semibold">Category</label>
                                <select className="border p-2 border-gray-400 rounded-lg text-gray-600" id="categoryFilter">
                                    <option value="">All Categories</option>
                                    <option value="children">Children</option>
                                    <option value="elderly">Elderly</option>
                                    <option value="homeless">Homeless</option>
                                    <option value="workers">Workers</option>
                                    <option value="students">Students</option>
                                    <option value="disaster">Disaster Relief</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 font-semibold">Priority</label>
                                <select className="border p-2 border-gray-400 rounded-lg text-gray-600" id="priorityFilter">
                                    <option value="">All Priorities</option>
                                    <option value="high">High Priority</option>
                                    <option value="medium">Medium Priority</option>
                                    <option value="low">Low Priority</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 font-semibold">Search</label>
                                <input type="text" className="border p-2 border-gray-400 rounded-lg text-gray-600" placeholder="Search campaigns..." id="searchInput"/>
                            </div>
                        </div>
                        <div className="text-center mt-7">
                            <button className="btn bg-orange-600 text-white mr-3" onclick="applyFilters()">Apply Filters</button>
                            <button className="btn border border-orange-600 bg-white text-orange-600" onclick="clearFilters()">Clear All</button>
                        </div>
                    </div>
                </section>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                data?.map(campaignData => <DonationCampaign key={campaignData.id} campaignData={campaignData}></DonationCampaign>)
                }
            </div>
        </div>
    );
};

export default DonationCampaigns;