import React, {useState, useRef} from "react";
import {withRouter} from 'react-router-dom'
// import * as ReactRedux from 'react-redux'

import {ImSpinner10} from 'react-icons/im'
import {IoImageOutline} from 'react-icons/io5'
import {HiOutlineX} from 'react-icons/hi'

// const mapDispatchToProps = (dispatch, props) => ({
//   onQuizCreated: () => dispatch({
//     type: 'REFRESH_QUIZ_LIST'
//   })
// })

const CreatePage = withRouter((props) => {

  const inputTitleRef = useRef()
  const inputDescRef = useRef()
  const inputCreatorRef = useRef()
  const inputCoverRef = useRef()

  const [coverImage, setCoverImage] = useState('')
  const [uploading, setUploading] = useState(false)


  const createQuiz = async (quiz) => {
    const upload = await fetch('api/createQuiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quiz),
    });
    props.history.push('/')

    if (upload.ok) {
      console.log('Quiz created to db!');
    } else {
      console.error('Quiz creation failed.');
    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    const quiz = {};
    quiz.name = inputTitleRef.current.value;
    quiz.description = inputDescRef.current.value;
    quiz.creator = inputCreatorRef.current.value;
    quiz.image_url = coverImage;
    createQuiz(quiz);
  }

  const handleImageChange = async (event) => {

    if (event.target.getAttribute('name') === 'removeImage') {
      setCoverImage('')
      inputCoverRef.current.value = null;
      return;
    } else if (event.target.files.length > 0) {
        setUploading(true);
        setCoverImage('')
        const file = event.target.files[0];
        const filename = encodeURIComponent(file.name);
        const res = await fetch(`/api/upload?file=${filename}`);
        const { url, fields } = await res.json();

        const formData = new FormData();

        Object.entries({ ...fields, file }).forEach(([key, value]) => {
          formData.append(key, value);
        });

        const upload = await fetch(url, {
          method: 'POST',
          body: formData,
        });

        if (upload.ok) {
          console.log('Uploaded successfully!');
        } else {
          console.error('Upload failed.');
        }

        const imageData = upload.json()

        imageData.then(result => {
          setCoverImage(result.url)
        })

        setUploading(false);
        return;
    }

    setCoverImage('')
    inputCoverRef.current.value = null;
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col space-y-4 max-w-md mx-auto`} encType="multipart/form-data">
        <h1 className={`font-extrabold text-gray-600 text-5xl my-2 `}>Create Quiz</h1>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-gray-600 text-lg`} htmlFor="title">Title</label>
          <input ref={inputTitleRef} className={`px-4 py-2 bg-blueGray-200 rounded-md shadow-inner`} id="title" type="text" placeholder="Enter quiz title"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-gray-600 text-lg`} htmlFor="description">Describe</label>
          <textarea ref={inputDescRef} className={`px-4 py-2 mt-1 bg-blueGray-200 rounded-md shadow-inner`}  id="description" type="text" placeholder="Enter quiz description"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-gray-600 text-lg`} htmlFor="creator_name">Created By</label>
          <input ref={inputCreatorRef} className={`px-4 py-2 mt-1 bg-blueGray-200 rounded-md shadow-inner`}  id="creator_name" type="text" placeholder="Add display name"/>
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
            <input ref={inputCoverRef} className={`mt-1`} id="quiz_image" type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
          </span>
        <button style={{marginTop: "2rem"}} className={`bg-fuchsia-600 text-fuchsia-50 p-3 rounded-md focus:outline-none`} type="submit">
          Create
        </button>
      </form>
  );
});

export default (CreatePage);
