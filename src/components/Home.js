import React, { useEffect, useState } from "react";
import "../styles/home.style.css";

// import img7 from '../assets/image 878.svg'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Accordion from "./Accordion";
import discount from "../assets/Vector (7).svg";
import group1 from "../assets/Group 3.svg";
import group2 from "../assets/Group 5.svg";
import group3 from "../assets/Group 7.svg";

import BoxHeader from "./BoxHeader";
import PlanCard from "./PlanCard";
import arrowfor from "../assets/reshot-icon-right-arrow-UCA8NGYZDJ.svg";
import SubscribeCard from "./SubscribeCard";
import SubCard from "./SubCard";

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 767, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const accordionItems = [
    { title: "Section 1", content: "Content for section 1" },
    { title: "Section 2", content: "Content for section 2" },
    { title: "Section 3", content: "Content for section 3" },
  ];

  const boxData = [
    {
      id: 1,
      label: "10,000+",
      stat: "Series",
      className: "content",
    },
    {
      id: 2,
      label: "No Ads",
      className: "ads",
    },
    {
      id: 1,
      label: "Unlimited Content",
      className: "unlimited",
    },
  ];

  const planItems = [
    {
      id: 1,
      amount: "₹ 99",
      time: "month",
      totalMonth: "1",
      isActive: true,
      isSpecialPrice: false,
      prevAmt: "₹ 199",
    },
    {
      id: 2,
      amount: "₹ 249",
      time: "Quarter",
      totalMonth: "3",
      isActive: false,
      isSpecialPrice: true,
      prevAmt: "₹ 299",
      discount: "70% Off",
    },
    {
      id: 3,
      amount: "₹ 799",
      time: "Annual",
      totalMonth: "12",
      isActive: false,
      isSpecialPrice: false,
      prevAmt: "₹ 1999",
      //    discount: "70% Off"
    },
  ];

  const subsPerks = [
    {
      id: 1,
      img: group2,
      title: "Unlimited Series",
      content:
        "Unlock karein 10 hazaar se zada series aur dekhein HD quality me",
    },
    {
      id: 2,
      img: group3,
      title: "Learn everyday",
      content: "Karein khud ko future ready tips and tricks seekh ke",
    },
    {
      id: 3,
      img: group2,
      title: "Unlimited Series",
      content:
        "Unlock karein 10 hazaar se zada series aur dekhein HD quality me",
    },
    {
      id: 4,
      img: group3,
      title: "Learn everyday",
      content: "Karein khud ko future ready tips and tricks seekh ke",
    },
  ];

  const [premiumPlans, setPremiumPlans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_JWT_TOKEN' with the actual JWT token
        const jwtToken =
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxNDUyMTA3MH0.GByZySAAPXHAW7_FD59uWZ71AsBy60HD-me_ej8QTYUr3KYH75QSURmlHQKUIRz2o0IZLY9Sj2wxps_16MhEOA";

        const response = await fetch(
          "https://api.seekhoapp.com/api/v1.6/premium/premium-plans/?source=tab",
          {
            method: "GET",
            headers: {
              Authorization: `jwt ${jwtToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("data", data);
        // Update state with the fetched data
        setPremiumPlans(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        // Handle errors as needed
      }
    };

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures that the effect runs only once after the initial render

  return (
    <div className="home-container">
      <div className="img-frame"></div>
      <section className="box-wrapper">
        {boxData?.map((box, idx) => (
          <BoxHeader box={box} key={idx} />
        ))}
      </section>
      <h2 className="section-heading">1 SAAL KE LIE UNLOCK KAREIN</h2>

      <section className="plan-container">
        {premiumPlans &&
          premiumPlans?.plans?.map((plan, idx) => (
            <PlanCard plan={plan} key={idx} />
          ))}
      </section>

      <section>
        <h2 className="section-heading">Discount</h2>
        <div className="discount-card">
          <div className="">
            <div className="discount-first">
              <div className="discount-inner-first">
                <img src={discount} alt="tick" width={35}></img>
                <h3>Lucky offer</h3>
              </div>
              <h4>Saved 400</h4>
            </div>
          </div>
          <div className="discount-card-content">
            <p>Coupon Applied</p>
            <span className="remove-text">Remove</span>
          </div>
        </div>
      </section>

      <SubscribeCard />

      <h2 className="section-heading">{premiumPlans?.benefits?.title}</h2>
      <section>
        <div className="subs-cont">
          <div className="sub-box">
            {premiumPlans?.benefits?.benefits?.map((sub, idx) => (
              <SubCard key={idx} sub={sub} />
            ))}
          </div>
        </div>
      </section>

      <h2 className="section-heading">{premiumPlans?.series_item?.title}</h2>
      <section>
        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {premiumPlans &&
              premiumPlans?.series_item?.series_list?.length > 0 &&
              premiumPlans?.series_item?.series_list?.map((imageUrl, index) => {
                return (
                  <div>
                    <div className="slider" key={index}>
                      <img src={imageUrl?.image} alt="movie" />
                    </div>
                    <div className="creator-intro">
                      <strong>{imageUrl?.display_title}</strong>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </section>

      <h2 className="section-heading">{premiumPlans?.creator_item?.title}</h2>
      <section>
        <div className="parent">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {premiumPlans &&
              premiumPlans?.creator_item?.creator_list?.length > 0 &&
              premiumPlans?.creator_item?.creator_list?.map(
                (imageUrl, index) => {
                  return (
                    <div className="slider" key={index}>
                      <div className="round-img">
                        <img src={imageUrl?.avatar} alt="movie" />
                      </div>
                      <div className="creator-intro">
                        <strong>{imageUrl?.name}</strong>
                        <p>{imageUrl?.profession}</p>
                      </div>
                    </div>
                  );
                }
              )}
          </Carousel>
        </div>
      </section>

      <h2 className="section-heading">{premiumPlans?.user_item?.title}</h2>
      <section>
        <div className="parent">
          <Carousel
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 4, // optional, default to 1.
              },
              tablet: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
                slidesToSlide: 3, // optional, default to 1.
              },
              mobile: {
                breakpoint: { max: 767, min: 464 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
              },
            }}
            autoPlay={true}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={false}
            dotListClass="custom-dot-list-style"
          >
            {premiumPlans &&
              premiumPlans?.user_item?.user_list?.length > 0 &&
              premiumPlans?.user_item?.user_list.map((imageUrl, index) => {
                return (
                  <div className="slider" key={index}>
                    <div className="reviews-card">
                      <div className="round-img">
                        <img
                          src={imageUrl?.avatar}
                          alt="movie"
                          width={120}
                          height={120}
                        />
                      </div>
                      <div className="review-text">
                        <div className="creator-intro">
                          <p>{imageUrl?.name}</p>
                          <p>{imageUrl?.profession}</p>
                        </div>
                        <p>{imageUrl?.review}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Carousel>
        </div>
      </section>
      <h2 className="section-heading">{premiumPlans?.faq?.title}</h2>

      <section>
        {/* {premiumPlans && premiumPlans?.faq?.length>0 &&  premiumPlans?.faq?.faq_list?.map((faq,idx)=>( */}
        <Accordion items={premiumPlans?.faq?.faq_list} />
      </section>
    </div>
  );
};

export default Home;
