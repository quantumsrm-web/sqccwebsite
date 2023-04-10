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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam non
          nisi est sit amet facilisis magna etiam tempor. Urna id volutpat lacus
          laoreet non. Felis imperdiet proin fermentum leo vel orci. Viverra
          adipiscing at in tellus integer feugiat scelerisque varius. In mollis
          nunc sed id semper risus in. Nisl suscipit adipiscing bibendum est.
          Nec sagittis aliquam malesuada bibendum arcu vitae elementum
          curabitur. Pretium lectus quam id leo in vitae turpis. In fermentum
          posuere urna nec tincidunt praesent semper feugiat. Est ullamcorper
          eget nulla facilisi etiam dignissim. Egestas purus viverra accumsan in
          nisl nisi. Cursus risus at ultrices mi tempus imperdiet.
        </p>

        {/* circles */}
        <img src={circles} alt="vision" className="mx-auto w-[65%] my-16" />
        <div className="flex text-center justify-center">
          <div className="flex flex-col max-w-xs">
            <p>PROVIDE</p>
            <p className="my-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium culpa nemo sequi minus maxime dolores mollitia totam,
              facilis, dolore quae unde provident non dolorem qui repudiandae
            </p>
          </div>
          <div className="flex flex-col max-w-xs">
            <p>PREPARE</p>
            <p className="my-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui at
              quod inventore. Rem facere eos similique itaque doloremque
              voluptates cum odit molestiae velit, optio ratione corporis
            </p>
          </div>
          <div className="flex flex-col max-w-xs">
            <p>PRODUCE</p>
            <p className="my-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              perspiciatis consequatur, ducimus unde omnis minus aspernatur
              sequi laboriosam nisi laudantium, eligendi uptates
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis explicabo voluptatibus eum doloribus optio quas magnam natus
            enim corporis, provident a ullam voluptas error repellat? Itaque
            placeat dignissimos accusantium?
          </p>
        </div>
        {/* 2 */}
        <div className="max-w-sm text-center bg-[#1F2933] border-2 border-green-300 rounded-3xl px-8 py-4 drop-shadow-title  relative left-[55%]">
          <p className="text-2xl">Technical</p>
          <p className=" mt-8 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis explicabo voluptatibus eum doloribus optio quas magnam natus
            enim corporis, provident a ullam voluptas error repellat? Itaque
            placeat dignissimos accusantium?
          </p>
        </div>
        <div className="max-w-sm text-center bg-[#1F2933] border-2 border-green-300 rounded-3xl px-8 py-4 drop-shadow-title  relative left-[25%]">
          <p className="text-2xl">Corporate</p>
          <p className=" mt-8 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis explicabo voluptatibus eum doloribus optio quas magnam natus
            enim corporis, provident a ullam voluptas error repellat? Itaque
            placeat dignissimos accusantium?
          </p>
        </div>
        <div className="max-w-sm text-center bg-[#1F2933] border-2 border-green-300 rounded-3xl px-8 py-4 drop-shadow-title  relative left-[65%] mb-20">
          <p className="text-2xl">Editorial</p>
          <p className=" mt-8 mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            facilis explicabo voluptatibus eum doloribus optio quas magnam natus
            enim corporis, provident a ullam voluptas error repellat? Itaque
            placeat dignissimos accusantium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
