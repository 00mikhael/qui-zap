import React from "react";

const CreatePage = () => {
  return (
    <div>
      <form className={`flex flex-col space-y-4 max-w-md mx-auto`}>
        <h1 className={`font-extrabold text-gray-600 text-5xl my-2`}>Create Quiz</h1>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-gray-600 text-lg`} htmlFor="title">Title</label>
          <input className={`px-4 py-2 bg-blueGray-200 rounded-md shadow-inner`} id="title" type="text" placeholder="Enter quiz title"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-gray-600 text-lg`} htmlFor="description">Describe</label>
          <textarea className={`px-4 py-2 mt-1 bg-blueGray-200 rounded-md shadow-inner`}  id="description" type="text" placeholder="Enter quiz description"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-gray-600 text-lg`} htmlFor="creator_name">Created By</label>
          <input className={`px-4 py-2 mt-1 bg-blueGray-200 rounded-md shadow-inner`}  id="creator_name" type="text" placeholder="Add display name"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-gray-600 text-lg`} htmlFor="quiz_image">Cover Image</label>
          <input className={`mt-1`} id="quiz_image" type="file"/>
        </span>
        <button style={{marginTop: "2rem"}} className={`bg-fuchsia-600 text-fuchsia-50 p-3 rounded-md focus:outline-none`} type="">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
