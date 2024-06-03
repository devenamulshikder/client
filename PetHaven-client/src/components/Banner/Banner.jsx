/* eslint-disable react/no-unescaped-entities */
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <div className="p-6 h-[50rem] w-full">
            <div className="-m-6 max-h-[1200px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[50rem] w-full ">
                    <img
                      alt="nature"
                      className=" h-[50rem] w-full object-cover object-center brightness-50 "
                      src="https://i.postimg.cc/zBLqH4rX/group-portrait-adorable-puppies.jpg"
                    />
                  </div>
                </div>
                <div className=" relative ">
                  <h2 className="text-4xl lg:text-6xl uppercase ml-10 font-bold lato text-white text-center mt-32 md:mt-48">
                    <p>
                      Your Journey to a Loving Pet <br />
                      Starts Here!
                    </p>
                  </h2>
                  <p className=" mt-8 inter text-gray-300 text-center ml-10 roboto">
                    <span>
                      {/* Style will be inherited from the parent element */}
                      Embark on an enriching journey towards companionship by
                      starting your search for the perfect pet with us. <br />
                      Our platform offers a diverse range of loving animals
                      eagerly awaiting their forever homes. <br /> From
                      energetic pups to gentle seniors, our selection ensures
                      there's a match for every heart and home.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 h-[50rem] w-full">
            <div className="-m-6 max-h-[1200px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[50rem] w-full ">
                    <img
                      alt="nature"
                      className=" h-[50rem] w-full object-cover object-center brightness-50 "
                      src="https://i.postimg.cc/Z5rBCBLD/2149398036.jpg"
                    />
                  </div>
                </div>
                <div className=" relative ">
                  <h2 className="text-4xl lg:text-6xl uppercase ml-10 font-bold lato text-white text-center mt-32 md:mt-48">
                    <p>
                      Give a Loving Home to a <br /> Pet in Need
                    </p>
                  </h2>
                  <p className=" mt-8 inter text-gray-300 text-center ml-10 roboto">
                    <span>
                      {/* Style will be inherited from the parent element */}
                      Embrace the profound impact of adoption by giving a
                      homeless pet the chance of a lifetime. <br />
                      Through adoption, you become a beacon of hope, offering a
                      new beginning to a furry friend in need. <br /> Our
                      platform simplifies the process, guiding you towards your
                      ideal companion.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-6 h-[50rem] w-full">
            <div className="-m-6 max-h-[1200px] w-[calc(100%+0px)]">
              <div className="mt-16">
                <div className="flex flex-col mb-12 overflow-hidden text-gray-700 bg-white shadow-md  bg-clip-border">
                  <div className="absolute h-[50rem] w-full ">
                    <img
                      alt="nature"
                      className=" h-[50rem] w-full object-cover object-center brightness-50 "
                      src="https://i.postimg.cc/FF8x26sb/Animal-Banner-3.jpg"
                    />
                  </div>
                </div>
                <div className=" relative ">
                  <h2 className="text-4xl lg:text-6xl uppercase ml-10 font-bold lato text-white text-center mt-32 md:mt-48">
                    <p>
                      Connecting Hearts with Paws: <br />
                      Adopt Now!
                    </p>
                  </h2>
                  <p className=" mt-8 inter text-gray-300 text-center ml-10 roboto">
                    <span>
                      {/* Style will be inherited from the parent element */}
                      Experience the profound connection of adoption by opening
                      your heart and home to a deserving pet. Our platform
                      serves as a conduit,
                      <br /> bringing together compassionate individuals and
                      animals in need of love and care. Through adoption, you're
                      not <br /> just adding a furry friend to your family;
                      you're making a lifelong commitment to provide love,
                      support, and companionship.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
