import AvatarOne from "../../assets/img/avatars/1.png";
import { useState } from "react";
import AccountForm from "./AccountForm";

const Account = () => {
  const [file, setFiles] = useState<string>("");
  return (
    <div className="mx-6">
      <div>Tabpane</div>

      <AccountForm />
    </div>
  );
};

export default Account;
