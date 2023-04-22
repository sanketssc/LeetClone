"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

// function emailValidation(email) {
//   const regex =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//   if (!email || regex.test(email) === false) {
//     return false;
//   }
//   return true;
// }

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    // const isValid = emailValidation(email);
    // if (!isValid) {
    //     console.log("invalid Email")
    //     return;
    // }
    const user = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({email: email, password:password})

    })
    console.log(user)
    const data = await user.json();
    console.log(data);
    setEmail("");
    setPassword("");
    if(user.status === 200) {
      router.push("/")
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen justify-center items-center">
      <form className="flex flex-col items-center justify-center space-y-6">
        <input
          className="focus:outline-none border border-blue-300 focus:border-[1.5px] rounded px-2 py-1"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="focus:outline-none border border-blue-300 focus:border-[1.5px] rounded px-2 py-1"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="border-blue-400 border px-3 py-1.5 rounded-md"
          type="submit"
          onClick={(e) => handlesubmit(e)}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
