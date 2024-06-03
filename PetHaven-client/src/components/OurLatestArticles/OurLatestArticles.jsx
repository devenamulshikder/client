import { IoTimeOutline } from "react-icons/io5";

const OurLatestArticles = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="lg:my-16 my-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  text-center">
          Our Latest Blog & Articles
        </h1>
        <p className="text-center opacity-80 max-w-5xl mx-auto mt-4">
          This article explores the numerous benefits of adopting a pet from a
          shelter rather than purchasing one from a breeder or pet store. It
          discusses the positive impacts on animal welfare, the advantages for
          adopters, and the importance of giving a second chance to animals in
          need. The article also includes success stories from pet adopters.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* card 1 */}
        <div className="flex max-w-2xl overflow-hidden bg-white rounded-lg">
          <div
            className="w-2/3 bg-cover"
            style={{
              backgroundImage: `url(https://i.postimg.cc/zBbPJvXG/assignment111-1.jpg)`,
            }}
          ></div>

          <div className="w-2/3 p-4 md:p-4">
            <button className="p-2 text-white bg-[#E7742D] rounded-lg">
              Pet Adoption
            </button>

            <p className="mt-2 text-2xl roboto">
              Why Adopting a Senior Pet Can Be Your Best Decision Ever
            </p>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-xs flex items-center gap-1 text-[#e7742d]">
                <span>
                  <IoTimeOutline />
                </span>{" "}
                <span>June 9, 2024</span>
              </h1>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="flex max-w-2xl overflow-hidden bg-white rounded-lg">
          <div
            className="w-2/3 bg-cover"
            style={{
              backgroundImage: `url(https://i.postimg.cc/RZdYd2D4/assignment112-1.jpg)`,
            }}
          ></div>

          <div className="w-2/3 p-4 md:p-4">
            <button className="p-2 text-white bg-[#E7742D] rounded-lg">
              Pet Health
            </button>

            <p className="mt-2 text-2xl roboto">
              Unraveling the Mystery of Cat Allergies: Causes and Solutions
            </p>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-xs flex items-center gap-1 text-[#e7742d]">
                <span>
                  <IoTimeOutline />
                </span>{" "}
                <span>June 8, 2023</span>
              </h1>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="flex max-w-2xl overflow-hidden bg-white rounded-lg">
          <div
            className="w-2/3 bg-cover"
            style={{
              backgroundImage: `url(https://i.postimg.cc/Lssbbvcf/assignment113-1.jpg)`,
            }}
          ></div>

          <div className="w-2/3 p-4 md:p-4">
            <button className="p-2 text-white bg-[#E7742D] rounded-lg">
              Rehabilitation
            </button>

            <p className="mt-2 text-2xl roboto">
              Rescue, Rehabilitate, Release: The Journey of Saving Injured
              Wildlife
            </p>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-xs flex items-center gap-1 text-[#e7742d]">
                <span>
                  <IoTimeOutline />
                </span>{" "}
                <span>June 7, 2023</span>
              </h1>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="flex max-w-2xl overflow-hidden bg-white rounded-lg">
          <div
            className="w-2/3 bg-cover"
            style={{
              backgroundImage: `url(https://i.postimg.cc/d0SxPrFf/assignment114.jpg)`,
            }}
          ></div>

          <div className="w-2/3 p-4 md:p-4">
            <button className="p-2 text-white bg-[#E7742D] rounded-lg">
              Volunteer Stories
            </button>

            <p className="mt-2 text-2xl roboto">
              Heartfelt Stories of Volunteers and the Animals They Serve
            </p>

            <div className="flex justify-between mt-3 item-center">
              <h1 className="text-xs flex items-center gap-1 text-[#e7742d]">
                <span>
                  <IoTimeOutline />
                </span>{" "}
                <span>June 7, 2023</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLatestArticles;
