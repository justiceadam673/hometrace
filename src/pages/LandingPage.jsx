import React from "react";
import "../styles/landingpage.css";
// import "../styles/mobile.landing.css";

const LandingPage = () => {
  return (
    <div>
      <nav>
        <div className='navicon'>
          <div className='navicon1'></div>
          <div className='navicontext'>HomeTrace</div>
        </div>
        <div className='navlist'>
          <ul className='navlistelement'>
            <li className='navelement'>
              <h4>Home</h4>
            </li>
            <li className='navelement'>
              <h4>About</h4>
            </li>
            <li className='navelement'>
              <h4>Explore</h4>
            </li>
            <li className='navelement'>
              <h4>FAQ's</h4>
            </li>
          </ul>
        </div>
        <div className='navbuttonlist'>
          <button
            className='navbutton1'
            style={{ border: "1px solid #2c1669", backgroundColor: "white" }}
          >
            Sign Up
          </button>
          <button className='navbutton2'>Sign In</button>
        </div>
        <div className='hamburger'></div>
      </nav>

      {/* Hero Section */}
      <div className='herosec'>
        <div>
          <h1 className='herotext'>
            We verify the agents <br /> You just find your perfect home.
          </h1>
          <h5 className='herotext2'>
            Every home is checked by us, that's the HomeTrace standard.
          </h5>
        </div>
        <div className='herosearchdiv'>
          <form action='search'>
            <input
              type='search'
              className='herosearch'
              placeholder='Address, Zip/Postal Code, Local government'
            />
          </form>
        </div>
      </div>

      {/* About Us */}
      <section className='aboutus'>
        <h2>About Us</h2>
      </section>
      <section className='aboutdiv'>
        <div>
          <h3 className='abouttext1'>Real Properties, Backed by Trust</h3>
          <h4 className='abouttext2'>
            In a space crowded with false listings and unreliable deals, <br />
            we're here to change the standard. Every property on <br />
            HomeTrace goes through a verification process – we confirm its{" "}
            <br />
            details, inspect the documents, and ensure it’s real before it{" "}
            <br />
            ever appears on our site. <br />
            Whether you're buying or renting, we help you move forward <br />
            with confidence because every listing you see has been <br />
            checked, not just posted.
          </h4>
          <button className='aboutusbutton'>Read More</button>
        </div>
        <div className='aboutimage'></div>
      </section>

      {/* Why HomeTrace */}
      <div className='whyhometrace'>
        <h2>Why HomeTrace</h2>
      </div>
      <section className='whyustext'>
        <div className='why1'>
          <div className='why1element1'></div>
          <div className='why1element2'>Exclusive Listing Management</div>
          <div className='why1element3'>
            All listings are generated and managed <br />
            by our in-house team for <br />
            quality control.
          </div>
        </div>
        <div className='why2'>
          <div className='why2element1'></div>
          <div className='why2element2'>Real-time Listing Oversight</div>
          <div className='why2element3'>
            Listings are continuously monitored <br />
            and internally reviewed for accuracy <br />
            and currency.
          </div>
        </div>
        <div className='why3'>
          <div className='why3element1'></div>
          <div className='why3element2'>Verified Agents and Properties</div>
          <div className='why3element3'>
            We rigorously verify all agents and <br />
            properties to prevent fraud <br />
            and build trust.
          </div>
        </div>
        <div className='why4'>
          <div className='why4element1'></div>
          <div className='why4element2'>Verified Agents and Properties</div>
          <div className='why4element3'>
            We rigorously verify all agents and <br />
            properties to prevent fraud <br />
            and build trust.
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className='explore'>
        <h2 className='exploretext'>
          <span>Explore Our</span> Verified Properties
        </h2>
        <section className='exploreimages'>
          {/* Property 1 */}
          <div className='firstbox'>
            <div className='explore1element1'></div>
            <div className='explore1element2'>
              <div className='explore1element2text'>4-Bedroom Duplex</div>
              <div className='explore1element2icon'></div>
            </div>
            <div className='explore1element3'>
              <div className='explore1element3icon'></div>
              <div className='explore1element3text'>
                Rayfield Resort Road, Plateau state
              </div>
            </div>
            <div className='explore1element4'>
              <div className='explore1element4icon'></div>
              <div className='explore1element4text'>₦70 Million</div>
            </div>
            <div className='explore1element5'></div>
          </div>

          {/* Property 2 */}
          <div className='secondbox'>
            <div className='explore2element1'></div>
            <div className='explore1element2'>
              <div className='explore1element2text'>3-Plot of Land</div>
              <div className='explore2element2icon'></div>
            </div>
            <div className='explore1element3'>
              <div className='explore2element3icon'></div>
              <div className='explore1element3text'>
                Gugurat Junction, Plateau state
              </div>
            </div>
            <div className='explore1element4'>
              <div className='explore2element4icon'></div>
              <div className='explore1element4text'>₦3.5 Million</div>
            </div>
            <div className='explore1element5'></div>
          </div>

          {/* Property 3 */}
          <div className='thirdbox'>
            <div className='explore3element1'></div>
            <div className='explore3element2'>
              <div className='explore1element2text'>Self contain Apartment</div>
              <div className='explore3element2icon'></div>
            </div>
            <div className='explore1element3'>
              <div className='explore3element3icon'></div>
              <div className='explore1element3text'>
                Behind ECWA Staff, Plateau state
              </div>
            </div>
            <div className='explore1element4'>
              <div className='explore3element4icon'></div>
              <div className='explore1element4text'>₦5 Million</div>
            </div>
          </div>
        </section>
      </section>

      {/* More Properties */}
      <div className='properties'>
        <button className='moreproperties'>
          <div>Explore More Properties</div>
        </button>
      </div>

      {/* Testimonials */}
      <section>
        <div className='test'>
          <div className='testimonies'>TESTIMONIES</div>
        </div>
        <div className='testimoniescards'>
          {/* Testimony 1 */}
          <div className='testimoniescard1'>
            <div className='testimoniescard11'>
              <div className='testimoniescard1icon'></div>
              <div className='testimoniescard1text'>Fridah Samuel</div>
              <div className='testimoniescard1rate'>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
              </div>
            </div>
            <div className='testimoniescard12'>
              Since I started using HomeTrace, managing listings <br /> and
              leads has been effortless. My sales have <br /> increased, and my
              clients are happier <br />
              <p className='faridah'>Faridah Samuel</p>
            </div>
          </div>

          {/* Testimony 2 */}
          <div className='testimoniescard1'>
            <div className='testimoniescard11'>
              <div className='testimoniescard2icon'></div>
              <div className='testimoniescard1text'>Sophia Emma R.</div>
              <div className='testimoniescard1rate'>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
              </div>
            </div>
            <div className='testimoniescard12'>
              Since I started using HomeTrace, managing listings <br /> and
              leads has been effortless. My sales have <br /> increased, and my
              clients are happier <br />
              <p className='faridah'>Sophia Emma R.</p>
            </div>
          </div>

          {/* Testimony 3 */}
          <div className='testimoniescard1'>
            <div className='testimoniescard11'>
              <div className='testimoniescard3icon'></div>
              <div className='testimoniescard1text'>Daniel K</div>
              <div className='testimoniescard1rate'>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
                <div className='rateicon'></div>
              </div>
            </div>
            <div className='testimoniescard12'>
              Since I started using HomeTrace, managing listings <br /> and
              leads has been effortless. My sales have <br /> increased, and my
              clients are happier <br />
              <p className='faridah'>Daniel K</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className='faq'>Frequently Asked Questions (FAQ)</div>
        <div className='dropdowns'>
          <div className='faqdropdown'>
            <p className='faqtext'>What is HomeTrace?</p>
          </div>
          <div className='faqdropdown'>
            <p className='faqtext'>Are all listings verified?</p>
          </div>
          <div className='faqdropdown'>
            <p className='faqtext'>How do I contact an agent?</p>
          </div>
          <div className='faqdropdown'>
            <p className='faqtext'>What if I don’t find a property I like?</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className='footerelements'>
          <div className='footerelements1'>
            <div className='footericon'>
              <div className='footericon1'></div>
              <div className='footericontext'>HomeTrace</div>
            </div>
            <div className='footerelements12'>
              Welcome to HomeTrace Verified homes. Real peace of mind.
            </div>
          </div>

          <div className='footerelements2'>
            <div className='footercontact'>contact</div>
          </div>
          <div className='footerelements3'>
            <div className='footerelements31'>(234) 9483920192</div>
            <div className='footerelements32'>hometrace@gmail.com</div>
            <div className='footericon2'>
              <div className='footericons1'>.</div>
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
