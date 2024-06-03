const FromShelter = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold my-8 lg:my-16 text-center">
        From Shelter to Forever Home <br /> Our Success Stories
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
        <div>
          <div className="hover:-rotate-2  duration-500 relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              style={{
                backgroundImage: `url(https://i.postimg.cc/2jgTz0nr/assignment111.jpg)`,
              }}
              className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
            ></div>
          </div>
          <h1 className="text-center text-2xl roboto font-semibold mt-4">
            Morgan & Max
          </h1>
          <p className="text-center roboto opacity-65">
            A Tale of Unconditional Love
          </p>
        </div>
        <div>
          <div className="hover:rotate-3  duration-500 relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              style={{
                backgroundImage: `url(https://i.postimg.cc/3rkn5s4t/assignment112.jpg)`,
              }}
              className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
            ></div>
          </div>
          <h1 className="text-center text-2xl roboto font-semibold mt-4">
            Rachel & Luna
          </h1>
          <p className="text-center roboto opacity-65">
            The Power of Second Chances
          </p>
        </div>
        <div>
          <div className="hover:-rotate-3  duration-500 relative grid h-[30rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
            <div
              style={{
                backgroundImage: `url(https://i.postimg.cc/V5yJ3rrP/assignment113.jpg)`,
              }}
              className={`absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none`}
            ></div>
          </div>
          <h1 className="text-center text-2xl roboto font-semibold mt-4">
            Steve & Bella
          </h1>
          <p className="text-center roboto opacity-65">From Fear to Family</p>
        </div>
      </div>
    </div>
  );
};

export default FromShelter;
