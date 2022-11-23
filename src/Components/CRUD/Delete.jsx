import { db, storage } from "components/firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { toast } from "react-toastify";

const Delete = ({ id, img }) => {
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "fish", id));
      toast("Удалено", { type: "succes" });
      const storageRef = ref(storage, img);
      await deleteObject(storageRef);
    } catch (error) {
      toast("Ошибка", { type: "error" });
      console.log(error);
    }
  };
  return (
    <div>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Delete;
