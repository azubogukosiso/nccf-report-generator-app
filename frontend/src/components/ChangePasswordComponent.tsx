import { useState } from "react";
import PasswordInput from "./PasswordInputComponent";

const SignInComponent = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="w-1/2">
      <PasswordInput
        value={oldPassword}
        onChange={setOldPassword}
        placeholder="Enter your old password"
        label="Old Password"
        name="old-password"
      />

      <PasswordInput
        value={newPassword}
        onChange={setNewPassword}
        placeholder="Enter your new password"
        label="New Password"
        name="new-password"
      />

      <PasswordInput
        value={confirmPassword}
        onChange={setConfirmPassword}
        placeholder="Confirm your new password"
        label="Confirm Password"
        name="confirm-password"
      />

      <button className="w-full py-2 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900">
        Change Password
      </button>
    </form>
  );
};

export default SignInComponent;
