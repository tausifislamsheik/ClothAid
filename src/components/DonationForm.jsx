import { toast } from "react-toastify";
import logo from '../assets/clothes.png'
import { useState } from "react";

const DonationForm = () => {

     const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = (e) =>{
          e.preventDefault();
          toast('Thank You ! We will reach your destination soon')
          setFormData({
           name: "",
           email: "",
           number: "",
           date: "",
           location: "",
    });
     }

    return (
        <div className="p-5">
                    <div className="flex items-center py-4 pb-10 gap-3 px-10">
                          <img className="w-10 h-10" src={logo} alt="" />
                          <h1 className="text-2xl md:text-3xl font-semibold">Make a Donation</h1>
                    </div>
                   <form onSubmit={handleSubmit}>
                       <fieldset className="fieldset space-y-3">
                        <label className="label text-lg text-gray-500 font-semibold">Your Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className="input w-full" placeholder="Enter your full name" required />
                        <label className="label text-lg text-gray-500 font-semibold">Email Address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="input w-full" placeholder="email@example.com" required />
                        <label className="label text-lg text-gray-500 font-semibold">Phone Number</label>
                        <input type="text" name="number" value={formData.number} onChange={handleChange} className="input w-full" placeholder="+880 1XXX-XXXXXX" required />
                        <label className="label text-lg text-gray-500 font-semibold">Pickup Location</label>
                        <input type="text" name="location" value={formData.location} onChange={handleChange} className="input w-full" placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka" required />
                        <label className="label text-lg text-gray-500 font-semibold">Preferred Pickup Date</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} className="input w-full" placeholder="e.g., House 12, Road 5, Dhanmondi, Dhaka" required />
                        <label className="label">
                        <input type="checkbox" className="checkbox" required />
                        <p className="font-semibold">I agree to the terms and conditions and confirm that <br /> the donated items are in good condition.</p>
                        </label>
                        <button className="btn bg-orange-600 text-white mt-4">Confirm Donation</button>
                    </fieldset>
                   </form>
                </div>
    );
};

export default DonationForm;