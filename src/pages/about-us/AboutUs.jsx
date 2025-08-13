import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import send from "../../assets/img/send-icon.svg";
import card from "../../assets/img/card-icon.svg";
import { ChevronDown, ChevronRight, ChevronUp, Dot, Menu } from "lucide-react";
// import frame from "../../assets/img/frame.svg"
import frame1 from "../../assets/img/frame1.png";
import frame2 from "../../assets/img/frame2.png";
import frame3 from "../../assets/img/frame3.png";
import frame4 from "../../assets/img/frame4.png";
import frame5 from "../../assets/img/frame5.png";
import frame6 from "../../assets/img/frame6.png";
import { div } from "framer-motion/client";
import { Drawer } from "antd";
import NavList from "../../components/layout/NavList";

const navLists = [
  {
    name: "products",
    path: "/#",
    subMenus: [
      {
        name: "cba",
        text: "Power your financial institution with secure, real-time banking operations.",
        icon: card,
        path: "/products/cba",
      },
      {
        name: "human resources",
        text: "Simplify hiring, employee records, attendance, and performance tracking.",
        icon: card,
        path: "/products/human-resources",
      },
      {
        name: "accounting",
        text: "Stay on top of your finances with smart, automated accounting tools.",
        icon: send,
        path: "/products/accounting",
      },
      {
        name: "sales",
        text: "Monitor stock levels, manage sales, and optimize your supply chain effortlessly.",
        icon: card,
        path: "/products/sales",
      },
      {
        name: "mutuary mgt",
        text: "Digitize and organize all mutuary operations with ease and precision.",
        icon: send,
        path: "/products/mutuary-management",
      },
      {
        name: "crm",
        text: "Build stronger customer relationships and drive sales through actionable insights.",
        icon: send,
        path: "/products/crm",
      },
      {
        name: "lsm",
        text: "Empower employee growth with structured training and digital learning.",
        icon: card,
        path: "/products/lsm",
      },
      {
        name: "payroll",
        text: "Ensure accurate, timely payroll processing and compliance every time.",
        icon: card,
        path: "/products/payroll",
      },
      {
        name: "process workflow",
        text: "Automate and streamline business processes for greater efficiency.",
        icon: send,
        path: "/products/process-workflow",
      },
    ],
  },
  {
    name: "support & services",
    path: "/support-and-services",
  },
  {
    name: "about us",
    path: "/about-us",
  },
  {
    name: "contact",
    path: "/contact-us",
  },
];

const aboutData = [
  {
    title: "All in One Business Suite",
    text: "Streamline your Operation with an ERP System",
  },
  {
    title: "Real Time Business Insight",
    text: "Make smarter decision with real-time dashboards",
  },
  {
    title: "Customizable & Scalable",
    text: "Ezone grows with your business needs",
  },
];

const teamMembers = [
  {
    name: "Mr Tunde Banks",
    position: "Managing Director",
    image: frame6,
  },
  {
    name: "Mr Habudul Opeymi",
    position: "CEO, Director",
    image: frame5,
  },
  {
    name: "Mrs Okoafor Jessica",
    position: "CTO, Director",
    image: frame4,
  },
  {
    name: "Mr Ovuta Samuel",
    position: "Sales Director",
    image: frame3,
  },
];

