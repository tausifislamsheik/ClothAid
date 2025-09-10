import { Helmet } from "react-helmet";
import { useRef } from "react";
import { FaTshirt, FaMoneyBillWave, FaClock, FaBullhorn, FaUsers, FaHome } from "react-icons/fa";

const HowToHelp = () => {

    const helpRef = useRef(null);

  const scrollToHelp = () => {
    helpRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const faqs = [
    { q: "What type of clothes can I donate?", a: "You can donate gently used clothes like jackets, sweaters, t-shirts, and pants. Please avoid torn or unusable items." },
    { q: "How do I schedule a pickup?", a: "You can schedule a pickup through our contact form or by calling our hotline." },
    { q: "Can I donate from outside Dhaka?", a: "Yes! You can send donations via courier or support us financially online." },
  ];

    return (
        <div>
            <Helmet>
                <title>How to Help | ClothAid</title>
            </Helmet>
            <div className="w-full">
      <section
        className="bg-center items-center justify-center text-center"
      >
        <div className="bg-black bg-opacity-50 p-6 pt-28 rounded-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Together, We Can Make a Difference
          </h1>
          <p className="text-lg text-gray-200 mt-10">
            Your simple act of kindness can keep someone warm, bring hope to <br /> families, and inspire change in the community.
          </p>
          <button
            onClick={scrollToHelp}
            className="mt-20 mb-10 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow hover:bg-orange-500 transition cursor-pointer"
          >
            Start Helping Now
          </button>
        </div>
      </section>

      <section ref={helpRef} className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Ways You Can Help</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            { icon: <FaTshirt size={40} />, title: "Donate Clothes", desc: "Give your gently used clothes to those in need." },
            { icon: <FaMoneyBillWave size={40} />, title: "Monetary Donation", desc: "Support our campaigns with financial aid." },
            { icon: <FaClock size={40} />, title: "Volunteer Time", desc: "Join our events and help in distribution." },
            { icon: <FaBullhorn size={40} />, title: "Spread the Word", desc: "Share our mission with friends & family." },
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow text-center hover:scale-105 transition">
              <div className="flex justify-center text-orange-600 mb-4">{item.icon}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <button className="px-4 py-2 border border-orange-600 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition cursor-pointer">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white">
        <div className="grid md:grid-cols-3 text-center gap-6 max-w-5xl mx-auto">
          <div>
            <FaTshirt size={40} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">10,000+</h3>
            <p>Clothes Donated</p>
          </div>
          <div>
            <FaHome size={40} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p>Families Helped</p>
          </div>
          <div>
            <FaUsers size={40} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">2,000+</h3>
            <p>Volunteers Engaged</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 max-w-5xl mx-auto">
          {[
            { step: "Collect", desc: "Gather clothes you no longer use." },
            { step: "Donate", desc: "Drop them off at our center or schedule a pickup." },
            { step: "Deliver Hope", desc: "See how your contribution changes lives." },
          ].map((s, i) => (
            <div key={i} className="bg-white py-10 px-5 rounded-xl shadow w-64 text-center">
              <h3 className="text-2xl font-bold text-orange-600">Step {i + 1}</h3>
              <p className="mt-2 font-semibold">{s.step}</p>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Stories of Impact</h2>
        <div className="max-w-2xl mx-auto bg-white shadow p-6 rounded-lg text-center">
          <p className="text-gray-600 italic">
            “Thanks to ClothAid, my children now have warm clothes for the winter. We are truly grateful.”
          </p>
          <p className="font-bold mt-4">- Rahima, Dhaka</p>
        </div>
      </section>

      <section className="py-16 bg-orange-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to make a difference?</h2>
        <p className="mt-2">Start by donating today!</p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition cursor-pointer">
            Donate Clothes
          </button>
          <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition cursor-pointer">
            Donate Money
          </button>
          <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition cursor-pointer">
            Become a Volunteer
          </button>
        </div>
      </section>

      <section className="p-16 bg-gray-50 max-w-4xl mx-auto mt-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
        {faqs.map((faq, i) => (
          <details key={i} className="mb-4 bg-white shadow rounded-lg p-4">
            <summary className="font-semibold cursor-pointer">{faq.q}</summary>
            <p className="mt-2 text-gray-600">{faq.a}</p>
          </details>
        ))}
      </section>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-300"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-orange-300"
            rows="4"
          ></textarea>
          <button className="w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-500 transition cursor-pointer">
            Send Message
          </button>
        </form>
      </section>
    </div>
        </div>
    );
};

export default HowToHelp;