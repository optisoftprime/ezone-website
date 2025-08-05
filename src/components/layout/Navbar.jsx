import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useState } from "react";
import send from "../../assets/img/send-icon.svg";
import card from "../../assets/img/card-icon.svg";
import { ChevronDown, ChevronRight, ChevronUp, Menu } from "lucide-react";
import NavList from "./NavList";
import { Layout, Drawer } from "antd";

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

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerVisible, setDrawerVisible] = useState(false);

  const handleRoute = (path) => {
    navigate(path);
    console.log(path);
  };
  const toggleDrawer = () => {
    setDrawerVisible((prev) => !prev);
  };

  const handleDropDown = () => {
    setDropDown((prev) => !prev);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src={logo} />
          </Link>

          <div className="relative hidden md:block">
            <ul className="flex gap-x-8 ">
              {navLists.map((navMenu) => (
                <li key={navMenu.path}>
                  <Link
                    to={navMenu.path}
                    onMouseOver={handleDropDown}
                    className="text-[#292929] text-base font-normal flex items-center gap-x-1 "
                  >
                    <span>{navMenu.name}</span>
                    {navMenu.subMenus && (
                      <span>{!dropDown ? <ChevronDown /> : <ChevronUp />}</span>
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
              <Link>Login</Link>
              <Link className="px-5 py-2 rounded-[20px] bg-[#0C0292] text-white ">
                Sign Up
              </Link>
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
  );
};

export default Navbar;
