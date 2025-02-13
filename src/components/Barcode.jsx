import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

// Function to generate a random ticket code
const generateRandomTicketCode = () => {
  // Generate a random string of numbers and letters
  return Math.random().toString(36).substring(2, 12).toUpperCase(); // Random 10 characters
};

const Barcode = () => {
  const svgRef = useRef();

  const ticketCode = generateRandomTicketCode();

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, ticketCode, {
        format: "CODE128",
        displayValue: true,  
        width: 2,            
        height: 40,          
        textAlign: "center", 
        fontSize: 18,       
        margin: 10,          
      });
    }
  }, [ticketCode]);

  return (
    <div className="flex flex-col items-center">
      <svg ref={svgRef}></svg>
      {/* <div className="mt-2 text-gray-300">{ticketCode}</div> */}
    </div>
  );
};

export default Barcode;
