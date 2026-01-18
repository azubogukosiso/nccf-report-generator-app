import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const NavbarComponent = () => {
  const { unit } = useAuthContext();
  const { logout } = useLogout();

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="min-h-full p-4 menu bg-base-200 text-base-content w-80">
          {/* Sidebar content here */}
          <li>
            <Link to="/input-record">Input Records</Link>
          </li>
          <li className="mt-2">
            <Link to="/records">All Records</Link>
          </li>
          <li className="mt-2">
            <Link to="/reports">All Reports</Link>
          </li>
          <li className="mt-2">
            <Link to="/change-password">Change Password</Link>
          </li>
          {unit?.unitId === 1 && (
            <li className="mt-2">
              <Link to="/input-report">Generate Situational Report</Link>
            </li>
          )}
          <li className="mt-2">
            <button onClick={() => logout()}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarComponent;
