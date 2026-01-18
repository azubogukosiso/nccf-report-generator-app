import ChangePasswordComponent from "../components/ChangePasswordComponent";
import NavbarComponent from "../components/NavbarComponent";

import { useAuthContext } from "../hooks/useAuthContext";

const ChangePasswordPage = () => {
  const { unit } = useAuthContext();

  return (
    <>
      <NavbarComponent />
      <div className="flex items-center justify-between">
        <div className="flex">
          <label
            htmlFor="my-drawer"
            className="flex items-center justify-center p-2 mr-5 text-white transition-all bg-blue-800 rounded-lg cursor-pointer drawer-button hover:bg-blue-900 active:scale-[0.95]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z" />
            </svg>
          </label>
          <h1>Change your Password</h1>
        </div>

        <p>Unit: {unit?.unitName}</p>
      </div>
      <div className="flex items-center justify-center h-full">
        <ChangePasswordComponent />
      </div>
    </>
  );
};

export default ChangePasswordPage;
