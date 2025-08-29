import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const LandingPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [overLay, setOverLay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  function handleOverLay() {
    setOverLay(!overLay);
  }

  return (
    <div className='font-sans'>
      {/* Navigation */}
      <nav
        className={`flex items-center justify-between px-6 py-4 bg-white shadow-md transition-all duration-300 ${
          showNavbar ? "top-0" : "-top-20"
        }`}
        style={{ position: "fixed", left: 0, width: "100%", zIndex: 50 }}
      >
        <div className='flex items-center'>
          <img
            src='/49ef9b39aa9b95c5a5eaf147a214633535b4b45b.png'
            alt='HomeTrace logo'
            className='w-10 h-10 mr-2'
          />
          <div className='text-xl font-bold text-indigo-900'>HomeTrace</div>
        </div>

        <ul className='hidden lg:flex text-[20px] space-x-8'>
          <li>
            <HashLink
              smooth
              to='#home'
              className='text-gray-700 font-medium hover:text-indigo-700 transition-colors'
            >
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to='#about'
              className='text-gray-700 hover:text-indigo-700 transition-colors'
            >
              About
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to='#explore'
              className='text-gray-700 hover:text-indigo-700 transition-colors'
            >
              Explore
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to='#faqs'
              className='text-gray-700 hover:text-indigo-700 transition-colors'
            >
              FAQ's
            </HashLink>
          </li>
        </ul>

        <div className='hidden lg:flex space-x-4'>
          <NavLink
            to='/'
            className='px-6 py-2 rounded-[15px] border border-[#2C1669] text-[#2C1669] hover:bg-indigo-900 hover:text-white transition-colors'
          >
            Get Started
          </NavLink>
          <NavLink
            to='/AdminUIp'
            className='px-6 py-2 rounded-[15px] bg-[#2C1669] text-white hover:bg-indigo-900 transition-colors'
          >
            Agent
          </NavLink>
        </div>

        <button onClick={handleOverLay} className='lg:hidden'>
          <Icon icon='majesticons:menu' className='text-3xl text-black' />
        </button>
        {}
      </nav>

      {/* Hero Section */}
      <div
        className=' relative h-screen pb-16 flex justify-center items-center bg-gradient-to-b from-indigo-50 to-white'
        id='home'
      >
        <div>
          <img
            src='../images/155d941f1aed26a80636c05b689ec39cdeb0c06d.jpg'
            alt=''
            className='absolute w-full h-full inset-0 '
          />
          <div className='absolute inset-0 bg-gradient-to-r from-black/75 to-black/0 '></div>
        </div>
        <div className='max-w-6xl mx-auto text-center z-30 flex flex-col items-center'>
          <div className='flex flex-col gap-6 mb-10'>
            <h1 className='text-4xl text-white md:text-5xl lg:text-6xl font-bold leading-tight'>
              We verify the agents <br />
              You just find your perfect home.
            </h1>
            <h5 className='text-xl text-white '>
              Every home is checked by us, that's the HomeTrace standard.
            </h5>
          </div>
          <div className='w-full max-w-2xl'>
            <form className='relative'>
              <input
                type='search'
                className='w-full py-4 pl-6 pr-20 rounded-full border h-[67px] bg-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm'
                placeholder='Address, Zip/Postal Code, Local government'
              />
              <button
                type='submit'
                className='absolute top-[8%] right-[2%] w-14 h-14 bg-black text-white rounded-full flex justify-center items-center hover:bg-gray-800 transition-colors'
              >
                <Icon icon='uil:search' width={24} height={24} />
              </button>
            </form>
          </div>
          {overLay && (
            <div className='fixed top-0 left-0 w-full h-full bg-black/70 z-40'>
              <div className='absolute top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col space-y-6'>
                {/* Close button */}
                <button
                  onClick={handleOverLay}
                  className='self-end text-3xl text-gray-600'
                >
                  ✕
                </button>

                {/* Links */}
                <HashLink
                  smooth
                  to='#home'
                  className='text-gray-700 text-lg hover:text-indigo-700'
                  onClick={handleOverLay}
                >
                  Home
                </HashLink>
                <HashLink
                  smooth
                  to='#about'
                  className='text-gray-700 text-lg hover:text-indigo-700'
                  onClick={handleOverLay}
                >
                  About
                </HashLink>
                <HashLink
                  smooth
                  to='#explore'
                  className='text-gray-700 text-lg hover:text-indigo-700'
                  onClick={handleOverLay}
                >
                  Explore
                </HashLink>
                <HashLink
                  smooth
                  to='#faqs'
                  className='text-gray-700 text-lg hover:text-indigo-700'
                  onClick={handleOverLay}
                >
                  FAQ's
                </HashLink>

                {/* Buttons */}
                <NavLink
                  to='/'
                  className='px-6 py-2 rounded-[15px] border border-[#2C1669] text-[#2C1669] hover:bg-indigo-900 hover:text-white transition-colors'
                  onClick={handleOverLay}
                >
                  Get Started
                </NavLink>
                <NavLink
                  to='/AdminUp'
                  className='px-6 py-2 rounded-[15px] bg-[#2C1669] text-white hover:bg-indigo-900 transition-colors'
                  onClick={handleOverLay}
                >
                  Agent
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* About Section */}
      <section className='py-16 px-6 bg-white' id='about'>
        <h2 className='text-3xl font-bold text-center mb-12'>About Us</h2>
        <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12'>
          <div className='lg:w-1/2'>
            <h3 className='text-2xl font-bold mb-6'>
              Real Properties, Backed by Trust
            </h3>
            <h4 className='text-gray-600 mb-8 leading-relaxed'>
              In a space crowded with false listings and unreliable deals, we're
              here to change the standard. Every property on HomeTrace goes
              through a verification process we confirm its details, inspect the
              documents, and ensure it's real before it ever appears on our
              site. <br />
              <br />
              Whether you're buying or renting, we help you move forward with
              confidence because every listing you see has been checked, not
              just posted.
            </h4>
            <button className='px-8 py-3 bg-indigo-800 text-white rounded-md hover:bg-indigo-700 transition-colors'>
              Read More
            </button>
          </div>
          <div className='lg:w-1/2'>
            <img
              src='/images/2645d8d71ac9ffe333632e45a1d287ecddcb8af0.jpg'
              alt='About HomeTrace'
              className='rounded-lg shadow-md w-full'
            />
          </div>
        </div>
      </section>

      {/* Why HomeTrace Section */}
      <section className='py-16 px-6 bg-gray-50'>
        <h2 className='text-3xl font-bold text-center mb-12'>Why HomeTrace</h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            {
              icon: "hugeicons:time-management-circle",
              title: "Exclusive Listing Management",
              description:
                "All listings are generated and managed by our in-house team for quality control.",
            },
            {
              icon: "wi:time-1",
              title: "Real-time Listing Oversight",
              description:
                "Listings are continuously monitored and internally reviewed for accuracy and currency.",
            },
            {
              icon: "ph:money-wavy-light",
              title: "Verified Agents and Properties",
              description:
                "We rigorously verify all agents and properties to prevent fraud and build trust.",
            },
            {
              icon: "fluent:agents-16-regular",
              title: "Dedicated Support Team",
              description:
                "Our support team is always available to assist you with any questions or concerns.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow'
            >
              <div className='w-20 h-20 rounded-full bg-amber-50 flex items-center justify-center mb-6'>
                <Icon
                  icon={item.icon}
                  width={30}
                  height={30}
                  className='text-amber-600'
                />
              </div>
              <h3 className='font-bold mb-3'>{item.title}</h3>
              <p className='text-gray-600'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Properties Section */}
      <section className='py-16 px-6 bg-white' id='explore'>
        <h2 className='text-3xl font-bold text-center mb-4'>
          <span className='text-indigo-800'>Explore Our</span> Verified
          Properties
        </h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {[
            {
              image: "/images/9101a43c3747801a071b3835752092858c404a60.jpg",
              title: "4-Bedroom Duplex",
              location: "Rayfield Resort Road, Plateau state",
              price: "₦70 Million",
            },
            {
              image: "/images/4c07a61efd6554c90b53689da8fee44ce43047d0.jpg",
              title: "3-Plot of Land",
              location: "Gugurat Junction, Plateau state",
              price: "₦3.5 Million",
            },
            {
              image: "/images/633c7391344ecf1f08f371cfc063a81909212eb9.jpg",
              title: "Self contain Apartment",
              location: "Behind ECWA Staff, Plateau state",
              price: "₦5 Million",
            },
          ].map((property, index) => (
            <div
              key={index}
              className='rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
            >
              <img
                src={property.image}
                alt={property.title}
                className='w-full h-56 object-cover'
              />
              <div className='p-5'>
                <div className='flex justify-between items-center mb-3'>
                  <h3 className='font-bold'>{property.title}</h3>
                  <Icon
                    icon='mdi:verified'
                    width={24}
                    height={24}
                    className='text-blue-600'
                  />
                </div>
                <div className='flex items-center text-gray-600 mb-2'>
                  <Icon icon='weui:location-outlined' className='mr-2' />
                  <span>{property.location}</span>
                </div>
                <div className='flex items-center text-gray-600'>
                  <Icon icon='si:money-line' className='mr-2' />
                  <span>{property.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <button className='px-8 py-3 bg-indigo-800 text-white rounded-md hover:bg-indigo-700 transition-colors'>
            Explore More Properties
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='py-16 px-6 bg-gray-50'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-center text-lg font-semibold text-indigo-800 mb-3'>
            TESTIMONIES
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                image: "/images/bd9c8ac3854068fbca13c133cb219bcedb8ee6d1.jpg",
                name: "Fridah Samuel",
                testimony:
                  "Since I started using HomeTrace, managing listings and leads has been effortless. My sales have increased, and my clients are happier.",
              },
              {
                image: "/images/362b82ec677bf68227e09761b815ecc3dc995c65.jpg",
                name: "Sophia Emma R.",
                testimony:
                  "Since I started using HomeTrace, managing listings and leads has been effortless. My sales have increased, and my clients are happier.",
              },
              {
                image: "/images/c25c14c0927d06b373b07eb74d82a83e75198ba1.jpg",
                name: "Daniel K",
                testimony:
                  "Since I started using HomeTrace, managing listings and leads has been effortless. My sales have increased, and my clients are happier.",
              },
            ].map((testimonial, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <div className='flex items-center mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-14 h-14 rounded-full object-cover mr-4'
                  />
                  <div>
                    <h3 className='font-bold'>{testimonial.name}</h3>
                    <div className='flex'>
                      {[...Array(4)].map((_, i) => (
                        <Icon
                          key={i}
                          icon='material-symbols:star'
                          className='text-yellow-500'
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className='text-gray-600 mb-2'>{testimonial.testimony}</p>
                <p className='font-semibold'>{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-16 px-6 bg-white' id='faqs'>
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-3xl font-bold text-center mb-12'>
            Frequently Asked Questions (FAQ)
          </h2>
          <div className='space-y-4'>
            {[
              "What is HomeTrace?",
              "Are all listings verified?",
              "How do I contact an agent?",
              "What if I don't find a property I like?",
            ].map((question, index) => (
              <div key={index} className='border-b border-gray-200 pb-4'>
                <div className='flex justify-between items-center cursor-pointer py-3'>
                  <p className='text-lg font-medium'>{question}</p>
                  <Icon
                    icon='iconamoon:arrow-up-2'
                    className='text-xl text-gray-500'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-indigo-900 text-white py-12 px-6'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <div className='flex items-center mb-4'>
              <img
                src='/49ef9b39aa9b95c5a5eaf147a214633535b4b45b.png'
                alt='HomeTrace logo'
                className='w-10 h-10 mr-2'
              />
              <div className='text-xl font-bold'>HomeTrace</div>
            </div>
            <p className='text-gray-300'>
              Welcome to HomeTrace Verified homes. Real peace of mind.
            </p>
          </div>

          <div>
            <h3 className='font-bold mb-4'>Contact</h3>
            <p className='mb-2'>(234) 9483920192</p>
            <p className='mb-4'>hometrace@gmail.com</p>
            <div className='flex space-x-4'>
              <Icon icon='ri:facebook-fill' className='text-xl' />
              <Icon icon='mdi:twitter' className='text-xl' />
              <Icon icon='mdi:instagram' className='text-xl' />
            </div>
          </div>

          <div>
            <h3 className='font-bold mb-4'>Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#about' className='hover:underline'>
                  About
                </a>
              </li>
              <li>
                <a href='#faqs' className='hover:underline'>
                  FAQ
                </a>
              </li>
              <li>
                <a href='#explore' className='hover:underline'>
                  Explore
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
