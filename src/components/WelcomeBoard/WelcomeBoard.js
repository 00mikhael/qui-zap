import React from "react";

const WelcomeBoard = () => {
  return (
    <div style={{display: "grid", gridTemplateColumns: "auto 1fr 1fr", gridTemplateRows: "auto"}} className={`bg-fuchsia-100 p-4 rounded-md shadow-md items-start gap-4`}>
      <span style={{writingMode: "vertical-rl", textOrientation: "upright"}} className={`welcome space-y-4 text-2xl sm:text-4xl font-extrabold  p-4 col-start-1 col-end-2 row-start-1 h-full text-center`}>
      <span className={`border-2 rounded-bl-2xl rounded-t-2xl border-fuchsia-600 px-2 py-1 bg-fuchsia-600 text-white text-xl font-sans font-bold`}>QUI</span>
        <span className={`text-fuchsia-600`}>ZAP</span>
      </span>
      {/* <p className={`lg:self-end row-start-2 row-end-3 col-start-2 col-end-4 lg:col-start-2 lg:col-end-3 p-4 border-2 border-dotted border-fuchsia-500 text-gray-600 text-base max-w-xl`}>{`State of the art quiz application, been referred to as the uber of quiz apps. Very easy to use just pick a category and answer the same questions over and over again. Currently working on securing our first round of funding as you read this.`}</p> */}
      <p className={`self-center lg:self-start col-start-2 col-end-4 md:col-start-3 md:col-end-4 row-start-1 p-4  text-gray-600 text-xs md:text-sm max-w-xl bg-fuchsia-200 rounded-md`}>{`State of the art quiz application, been referred to as the uber of quiz apps. Very easy to use just pick a category and answer the same questions over and over again. Currently working on securing our first round of funding as you read this.`}</p>
    </div>
  );
};

export default WelcomeBoard;
