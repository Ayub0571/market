import React from "react";
import SavedShows from "./components/Saved";

const Account = () => {
  return (
    <>
      <div className="account_body w-full text-white">
        <img
          className="account_img w-full h-full object-cover"
          src="https://img.freepik.com/free-vector/ocean-sea-waves-with-white-foam-nature-landscape_107791-1563.jpg?w=2000"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
    </>
  );
};

export default Account;
