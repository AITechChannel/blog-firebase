import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <div className="flex items-center justify-center h-[100vh] bg-black">
      <div className="flex flex-col w-[500px] gap-4">
        <input
          type="text"
          className="border border-gray outline-none rounded-md py-2 px-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="border border-gray outline-none rounded-md py-2 px-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="bg-green-400 rounded-md p-2 text-white"
          onClick={() => logInWithEmailAndPassword(email, password)}
        >
          Login
        </button>
        <button
          className="bg-blue rounded-md p-2 text-white"
          onClick={signInWithGoogle}
        >
          Login with Google
        </button>
        <div className="text-white">
          <Link to="/reset">Forgot Password</Link>
        </div>
        <div className="text-white">
          Don't have an account?{" "}
          <Link className="text-green-400" to="/register">
            Register
          </Link>{" "}
          now.
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React from "react";

// function Login() {
//   return (
//     <div className="flex h-[100vh] w-full items-center justify-center ">
//       <div className="flex flex-col w-[500px] gap-3 p-6 border border-gray-2 rounded-md shadow-md">
//         <label>Email</label>
//         <input
//           placeholder="Email"
//           className=""
//         />
//         <label>Password</label>
//         <input
//           placeholder="Password"
//           className="border border-gray outline-none rounded-md py-2 px-4 mb-2"
//         />
//         <button className="">Login</button>
//         <button className="">Register</button>
//       </div>
//     </div>
//   );
// }

// export default Login;