function AboutUs() {
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleRoute = (path) => {
    navigate(path);
    console.log(path);
  };

  const toggleDrawer = () => {
    setDrawerVisible(true);
  };

  const handleOpenDropDown = () => {
    setDropDown(true);
  };
  const handleCloseDropDown = () => {
    setDropDown(false);
  };
  useEffect(() => {
    setDropDown(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname.includes(path);
  return (
    <div>
      <div className="header1">
        <nav className="">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-center py-4">
              <Link
                to="/"
                className="text-2xl px-2 py-1 bg-white rounded-[10px] font-bold text-blue-600"
              >
                <img src={logo} />
              </Link>

              <div className="relative hidden md:block">
                <ul className="flex gap-x-8 ">
                  {navLists.map((navMenu) => (
                    <li key={navMenu.path}>
                      <Link
                        to={navMenu.path}
                        onMouseEnter={
                          navMenu.subMenus && !dropDown
                            ? handleOpenDropDown
                            : handleCloseDropDown
                        }
                        className={`text-[#fff] text-base capitalize font-normal flex items-center gap-x-1 ${
                          isActive(navMenu.path)
                            ? "border-[#fff] border-b-2 "
                            : ""
                        }`}
                      >
                        <span>{navMenu.name}</span>
                        {navMenu.subMenus && (
                          <span>
                            {!dropDown ? <ChevronDown /> : <ChevronUp />}
                          </span>
                        )}
                      </Link>

                      {navMenu.subMenus && dropDown && (
                        <div
                          // onMouseOut={handleDropDown}
                          className="bg-white absolute -right-55 top-10 z-20 p-10 max-h-[450px] overflow-x-hidden overflow-y-auto shadow-2xl space-y-3 "
                        >
                          <p>Ezone Products</p>
                          <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5 max-w-[900px]">
                            {navMenu.subMenus.map((childNavMenu) => (
                              <li
                                key={childNavMenu.path}
                                onClick={() => handleRoute(childNavMenu.path)}
                                className="max-w-[300px] p-3 bg-[#F7FCFF] rounded-sm cursor-pointer flex gap-y-2 flex-col "
                              >
                                <div className="flex items-center gap-x-2">
                                  <div className="w-[40px] h-[40px] bg-[#048DFD] flex items-center justify-center rounded-full ">
                                    <img
                                      src={childNavMenu.icon}
                                      className="max-w-[30px] "
                                      alt="icon"
                                    />
                                  </div>
                                  <div>
                                    <p>Ezone</p>
                                    <h4 className="text-[#1B1B1B] text-base font-extrabold uppercase ">
                                      {childNavMenu.name}
                                    </h4>
                                  </div>
                                </div>
                                <p className="text-sm text-[#5C5C5C] font-normal ">
                                  {childNavMenu.text}
                                </p>
                                <Link
                                  to={childNavMenu.path}
                                  className="flex items-center gap-x-1 text-base font-medium text-[#0C0292] "
                                >
                                  <span>TRY NOW</span>
                                  <span>
                                    <ChevronRight />
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="flex gap-x-5 items-center">
                  <a href="https://core.ezoneerp.com/">Login</a>
                  <a
                    href="https://core.ezoneerp.com/"
                    className="px-5 py-2 rounded-[20px] bg-[#0C0292] text-white "
                  >
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <Menu onClick={toggleDrawer} />
              </div>
            </div>
          </div>
          <Drawer
            // title="Menu"
            placement="left"
            onClose={toggleDrawer}
            open={drawerVisible}
            className="md:hidden w-[70%]"
            style={{ padding: 0 }}
          >
            <NavList />
          </Drawer>
        </nav>
        <div className="flex items-center justify-center pt-30">
          <h1 className="text-[30px] font-medium capitalize ">about us</h1>
        </div>
      </div>
      <div className="px-4 md:px-30 py-15 flex flex-col gap-y-25 ">
        <div className="space-y-10">
          <div className="inline-block">
            <div className="rounded-full text-[#151414] bg-white shadow-md items-center gap-x-1 flex ">
              <Dot color="#0C0292" size={60} />
              <p>About us</p>
              <Dot color="#0C0292" size={60} />
            </div>
          </div>
          <div className="flex items-center flex-wrap gap-y md:flex-nowrap gap-x-10 justify-between">
            <h2 className="text-[30px] font-normal max-w-[370px] ">
              Why Coose Ezone- What Set Us Apart
            </h2>
            <p className="w-full md:max-w-[330px] ">
              We don’t just give you software, we walk with you. Our team offers
              dedicated onboarding and guidance. Count on us for help when you
              need it most.
            </p>
            <p className="max-w-[330px]">
              Log in from anywhere — office, home, or on the move. No
              installations, no maintenance worries. Just fast, secure access to
              your business tools anytime.
            </p>
          </div>
        </div>
        <div>
          <ul className="flex items-center flex-wrap gap-y-5  gap-x-4 justify-between">
            {aboutData.map((data) => (
              <li
                key={data.title}
                className="flex items-center max-w-[400px] gap-x-4 py-1.5 px-3  rounded-[30px] shadow-lg"
              >
                <div className="w-[40px] h-[40px] bg-[#048DFD] flex items-center justify-center rounded-full ">
                  <img src={send} className="max-w-[30px] " alt="icon" />
                </div>
                <div className="max-w-[220px] ">
                  <h3>{data.title}</h3>
                  <p>{data.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:px-60 px-4 py-10 relative">
        <img
          className="relative md:mb-40 w-full max-w-[500px] mb-5 rounded-md "
          src={frame1}
          alt=""
        />
        <img
          className="md:absolute w-full md:top-20 md:right-60 max-w-[400px]  rounded-md"
          src={frame2}
          alt=""
        />
      </div>
      <div className="">
        <div className="flex items-center flex-col gap-y-4 justify-center">
          <div className="inline-block">
            <div className="rounded-full text-[#151414] bg-white shadow-md items-center gap-x-1 flex ">
              <Dot color="#0C0292" size={60} />
              <p>Our Team</p>
              <Dot color="#0C0292" size={60} />
            </div>
          </div>
          <h3 className="capitalize text-[26px] font-normal ">team members</h3>
        </div>
        <div className="flex items-center pb-10 flex-wrap md:flex-nowrap gap-y-5 mt-12 justify-center gap-x-4">
          {teamMembers.map((member) => (
            <div className="relative bg-[#E1E1E1] pb-15 " key={member.image}>
              <img
                className="max-w-[300px] md:max-w-[250px] w-full "
                src={member.image}
                alt=""
              />
              <div className="px-5 py-3 bg-[#008DFF] text-[#fff] absolute text-center left-[70px] md:left-[48px] bottom-4 ">
                <h4 className="text-[16px] font-medium ">{member.name}</h4>
                <p className="text-sm font-normal">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
