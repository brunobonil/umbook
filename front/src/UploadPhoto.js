import { useState } from "react";





function UploadPhoto() {
  
  const [image, setImage] = useState("")
  const imageHandler = (e) => {

  }

    return (
      <div style={{ textAlign: "center" }} className="UploadPhoto">
        <h2>Subir imagen</h2>
        <input accept="image/*" type="file"></input>
        <div>
          <button onChange={imageHandler}>Upload</button>
        </div>
      </div>
    );
  }
  
  export default UploadPhoto;
  