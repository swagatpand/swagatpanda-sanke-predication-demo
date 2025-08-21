import React, { useState } from "react";
import ClassificationResult from "./ClassificationResult";

export default function ImageUploadZone() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleUpload} />
      {file && <ClassificationResult image={file} />}
    </div>
  );
}
