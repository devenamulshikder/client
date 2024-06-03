import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };
    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((err) => toast.error(err?.message));
  };

  return (
    <div className="fixed z-20 w-full ">
      <nav className="bg-[#a5afbd] px-4 py-2 text-white ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110 lg:48 md:w-36 w-32">
            <img className="w-7 md:w-9" src="/webLogo.png" alt="" />
            <img src="/logo.png" alt="" />
          </div>
          <ul className="hidden items-center justify-between gap-10 md:flex text-[#1F2937] font-medium">
            <Link to="/">
              <li className="group flex  cursor-pointer flex-col">
                Home
                <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#e7742d] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
            <Link to="/pet-listing">
              <li className="group flex  cursor-pointer flex-col">
                Pet Listing
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#e7742d] transition-all duration-300 group-hover:w-full"></span>
              </li>
            </Link>
           <Link >
              <li className="group flex  cursor-pointer flex-col">
                Donation Campaigns
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#e7742d] transition-all duration-300 group-hover:w-full"></span>
              </li>
           </Link>
            <li className="group flex  cursor-pointer flex-col">
              Contact
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#e7742d] transition-all duration-300 group-hover:w-full"></span>
            </li>
          </ul>

          <div className=" flex justify-end items-center flex-row-reverse gap-3">
            <div
              ref={dropDownMenuRef}
              onClick={() => setDropDownState(!dropDownState)}
              className="relative flex transition-transform md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer"
              >
                {" "}
                <line x1="4" x2="20" y1="12" y2="12" />{" "}
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />{" "}
              </svg>
              {dropDownState && (
                <ul className=" z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base text-[#1F2937] font-medium">
                  <Link to="/">
                    <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                      Home
                    </li>
                  </Link>
                  <Link to='/pet-listing'>
                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                      Pet Listing
                    </li>
                  </Link>
                  <Link >
                    <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                      DonationCampaigns
                    </li>
                  </Link>
                  <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                    Contact
                  </li>
                </ul>
              )}
            </div>
            {/* daisy */}
            {user ? (
              <>
                <div title={user.displayName} className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        referrerPolicy="no-referrer"
                        alt="Tailwind CSS Navbar component"
                        src={user?.photoURL}
                      />
                    </div>
                  </div>
                  <ul
                    // tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#1F2937] font-medium"
                  >
                    <Link to='dashboard'>
                      <li>
                        <a className="justify-between">Dashboard</a>
                      </li>
                    </Link>
                    <li>
                      <button onClick={handleLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  {" "}
                  <li className="group flex  cursor-pointer flex-col text-[#1F2937] font-medium">
                    Login
                    <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#e7742d] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
