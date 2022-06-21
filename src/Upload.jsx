import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ref, uploadBytes, getDownloadURL, } from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";
import "./Upload.css";
import { Link } from "react-router-dom";

function Upload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState();


  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls(url);
      });
    });
  };


  return (
    <div className="cont">
      <div className="Upload">
        <h1 className="text-danger">Know your floor plan</h1>

        <input
          type="file"
          onChange={(event) => {
            setImageUpload(event.target.files[0]);
          }}
        />

        <button type="button" className="btn btn-outline-success" onClick={uploadFile}>Upload</button>
        <img src={imageUrls} />
      </div>
      <Link className="Next" to = "/upload/select_support_plan"> <h1 className="Next_color"> Next </h1> </Link>
    </div>
  );
}
export default Upload;