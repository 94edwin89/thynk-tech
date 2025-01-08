import React from 'react'
import svg from '../assets/svgs/lines-bg.svg'
import image from '../assets/svgs/image.png'
import chess from "../assets/svgs/chess.png"
import icon1 from '../assets/icons/icon-1.svg'
import icon2 from '../assets/icons/icon-2.svg'
import icon3 from '../assets/icons/icon-3.svg'
import icon4 from '../assets/icons/icon-4.svg'
import icon5 from '../assets/icons/icon-5.svg'
import icon6 from '../assets/icons/icon-6.svg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <section className="about-us-section bg-white px-6 py-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img src={svg} className="absolute left-[3%] z-[1] w-[43%]" />
                    <div className='z-10'>
                        <h3 className="text-[#3d77da] text-lg font-extrabold mb-2">ABOUT US</h3>
                        <h1 className="text-5xl font-light leading-[60px] mb-6">
                            <span className='font-serif text-6xl'>W</span>e deliver the mission-critical IT services that move the world.
                        </h1>
                        <button className="text-white bg-primary px-6 py-3 rounded-full hover:bg-[#3dafe0] transition">
                            <Link to="/contact-us">GET STARTED</Link>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={image}
                            alt="Office team"
                            className="rounded-lg shadow-lg"
                        />

                        <p className="col-span-2 text-gray-600 font-light leading-relaxed mt-4">
                        Thynk Technologies is a premier technology consulting firm in India, delivering innovative solutions tailored to the needs of both IT and non-IT industries. With a team of skilled professionals combining technical expertise and industry insights, we empower our clients to achieve exceptional results and stay ahead in a competitive landscape.
                        </p>
                    </div>
                </div>
            </section>
            <section
                data-aos="fade-up"
                data-aos-duration="900"
                className=" bg-gray-900 text-white pt-8"
            >
                <div className="mx-auto">
                    <h2 className="text-center text-6xl font-light mb-8">Our Mission</h2>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-5/12 flex flex-col gap-4 items-center">
                                    <div className="mb-8">
                                        <img
                                            src={icon1}
                                            alt="Vision Icon"
                                            className="w-16 h-16 mb-2"
                                        />
                                        {/* <p className="text-xl font-light text-center">Our Vision</p> */}
                                    </div>
                                    <div className="mb-8">
                                        <img
                                            src={icon2}
                                            alt="Mission Icon"
                                            className="w-16 h-16 mb-2"
                                        />
                                        {/* <p className="text-xl font-light text-center">Our Mission</p> */}
                                    </div>
                                    <div>
                                        <img
                                            src={icon3}
                                            alt="Values Icon"
                                            className="w-16 h-16 mb-2"
                                        />
                                        {/* <p className="text-xl font-light text-center">Our Values</p> */}
                                    </div>
                                </div>
                                <div className="w-full md:w-7/12 pl-4">
                                    <div className="mb-8">
                                        <p className="text-xl font-bold">Our Vision</p>
                                        <p className="text-gray-300">
                                            To be a trusted technology management, consulting, and
                                            outsourcing company for midsize and small organizations in
                                            the world.
                                        </p>
                                    </div>
                                    <div className="mb-8">
                                        <p className="text-xl font-bold">Our Mission</p>
                                        <p className="text-gray-300">
                                            To empower each client with a complete understanding of
                                            their technology options and a customized roadmap to
                                            achieve their goals.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-bold">Our Values</p>
                                        <p className="text-gray-300">
                                            We prioritize innovation, excellence, and customer
                                            satisfaction. Our values drive us to deliver top-quality
                                            solutions that exceed expectations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Chess Image */}
                        <div className="w-full lg:w-5/12 mt-8 lg:mt-0">
                            <img
                                src={chess}
                                alt="Chess Strategy"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section
                data-aos="fade-up"
                data-aos-duration="1100"
                className="aos-init aos-animate bg-gray-100 py-12"
            >
                <div className="container mx-auto">
                    <div className="flex flex-wrap">
                        {/* Title Section */}
                        <div className="w-full lg:w-3/12 px-4 mb-8 lg:mb-0">
                            <div className='flex flex-col h-full justify-center'>
                                <p className="text-5xl font-light text-center text-gray-900 mb-4">
                                    Our Company Values
                                </p>
                                <p className="text-gray-600">
                                Living Our Core Values – The Foundation of <strong>Excellence & Integrity</strong>  in Everything We Do.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 px-4 mb-8">
                            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                                <img
                                    src={icon4}
                                    alt="Transparency Icon"
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <p className="text-xl font-semibold mb-2">Transparency</p>
                                <p className="text-gray-600 text-justify hyphens-auto">
                                    Thynk Technologies prioritizes transparency in everything we do, building
                                    strong relationships with clients through honesty and openness.
                                    We work collaboratively to provide the best solutions for their
                                    business needs. Count on us to keep you informed and involved
                                    throughout the entire process.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 px-4 mb-8">
                            <div className="bg-white shadow-lg rounded-lg p-6  flex flex-col h-full text-center">
                                <img
                                    src={icon5}
                                    alt="Commitment Icon"
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <p className="text-xl font-semibold mb-2">Commitment</p>
                                <p className="text-gray-600 text-justify hyphens-auto">
                                    Thynk Technologies exceeds expectations and delivers on commitments with
                                    a proven track record of successful projects and satisfied
                                    clients. Partner with us for an unwavering commitment to your
                                    success.
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-3/12 px-4 mb-8">
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col h-full text-center">
                                <img
                                    src={icon6}
                                    alt="Over Delivery Icon"
                                    className="w-12 h-12 mx-auto mb-4"
                                />
                                <p className="text-xl font-semibold mb-2">Over Delivery</p>
                                <p className="text-gray-600 text-justify hyphens-auto">
                                    Thynk Technologies delivers  quality IT services and consulting, tailored
                                    to meet your unique needs. Our collaborative approach involves
                                    you every step of the way. With a decade of experience and the
                                    latest technologies, we exceed your expectations to help you
                                    achieve your business goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default About