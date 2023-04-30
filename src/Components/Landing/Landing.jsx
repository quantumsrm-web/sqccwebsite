import React from "react";
import logo from "./assets/Logo.png";
import circles from "./assets/circles.png";
const Landing = () => {
  return (
    <div className="bg-[#1E1E1E] text-white">
      <div className=" h-screen">
        <img
          src={logo}
          alt="main logo"
          className="relative top-[20%] mx-auto w-52 mb-10 animate-spin-slow "
        />
        <p className="relative text-center text-5xl top-[25%]">
          SRM QUANTUM
          <br />
          COMPUTING CLUB
        </p>
      </div>
      <div>
        <p className="uppercase text-center font-semibold text-4xl mt-10">
          About us
        </p>
        <p className="mt-16 max-w-7xl mx-auto text-center">
         Welcome to SRM Quantum Computing Club, a community of students 
         dedicated to research in the field of quantum computing. As a 
         member, you'll have the opportunity to learn about quantum theory,
         algorithms, and hardware, as well as collaborate with others on 
         research projects. We offer workshops, seminars, and mentorship 
         to support our members. Join us in exploring the exciting world 
         of quantum computing!
        </p>

        {/* circles */}
        <img src={circles} alt="vision" className="mx-auto w-[65%] my-16" />
        <div className="flex text-center justify-center">
          <div className="flex flex-col max-w-xs">
            <p>PROVIDE</p>
            <p className="my-10">
              We provide a supportive and collaborative environment to learn, grow, and make valuable connections with other students and experts in this field.
            </p>
          </div>
          <div className="flex flex-col max-w-xs">
            <p>PREPARE</p>
            <p className="my-10">
              We prepare our members by equipping them with the knowledge and skills necessary to excel in the field of Quantum Computing.
            </p>
          </div>
          <div className="flex flex-col max-w-xs">
            <p>PRODUCE</p>
            <p className="my-10">
              We aim towards producing innovative research and solutions that push the boundaries of whats currently possible!
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="flex flex-col mx-auto my-20 gap-10 relative">
        {/* rectangle box card */}
        {/* 1 */}
        <div className="text-center mx-auto font-semibold text-5xl mb-40">DOMAINS</div>
        <div className="max-w-sm text-center bg-[#1F2933] border-2 border-green-300 rounded-3xl px-8 py-4 drop-shadow-title relative left-[20%]">
          <p className="text-2xl">Quantum</p>
          <p className=" mt-8 mb-12">
            This is the Core Domain of our Club which focuses on research in the field of quantum computing. Working on cutting-edge projects related to quantum theory & algorithms, and collaborate towards producing innovative solutions that push the boundaries of this exciting field.
          </p>
        </div>
        {/* 2 */}
        <div className="max-w-sm text-center bg-[#1F2933] border-2 border-green-300 rounded-3xl px-8 py-4 drop-shadow-title  relative left-[55%]">
          <p className="text-2xl">Technical</p>
          <p className=" mt-8 mb-12">
            Our Technical Domain includes Web-Dev and AI/ML. Provinding opportunities to develop technical skills and work on projects related to these domains, along with valuable experience that can be applied in a variety of fields.
          </p>
        </div>
        <div className="max-w-sm text-center bg-[#1F2933] border-2 border-green-300 rounded-3xl px-8 py-4 drop-shadow-title  relative left-[25%]">
          <p className="text-2xl">Corporate</p>
          <p className=" mt-8 mb-12">
            Our Corporate Domain is aimed towards preparing the members for professional world. Organizing events and workshops that focuses on topics such as resume building, interview skills, and networking, providing members with the necessary tools to succeed in their careers.
          </p>
        </div>
        <div className="max-w-sm text-center bg-[#1F2933] border-2 border-green-300 rounded-3xl px-8 py-4 drop-shadow-title  relative left-[65%] mb-20">
          <p className="text-2xl">Editorial</p>
          <p className=" mt-8 mb-12">
            Our Editorial Domain focuses on Creating & Producing content related to quantum computing. Writing articles, Creating videos, and produce other forms of content to educate and inform others about the latest tech-innovations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
