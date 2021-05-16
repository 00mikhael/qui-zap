import React, {useState, useRef} from "react";
import {withRouter} from 'react-router-dom'

import {VscLoading} from 'react-icons/vsc'
import {IoImageOutline} from 'react-icons/io5'


const CreatePage = withRouter((props) => {

  const inputTitleRef = useRef()
  const inputDescRef = useRef()
  const inputCreatorRef = useRef()
  const inputCoverRef = useRef()

  const [coverImage, setCoverImage] = useState('')
  const [uploading, setUploading] = useState(false)
  const [creating, setCreating] = useState(false)


  const createQuiz = async (quiz) => {
    setCreating(true)
    const upload = await fetch('api/createQuiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quiz),
    });
    setCreating(false)
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
    if (quiz.name && quiz.description && quiz.creator) {
      createQuiz(quiz);
    }
  }

  const handleImageRemove = () => {
      setCoverImage('')
      inputCoverRef.current.value = null;
  }

  const handleImageChange = async (event) => {
    if (event.target.files.length > 0) {
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
    <form onSubmit={handleSubmit} className={`flex flex-col space-y-4 max-w-md mx-auto w-full`} encType="multipart/form-data">
        <h1 className={`font-extrabold text-fuchsia-600 text-5xl my-2 `}>Create Quiz</h1>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-fuchsia-600 text-lg`} htmlFor="title">Title</label>
          <input ref={inputTitleRef} className={`px-4 py-2 bg-fuchsia-50 rounded-md shadow-inner`} id="title" type="text" placeholder="Enter quiz title"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-fuchsia-600 text-lg`} htmlFor="description">Describe</label>
          <textarea ref={inputDescRef} className={`px-4 py-2 mt-1 bg-fuchsia-50 rounded-md shadow-inner`}  id="description" type="text" placeholder="Enter quiz description"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-fuchsia-600 text-lg`} htmlFor="creator_name">Created By</label>
          <input ref={inputCreatorRef} className={`px-4 py-2 mt-1 bg-fuchsia-50 rounded-md shadow-inner`}  id="creator_name" type="text" placeholder="Add display name"/>
        </span>
          <span className={` flex flex-col max-w-min`}>
            <label className={`flex items-center font-semibold text-fuchsia-600 text-lg`} htmlFor="quiz_image">Cover Image
            </label>
            <VscLoading className={`my-4 animate-spin mx-auto ${uploading ? `inline-flex` : `hidden`}`} color="#A300A3" height={20} width={20} />
            <span className={`flex justify-between items-start ${coverImage ? `opacity-100` : `opacity-0 hidden`}`}>
              <img className={`my-1 rounded transition`} width={150} src={coverImage} alt={``} />
            </span>
            <span onClick={() => {
                if (coverImage) {
                  return handleImageRemove();
                } else {
                  return inputCoverRef.current.click();
                }
              }} className={`border border-fuchsia-600 rounded text-fuchsia-600 px-4 py-2 cursor-pointer hover:bg-fuchsia-700 focus:bg-fuchsia-700 hover:text-fuchsia-50 font-semibold max-w-min flex items-center justify-center`}>
                {coverImage ? `Remove` : `Upload`}
                <IoImageOutline className={`ml-1`} />
            </span>
            <input ref={inputCoverRef} className={`h-0 w-0 opacity-0 invisible pointer-events-none select-none`} id="quiz_image" type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
          </span>
        <button style={{marginTop: "2rem"}} className={`bg-fuchsia-600 text-fuchsia-50 p-3 rounded-md focus:outline-none ${creating && `opacity-50 cursor-not-allowed`}`} type="submit">
          Create
          <VscLoading className={`text-fuchsia-50 hidden animate-spin mx-1 ${creating && `inline-flex`}`}  height={20} width={20} />
        </button>
      </form>
  );
});

export default (CreatePage);
