import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import { useState } from "react";
import { Link } from "react-router-dom";

const PetListing = () => {
  const axiosCommon = useAxiosCommon();
  const { data: petsData = [] } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/pets");
      return data;
    },
  });

  // search bar
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setQuery(e.target.value.toLowerCase());
  }

  function handleSearch() {
    setSearchQuery(query);
  }

  const filteredPets = petsData.filter((pet) =>
    pet.pet_name.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="max-w-7xl mx-auto pt-10 p-4">
      <Helmet>
        <title>Pet Haven | Pet Listing</title>
      </Helmet>
      <div className="">
        {/* <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold my-8  text-center">
          Pets Listing
        </h1> */}
        <div className="flex py-10 md:p-16 lg:p-20 text-xl">
          <input
            type="text"
            className="w-full placeholder-gray-400 text-gray-900 border p-4"
            placeholder="Search"
            onChange={handleInputChange}
            value={query}
          />
          <button className="bg-white p-4" onClick={handleSearch}>
            🔍
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPets.length > 0 ? (
          filteredPets.map((item) => (
            <div
              key={item?._id}
              className="w-full max-w-sm overflow-hidden shadow-xl"
            >
              <img
                className="object-cover object-center w-full h-56"
                src={item?.pet_image}
                alt="avatar"
              />

              <div className="px-6 py-4">
                <h1 className="text-xl font-semibold">
                  Pet Name: {item?.pet_name}
                </h1>

                <div className="mt-4">Pet Age: {item?.pet_age}</div>

                <div className="mt-4">
                  <h1 className="text-sm">Location: {item?.pet_location}</h1>
                </div>

                <div className="flex items-center mt-4">
                  <Link to={`/pet-Details/${item._id}`}>
                    <button className="btn bg-[#e7742d] text-white">
                      Viewing Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-xl col-span-full">
            No pets found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default PetListing;
