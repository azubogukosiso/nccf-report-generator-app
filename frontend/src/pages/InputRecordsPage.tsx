import InputRecordsComponent from "../components/InputRecordsComponent";
import NavbarComponent from "../components/NavbarComponent";

import { useAuthContext } from "../hooks/useAuthContext";

const InputRecordsPage = () => {
  const { unit } = useAuthContext();

  return (
    <>
      <NavbarComponent />
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center">
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
          <div>
            <h1>Input your Records</h1>
            {unit?.unitId === 1 ? (
              <p>for Discipleship Classes</p>
            ) : (
              unit?.unitId === 2 && <p>for Sunday Fellowships</p>
            )}
          </div>
        </div>

        <p>Unit: {unit?.unitName}</p>
      </div>

      <div className="flex items-center justify-center">
        <InputRecordsComponent />
      </div>
    </>
  );
};

export default InputRecordsPage;
