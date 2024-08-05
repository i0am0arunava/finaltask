/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"
import "./sport.css"
import { useState } from 'react'
import wessImage from './wess.png';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FcNeutralTrading } from "react-icons/fc";
import { MdSupportAgent } from "react-icons/md";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="sub1">
        <div className="nav">
          <div className="logo"></div>
          <div className="home"></div>
          <div className="contact"></div>
          <div className="signup">signup</div>
          <div className="signin">signin</div>
        </div>
        <div className="image">
          <div className="left">
            <div className="car"></div>

            <div className="paragr">
              <div className="c1"><p>Welcome to MyFast<span className="highlight">X Partner</span></p></div>
              <div className="c2"> <p>Quick & Reliable Delivery and Logistics   <br />

                <span className="ml">Solution</span></p>
              </div>
              <div className="c3"> <p> At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift, dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.
              </p></div>
            </div>



          </div>
          <div className="a1">
            <div className="ii">
            <FaBitcoin />
            </div>
            <div className="oo">
              <p>Reliable Income </p>
            </div>
            <div className="tt">
              <p>Earn a steady income with consistent delivery requests.</p>
            </div>



          </div>


          <div className="a2">
          <div className="ii">
          <FcNeutralTrading />
            </div>
            <div className="oo">
              <p>Growth opportuninies </p>
            </div>
            <div className="tt">
              <p>Advance your career with regular training and development </p>
            </div>
             </div>

          <div className="a3">
          <div className="ii">
          <SlCalender />
            </div>
            <div className="oo">
              <p>Flexible Schedule </p>
            </div>
            <div className="tt">
              <p>Choose your working hours and balance your personal life.</p>
            </div>
          </div>

          <div className="a4">
          <div className="ii">
          <MdSupportAgent />
            </div>
            <div className="oo">
              <p>Support </p>
            </div>
            <div className="tt">
              <p>Access our dedicated support team whenever you need assistance.</p>
            </div>
          </div>
          <div className="right"> <div className="dotted"></div>
            <div className="down">
              <div className="paragraph">

                <div className="f1"><p>Drive Your Success with MyFastX</p></div>
                <div className="f2"><p>Join Us as a Partner Driver</p></div>
                <div className="f3"><p>Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
                </p></div>
              </div>
              <div className="button"><div className="register"> regiister only in $999</div></div>

            </div>

          </div>

        </div>
      </div>

      <div className="sub2">
        <div ></div>
        <div className="s1">
          <p><b className="boldd">Register Online</b> <br />Fill out our easy online application form and pay the registration fee of Rs. 999</p>
        </div>
        <div className="s2">  <p><b className="boldd">RGet Verified</b> <br />Complete the verification process to ensure you meet our standards.</p></div>
        <div className="s3"><p><b className="boldd">Start Driving</b> <br />Once approved, start accepting delivery requests and earn money</p></div>
        <div className="arrow"></div>
        <div className="image1"></div>
        <div className="steps">
          <div className="work">how it works</div>
          <div className="line">Simple Steps to get Started</div>

        </div>
      </div>
      <div className="sub3">
        <div className="partner">What our partner says</div>
        <div className="ter">Testimonials</div>
        <div className="para anoth">At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services</div>
        <div className="profile"></div>
        <div className="bike"></div>
      </div>

      <div className="sub4">


        <div className="pol">
          <span className="border-span">
            <div className="join">Join the MyFastX Community Today!</div>
            <div className="ready">Ready to Get Started?</div>
            <div className="para">Don't miss out on this incredible opportunity to be part of a leading delivery and logistics platform. Sign up now for just Rs.999 and start driving your way to success with MyFastX!


              <div className="regis">Register</div>
            </div>
            <div className="screen"></div>

          </span>

        </div>
        <div className="sq">
          <div className="freq">Frequently Asked question?</div>
          <div className="got">Got Questions? We’ve Got Answers!</div>
          <div className="table">
            <div className="p1">What types of vehicle are available?</div>
            <div className="p2">how do i get paid ?</div>
            <div className="p3">what areas does MyFastx operate in ?</div>
            <div className="p4">What types of vehicle are available?</div>
            <div className="p5">how do i get paid ?</div>
            <div className="p6">what areas does MyFastx operate in ?</div>
            <div className="i1"><IoIosArrowForward /></div>
            <div className="i2"><IoIosArrowForward /></div>
            <div className="i3"><IoIosArrowForward /></div>
            <div className="i4"><IoIosArrowForward /></div>
            <div className="i5"><IoIosArrowForward /></div>
            <div className="i6"><IoIosArrowForward /></div>
          </div>
        </div>
      </div>


      <div className="sub5">

        <div className="upper-footer">
          <p>Drive your Success with MyFastX</p>
          <h1>Join Us as a Partner Driver</h1>
          <p className="ii-para">Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of
            a dynamic <br />network of drivers. With us, you'll enjoy flexible work hours, competitive earnings, and the
            satisfaction of <br /> delivering smiles across the city.</p>
          <div className="button">Register now for just Rs. 999!</div>
        </div>
        <div className="lower-footer">
          <div className="upper-main">
            <div className="left-half">
              <div className="imge"></div>
              <p>MyFastX is a leading logistics platform that provides hyper-local, on- <br /> demand delivery solutions
                for individuals and businesses. Whether <br />you need a delivery boy for your shop or to ship items
                items within <br /> city, MyFastX is your trusted partner, making delivery effortless and
                <br />convenient. With a mission to revolutionize logistics through <br />innovation and technology,
                MyFastX is committed to providing <br />seamless, end-to-end delivery solutions that exceed customer
                <br /> expectations.
              </p>
              <div className="icone">
                <i className="fa-solid fa-house-chimney"></i>
                <p>Nayagon, Nimi Vihar, Sector 89, Noida Phase 02, Noida</p>
              </div>
              <div className="contact">
                <i className="fa-regular fa-envelope"></i>
                <p>care@myfastx.com <br />+91 8961310988</p><br />
              </div>
            </div>
            <div className="right-half">
              <div className="col-1">
                <h4>Company</h4>
                <p>About Us</p>
                <p>What we Do?</p>
                <p>Investors</p>
                <p>Press Release</p>
                <p>Careers</p>
                <p>Pricing Details</p>
              </div>
              <div className="col-2">
                <h4>Policies</h4>
                <p>Terms And Conditions</p>
                <p>Privacy Policy</p>
                <p>Cookie Policy</p>
                <p>Fraud Disclaimer</p>
              </div>
              <div className="col-3">
                <h4>Help</h4>
                <p>Restricted Items</p>
                <p>Parcel size and weight guide</p>
                <p>Packaging guide</p>
              </div>
              <div className="col-4">
                <h4>Support</h4>
                <p>FAQ</p>
                <p>Customer Care</p>
                <p>Driver Terms and Conditions</p>
                <p>Packaging Instructions</p>
              </div>
            </div>
          </div>
          <div className="last-main">
            <h4>Our Presence</h4>
            <p>Delhi  Noida Ghaziabad  Gurugram  Faridabad  Bahadurgarh  Kolkata</p>
          </div>
          <div className="final-last">
            <p>&copy;2024 MyFastX Technologies Pvt Ltd, All rights reserved</p>
            <p>CIN: U52219UP2023PTC192260</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
