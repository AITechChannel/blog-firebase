import React from "react";

function Login() {
  return (
    <div className="bg-green-100 h-[100vh] flex items-center justify-center">
      <div className="w-[500px] bg- flex flex-col gap-3 p-5 rounded-lg">
        <input className="border border-gray outline-none rounded-md p-2" />
        <button className="bg-green">Login</button>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Login;
