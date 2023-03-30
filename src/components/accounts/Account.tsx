import AvatarOne from "../../assets/img/avatars/1.png";
import { useState } from "react";

const Account = () => {
  const [file, setFiles] = useState<string>("");
  return (
    <div className="mx-6">
      <div>Tabpane</div>

      <div className="mt-4 bg-white  p-6">
        <h3>Profile Detail</h3>
        <div className="flex items-center mt-4 gap-8">
          <img
            className="h-24 w-24 rounded-md"
            src={file !== "" ? file : AvatarOne}
            alt="avatar"
          />

          <div>
            <label
              htmlFor="fileInput"
              className={"bg-primary px-6 py-3 text-white rounded-md"}
            >
              Upload File
              <input
                className="hidden"
                type="file"
                id="fileInput"
                accept=".mp4, .mov, .png, .jpg"
                onChange={(e) => setFiles(e.target.value)}
              />
            </label>
            <button className="px-6 py-3 bg-gray-600 ml-4 text-white rounded-md">
              Reset
            </button>
            <p className="text-gray-400 mt-4">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-t-gray-300 w-full mt-5">
        <form></form>
      </div>
    </div>
  );
};

export default Account;
