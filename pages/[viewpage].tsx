import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CommentForms from "../Components/CommentForm/CommentForms";
import { single_video_info, video } from "../types";
const viewpage = ({ videoInfo }: video) => {
  const router = useRouter();
  const video_url = router.query.viewpage
    ? router.query.viewpage.replace("viewpage-", "")
    : "";
  const [single_video, setsingle_video] = useState<single_video_info>([]);
  useEffect(() => {
    fetch(`http://localhost:5000/single-video/${video_url}`)
      .then((response) => response.json())
      .then((data) => setsingle_video(data));
  }, [video_url]);
  return (
    <div className="flex-row lg:flex gap-8 p-0 lg:p-5">
      {single_video.map((item) => (
        <div key={item._id} className="w-full lg:w-10/12">
          <div className="card card-compact w-full rounded-none">
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${item.video_url}?rel=0&amp;autoplay=1`}
              allowFullScreen
            ></iframe>
            <div className="card-body p-1">
              <p className="card-title">{item.title}</p>
            </div>
          </div>
          <CommentForms />
        </div>
      ))}

      <div className="w-full lg:w-4/12 items-end mt-1 lg:overflow-y-scroll lg:h-[48rem] lg:p-3">
        {videoInfo.map((item) => (
          <Link href={`./viewpage-${item.video_url}`} key={item._id}>
          <div
          
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
          </Link>
        ))}
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const allvideo = await fetch("http://localhost:5000/video-info");
  const allData = await allvideo.json();
  return {
    props: {
      videoInfo: allData,
    },
  };
};

export default viewpage;
