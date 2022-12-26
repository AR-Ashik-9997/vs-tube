import { GetServerSideProps } from "next";
import Link from "next/link";
import React from "react";
import { video } from "../types";
const Home = ({ videoInfo }: video) => {
  return (
    <div className=" grid lg:grid-cols-4 gap-5 p-5">
      {videoInfo.map((item) => (
        <div key={item._id}>
          <Link href={`./viewpage-${item.video_url}`}>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.img_url}
                  alt={item.title}
                  className="w-full rounded-xl"
                />
              </figure>
              <div className="card-body bg-black">
                <h2 className="card-title">{item.title}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/video-info");
  const data = await res.json();
  return {
    props: {
      videoInfo: data,
    },
  };
};
export default Home;
