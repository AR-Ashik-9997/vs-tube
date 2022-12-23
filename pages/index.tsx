import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>    
      <section>
        <div className=" grid lg:grid-cols-4 gap-5 p-5">
          <Link href="./viewpage">
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://placeimg.com/400/225/arch"
                  alt="Shoes"
                  className="w-full rounded-xl"
                />
              </figure>
              <div className="card-body bg-black">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
