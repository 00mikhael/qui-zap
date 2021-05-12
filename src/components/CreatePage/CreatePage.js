import React, {useState, useRef} from "react";

import {ImSpinner10} from 'react-icons/im'
import {IoImageOutline} from 'react-icons/io5'
import {HiOutlineX} from 'react-icons/hi'


const CreatePage = () => {

  const inputFileRef = useRef()

  const [coverImage, setCoverImage] = useState('')
  const [uploading, setUploading] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

  }

  const handleImageChange = (event) => {
    event.preventDefault();

    if (event.target.getAttribute('name') === 'removeImage') {
      setCoverImage('')
      inputFileRef.current.value = null;
      return;
    } else if (event.target.files.length > 0) {
        setUploading(true);
        let file = event.target.files[0];
        setCoverImage(URL.createObjectURL(file))
        setUploading(false);
        return;
    }

    // let reader = new FileReader();
    // reader.onload = function() {
    // // The file's text will be printed here
    //   console.log(reader.result)
    //   setCoverImage(reader.result)
    // };

    // reader.readAsDataURL(file);

    setCoverImage('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={`flex flex-col space-y-4 max-w-md mx-auto`}>
        <h1 className={`font-extrabold text-gray-600 text-5xl my-2 `}>Create Quiz</h1>
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
          <span className={` flex flex-col`}>
            <label className={`flex items-center font-semibold text-gray-600 text-lg`} htmlFor="quiz_image">Cover
            <IoImageOutline className={`ml-1`} />
            </label>
            <ImSpinner10 className={`ml-1 text-lg text-gray-600 animate-spin transition ${uploading ? `opacity-100` : `opacity-0 hidden`} `} />
            <span className={`flex items-start ${coverImage ? `opacity-100` : `opacity-0 hidden`}`}>
              <img className={`my-1 rounded transition`} width={150} src={coverImage} alt={``} />
              <HiOutlineX name="removeImage" onClick={handleImageChange} className={`text-lg cursor-pointer`} />
            </span>
            <input className={`mt-1`} id="quiz_image" type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} ref={inputFileRef} />
          </span>
        <button style={{marginTop: "2rem"}} className={`bg-fuchsia-600 text-fuchsia-50 p-3 rounded-md focus:outline-none`} type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePage;
