import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/img/logo.png"
const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src={logo} />
          </Link>

          <div className="flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`${
                isActive("/services") ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-blue-600" : "text-gray-700"
              } hover:text-blue-600 transition-colors`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
