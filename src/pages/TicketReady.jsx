import React from "react";
import Header from "../components/Header";

export default function TicketReady() {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    ticketType: "VIP",
    ticketCount: 2,
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-[#041b20] px-4 sm:px-6 md:px-12">
      
      <Header isAbsolute={true} />

      
      <div className="bg-[#041b20] w-full max-w-md md:max-w-lg lg:max-w-xl border border-[#072e35] rounded-3xl mt-[-100px] p-6 relative shadow-lg">
    
        <div className="bg-[#041b20] w-full border border-[#072e35] rounded-3xl p-6 relative">
          <div className="text-[#818e91] flex justify-between text-sm sm:text-base">
            <div className="text-lg sm:text-xl">Ready</div>
            <h6>Step 3/3</h6>
          </div>
          <div className="relative w-full mt-4 h-2 bg-gray-700 rounded-full">
            <div className="absolute top-0 left-0 h-2 bg-[#24A0B5] w-1/3 rounded-full"></div>
          </div>
        </div>

        
        <div className="flex flex-col items-center text-center mt-8">
          <h1 className="text-xl sm:text-2xl text-white font-semibold">
            Your Ticket is Booked!
          </h1>
          <h6 className="text-gray-300 mt-2 text-sm sm:text-base">
            Check your email for a copy or download it below.
          </h6>
        </div>

        
        <div className="relative w-full max-w-[380px] sm:max-w-[400px] bg-[#072b2f] mt-8 flex flex-col items-center justify-between shadow-lg rounded-xl p-6">
         
          <div className="absolute top-0 left-0 w-[20px] h-[20px] bg-[#041b20] rounded-br-full"></div>
          <div className="absolute top-0 right-0 w-[20px] h-[20px] bg-[#041b20] rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-[20px] h-[20px] bg-[#041b20] rounded-tr-full"></div>
          <div className="absolute bottom-0 right-0 w-[20px] h-[20px] bg-[#041b20] rounded-tl-full"></div>

          <div className="w-full border border-[#24A0B5] rounded-lg flex flex-col items-center text-center p-6">
           
            <h1 className="text-white text-2xl sm:text-3xl font-road-rage">
              Techember Fest '25
            </h1>
            <span className="text-gray-300 text-sm sm:text-base mt-2">
              📍 04 Rumens road, Ikoyi, Lagos
            </span>
            <span className="text-gray-300 text-sm sm:text-base mt-1">
              📅 March 15, 2025 | 7:00 PM
            </span>

            
            <div className="w-20 h-20 mt-4 border-2 border-[#24A0B5] rounded-full flex items-center justify-center text-gray-500">
              No Image
            </div>

            <div className="bg-[#08343c] w-full flex flex-wrap text-gray-300 text-sm sm:text-base mt-4">
              <div className="w-1/2 py-2 px-4 border-b border-r border-[#11444c]">
                <span className="block text-white font-semibold">Name:</span>
                <span>{user.name}</span>
              </div>
              <div className="w-1/2 py-2 px-4 border-b border-[#11444c]">
                <span className="block text-white font-semibold">Email:</span>
                <span>{user.email}</span>
              </div>
              <div className="w-1/2 py-2 px-4 border-r border-b border-[#11444c]">
                <span className="block text-white font-semibold">
                  Ticket Type:
                </span>
                <span>{user.ticketType}</span>
              </div>
              <div className="w-1/2 py-2 px-4 border-b border-[#11444c]">
                <span className="block text-white font-semibold">
                  No. of Tickets:
                </span>
                <span>{user.ticketCount}</span>
              </div>
              <div className="w-full px-4 pt-2 mt-2">
                <span className="block text-white font-semibold">
                  Response:
                </span>
                <p className="text-gray-300 italic mt-1">
                  "{user.response || "No response provided"}"
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-[-10px] top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] bg-[#041b20] rounded-r-full"></div>
          <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 w-[20px] h-[40px] bg-[#041b20] rounded-l-full"></div>
        </div>

        
        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full">
          <button className="w-full sm:w-auto px-6 py-3 border border-gray-700 text-white rounded-lg flex items-center justify-center text-lg font-bold">
            Book Another Ticket
          </button>
          <button className="w-full sm:w-auto px-6 py-3 bg-[#24A0B5] text-white rounded-lg flex items-center justify-center text-lg font-bold">
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
}
