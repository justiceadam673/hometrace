import React, { useEffect, useState } from "react";
import "../styles/landingpage.css";
import "../styles/mobile.landing.css";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const LandingPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
  return (
    <div>
      <nav
        className={`navbar transition-all duration-300 ${
          showNavbar ? "top-0" : "-top-20"
        }`}
        style={{ position: "fixed", left: 0, width: "100%", zIndex: 50 }}
      >
        <div className='navicon'>
          <img
            src='/49ef9b39aa9b95c5a5eaf147a214633535b4b45b.png'
            alt='HomeTrace logo'
            className='navicon1'
          />
          <div className='navicontext font- '>HomeTrace</div>
        </div>

        <ul className='navlistelement'>
          <li className='navelement'>
            <a href='#home' className='navelement'>
              Home
            </a>
          </li>
          <li className='navelement'>
            <a href='#about' className='navelement'>
              About
            </a>
          </li>
          <li className='navelement'>
            <a href='#explore' className='navelement'>
              Explore
            </a>
          </li>
          <li className='navelement'>
            <a href='#faqs' className='navelement'>
              FAQ's
            </a>
          </li>
        </ul>

        <div className='navbuttonlist'>
          <NavLink
            to='/'
            className='navbutton1  text-center '
            style={{ border: "1px solid #2c1669", backgroundColor: "white" }}
          >
            Get Started
          </NavLink>
          <NavLink to={"/AdminUIp"} className='navbutton2 text-center '>
            Agent
          </NavLink>
        </div>

        <div className='hamburger sm:block lg:hidden'>
          <Icon
            icon='majesticons:menu'
            style={{ fontSize: "2rem", color: "#000000" }}
          />
        </div>
      </nav>
      <div className='herosec' id='home'>
        <div className='flex flex-col gap-[27px]'>
          <h1 className='herotext'>
            We verify the agents <br />
            You just find your perfect home.
          </h1>
          <h5 className='herotext2'>
            Every home is checked by us, that's the HomeTrace standard.
          </h5>
        </div>
        <div className='herosearchdiv'>
          <form action='search' className='relative'>
            <input
              type='search'
              className='herosearch'
              placeholder='Address, Zip/Postal Code, Local government'
            />
            <div className='absolute top-[8px] right-3 w-[52px] h-[52px] bg-black text-white p-[14px] rounded-[50%] flex justify-center items-center '>
              <Icon icon={"uil:search"} width={24} height={24} className='' />
            </div>
          </form>
        </div>
      </div>

      <section className='aboutus' id='about'>
        <h2>About Us</h2>
      </section>
      <section className='aboutdiv flex justify-center '>
        <div>
          <h3 className='abouttext1'>Real Properties, Backed by Trust</h3>
          <h4 className='abouttext2'>
            In a space crowded with false listings and unreliable deals,
            <br /> we're here to change the standard. Every property on <br />
            HomeTrace goes through a verification process we confirm its <br />
            details, inspect the documents, and ensure it's real before it{" "}
            <br />
            ever appears on our site. <br />
            Whether you're buying or renting, we help you move forward <br />
            with confidence because every listing you see has been <br />
            checked, not just posted.
          </h4>
          <button className='aboutusbutton'>Read More</button>
        </div>
        <img
          src='/images/2645d8d71ac9ffe333632e45a1d287ecddcb8af0.jpg'
          alt='About HomeTrace'
          className='aboutimage'
        />
      </section>

      <div className='whyhometrace font-bold '>Why HomeTrace</div>
      <section className='whyustext  '>
        <div className='why1'>
          <div className='why1element1 bg-[#f1eede] w-[54px] rounded-[50%] p-[90px] '>
            <div className='why1element1icon'>
              <Icon
                icon={"hugeicons:time-management-circle"}
                width={30}
                height={30}
                className='text-black/65'
              />
            </div>
          </div>
          <div className='why1element2'>Exclusive Listing Management</div>
          <div className='why2element3'>
            All listings are generated and managed <br />
            by our in-house team for <br />
            quality control.
          </div>
        </div>
        <div className='why1'>
          <div className='why1element1 bg-[#f1eede] w-[54px] rounded-[50%] p-[90px] '>
            <div className='why1element1icon'>
              <Icon
                icon={"wi:time-1"}
                width={30}
                height={30}
                className='text-black/65'
              />
            </div>
          </div>
          <div className='why2element2'>Real-time Listing Oversight</div>
          <div className='why2element3'>
            Listings are continuously monitored <br />
            and internally reviewed for accuracy <br />
            and currency.
          </div>
        </div>
        <div className='why1'>
          <div className='why1element1 bg-[#f1eede] w-[54px] rounded-[50%] p-[90px] '>
            <div className='why1element1icon'>
              <Icon
                icon={"ph:money-wavy-light"}
                width={30}
                height={30}
                className='text-black/65'
              />
            </div>
          </div>
          <div className='why2element2'>Verified Agents and Properties</div>
          <div className='why2element3'>
            We rigorously verify all agents and <br />
            properties to prevent fraud <br />
            and build trust.
          </div>
        </div>
        <div className='why1'>
          <div className='why1element1 bg-[#f1eede] w-[54px] rounded-[50%] p-[90px] '>
            <div className='why1element1icon  '>
              <Icon
                icon={"fluent:agents-16-regular"}
                width={30}
                height={30}
                className='text-black/65'
              />
            </div>
          </div>
          <div className='why2element2'>Verified Agents and Properties</div>
          <div className='why2element3'>
            We rigorously verify all agents and <br />
            properties to prevent fraud <br />
            and build trust.
          </div>
        </div>
      </section>

      <section className='explore' id='explore'>
        <h2 className='exploretext'>
          <span>Explore Our</span> Verified Properties
        </h2>
        <section className='exploreimages'>
          <div className='firstbox'>
            <img
              src='/images/9101a43c3747801a071b3835752092858c404a60.jpg'
              alt='4-Bedroom Duplex'
              className='explore1element1'
            />
            <div className='explore1element2'>
              <div className='explore1element2text'>4-Bedroom Duplex</div>
              <div className='explore1element2icondiv'>
                <Icon
                  icon={"mdi:verified"}
                  width={28}
                  height={28}
                  className='text-[#0027D3]'
                />
              </div>
            </div>
            <div className='explore1element3'>
              <div className='explore1element3icondiv'>
                <Icon
                  icon={"weui:location-outlined"}
                  className=' w-[15px] h-[15px]  '
                />
              </div>
              <div className='explore1element3text'>
                Rayfield Resort Road, Plateau state
              </div>
            </div>
            <div className='explore1element4'>
              <div className='explore1element4icondiv'>
                <Icon icon={"si:money-line"} className='w-[15px] h-[15px] ' />
              </div>
              <div className='explore1element4text text-black/65 '>
                ₦70 Million
              </div>
            </div>
            <div className='explore1element5'></div>
          </div>

          <div className='firstbox'>
            <img
              src='/images/4c07a61efd6554c90b53689da8fee44ce43047d0.jpg'
              alt='3-Plot of Land'
              className='explore1element1'
            />
            <div className='explore1element2'>
              <div className='explore1element2text'>3-Plot of Land</div>
              <div className='explore1element2icondiv'>
                <Icon
                  icon={"mdi:verified"}
                  width={28}
                  height={28}
                  className='text-[#0027D3]'
                />
              </div>
            </div>
            <div className='explore1element3'>
              <div className='explore1element3icondiv'>
                <Icon
                  icon={"weui:location-outlined"}
                  className=' w-[15px] h-[15px]  '
                />
              </div>
              <div className='explore1element3text'>
                Gugurat Junction, Plateau state
              </div>
            </div>
            <div className='explore1element4'>
              <div className='explore1element4icondiv'>
                <Icon icon={"si:money-line"} className='w-[15px] h-[15px] ' />
              </div>
              <div className='explore1element4text text-black/65 '>
                ₦3.5 Million
              </div>
            </div>
            <div className='explore1element5'></div>
          </div>

          <div className='firstbox'>
            <img
              src='/images/633c7391344ecf1f08f371cfc063a81909212eb9.jpg'
              alt='Self contain Apartment'
              className='explore1element1'
            />
            <div className='explore1element2'>
              <div className='explore3element2text'>Self contain Apartment</div>
              <div className='explore1element2icondiv'>
                <Icon
                  icon={"mdi:verified"}
                  width={28}
                  height={28}
                  className='text-[#0027D3]'
                />
              </div>
            </div>
            <div className='explore1element3'>
              <div className='explore1element3icondiv'>
                <Icon
                  icon={"weui:location-outlined"}
                  className=' w-[15px] h-[15px]  '
                />
              </div>
              <div className='explore1element3text'>
                Behind ECWA Staff, Plateau state
              </div>
            </div>
            <div className='explore1element4'>
              <div className='explore1element4icondiv'>
                <Icon icon={"si:money-line"} className='w-[15px] h-[15px] ' />
              </div>
              <div className='explore1element4text text-black/65 '>
                ₦5 Million
              </div>
            </div>
          </div>
        </section>
        <div className='properties'>
          <button className='moreproperties'>
            <div>Explore More Properties</div>
          </button>
        </div>
      </section>
      <section className='flex flex-col w-full justify-center mx-auto '>
        <div className='test'>
          <div className='testimonies'>TESTIMONIES</div>
        </div>
        <div className='testimoniescards max-w-[1247px] '>
          <div className='testimoniescard1'>
            <div className='testimoniescard11'>
              <img
                src='/images/bd9c8ac3854068fbca13c133cb219bcedb8ee6d1.jpg'
                alt='Fridah Samuel'
                className='testimoniescard1icon'
              />
              <div className='testimoniescard1text'>Fridah Samuel</div>
              <div className='testimoniescard1rate'>
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
              </div>
            </div>
            <div className='testimoniescard12'>
              Since I started using HomeTrace, managing listings <br /> and
              leads has been effortless. My sales have <br /> increased, and my
              clients are happier <br />
              <p className='faridah'> Faridah Samuel</p>
            </div>
            <div></div>
          </div>
          <div className='testimoniescard1'>
            <div className='testimoniescard11'>
              <img
                src='/images/362b82ec677bf68227e09761b815ecc3dc995c65.jpg'
                alt='Sophia Emma R.'
                className='testimoniescard1icon'
              />
              <div className='testimoniescard1text'>Sophia Emma R.</div>
              <div className='testimoniescard1rate'>
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
              </div>
            </div>
            <div className='testimoniescard12'>
              Since I started using HomeTrace, managing listings <br /> and
              leads has been effortless. My sales have <br /> increased, and my
              clients are happier <br />
              <p className='faridah'> Sophia Emma R.</p>
            </div>
            <div></div>
          </div>
          <div className='testimoniescard1'>
            <div className='testimoniescard11'>
              <img
                src='/images/c25c14c0927d06b373b07eb74d82a83e75198ba1.jpg'
                alt='Daniel K'
                className='testimoniescard1icon'
              />
              <div className='testimoniescard1text'>Daniel K</div>
              <div className='testimoniescard1rate'>
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
                <Icon
                  icon={"material-symbols:star"}
                  className=' w-[18px] h-[18px] text-[#FFAE00] '
                />
              </div>
            </div>
            <div className='testimoniescard12'>
              Since I started using HomeTrace, managing listings <br /> and
              leads has been effortless. My sales have <br /> increased, and my
              clients are happier <br />
              <p className='faridah'>Daniel K</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>
      <section id='faqs'>
        <div className='faq'>Frequently Asked Questions (FAQ)</div>
        <div className='dropdowns'>
          <div className='faqdropdown'>
            <p className='faqtext'>What is HomeTrace?</p>
            <div className='faqdropicondiv'>
              <Icon
                icon={"iconamoon:arrow-up-2"}
                className=' w-[40px] h-[40px] '
              />
            </div>
          </div>
          <div className='faqdropdown'>
            <p className='faqtext'>Are all listings verified?</p>
            <div className='faqdropicondiv'>
              <Icon
                icon={"iconamoon:arrow-up-2"}
                className=' w-[40px] h-[40px] '
              />
            </div>
          </div>
          <div className='faqdropdown'>
            <p className='faqtext'>How do I contact an agent?</p>
            <div className='faqdropicondiv'>
              <Icon
                icon={"iconamoon:arrow-up-2"}
                className=' w-[40px] h-[40px] '
              />
            </div>
          </div>
          <div className='faqdropdown'>
            <p className='faqtext'>What if I don't find a property I like?</p>
            <div className='faqdropicondiv'>
              <Icon
                icon={"iconamoon:arrow-up-2"}
                className=' w-[40px] h-[40px] '
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className='footerelements place-items-center max-md:flex-col'>
          <div className='footerelements1'>
            <div className='footericon'>
              <img
                src='/49ef9b39aa9b95c5a5eaf147a214633535b4b45b.png'
                alt='HomeTrace logo'
                className='footericon1'
              />
              <div className='footericontext'>HomeTrace</div>
            </div>
            <div className='footerelements12'>
              Welcome to HomeTrace Verified homes. Real peace of mind.
            </div>
          </div>

          {/* <div className='footerelements2'>
            <div className='footercontact'>contact</div>
          </div> */}
          <div className='footerelements3 flex flex-col gap-[50px]  '>
            <div className='footerelements31'>(234) 9483920192</div>
            <div className='footerelements32'>hometrace@gmail.com</div>
            <div className='footericon2'>
              <div className='footericons1'>
                <Icon icon={"ri:facebook-fill"} className='text-white' />
              </div>
              <div className='footericons2'>.</div>
              <div className='footericons3'>.</div>
            </div>
          </div>
          <div className='footerelements4'>
            <div className='footerelements41'>About</div>
            <div className='footerelements41'>FAQ</div>
            <div className='footerelements41'>Explore</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
