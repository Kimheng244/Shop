import React from 'react'
import { FaMapMarked, FaPhoneAlt, FaRunning } from 'react-icons/fa'

function Contact() {
  return (
    
      <div className="bg-gray-100 py-10 px-5" data-aos="zoom-in" data-aos-duration="1000">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-6">Any questions or remarks? Just write us a message!</p>

        {/* Form */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="px-4 py-2 rounded-full w-full md:w-1/2 bg-gray-200 outline-none"
          />
          <input
            type="text"
            placeholder="Enter your Name"
            className="px-4 py-2 rounded-full w-full md:w-1/2 bg-gray-200 outline-none"
          />
        </div>

        <button className="bg-cyan-500 text-white px-8 py-2 rounded-full hover:bg-cyan-600 transition">
          SUBMIT
        </button>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto bg-white py-10 px-4 rounded-lg shadow-xl">
        <div className="flex flex-col items-center text-center">
          <div className="bg-cyan-500 text-white p-4 rounded-full text-2xl mb-3">
            <FaRunning/>
          </div>
          <h3 className="font-bold text-lg mb-1">ABOUT CLUB</h3>
          <p>Running Guide</p>
          <p>Workouts</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-cyan-500 text-white p-4 rounded-full text-2xl mb-3">
            <FaPhoneAlt/>
          </div>
          <h3 className="font-bold text-lg mb-1">PHONE (LANDLINE)</h3>
          <p>+912 3 567 8987</p>
          <p>+912 5 252 3336</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-cyan-500 text-white p-4 rounded-full text-2xl mb-3">
            <FaMapMarked />
          </div>
          <h3 className="font-bold text-lg mb-1">OUR OFFICE LOCATION</h3>
          <p>The Interior Design Studio Company</p>
          <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
        </div>
      </div>
    </div>
   
    
  )
}

export default Contact
