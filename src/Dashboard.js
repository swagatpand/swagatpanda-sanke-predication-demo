import React from "react";
import ImageUploadZone from "../components/identification/ImageUploadZone";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Snake Identification</h1>
      <ImageUploadZone />
    </div>
  );
}
