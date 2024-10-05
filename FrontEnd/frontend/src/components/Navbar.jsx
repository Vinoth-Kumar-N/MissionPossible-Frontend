import React from 'react'
import {User2 , CircleX } from 'lucide-react'
import {useState , useRef} from 'react'

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
            vacation: vacation.current.value
        };
        try {
            const response = await axios.post(url, formData);
            if (response.status === 201) {
                alert('Message sent successfully!');
                nameRef.current.value = '';
                emailRef.current.value = '';
                phoneRef.current.value = '';
                placeRef.current.value = '';
                dateref.current.value = '';
                people.current.value = '';
                vacation.current.value = '';
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the message.');
        }
    };
  const [visible, setVisible] = useState(false);
  return (
    <>
    <div className='w-screen h-auto z-0 bg-[#657cba] flex  text-white justify-between rounded-lg'>
        <div className='flex m-3'>
            <p>Trip Planner</p>
        </div>
        <div className='flex m-3 space-x-3'>
            <ul className='flex space-x-3'>
                <li className='hover:underline'>For booking</li>
                <li className='hover:underline'>About us</li>
                <li className='hover:underline' onClick={() => setVisible(true)} >Contact</li>
            </ul>
            <div className='w-8 h-8 rounded-full bg-orange-500 justify-center items-center flex'>
            <User2 className='rounded-full  '/>
            </div>
        </div>
    </div>
    {
      visible && (
      <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center">
        <div className="h-[65%] w-[40%] p-[5%] rounded-2xl bg-red z-50 flex flex-col  bg-white  shadow-lg">
            <div className='flex justify-between mx-[3%]'>
              <h2 className="text-2xl font-semibold text-neutral-700 mb-4 ">Contact Us</h2>
                <CircleX className='text-red-500 items-center cursor-pointer' onClick={() => setVisible(false)} />
            </div>
            <form onSubmit={handleSubmit}>
                <p className='text-red-500 mb-4'>*All fields are mandatory</p>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Enter your name *"
                        type="text"
                        name="name"
                        ref={nameRef}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Enter your Phone Number *"
                        name="phone"
                        id="phone"
                        type="tel"
                        ref={phoneRef}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Enter your Email ID *"
                        name="email"
                        id="email"
                        type="email"
                        ref={emailRef}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <input
                        className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300'
                        placeholder='Travel Destination *'
                        name='place'
                        id='place'
                        type='text'
                        ref={placeRef}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300'
                        placeholder='Travel Date'
                        type='date'
                        name='date'
                        id='date'
                        ref={dateref}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300"
                        placeholder="Number of People *"
                        type="number"
                        name="people"
                        id="people"
                        ref={people}
                        required
                    />
                </div>
                <div className="mb-4">
                    <select
                        className='w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-700 transition duration-300'
                        name='vacation'
                        id='vacation'
                        ref={vacation}
                        required
                    >
                        <option value=''>Select Vacation Type *</option>
                        <option value='Family'>Family</option>
                        <option value='Friends'>Friends</option>
                        <option value='Solo'>Solo</option>
                        <option value='Honeymoon'>Honeymoon</option>
                        <option value='Corporate'>Corporate</option>
                    </select>
                </div>
                <div className="flex justify-center">
                    <button
                        className="px-5 py-2 bg-neutral-700 text-white rounded-3xl hover:neutral-700 transition duration-300"
                        type="submit">Submit & Enquiry now
                    </button>
                </div>
            </form>
        </div>
    </div>

      )
    }
    </>
  )
}

export default Navbar