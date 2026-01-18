import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordInput from "./PasswordInputComponent";

import { useUnitSignin } from "../hooks/useUnitSignin";

const SignInComponent = () => {
  const [password, setPassword] = useState("");
  const [unit, setUnit] = useState("");

  const { signin } = useUnitSignin();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signin(unit, password);
  };

  return (
    <form className="w-1/2" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="mb-5">Sign In</h1>
      <PasswordInput
        value={password}
        onChange={setPassword}
        placeholder="Enter your password"
        label="Password"
        name="password"
      />

      <div className="mb-5">
        <label htmlFor="unit" className="text-xs">
          Select Unit:
        </label>
        <select
          id="unit"
          required
          name="unit"
          className="focus:!outline-none rounded-t-md bg-white p-2 w-full border-b cursor-pointer"
          onChange={(e) => setUnit(e.target.value)}
          value={unit}
        >
          <option value=""></option>
          <option value="Zonal Coordinator">Office of the Zonal Coordinator</option>
          <option value="Assistant Zonal Coordinator">Office of the Assistant Zonal Coordinator</option>
          <option value="Battle Axe Drama Unit">Battle Axe Drama Unit</option>
          <option value="Bible Study Unit">Bible Study Unit</option>
          <option value="Children Evangelism Unit">
            Children Evangelism Unit
          </option>
          <option value="Evangelism Unit">Evangelism Unit</option>
          <option value="King's Psalmist Choir Unit">
            King's Psalmist Choir Unit
          </option>
          <option value="Media and Publicity Unit">
            Media and Publicity Unit
          </option>
          <option value="Prayer Unit">Prayer Unit</option>
          <option value="Sister's Fellowship Unit">
            Sister's Fellowship Unit
          </option>
          <option value="Transport and Organizing Unit">
            Transport and Organizing Unit
          </option>
        </select>
      </div>

      <button className="w-full py-2 text-white transition-all bg-blue-800 rounded-lg cursor-pointer hover:bg-blue-900 active:scale-[0.95]">
        Sign In
      </button>

      <Link
        to="/"
        className="block mt-5 text-center underline underline-offset-3"
      >
        Back to Home
      </Link>
    </form>
  );
};

export default SignInComponent;
