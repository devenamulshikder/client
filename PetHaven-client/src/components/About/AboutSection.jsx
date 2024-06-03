/* eslint-disable react/no-unescaped-entities */
import "./about.css";

const AboutSection = () => {
  return (
    <div className="about bg-fixed ">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold  lg:my-10 text-center text-white pt-2">
        About Us
      </h1>
      <div className="max-w-7xl mx-auto p-4">
        <h1 className="text-white text-center text-2xl max-w-4xl mx-auto">
          Welcome to Pet Haven Our mission is to create a loving home for every
          pet in need. We believe that every animal deserves a chance to be
          loved and cared for, and our platform is designed to make that dream a
          reality.
        </h1>
        <div className="  flex flex-col md:flex-row-reverse md:gap-10 lg:gap-16 items-center text-white mt-8 roboto">
          <h1 className="flex-1">
            <span className="text-2xl font-bold">
              {" "}
              Why We Started This Platform!{" "}
            </span>
            <br />
            <br /> The journey of Pet Haven began with a passion for animals and
            a desire to make a difference. We noticed that many pets in shelters
            were being overlooked, and potential adopters were facing
            difficulties finding the right pet. Our platform bridges this gap by
            offering a seamless and user-friendly experience for both adopters
            and shelters. We collaborate with animal shelters, rescue groups,
            and foster homes to ensure that every pet gets a fair chance at
            finding a loving family.
          </h1>
          <ul className="flex-1">
            {" "}
            <p className="text-2xl font-bold"> How it works!</p> <br />
            <li>
              <span className="font-semibold">1. Explore Pets:</span> Browse
              through profiles of adorable pets waiting for a forever home. You
              can search by species, breed, age, and location to find the
              perfect match for your family.
            </li>
            <br />
            <li>
              <span className="font-semibold">2. Get to Know Them:</span> Each
              pet profile includes detailed information about their personality,
              health, and history. We also provide photos and videos to help you
              get a better sense of each pet's unique character.
            </li>
            <br />
            <li>
              <span className="font-semibold">3. Apply to Adopt:</span> Once you
              find a pet you're interested in, simply fill out our adoption
              application. Our team will review your application and get in
              touch to discuss the next steps.
            </li>{" "}
            <br />
            <li>
              <span className="font-semibold">4. Meet & Greet:</span> Schedule a
              meet-and-greet with the pet to ensure a good fit. This can be done
              virtually or in-person, depending on your location and
              availability.
            </li>{" "}
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
