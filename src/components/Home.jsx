import React, { useState } from 'react';

import linkedin from '../assets/images/linkdin_icon.png'
import giticon from '../assets/images/git_icon.png'
import mansi from '../assets/images/mansi.jpg'
import pave from '../assets/images/pave_ss.png'
import julian from '../assets/images/julian_img.png'
import arrow from '../assets/images/right_arrow_icon.png'
import kids from '../assets/images/kids_school.png'
import instra from '../assets/images/instra_icon.png'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Home = () => {
  const [userData, setUserData] = useState({
    firstName: " ",
    email: " ",
    subject: "testing",
    contact: " ",
    message: " ",

  });
  const [loading, setLoading] = useState(false);

  let name, value;

  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();

    const { firstName, email, subject, contact, message } = userData;

    // email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // validation
    if (!firstName.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      toast.error("Contact number must be exactly 10 digits");
      return;
    }

    if (!message.trim()) {
      toast.error("Please enter message");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://fir-reatwebsite-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (res.ok) {
        toast.success("Message sent successfully 🎉");

        setUserData({
          firstName: "",
          email: "",
          subject: "",
          contact: "",
          message: ""
        });

      } else {
        toast.error("Something went wrong");
      }

    } catch (error) {
      toast.error("Server error ❌");
    }

    setLoading(false);
  };
  return (
    <div className='site_wrapper'>
      <section className="intro_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="intro_wrap">
                <h1> hi, i am Mansi vaidhya </h1>
                <p>An Indore-based UI Developer passionate about designing clean, responsive, and user-friendly web interfaces that provide a great user experience. </p>
                <div className="contact_btn_link_wrap">

                  <a href="#contact_section" className="theme-btn theme-primary"> Contact me <span className='dot_icon'></span>
                  </a>
                  <div className='d-flex gap-3'>
                    <a href='https://www.linkedin.com/in/mansi-vaidhya-3540b82ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="social_icon">
                      <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href='#' className="social_icon">
                      <img src={giticon} alt="github" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card_img_wrap">
                <img src={mansi} alt="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='featured_projects_section' id="featured_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <article className='main_article'>
                <h2>Featured Projects</h2>
                <p> Here are some of the selected projects that showcase my passion for front-end development. </p>
              </article>
            </div>
          </div>
          <div className="row mb-120 mob_mb_60">
            <div className="col-md-6">
              <div className="featured_projects_left_card ">
                <div className='card_ss_wrap'>
                  <img src={pave} alt="pave ss" />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='featured_projects_right_part'>
                <article className="main_article mb-0">
                  <h3> PAVE – A Government-Supported Person-Centered Profile & Life Planning Platform for Individuals with Disabilities </h3>
                  <p> Developed the complete UI for the PAVE project using Vue.js, aligning the design closely with project requirements. Managed the front-end implementation, handled dynamic functionality issues after integration, resolved bugs, and ensured a fully responsive and user-friendly experience across all devices. The interface was carefully designed with a deep understanding of the platform’s functionality and accessibility needs. </p>
                </article>
                <div className='project_info_wrap'>
                  <h6> Project Info </h6>
                  <div className='year_role_wrap'>
                    <p> Year </p>
                    <p> 2025-2026 </p>
                  </div>
                  <div className='year_role_wrap mb-40'>
                    <p> Role </p>
                    <p> UI Developer </p>
                  </div>
                  <div className='live_demo_link_wrap'>
                    <a href='https://staging.pavesystem.org/' target="_blank"> Live Demo <img src={arrow} alt="arrow" />
                    </a>
                    <a href='#'> See on Github <img src={giticon} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-120 mob_mb_60">
            <div className="col-md-6">
              <div className="featured_projects_left_card ">
                <div className='card_ss_wrap'>
                  <img src={julian} alt="pave ss" />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='featured_projects_right_part'>
                <article className="main_article mb-0">
                  <h3> Julian Pie Company is a family-owned bakery in Julian, California, famous for its homemade pies—especially its signature apple pie </h3>
                  <p> Worked as a UI Developer and designed the complete website from scratch to final deployment. Developed both Admin and User panels, implemented dynamic functionality, and resolved bugs that occurred after feature integration. Ensured full responsiveness across all devices and thoroughly cross-checked performance and usability. </p>
                </article>
                <div className='project_info_wrap'>
                  <h6> Project Info </h6>
                  <div className='year_role_wrap'>
                    <p> Year </p>
                    <p> 2023-2026 </p>
                  </div>
                  <div className='year_role_wrap mb-40'>
                    <p> Role </p>
                    <p> UI Developer </p>
                  </div>
                  <div className='live_demo_link_wrap'>
                    <a href='https://stage.julianpie.com/login' target="_blank"> Live Demo <img src={arrow} alt="arrow" />
                    </a>
                    <a href='#'> See on Github <img src={giticon} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-80 mob_45">
            <div className="col-md-6">
              <div className="featured_projects_left_card ">
                <span className='site_badge'> Challenge </span>
                <div className='card_ss_wrap'>
                  <img src={kids} alt="kids ss" />
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='featured_projects_right_part'>
                <article className="main_article mb-0">
                  <h3> Kids Project – WordPress An interactive and colorful platform designed especially for children.</h3>
                  <p> Designed the complete website from Figma to WordPress, handling the project from basic structure to final deployment. Developed all screens with a fully responsive layout and tested across all devices for smooth performance. Resolved dynamic functionality issues and fixed bugs after implementation to ensure a seamless user experience. </p>
                </article>
                <div className='project_info_wrap'>
                  <h6> Project Info </h6>
                  <div className='year_role_wrap'>
                    <p> Year </p>
                    <p> 2025-2025 </p>
                  </div>
                  <div className='year_role_wrap mb-40'>
                    <p> Role </p>
                    <p> UI Developer </p>
                  </div>
                  <div className='live_demo_link_wrap'>
                    <a href='https://wpbitcot.com/kidsschool/' target="_blank"> Live Demo <img src={arrow} alt="arrow" />
                    </a>
                    <a href='#'> See on Github <img src={giticon} alt="arrow" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro_wrapper" id="about_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="intro_wrap justify-content-start">
                <h1> About me</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="intro_wrap justify-content-start">
                <aricle className="main_article">
                  <h2 className='text-capitalize'> I am a UI Developer based in Indore with a background in Computer Science Engineering. </h2>
                  <p className='mb-40'> I have strong skills in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, SCSS, and jQuery, with basic knowledge of React. I specialize in creating fully responsive, user-friendly, and modern web designs. </p>
                </aricle>
                <div className="contact_btn_link_wrap">
                  <a href="#" className="theme-btn theme-primary btn_md"> Download Resume <span className='dot_icon'></span>
                  </a>
                  <button onClick={() => window.print()} className='print_btn_wrap'></button>
                  <div className='d-flex gap-3'>
                    <a href='https://www.linkedin.com/in/mansi-vaidhya-3540b82ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="social_icon">
                      <img src={linkedin} alt="linkedin" />
                    </a>
                    <a href='#' className="social_icon">
                      <img src={giticon} alt="github" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="intro_wrap justify-content-start">
                <h1> My Capabilities </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="intro_wrap">
                <aricle className="main_article">
                  <p className='mb-40'> I am always eager to learn and add new skills to enhance my expertise. Passionate about continuous learning, I am always seeking opportunities to grow and add new skills to my development journey </p>
                </aricle>
                <div className='skills_wrap'>
                  <span className='skills_box'> HTML </span>
                  <span className='skills_box'> CSS </span>
                  <span className='skills_box'> Javascript </span>
                  <span className='skills_box'> Jquery </span>
                  <span className='skills_box'> Bootstrap </span>
                  <span className='skills_box'> SCSS </span>
                  <span className='skills_box'> Tailwind Css </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="intro_wrap justify-content-start">
                <h1 className=''> My Experience </h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="intro_wrap">
                <aricle className="main_article">
                  <div className='common_flex_wrap'>
                    <h3 className="text-capitalize mb-0"> UI Developer </h3>
                    <p> Jan 2022 — Present </p>
                  </div>
                  <p className='mb-40'> With over 4 years of experience at BitCot, I have worked on multiple web projects, designing and developing responsive, user-friendly interfaces. I have handled complete UI implementation from design to deployment, resolved dynamic functionality issues, fixed bugs after integration, and ensured cross-browser and cross-device compatibility. </p>
                </aricle>
                <aricle className="main_article">
                  <div className='common_flex_wrap'>
                    <h3 className="text-capitalize mb-0"> UI Developer Intern <br /> Genext Coaching Classes  </h3>
                    <p> july  2021 — dec 2021 </p>
                  </div>
                  <p className='mb-40 mob_15'> Completed a 6-month internship at Genext Coaching Classes, working with HTML, CSS, JavaScript, jQuery, and Bootstrap to build responsive and interactive web interfaces </p>
                </aricle>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="intro_wrapper border-0" id="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="intro_wrap justify-content-start">
                <h1 className=''> Let’s connect </h1>
                <p>
                  Say hello at <a href='#' className="text-white">
                    mansivaidhya@gmail.com
                  </a>
                  <br />
                  For more info, here’s my <a href='#' className='text-white'>resume</a>
                </p>
                <div className="contact_btn_link_wrap">
                  <a href='https://www.linkedin.com/in/mansi-vaidhya-3540b82ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="social_icon bg-transparent">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <div className='d-flex gap-3'>
                    <a href='#' className="social_icon bg-transparent">
                      <img src={giticon} alt="github" />
                    </a>
                    <a href='#' className="social_icon bg-transparent instra_icon">
                      <img src={instra} alt="instra icon" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-6">
              <form className="site_form" method="POST" onSubmit={submitData}>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label label_modify"
                  >
                    Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    className="form-control input_modify"
                    id="exampleFormControlInput1"
                    placeholder="John Doe"
                    value={userData.firstName}
                    onChange={postUserData}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label label_modify"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    className="form-control input_modify"
                    id="exampleFormControlInput1"
                    placeholder="John@bitcot.com"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label label_modify"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    className="form-control input_modify"
                    id="exampleFormControlInput1"
                    placeholder="write here...."
                    value={userData.subject}
                    onChange={postUserData}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label label_modify"
                  >
                    Contact
                  </label>

                  <input
                    type="tel"
                    name="contact"
                    maxLength="10"
                    className="form-control input_modify"
                    placeholder="Enter 10 digit number"
                    value={userData.contact}
                    onChange={postUserData}
                  />
                </div>
                <div className='mb-4'>
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label label_modify"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="form-control input_modify"
                    rows="3"
                    value={userData.message}
                    onChange={postUserData}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="theme-btn text-center"
                  onClick={submitData}
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>
          <div className="row align-items-center">
            <div className='col-md-6'>
              <span className='copy_right_wrap'>
                © 2026 Mansi vaidhya
              </span>
            </div>
            <div className='col-md-6'>
              {/* Submit button moved inside form */}
            </div>
          </div>
        </div>
      </section>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  )
}


export default Home;
