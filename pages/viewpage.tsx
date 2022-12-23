import React from "react";

const viewpage = () => {
  return (
    <div className="flex-row lg:flex gap-8 p-0 lg:p-5">
      <div className="card card-compact w-full bg-base-100 shadow-xl rounded-none">
        <iframe
          className="w-full aspect-video"
          src="https://www.youtube.com/embed/gHgwnI28Ahc?rel=0&amp;autoplay=1"
          allowFullScreen
        ></iframe>
        <div className="card-body p-1">
          <h1 className="card-title">Ploua - XZEEZ Remix (Mihaita Piticu)</h1>
        </div>
      </div>
      <div className="w-full lg:w-6/12 items-end mt-1 ">
        <div className="card lg:card-side bg-base-100 h-28 lg:h-36 shadow-xl gap-4 rounded-none mb-96 lg:mt-3 lg:mb-0">
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://placeimg.com/400/400/arch"
                alt="Album"
                className="rounded-none"
              />
            </figure>
          </div>
          <div className="card-body p-2 lg:p-0">
            <h2 className="card-title">New</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 h-28 lg:h-36 shadow-xl gap-4 rounded-none mb-96 lg:mt-3 lg:mb-0">
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://placeimg.com/400/400/arch"
                alt="Album"
                className="rounded-none"
              />
            </figure>
          </div>
          <div className="card-body p-2 lg:p-0">
            <h2 className="card-title">New</h2>
            <p>Click the button to listen on Spotiwhy app.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};
{
  /* <div className="card lg:card-side bg-base-100 h-28 lg:h-36 shadow-xl gap-4 rounded-none mt-3 lg:mt-3">
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://placeimg.com/400/400/arch"
                  alt="Album"
                  className="rounded-none"
                />
              </figure>
            </div>
            <div className="card-body p-2 lg:p-0">
              <h2 className="card-title">New</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
            </div>
          </div> */
}
export default viewpage;
