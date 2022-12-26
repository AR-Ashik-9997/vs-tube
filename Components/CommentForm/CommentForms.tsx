import React from "react";

const CommentForms = () => {
  return (
    <div className="card lg:card-side gap-5 items-center mt-6">
      <div>
        <figure>
          <img
            src="https://placeimg.com/400/400/arch"
            alt="Album"
            className="rounded-full w-14"
          />
        </figure>
      </div>
      <div className="w-20 lg:w-full ">
        <div className="form-control">
          <input
            id="message"            
            className=" bg-black input"
            placeholder="Your message..."
          />
        </div>
        <div className="flex justify-end mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default CommentForms;
