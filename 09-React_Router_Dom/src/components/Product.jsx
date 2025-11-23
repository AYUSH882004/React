import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white px-16 py-12">

      {/* Page Title */}
      <h1 className={({ isActive }) =>
            `px-6 py-2 rounded-xl transition-all duration-300
             ${isActive ? "bg-green-500 text-black scale-110" : "bg-gray-800 hover:bg-gray-600"}`
          }>
        Product Page
      </h1>

      {/* Tabs Row */}
      <div className="flex gap-10 text-4xl font-semibold mb-12">
        <NavLink
          to="mens"
          className={({ isActive }) =>
            `px-6 py-2 rounded-xl transition-all duration-300
             ${isActive ? "bg-green-500 text-black scale-110" : "bg-gray-800 hover:bg-gray-600"}`
          }
        >
          Men
        </NavLink>

        <NavLink
          to="womens"
          className={({ isActive }) =>
            `px-6 py-2 rounded-xl transition-all duration-300
             ${isActive ? "bg-green-500 text-black scale-110" : "bg-gray-800 hover:bg-gray-600"}`
          }
        >
          Women
        </NavLink>

        <NavLink
          to="kids"
          className={({ isActive }) =>
            `px-6 py-2 rounded-xl transition-all duration-300
             ${isActive ? "bg-green-500 text-black scale-110" : "bg-gray-800 hover:bg-gray-600"}`
          }
        >
          Kid
        </NavLink>
      </div>

      {/* Nested Route Content */}
      <div className="flex gap-3"><button className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate('/')}>
        Go to Home
      </button>
      <button  className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate(1)}>
        Next page
      </button>
      <button  className="bg-gray-400 py-2 px-4 rounded-md text-xl font-bold" onClick={() => navigate(-1)}>
        Prev page
      </button></div>
    
      <div className="mt-20">
        <Outlet />
      </div>

    </div>
  );
};

export default Product;
