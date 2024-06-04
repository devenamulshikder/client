import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";


const PetDetails = () => {
   const petDetails = useLoaderData()
    return (
      <>
        <div className="max-w-7xl mx-auto">
          <Helmet>
            <title>Pet Haven || Pet Details</title>
          </Helmet>
          <div className="lg:pt-24">
            <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center">
              Pet Details
            </h1>
            <div className=" mx-auto my-20 flex flex-col items-center justify-center md:flex-row">
              <div className="group relative  sm:w-[350px]">
                <img
                  width={350}
                  height={350}
                  className="h-full w-full scale-105 transform rounded-lg"
                  src={petDetails?.pet_image}
                  alt="card navigate ui"
                />
              </div>
              <div className="min-w-[250px] max-w-[350px] space-y-12 rounded-br-lg rounded-tr-lg bg-white p-10 text-center shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)] md:w-[350px] dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]">
                <div className="space-y-1">
                  <h2 className="text-center text-2xl font-medium lg:text-3xl">
                    {petDetails?.pet_name}
                  </h2>
                  <p className="">Age: {petDetails?.pet_age}</p>
                  <p className="">Location: {petDetails?.pet_location}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-sans text-sm">Shots</p>
                    <p className="text-2xl tracking-wider">23</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans text-sm">Following</p>
                    <p className="text-2xl tracking-wider">314</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-sans text-sm">Followers</p>
                    <p className="text-2xl tracking-wider">487</p>
                  </div>
                </div>
                <div>
                  <button className="rounded-full border text-white py-2 px-4 bg-[#e7742d]">
                    Adopt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default PetDetails;