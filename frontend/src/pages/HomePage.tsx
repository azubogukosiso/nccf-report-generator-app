import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-center">NCCF Nkanu West Report Generator</h1>

      <div className="flex flex-col items-center justify-center mt-24">
        <Link
          to="/signin"
          className="block px-10 py-5 mb-10 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900"
        >
          Click to Sign In
        </Link>

        <div className="join join-vertical">
          <div className="border-b collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="font-semibold collapse-title">
              How do I create an account?
            </div>
            <div className="text-sm collapse-content">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="border-b collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="font-semibold collapse-title">
              About the Platform
            </div>
            <div className="text-sm collapse-content">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="border-b collapse collapse-arrow join-item">
            <input type="radio" name="my-accordion-4" />
            <div className="font-semibold collapse-title">Developer Info</div>
            <div className="text-sm collapse-content">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
