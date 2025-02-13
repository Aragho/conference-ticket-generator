import React, { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function AttendeeDetails() {
  const [specialRequestLabel, setSpecialRequestLabel] =
    useState("Special Request?");
  const [imageUrl, setImageUrl] = useState(""); 
  const [uploading, setUploading] = useState(false); 

  // Function to update label based on screen size
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setSpecialRequestLabel("About the Project");
    } else {
      setSpecialRequestLabel("Special Request?");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImageUrl(data.secure_url);
      setUploading(false);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#041b20] p-4">
      <div className="bg-[#041b20] w-full max-w-[700px] h-auto border border-[#072e35] rounded-3xl mt-14 p-6 relative">
        <div className="text-[#818e91] flex justify-between">
          <div className="text-xl">Attendee Details</div>
          <h6>Step 2/3</h6>
        </div>
        <div className="relative w-full mt-4 h-2 bg-gray-700 rounded-full">
          <div className="absolute top-0 left-0 h-2 bg-[#24A0B5] w-2/3 rounded-full"></div>
        </div>

        <div className="bg-[#0c2428] w-full max-w-[530px] border border-[#02191D] rounded-3xl mt-10 p-6 mx-auto">
          <div className="w-full border border-[#0E464F] rounded-lg flex flex-col items-center justify-center p-4 mb-6 relative">
            <h5 className="text-[#818e91] w-full text-left">
              Upload Profile Photo
            </h5>

            <div className="w-full mt-8 bg-[#041b20]  rounded-lg flex flex-col items-center justify-center p-4 mb-6 relative  text-white text-center">
            
              <div className="w-full h-[150px]  mt-7 p-2"></div>

              <div className=" border border-[#2096aa]  rounded-lg absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-[220px] h-[250px] flex items-center justify-center">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="bg-[#0e464f] w-[220px] h-[250px] flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-500 hover:bg-[#107580] transition-all">
                    <AiOutlineCloudUpload className="text-3xl text-white mb-2" />
                    <p className="text-sm text-gray-300 text-center">
                      {uploading
                        ? "Uploading..."
                        : "Drag & drop or click to upload"}
                    </p>
                  </div>
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </div>
            </div>

            {imageUrl && (
              <div className="mt-4">
                <img
                  src={imageUrl}
                  alt="Uploaded Avatar"
                  className="w-24 h-24 rounded-full border border-gray-500"
                />
              </div>
            )}
          </div>

        
          <div className="w-full border border-gray-700 mt-6"></div>

        
          <div className="mt-6 max-w-[500px] w-full">
            <h5 className="text-[#818e91] mb-2">Enter your name</h5>
            <input
              type="text"
              className="w-full h-[40px] bg-transparent border border-[#072e35] rounded-lg text-white px-3 outline-none"
            />

          
            <h5 className="text-[#818e91] mt-4 mb-2">Enter your email</h5>
            <div className="relative">
              <input
                type="email"
                className="w-full h-[40px] bg-transparent border border-[#072e35] rounded-lg text-white pl-10 pr-3 outline-none"
                placeholder="Enter your email"
              />
              <HiOutlineMail className="absolute left-3 top-3 text-gray-400 text-xl" />
            </div>

            
            <h5 className="text-[#818e91] mt-4 mb-2">{specialRequestLabel}</h5>
            <textarea
              className="w-full h-[100px] bg-transparent border border-[#072e35] rounded-lg text-white px-3 py-2 outline-none resize-none"
              placeholder={`Type your ${specialRequestLabel.toLowerCase()} here...`}
            ></textarea>
          </div>

          
          <div className="flex flex-col md:flex-row gap-4 mt-6 w-full">
            <button className="w-full h-[40px] border border-gray-700 text-white rounded-lg flex items-center justify-center text-lg font-bold">
              Back
            </button>
            <button className="w-full h-[40px] bg-[#24A0B5] text-white rounded-lg flex items-center justify-center text-lg font-bold">
              Get My Free Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
