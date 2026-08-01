import { useState } from "react";
import { fileToDataUrl } from "../../utils/functions.ts";
import Photo from "../Photo/Photo.tsx";
import "./Manager.css";

function Manager() {
  const [urlList, setUrlList] = useState<string[]>([]);
  const handleSelect = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = evt.target.files;
    if (!fileList) return;
    const files = [...fileList];
    const urls = await Promise.all(files.map((file) => fileToDataUrl(file)));
    setUrlList((prev) => [...prev, ...urls]);
  };
  const handleDelete = (url: string) => {
    const urls = urlList.filter((item: string) => item != url);
    setUrlList(urls);
  };
  return (
    <div className="manager">
      <div className="btn-upload">
        <input type="file" multiple onChange={handleSelect} />
        <span className="btn-upload-text">Click to select</span>
      </div>
      <div className="photo-list">
        {urlList.map((url: string) => (
          <Photo key={url} url={url} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}

export default Manager;
