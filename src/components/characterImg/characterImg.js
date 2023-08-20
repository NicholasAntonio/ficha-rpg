import { useState } from "react";
import "./characterImg.css";

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
      localStorage.setItem("uploadedImage", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const loadImageFromLocalStorage = () => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  };

  return (
    <div>
      <h2>Imagem do personagem</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="upload-button"
        className="file-input"
      />
      {selectedImage && (
        <div className="img">
          <img src={selectedImage} alt="Uploaded" />
        </div>
      )}
      <button onClick={loadImageFromLocalStorage}>Carregar personagem</button>
    </div>
  );
};

export default ImageUploader;
