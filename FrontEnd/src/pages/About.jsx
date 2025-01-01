import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetters from "../components/NewsLetters";

function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="flex my-10 flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          alt=""
          className="w-full md:max-w-[450px]"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            illo nisi. Error velit quos unde sed quod necessitatibus id nihil,
            delectus quia, possimus maxime eligendi sit beatae consequatur vel
            suscipit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            vitae accusantium iure officiis nihil odio facilis quam est tempora
            nisi doloremque consequatur autem deserunt nobis debitis dicta magni
            fugiat consequuntur!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, nostrum. Error, consequatur ex totam voluptatem quaerat
            inventore corporis deleniti non itaque. Consequatur rerum rem
            suscipit facere, ea voluptatibus dolorum animi?
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 ">
          <b>Qualite Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            animi explicabo non aut accusamus nemo beatae placeat unde voluptas
            velit praesentium error? Reiciendis in rem et repudiandae dolore
            voluptatibus esse!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 ">
          <b>Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            animi explicabo non aut accusamus nemo beatae placeat unde voluptas
            velit praesentium error? Reiciendis in rem et repudiandae dolore
            voluptatibus esse!
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 ">
          <b>Exeptionnel Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            animi explicabo non aut accusamus nemo beatae placeat unde voluptas
            velit praesentium error? Reiciendis in rem et repudiandae dolore
            voluptatibus esse!
          </p>
        </div>
      </div>
      <NewsLetters />
    </div>
  );
}

export default About;
