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

const About = () => {
    return (
        <div>
            <section className="about-us-section bg-white px-6 py-24">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <img src={svg} className="absolute left-[3%] z-[1] w-[43%]" />
                    <div className='z-10'>
                        <h3 className="text-[#36c0fa] text-lg font-extrabold mb-2">ABOUT US</h3>
                        <h1 className="text-6xl font-extrabold leading-snug mb-6">
                            We deliver the mission-critical IT services that move the world.
                        </h1>
                        <button className="text-white bg-[#36c0fa] px-6 py-3 rounded-full hover:bg-[#3dafe0] transition">
                            GET STARTED
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src={image}
                            alt="Office team"
                            className="rounded-lg shadow-lg"
                        />

                        <p className="col-span-2 text-gray-600 leading-relaxed mt-4">
                            Founded in 2012, Thynk has established itself as a leading
                            technology consulting firm in India. Our company offers a wide range
                            of technology solutions to clients in both the IT and non-IT
                            industries. Our team consists of experts who bring a unique blend of
                            technical know-how and domain knowledge to each project, providing
                            our clients with an unbeatable advantage.
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
                    <h2 className="text-center text-4xl font-bold mb-8">Our Mission</h2>
                    <div className="flex flex-wrap items-center">
                        <div className="w-full lg:w-7/12">
                            <div className="flex flex-wrap">
                                <div className="w-full md:w-5/12 flex flex-col items-center">
                                    <div className="mb-8">
                                        <img
                                            src={icon1}
                                            alt="Vision Icon"
                                            className="w-16 h-16 mb-2"
                                        />
                                        <p className="text-xl font-semibold text-center">Our Vision</p>
                                    </div>
                                    <div className="mb-8">
                                        <img
                                            src={icon2}
                                            alt="Mission Icon"
                                            className="w-16 h-16 mb-2"
                                        />
                                        <p className="text-xl font-semibold text-center">Our Mission</p>
                                    </div>
                                    <div>
                                        <img
                                            src={icon3}
                                            alt="Values Icon"
                                            className="w-16 h-16 mb-2"
                                        />
                                        <p className="text-xl font-semibold text-center">Our Values</p>
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
                            <div>
                                <p className="text-5xl font-extrabold text-gray-900 mb-4">
                                    Our Company Values
                                </p>
                                <p className="text-gray-600">
                                    Embodying Our Core Values - The Guiding Principles for
                                    Excellence and Integrity.
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
                                <p className="text-gray-600">
                                    Thynk prioritizes transparency in everything we do, building
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
                                <p className="text-gray-600">
                                    Thynk exceeds expectations and delivers on commitments with
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
                                <p className="text-gray-600">
                                    Thynk delivers quality IT services and consulting, tailored
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