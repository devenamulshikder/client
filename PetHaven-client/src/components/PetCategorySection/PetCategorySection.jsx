import { Link } from "react-router-dom";

const PetCategorySection = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold my-8 lg:my-16 text-center">
        Pets category section
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <Link className="w-full cursor-pointer group  overflow-hidden bg-white rounded-lg shadow-xl">
          <img
            className="object-cover w-full h-56  group-hover:scale-105
                duration-500 
                transition"
            src="https://i.postimg.cc/fL7ym94y/lovely-pet-portrait-isolated.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 "
              tabIndex="0"
              role="link"
            >
              {/* Cooper */}
              Dog
            </a>
          </div>
        </Link>
        <Link className="w-full cursor-pointer group  overflow-hidden bg-white rounded-lg shadow-xl">
          <img
            className="object-cover w-full h-56  group-hover:scale-105
                duration-500 
                transition"
            src="https://i.postimg.cc/HnHJht0b/mohamed-elsayed-yx-Lv-WCy-KCi4-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 "
              tabIndex="0"
              role="link"
            >
              Birds
            </a>
          </div>
        </Link>
        <Link className="w-full cursor-pointer group  overflow-hidden bg-white rounded-lg shadow-xl">
          <img
            className="object-cover w-full h-56  group-hover:scale-105
                duration-500 
                transition"
            src="https://i.postimg.cc/Wb5D5gdJ/tran-mau-tri-tam-81l-Vsf-M4g-Q-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 "
              tabIndex="0"
              role="link"
            >
              Cat
            </a>
          </div>
        </Link>
        <Link className="w-full cursor-pointer group  overflow-hidden bg-white rounded-lg shadow-xl">
          <img
            className="object-cover w-full h-56  group-hover:scale-105
                duration-500 
                transition"
            src="https://i.postimg.cc/c1Mt8VZh/rachel-hisko-r-EM3c-K8-F1pk-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 "
              tabIndex="0"
              role="link"
            >
              Fish
            </a>
          </div>
        </Link>
        <Link className="w-full cursor-pointer group  overflow-hidden bg-white rounded-lg shadow-xl">
          <img
            className="object-cover w-full h-56  group-hover:scale-105
                duration-500 
                transition"
            src="https://i.postimg.cc/6pT8gqZb/satyabratasm-u-k-MWN-BWy-U-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 "
              tabIndex="0"
              role="link"
            >
              Rabbit
            </a>
          </div>
        </Link>
        <Link className="w-full cursor-pointer group  overflow-hidden bg-white rounded-lg shadow-xl">
          <img
            className="object-cover w-full h-56  group-hover:scale-105
                duration-500 
                transition"
            src="https://i.postimg.cc/Fs0vR44F/judy-beth-morris-o-Yi-KLUVYo-JQ-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 "
              tabIndex="0"
              role="link"
            >
              German Shepherd
            </a>
          </div>
        </Link>
        <Link className="w-full cursor-pointer group  overflow-hidden bg-white rounded-lg shadow-xl">
          <img
            className="object-cover w-full h-56  group-hover:scale-105
                duration-500 
                transition"
            src="https://i.postimg.cc/rpw2QRtz/elena-mozhvilo-AGehl6k8x-Vo-unsplash.jpg"
            alt="avatar"
          />

          <div className="py-5 text-center">
            <a
              href="#"
              className="block text-xl font-bold text-gray-800 "
              tabIndex="0"
              role="link"
            >
              Persian Cat
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PetCategorySection;
