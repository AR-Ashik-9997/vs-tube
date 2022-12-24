import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { video } from "../types";
const viewpage = ({ videoInfo }: video) => {
  const router = useRouter();
  const video_url = router.query.viewpage
    ? router.query.viewpage.replace("viewpage-", "")
    : "";
  return (
    <div className="flex-row lg:flex gap-8 p-0 lg:p-5">
      <div className="w-full">
        <div className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${video_url}?rel=0&amp;autoplay=1`}
            allowFullScreen
          ></iframe>
          <div className="card-body p-1">
            <h1 className="card-title">Ploua - XZEEZ Remix (Mihaita Piticu)</h1>
          </div>
        </div>
      </div>
      
      <div className="w-full lg:w-4/12 items-end mt-1 lg:overflow-y-scroll lg:h-[48rem] lg:p-3">
        {videoInfo.map((item) => (
          <div
            key={item._id}
            className="card w-full lg:card-side bg-base-100 h-28 lg:h-24 xl:h-20 xl:overflow-hidden shadow-xl mt-3 mb-48 lg:mt-3 lg:mb-0"
          >
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item.img_url}
                  alt="Album"
                  className="rounded-none w-full "
                />
              </figure>
            </div>
            <div className="card-body w-full p-3">
              <h2 className="card-title lg:text-sm xl:text-xs">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
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
export default viewpage;
