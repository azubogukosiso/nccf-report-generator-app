import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import InputRecordsPage from "./pages/InputRecordsPage";
import EditRecordsPage from "./pages/EditRecordsPage";
import EditReportDetailsPage from "./pages/EditReportDetailsPage";
import ViewRecordsPage from "./pages/ViewRecordsPage";
import ViewReportsPage from "./pages/ViewReportsPage";
import InputReportDetailsPage from "./pages/InputReportDetailsPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";

function App() {
  const { unit } = useAuthContext();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQuery();
  const id = query.get("id");

  return (
    <div className="h-screen min-h-screen p-10">
      <Routes>
        <Route
          path="/"
          element={!unit ? <HomePage /> : <Navigate to="/input-record" />}
        ></Route>
        <Route
          path="signin"
          element={!unit ? <SignInPage /> : <Navigate to="/input-record" />}
        ></Route>
        <Route
          path="input-record"
          element={unit ? <InputRecordsPage /> : <Navigate to="/signin" />}
        ></Route>
        <Route
          path="edit-record"
          element={
            unit ? <EditRecordsPage recordId={id} /> : <Navigate to="/signin" />
          }
        ></Route>
        <Route
          path="records"
          element={unit ? <ViewRecordsPage /> : <Navigate to="/signin" />}
        ></Route>
        <Route
          path="reports"
          element={unit ? <ViewReportsPage /> : <Navigate to="/signin" />}
        ></Route>
        <Route
          path="input-report"
          element={
            unit ? (
              <InputReportDetailsPage recordId={id} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        ></Route>
        <Route
          path="edit-report"
          element={
            unit ? (
              <EditReportDetailsPage reportId={id} />
            ) : (
              <Navigate to="/signin" />
            )
          }
        ></Route>
        <Route
          path="change-password"
          element={unit ? <ChangePasswordPage /> : <Navigate to="/signin" />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
