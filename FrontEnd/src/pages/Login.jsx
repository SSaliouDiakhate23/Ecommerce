import { useState } from "react";
function Login() {
  const [currentSate, setCurrentState] = useState("sign Up");
  async function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <form
        action=""
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800  "
        onSubmit={onSubmit}
      >
        <div className=" inline-flex items-center gap-2 mb-2 mt-10">
          <p className="prata-regular text-3xl ">{currentSate}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentSate === "sign Up" ? (
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-800"
            placeholder="name"
            required
          />
        ) : (
          ""
        )}

        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Email"
          required
        />
        <input
          type="password"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="password"
          required
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]  ">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentSate === "Login" ? (
            <p
              className="cursor-pointer"
              onClick={() => {
                setCurrentState("sign Up");
              }}
            >
              Create account
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => {
                setCurrentState("Login");
              }}
            >
              Login Here
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-3 mt-4 ">
          {currentSate === "sign Up" ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default Login;
