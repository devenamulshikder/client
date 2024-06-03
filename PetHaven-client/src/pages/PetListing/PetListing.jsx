import { Helmet } from "react-helmet-async";

const PetListing = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20">
      <Helmet>
        <title>Pet Haven | Pet Listing</title>
      </Helmet>
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold my-8  text-center">
        Pets Listing
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* card 1 */}
        <div className="w-full max-w-sm overflow-hidden shadow-xl">
          <img
            className="object-cover object-center w-full h-56"
            src="https://i.postimg.cc/g2rMys1T/bao-menglong-us-Tb7-ZMa6-QI-unsplash.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">Pet Name: Simba</h1>

            <div className="mt-4 ">Pet Age: 11 Month</div>

            <div className=" mt-4">
              <h1 className=" text-sm">Location: California</h1>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn bg-[#e7742d]">Viewing Details</button>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full max-w-sm overflow-hidden shadow-xl">
          <img
            className="object-cover object-center w-full h-56"
            src="https://i.postimg.cc/8cHy401q/karsten-winegeart-o-U6-KZTXhuvk-unsplash.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">Pet Name: Molly</h1>

            <div className="mt-4 ">Pet Age: 21 Month</div>

            <div className=" mt-4">
              <h1 className=" text-sm">Location: California</h1>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn bg-[#e7742d]">Viewing Details</button>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div className="w-full max-w-sm overflow-hidden shadow-xl">
          <img
            className="object-cover object-center w-full h-56"
            src="https://i.postimg.cc/Ssc12KHQ/william-daigneault-zok-Lv-Uc-Sh-Ac-unsplash.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">Pet Name: Rabu</h1>

            <div className="mt-4 ">Pet Age: 05 Month</div>

            <div className=" mt-4">
              <h1 className=" text-sm">Location: California</h1>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn bg-[#e7742d]">Viewing Details</button>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="w-full max-w-sm overflow-hidden shadow-xl">
          <img
            className="object-cover object-center w-full h-56"
            src="https://i.postimg.cc/rFVZsMjc/paul-hanaoka-w2-Ds-S-ZAP4-U-unsplash.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">Pet Name: Yuki</h1>

            <div className="mt-4 ">Pet Age: 14 Month</div>

            <div className=" mt-4">
              <h1 className=" text-sm">Location: California</h1>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn bg-[#e7742d]">Viewing Details</button>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div className="w-full max-w-sm overflow-hidden shadow-xl">
          <img
            className="object-cover object-center w-full h-56"
            src="https://i.postimg.cc/yYLQStpR/vitor-fontes-Sx-Le8-EHt-C3-U-unsplash.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">Pet Name: Tommy</h1>

            <div className="mt-4 ">Pet Age: 11 Month</div>

            <div className=" mt-4">
              <h1 className=" text-sm">Location: California</h1>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn bg-[#e7742d]">Viewing Details</button>
            </div>
          </div>
        </div>
        {/* card 6 */}
        <div className="w-full max-w-sm overflow-hidden shadow-xl">
          <img
            className="object-cover object-center w-full h-56"
            src="https://i.postimg.cc/MHxPyS87/sandy-millar-k-KAa-Ce-Gf5w-Y-unsplash.jpg"
            alt="avatar"
          />

          <div className="px-6 py-4">
            <h1 className="text-xl font-semibold">Pet Name: Yuxo</h1>

            <div className="mt-4 ">Pet Age: 02 Month</div>

            <div className=" mt-4">
              <h1 className=" text-sm">Location: California</h1>
            </div>

            <div className="flex items-center mt-4">
              <button className="btn bg-[#e7742d]">Viewing Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetListing;
