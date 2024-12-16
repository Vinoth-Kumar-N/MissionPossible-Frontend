import { useState, useRef, useEffect } from "react";
import { User2, CircleX, Menu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserdata } from '../services/storageServices.js'
import { isAuthenticated } from "../services/AuthServices";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from '../Context/AuthContext'

const Navbar = () => {
  const { isLoggedOut, logout } = useAuth();
  const url = import.meta.env.VITE_CONTACT_API;
  const navigate = useNavigate();
  // const [isLoggout, setLoggedout] = useState(!isAuthenticated());

  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const placeRef = useRef("");
  const dateref = useRef("");
  const peopleRef = useRef("");
  const vacationRef = useRef("");

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      place: placeRef.current.value,
      date: dateref.current.value,
      people: peopleRef.current.value,
      vacation: vacationRef.current.value,
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
        peopleRef.current.value = "";
        vacationRef.current.value = "";
      }
    } catch (error) {
      alert("An error occurred while sending the message. Please try again.");
    }
  };

  const handleLogout = () => {
    logout();
    sessionStorage.removeItem('userdata');
    setSidebarOpen(false);
    scrollTo(0, 0);
    navigate('/');
  }
  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };
  useEffect(() => {
  }, [isLoggedOut]);


  return (
    <>
      <div className="w-[100%] h-[4rem] text-lg text-white bg-gradient-to-r from-primary to-secondary shadow-md flex justify-between items-center rounded-b-lg sticky top-0 z-30">
        <div className="flex items-center">
          <Link to={"/"} onClick={() => window.scrollTo(0, 0)} className="p-3 rounded-md">
            <p className="font-bold text-3xl ml-7">TravelMate</p>
          </Link>
        </div>
        <div className="sm:hidden p-3 cursor-pointer" onClick={() => setSidebarOpen(true)}>
          {sidebarOpen ? <HiMenuAlt1 size={30} /> : <HiMenuAlt3 size={30} />}
        </div>
        <div className="hidden sm:block">

          <ul className="flex gap-8 mr-10 items-center">
            <li className="rounded-md transition-all ease-in-out duration-700 hover:text-blue-950">
              <Link to={"/"} >Home</Link>
            </li>
            <li className="rounded-md transition-all ease-in-out duration-700 hover:text-blue-950">
              <Link to={"/aboutus"}>About Us</Link>
            </li>
            {!isLoggedOut ? <>
              <li className="h-[40px] rounded-md bg-purple-500 px-4 py-1 bg-gradient-to-r hover:from-slate-500 to-slate-50 cursor-pointer">
                <Link to={"/contact"}>Book Now</Link>
              </li>
            </> : <>

              <Link to={"/register"}>
                <li className="rounded-md transition-all ease-in-out duration-700 hover:text-blue-950">For Booking</li>
              </Link>

            </>
            }
            {!isLoggedOut && <li className="rounded-md cursor-pointer transition-all ease-in-out duration-700 hover:text-blue-950" onClick={() => navigate('/endoutput')}> Best Places</li>}
            {!isLoggedOut && <li className="rounded-md cursor-pointer transition-all ease-in-out duration-700 hover:text-blue-950" onClick={handleLogout}>Logout </li>}

            {!isLoggedOut && <li className="rounded-md flex flex-col items-center">
              <FaUserCircle size={28} className="rounded-full" />
              <span className=" w-auto z-20 text-center">
                Hello! {getUserdata() ? getUserdata().user.name : "Guest"}
              </span>
            </li>}

          </ul>

        </div>

        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-0 z-40" onClick={handleSidebarClose}></div>
        )}

        <div
          className={`fixed top-0 left-0 h-full w-[70%] bg-gradient-to-b from-secondary to-primary p-6 z-50 transform transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden`}
        >
          <div className="flex justify-between mb-8">
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)} className="p-3 rounded-md">
              <p className="font-bold text-3xl" onClick={() => handleSidebarClose()} >TravelMate</p>
            </Link>
            <CircleX className="text-primary cursor-pointer" onClick={handleSidebarClose} size={30} />
          </div>

          <ul className="flex flex-col gap-6">
            {!isLoggedOut && <li className="rounded-md flex flex-col items-center">
              <FaUserCircle size={45} className="rounded-full text-lg" />
              <span className=" w-auto z-20 text-center">
                Hello! {getUserdata() ? getUserdata().user.name : "Guest"}
              </span>
            </li>}
            {!isLoggedOut ? <>
              <Link to={"/contact"}>
                <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white border-b border-white" onClick={() => handleSidebarClose()}>
                  Book Now
                </li>
              </Link>

            </> : <>
              <Link to={"/register"}>
                <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white/95 border-b border-white" onClick={handleSidebarClose} >
                  For Booking
                </li>
              </Link>
            </>}


            <Link to="/aboutus" onClick={handleSidebarClose}>
              <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white/95 border-b border-white">
                About Us
              </li>
            </Link>

            {!isLoggedOut && <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white/95 border-b border-white" onClick={() => { handleSidebarClose(); navigate('/endoutput') }}> Best Places</li>}
            {!isLoggedOut && <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white/95 border-b border-white" onClick={handleLogout}>Logout </li>}

            {isLoggedOut && <Link to="/adminlogin" onClick={handleSidebarClose}>
              <li className="rounded-md bg-slate-600 hover:bg-slate-500 p-4 text-white/90">
                <div className="flex flex-col">
                  <User2 className="rounded-full" /> Admin Login
                </div>
              </li>
            </Link>}
          </ul>

        </div>
      </div >

      {/* {visible && (
        <div className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50 bg-white/75">
          <div className="w-[90%] md:w-[40%] px-[3%] py-[2%] rounded-2xl bg-white shadow-2xl shadow-black">
            <div className="px-[3%] flex justify-between items-center mb-2 top-0">
              <h2 className="text-2xl font-semibold text-[#657cba]">Contact Us</h2>
              <CircleX className="text-red-500 cursor-pointer" onClick={() => setVisible(false)} />
            </div>
            <form onSubmit={handleSubmit}>
              <p className="text-red-500 mb-4">*All fields are mandatory</p>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                  placeholder="Name *"
                  type="text"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                  placeholder="Phone Number *"
                  type="tel"
                  ref={phoneRef}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                  placeholder="Email ID *"
                  type="email"
                  ref={emailRef}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                  placeholder="Travel Destination *"
                  type="text"
                  ref={placeRef}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                  placeholder="Travel Date"
                  type="date"
                  ref={dateref}
                />
              </div>
              <div className="mb-4">
                <input
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                  placeholder="Number of People *"
                  type="number"
                  ref={peopleRef}
                  required
                />
              </div>
              <div className="mb-4">
                <select
                  className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                  ref={vacationRef}
                  required
                >
                  <option value="">Select Vacation Type *</option>
                  <option value="Family">Family</option>
                  <option value="Friends">Friends</option>
                  <option value="Solo">Solo</option>
                  <option value="Honeymoon">Honeymoon</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>
              <div className="flex justify-center p-[6%]">
                <button className="px-5 py-2 bg-neutral-700 text-white rounded-3xl hover:bg-neutral-500 transition duration-300">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )
      } */}
    </>
  );
};

export default Navbar;
