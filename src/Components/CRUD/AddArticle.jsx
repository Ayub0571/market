import { storage, db } from "components/firebase/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddArticle = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    img: "",
  });
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };

  const handlePublic = () => {
    if (!formData.name || !formData.description || !formData.img) {
      alert("Пожалуйста пополните форму");
      return;
    }
    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.img.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.img);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          name: "",
          description: "",
          img: "",
        });
        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const articleRef = collection(db, "fish");
          addDoc(articleRef, {
            name: formData.name,
            description: formData.description,
            img: url,
          })
            .then(() => {
              toast("Успешно добавлено", { type: "succes" });
              setProgress(0);
            })
            .catch((err) => {
              toast("Ошибка", { type: "err" });
            });
        });
      }
    );
  };
  return (
    <div className="border p-3 mt-3 bg-light" style={{ position: "fixed" }}>
      <h2>Create article</h2>
      <label htmlFor="">Title</label>
      <input
        type="text"
        name="name"
        className="form-control"
        value={formData.name}
        onChange={(e) => handleChange(e)}
      />

      <label htmlFor="">description</label>
      <textarea
        name="description"
        className="form-control"
        value={formData.description}
        onChange={(e) => handleChange(e)}
      ></textarea>

      <label htmlFor="">Iamge</label>
      <input
        type="file"
        name="image"
        accept="image/*"
        className="form-control"
        onChange={(e) => handleImageChange(e)}
      />
      {progress === 0 ? null : (
        <div className="progress">
          <div
            className="progress-bar progress-bar-scriped mt-2"
            style={{ width: `${progress}%` }}
          >
            {`uploing image  ${progress}%`}
          </div>
        </div>
      )}
      <button className="form-control btn-primary mt-2" onClick={handlePublic}>
        Создать
      </button>
    </div>
  );
};

export default AddArticle;
