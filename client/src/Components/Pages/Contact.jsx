import React, { useState } from 'react'
import NavBar from '../NavBar'
import axios from 'axios'

const Contact = () => {
  const [fileUpload, setFileUpload] = useState("")
  const [image, setImage] = useState("")

  const changeFile = (e)=>{
    let reader = new FileReader();
    let fileToBeConverted = e.target.files[0]
    reader.readAsDataURL(fileToBeConverted);

    reader.onload = ()=>{
      setFileUpload(reader.result);
    }
  }

  const uploadFile = (e) =>{
    e.preventDefault();
   axios.post("http://localhost:3000/upload", {file:fileUpload})
   .then((response)=>{
    setImage(response.data.response.image);
    
   })
    
  }
  return (
    <div>
        <NavBar/>
        <form action="" onSubmit={uploadFile}>

    <input type="file" onChange={changeFile}/>
    <input type="submit" value="upload" />
        </form>



        <div>
          <img src={image} alt=""  width={400}/>
        </div>
    </div>
  )
}

export default Contact