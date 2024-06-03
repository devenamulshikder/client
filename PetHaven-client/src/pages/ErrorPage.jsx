import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-evenly items-center">
      <img className="w-[68%] " src="/error.gif" alt="" />
      <div className="">
        <h1 className="lg:text-4xl font-semibold flex flex-col items-center gap-4">
          <p>Please</p> <p>Go</p> <p>Back</p>{" "}
          <Link className="font-bold text-[#FF7D0C] underline" to="/">
            Home!!!
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default ErrorPage;
