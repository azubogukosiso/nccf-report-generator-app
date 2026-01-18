import { useState } from "react";

import { saveReports } from "../functions/saveReports";
import { editReports } from "../functions/editReports";
import { downloadReport } from "../functions/downloadReport";

import { useAuthContext } from "../hooks/useAuthContext";
import type { editReportDetailsType } from "../types/editReportDetailsType";

import ChallengesInputComponent from "./RichTextInputComponents/ChallengesInputComponent";
import TestimoniesInputComponent from "./RichTextInputComponents/TestimoniesInputComponent";
import PrayerRequestInputComponent from "./RichTextInputComponents/PrayerRequestInputComponent";

const InputReportDetailsComponent = ({
  reportDetails,
  reportId,
  records,
}: editReportDetailsType) => {
  const { unit } = useAuthContext();

  const [month, setMonth] = useState(reportDetails?.month || "");
  const [year, setYear] = useState(reportDetails?.year || "");
  const [appreciation, setAppreciation] = useState(
    reportDetails?.appreciation || ""
  );
  const [challenges, setChallenges] = useState(reportDetails?.challenges || "");
  const [testimonies, setTestimonies] = useState(
    reportDetails?.testimonies || ""
  );
  const [prayerRequest, setPrayerRequest] = useState(
    reportDetails?.prayerRequest || ""
  );
  const [conclusion, setConclusion] = useState(reportDetails?.conclusion || "");
  const [signature, setSignature] = useState(reportDetails?.signature || "");

  return (
    <form className="w-full mb-20">
      <div className="flex items-center justify-between mb-20">
        <div>
          <label htmlFor="month" className="text-xs">
            Month:
          </label>
          <select
            id="month"
            required
            name="month"
            onChange={(e) => setMonth(e.target.value)}
            value={month}
            className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
          >
            <option value=""></option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </div>

        <div>
          <label htmlFor="year" className="text-xs">
            Year:
          </label>
          <select
            id="year"
            required
            name="year"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
          >
            <option value=""></option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            <option value="2026">2026</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="appreciation" className="w-1/2 text-xs">
          Appreciation:
        </label>
        <input
          type="text"
          placeholder="Enter appreciation message..."
          id="appreciation"
          name="appreciation"
          required
          onChange={(e) => setAppreciation(e.target.value)}
          value={appreciation}
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="challenges" className="w-1/2 text-xs">
          Challenges:
        </label>

        <ChallengesInputComponent
          challenges={challenges}
          setChallenges={setChallenges}
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="testimonies" className="w-1/2 text-xs">
          Testimonies:
        </label>
        <TestimoniesInputComponent
          testimonies={testimonies}
          setTestimonies={setTestimonies}
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="prayerReq" className="w-1/2 text-xs">
          Prayer Request:
        </label>
        <PrayerRequestInputComponent
          prayerRequest={prayerRequest}
          setPrayerRequest={setPrayerRequest}
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="conclusion" className="w-1/2 text-xs">
          Conclusion:
        </label>
        <input
          type="text"
          placeholder="Enter concluding message..."
          id="conclusion"
          name="conclusion"
          required
          onChange={(e) => setConclusion(e.target.value)}
          value={conclusion}
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex flex-col items-center w-full mb-5">
        <label htmlFor="signature" className="w-1/2 text-xs">
          Signature:
        </label>
        <input
          type="text"
          placeholder="Enter name of unit head..."
          id="signature"
          name="signature"
          required
          onChange={(e) => setSignature(e.target.value)}
          value={signature}
          className="focus:!outline-none rounded-t-md bg-white p-2 w-1/2 border-b"
        />
      </div>

      <div className="flex items-center mt-10 justify-evenly">
        <button
          className="px-3 py-2 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900"
          onClick={(e) =>
            !reportId
              ? saveReports(e, {
                  records,
                  month,
                  year,
                  appreciation,
                  challenges,
                  testimonies,
                  prayerRequest,
                  conclusion,
                  signature,
                  unitId: unit?.unitId,
                })
              : editReports(e, {
                  records,
                  month,
                  year,
                  appreciation,
                  challenges,
                  testimonies,
                  prayerRequest,
                  conclusion,
                  signature,
                  unitId: unit?.unitId,
                  reportId,
                })
          }
        >
          {reportId ? "Edit Report" : "Save Report"}
        </button>
        <button
          className="px-3 py-2 text-white transition-colors bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900"
          onClick={(e) =>
            downloadReport(e, {
              records,
              month,
              year,
              appreciation,
              challenges,
              testimonies,
              prayerRequest,
              conclusion,
              signature,
              unitId: unit?.unitId,
              reportId,
            })
          }
        >
          Download Report
        </button>
      </div>
    </form>
  );
};

export default InputReportDetailsComponent;
