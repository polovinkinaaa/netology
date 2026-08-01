import { useState } from "react";
import { fileToDataUrl } from "../../utils/functions.ts";
import Photo from "../Photo/Photo.tsx";
import "./Manager.css";

type PhotoItem = {
  id: string;
  url: string;
};

function Manager() {
  const [urlList, setUrlList] = useState<PhotoItem[]>([]);
  const handleSelect = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = evt.target.files;
    if (!fileList) return;
    const files = [...fileList];
    const urls = await Promise.all(files.map((file) => fileToDataUrl(file)));
    const photos = urls.map((url) => ({
      id: crypto.randomUUID(),
      url,
    }));
    setUrlList((prev) => [...prev, ...photos]);
  };
  const handleDelete = (id: string) => {
    const urls = urlList.filter((item: PhotoItem) => !(item.id === id));
    setUrlList(urls);
  };
  return (
    <div className="manager">
      <div className="btn-upload">
        <input type="file" accept="image/*" multiple onChange={handleSelect} />
        <span className="btn-upload-text">Click to select</span>
      </div>
      <div className="photo-list">
        {urlList.map((photo: PhotoItem) => (
          <Photo
            key={photo.id}
            url={photo.url}
            onDelete={() => handleDelete(photo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Manager;
