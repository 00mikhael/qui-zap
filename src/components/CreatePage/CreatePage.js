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
  const [imageFiles, setImageFiles] = useState([])
  const [creating, setCreating] = useState(false)


  const createQuiz = async (quiz) => {
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


  const uploadImage = async () => {
    let imageUrl = '';
    const file = imageFiles[0];
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
      imageUrl = upload.json().then(data => data.url);
    } else {
      setCreating(false)
      console.error('Upload failed.');
    }

    return Promise.resolve(imageUrl);
  }

  const buildQuiz = (imageUrl) => {
    const quiz = {};
    quiz.name = inputTitleRef.current.value;
    quiz.description = inputDescRef.current.value;
    quiz.creator = inputCreatorRef.current.value;
    quiz.image_url = imageUrl;
    return quiz;
  }


  const handleSubmit = (event) => {
    let url = '';
    event.preventDefault();
    if (inputTitleRef.current.value
      && inputDescRef.current.value
       && inputCreatorRef.current.value) {
      setCreating(true)
      if (coverImage && imageFiles.length > 0) {
        uploadImage().then(imageUrl =>{
          url = imageUrl;
          return buildQuiz(imageUrl)
        })
        .then(quiz => {
          createQuiz(quiz);
        })
        .catch(e => {
          setCreating(false)
          console.log(e.message)
        })
      } else {
        const quiz = buildQuiz(url);
        createQuiz(quiz);
      }
    }
  }

  const handleImageRemove = () => {
      setCoverImage('')
      setImageFiles([])
      inputCoverRef.current.value = null;
  }

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      setCoverImage(URL.createObjectURL(event.target.files[0]))
      setImageFiles(event.target.files)
      return;
    }

    setCoverImage('')
    setImageFiles([])
    inputCoverRef.current.value = null;
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col space-y-4 max-w-md p-6 mx-auto w-full`} encType="multipart/form-data">
        <h1 className={`font-extrabold text-fuchsia-600 text-5xl my-2 `}>Create Quiz</h1>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-fuchsia-600 text-lg`} htmlFor="title">Title</label>
          <input ref={inputTitleRef} className={`px-4 py-2 bg-fuchsia-50 rounded-md shadow-inner`} id="title" type="text" placeholder="Enter quiz title"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-fuchsia-600 text-lg`} htmlFor="description">Describe</label>
          <textarea ref={inputDescRef} className={`px-4 py-2 mt-1 bg-fuchsia-50 rounded-md shadow-inner resize-none`}  id="description" type="text" placeholder="Enter quiz description"/>
        </span>
        <span className={`flex flex-col`}>
          <label className={`font-semibold text-fuchsia-600 text-lg`} htmlFor="creator_name">Created By</label>
          <input ref={inputCreatorRef} className={`px-4 py-2 mt-1 bg-fuchsia-50 rounded-md shadow-inner`}  id="creator_name" type="text" placeholder="Add display name"/>
        </span>
          <span className={` flex flex-col w-28`}>
            <label className={`flex items-center font-semibold text-fuchsia-600 text-lg`} htmlFor="quiz_image">Cover Image
            </label>
            {/* <VscLoading className={`my-4 animate-spin mx-auto ${uploading ? `inline-flex` : `hidden`}`} color="#A300A3" height={20} width={20} /> */}
            <span className={`flex justify-between items-start ${coverImage ? `opacity-100` : `opacity-0 hidden`}`}>
              <img className={`my-1 rounded transition`} width={150} src={coverImage} alt={``} />
            </span>
            <span onClick={() => {
                if (coverImage) {
                  return handleImageRemove();
                } else {
                  return inputCoverRef.current.click();
                }
              }} className={`rounded px-6 py-2 cursor-pointer border border-fuchsia-600 text-fuchsia-600 hover:bg-fuchsia-600 hover:text-white font-medium flex items-center justify-center`}>
                {coverImage ? `Remove` : `Select`}
                <IoImageOutline className={`ml-1`} />
            </span>
            <input ref={inputCoverRef} className={`h-0 w-0 opacity-0 invisible pointer-events-none select-none`} id="quiz_image" type="file" accept=".jpg, .jpeg, .png" onChange={handleImageChange} />
          </span>
        <button style={{marginTop: "2rem"}} className={`bg-fuchsia-600 text-fuchsia-50 p-3 rounded-md focus:outline-none ${creating && `opacity-50 cursor-not-allowed`}`} type="submit">
          Create
          <VscLoading className={`text-fuchsia-50 animate-spin mx-1 ${creating ? `inline-flex` : `hidden`}`}  height={20} width={20} />
        </button>
      </form>
  );
});

export default (CreatePage);
