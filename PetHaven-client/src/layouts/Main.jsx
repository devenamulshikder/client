import { Outlet } from "react-router-dom";
import NavBar from "../components/Shared/NavBar";
import Footer from "../components/Shared/Footer";

const Main = () => {
  return (
    <div>
      {/* nav bar */}
      <NavBar />

      {/* Outlet */}
      <Outlet />
      {/* footer */}
      <Footer/>
    </div>
  );
};

export default Main;
