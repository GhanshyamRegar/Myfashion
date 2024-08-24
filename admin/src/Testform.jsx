import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Testform=( {imgLinker} )=> {

    const [img,setimg] = useState("")




    const [file, setfile] = useState(null)

 
    const handleUpload = (e) => {
        e.preventDefault()
        // if (!selectedImage) {
        //     return alert("pleaseselect an image to upload")
        // }

      

        const formdata = new FormData()
        formdata.append('file', file)

        if(file)
        {

            axios.post("http://localhost:4001/upload", formdata)
            .then(res => { 
                imgLinker(res.data.data) 
                setimg(res.data.data)
            })
            .catch(err => { console.log(err) })
            
            console.log(file)
        }

    }

    return (
        <div>
            <input type="file" name="profileimage" onChange={(e) => setfile(e.target.files[0])} />
            <button onClick={handleUpload}>send</button>

            <img src={"http://localhost:4001/Images/"+img} alt="Select Image" style={{width:"100px"}} />

        </div>


    )
}


export default Testform