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
  return (
    <div className="manager">
      <label className="btn-upload">
        Click to select
        <input type="file" multiple onChange={handleSelect} />
      </label>
      <div className="photo-list">
        {urlList.map((url: string, i: number) => (
          <Photo key={`url-${i}`} url={url} />
        ))}
      </div>
    </div>
  );
}

export default Manager;
