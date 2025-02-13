import React from "react";
import { GrLocationPin } from "react-icons/gr";

export default function TicketSelection() {
  const tickets = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#041b20] p-4">
      <div className="bg-[#041b20] w-full max-w-[700px] border border-[#072e35] rounded-3xl mt-14 p-6 relative">
        <div className="text-[#818e91] flex justify-between">
          <div className="text-xl">Ticket Selection</div>
          <h6>Step 1/3</h6>
        </div>
        <div className="relative w-full mt-4 h-2 bg-gray-700 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-[#24A0B5] w-1/3 rounded-full"></div>
        </div>

        <div className="bg-[#0c2428] w-full max-w-[530px] border border-[#02191D] rounded-3xl mt-10 p-6 mx-auto">
          <div className="w-full border border-[#0E464F] rounded-lg flex flex-col items-center justify-center p-4">
            <h1 className="text-white text-4xl font-road-rage">
              Techember Fest '25
            </h1>
            <h6 className="text-gray-300 text-center mt-2">
              Join us for an unforgettable experience at <br /> [Event Name]!
              Secure your spot now.
            </h6>
            <div className="flex items-center text-gray-300 mt-3">
              <GrLocationPin className="text-red-600 text-xl mr-2" />
              <span>📍 [Event Location] || March 15, 2025 | 7:00 PM</span>
            </div>
          </div>
          <div className="w-full mt-6 border border-gray-700"></div>

          <div className="mt-5">
            <h5 className="text-[#818e91]">Select Ticket Type:</h5>
            <div className="bg-[#02191d] mt-5 w-full md:max-w-[400px] border border-[#072e35] rounded-lg flex flex-col items-center justify-center mx-auto p-4">
              <div className="flex flex-col md:flex-row gap-4 w-full">
                {[
                  {
                    type: "Free",
                    price: "Regular Access",
                    count: "20/52",
                    bg: "bg-[#12464e]",
                  },
                  { type: "$150", price: "VIP Access", count: "20/52" },
                  { type: "$250", price: "VVIP Access", count: "20/52" },
                ].map(({ type, price, count, bg = "" }, i) => (
                  <div
                    key={i}
                    className={`border border-[#072e35] rounded-lg w-full md:w-[120px] h-[120px] flex flex-col items-center justify-center p-3 ${bg}`}
                  >
                    <h1 className="text-white text-xl">{type}</h1>
                    <h6 className="text-gray-300 text-sm mt-2">{price}</h6>
                    <h6 className="text-gray-400 text-xs">{count}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h5 className="text-[#818e91] mb-2">Number of Tickets:</h5>
            <div className="border border-[#072e35] rounded-lg w-full h-[40px] flex items-center justify-center">
              <select className="bg-transparent text-white outline-none w-full px-3">
                {tickets.map((number) => (
                  <option key={number} className="bg-[#072e35]">
                    {number}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
            <button className="w-full h-[40px] border border-gray-700 text-white rounded-lg flex items-center justify-center text-lg font-bold">
              Cancel
            </button>
            <button className="w-full h-[40px] bg-[#24A0B5] text-white rounded-lg flex items-center justify-center text-lg font-bold">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
