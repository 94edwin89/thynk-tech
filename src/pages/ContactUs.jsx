import React from 'react'
import CountryCodeDropdown from '../components/UI/CountryCodeDropdown'
import ReactCountryFlag from 'react-country-flag'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'

const ContactUs = () => {

    return (
        <div className="contact-page-container px-8 py-24 ml-8 bg-white">
            <h2 className='font-bold text-6xl mb-8'>Let`s talk!</h2>
            <div className="contact-info flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
                <div className="contact-details text-gray-800">
                    <p className="font-medium text-gray-500">Landline</p>
                    <p>
                        <ReactCountryFlag
                            countryCode="IN"
                            svg
                            style={{
                                width: "1.2rem",
                                height: "1rem",
                                marginRight: "0.5rem",
                            }}
                        />
                        +91 484 402 6866
                    </p>
                    <p className="font-medium mt-4 text-gray-500">Email</p>
                    <p>info@thynktechnolagies.com</p>
                </div>
                <div className="contact-form w-full md:w-2/3">
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Full Name*"
                                    className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black w-full outline-none"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black w-full outline-none"
                                    required
                                />
                            </div>
                            <div className="relative mb-6 flex items-center gap-2 col-span-2 md:col-span-1">
                                <CountryCodeDropdown />
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black flex-grow outline-none"
                                    required
                                />
                            </div>
                            <div className="relative mb-6 flex items-center gap-2 col-span-2 md:col-span-1">
                                <input
                                    type="text"
                                    placeholder="What are you looking for?"
                                    className="border-0 border-b border-gray-300 focus:ring-0 focus:border-black w-full outline-none"
                                />
                            </div>
                        </div>
                        <textarea
                            placeholder="Additional Info"
                            className="p-2 border-0 border-b focus:outline-none focus:ring-0 border-gray-300 rounded w-full mb-4"
                            rows="4"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#36c0fa] text-white py-2 px-6 rounded hover:bg-[#38a5d4]"
                        >
                            LET'S TALK
                        </button>
                    </form>
                </div>
            </div>
            <hr className="border-gray-300 my-8" />
            <div className="office-address text-sm text-gray-600">
                <div className="flex justify-center gap-[30%]">
                    <div>
                        <h4 className="font-medium">INDIA:</h4>
                        <p className='mt-2'>
                            Office No.10-B1, Trans Asia Cyber Park, Infopark SEZ Phase-II,
                            <br />
                            Ambalamedu P.O, Kochi, Kerala
                        </p>
                    </div>
                    <div className="social-media ">
                        <h4 className="font-medium">Social Media:</h4>
                        <div className="flex gap-5 mt-2">
                            <a
                                href="#"
                                className="text-[#1a485c] hover:text-gray-600 flex items-center"
                            >
                                <FaFacebookF size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-[#1a485c] hover:text-gray-600 flex items-center"
                            >
                                <FaTwitter size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-[#1a485c] hover:text-gray-600 flex items-center"
                            >
                                <FaLinkedinIn size={24} />
                            </a>
                            <a
                                href="#"
                                className="text-[#1a485c] hover:text-gray-600 flex items-center"
                            >
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs