import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner/Banner";
import PetCategorySection from "../components/PetCategorySection/PetCategorySection";
import CallToAction from "../components/CallToActionSection/CallToAction";
import AboutSection from "../components/About/AboutSection";
import FromShelter from "../components/FromShelter/FromShelter";
import OurLatestArticles from "../components/OurLatestArticles/OurLatestArticles";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Pet Haven | Home</title>
      </Helmet>
      {/* banner 1*/}
      <Banner />
      {/* Pet category Section 2*/}
      <PetCategorySection />
      {/* Call to action section 3*/}
      <CallToAction />
      {/* About us 4 */}
      <AboutSection />
      {/* From SHelter 5 */}
      <FromShelter/>
      {/* Articles 6 */}
      <OurLatestArticles/>
    </div>
  );
};

export default Home;
