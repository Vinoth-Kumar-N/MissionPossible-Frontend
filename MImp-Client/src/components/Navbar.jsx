import React, { useState, useRef } from "react";
import { User2, CircleX, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const url = import.meta.env.VITE_CONTACT_API;

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const placeRef = useRef(null);
  const dateref = useRef(null);
  const people = useRef(null);
  const vacation = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      place: placeRef.current.value,
      date: dateref.current.value,
      people: people.current.value,
      vacation: vacation.current.value,
    };
    try {
      const response = await axios.post(url, formData);
      if (response.status === 201) {
        alert("Message sent successfully!");
        // Clear the form fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        placeRef.current.value = "";
        dateref.current.value = "";
        people.current.value = "";
        vacation.current.value = "";
      }
    } catch (error) {
      alert("An error occurred while sending the message.");
    }
  };

  const [visible, setVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className="w-full h-[4rem] text-lg text-white bg-slate-500 shadow-md flex justify-between items-center rounded-b-lg sticky top-0 z-30">
        <div className="flex items-center">
          <Link to={"/"} className="p-3 rounded-md">
            <p className="font-bold">Trip Planner</p>
          </Link>
        </div>
        <div className="lg:hidden p-3 cursor-pointer" onClick={() => setSidebarOpen(true)}>
          <Menu className="text-white" size={30} />
        </div>
        <div className="hidden lg:flex">
          <ul className="flex gap-8 mr-10">
            <li className="rounded-md">
              <Link to={"/register"}>For Booking</Link>
            </li>
            <li className="rounded-md">
              <Link to={"/aboutus"}>About us</Link>
            </li>
            <li className="rounded-md" onClick={() => setVisible(true)}>
              Contact
            </li>
            <li className="rounded-md">
              <Link to={"./adminlogin"}>
                <User2 className="rounded-full" />
              </Link>
            </li>
          </ul>
        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleSidebarClose}></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-[70%] bg-slate-700 p-6 z-50 transform transition-transform duration-300 ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:hidden`}
        >
          <div className="flex justify-between mb-8">
            <p className="font-bold text-xl text-white">Trip Planner</p>
            <CircleX className="text-red-500 cursor-pointer" onClick={handleSidebarClose} size={30} />
          </div>
          <ul className="flex flex-col gap-6">
            <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white border-b border-white">
              <Link to="/register" onClick={handleSidebarClose}>For Booking</Link>
            </li>
            <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white border-b border-white">
              <Link to="/aboutus" onClick={handleSidebarClose}>About us</Link>
            </li>
            <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white border-b border-white" onClick={() => { setVisible(true); handleSidebarClose(); }}>
              Contact
            </li>
            <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white">
              <div className="flex flex-col"> <User2 className="rounded-full" /> Admin Login</div>
            </li>
          </ul>
        </div>
      </div>

      {visible && (
        <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50">
          <div className="w-[90%] md:w-[40%] px-[3%] py-[2%] rounded-2xl bg-white shadow-lg">
            <div className="px-[3%] flex justify-between items-center mb-2 top-0">
              <h2 className="text-2xl font-semibold text-[#657cba]">Contact Us</h2>
              <CircleX className="text-red-500 cursor-pointer" onClick={() => setVisible(false)} />
            </div>
            <form onSubmit={handleSubmit}>
              <p className="text-red-500 mb-4">*All fields are mandatory</p>
              <div className="mb-4">
                <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300" placeholder="Name *" type="text" ref={nameRef} required />
              </div>
              <div className="mb-4">
                <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300" placeholder="Phone Number *" type="tel" ref={phoneRef} required />
              </div>
              <div className="mb-4">
                <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300" placeholder="Email ID *" type="email" ref={emailRef} required />
              </div>
              <div className="mb-4">
                <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300" placeholder="Travel Destination *" type="text" ref={placeRef} required />
              </div>
              <div className="mb-4">
                <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300" placeholder="Travel Date" type="date" ref={dateref} />
              </div>
              <div className="mb-4">
                <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300" placeholder="Number of People *" type="number" ref={people} required />
              </div>
              <div className="mb-4">
                <select className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300" ref={vacation} required>
                  <option value="">Select Vacation Type *</option>
                  <option value="Family">Family</option>
                  <option value="Friends">Friends</option>
                  <option value="Solo">Solo</option>
                  <option value="Honeymoon">Honeymoon</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>
              <div className="flex justify-center p-[6%]">
                <button className="px-5 py-2 bg-neutral-700 text-white rounded-3xl hover:bg-neutral-500 transition duration-300" type="submit">Submit & Enquiry now</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
