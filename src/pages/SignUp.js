import React, { useRef } from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase";

function SignUp() {
  const history = useHistory();
  const inputRef = useRef(null);
  const passwordRef = useRef(null);

  const registerUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        inputRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const loginUser = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        inputRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
// function getConfirm(e){
//     e.preventDefault()
//   var actionCodeSettings = {

//     url: "https://github.com",
//     handleCodeInApp: true,
//     iOS: {
//       bundleId: "com.example.ios",
//     },
//     android: {
//       packageName: "com.example.android",
//       installApp: true,
//       minimumVersion: "12",
//     },
//     dynamicLinkDomain: "example.page.link",
//   };


//   auth
//     .sendSignInLinkToEmail(inputRef.current.value, actionCodeSettings)
//     .then(() => {
//       window.localStorage.setItem("emailForSignIn", inputRef.current.value);
//     })
//     .catch((error) => {
//       alert(error.message);
//     });

// }

  return (
    <div className="signUp">
      <div className="flex items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_(logo).png"
          alt=""
          className="h-24 pl-20"
        />
        <p className="ml-5 text-white font-semibold text-lg">
          Hotels and homes across 800 cities, 24+ countries
        </p>
      </div>

      <div className="flex">
        <div className="p-32">
          <p className="text-white text-5xl font-semibold signUp__heading leading-tight">
            There’s a smarter way to OYO around
          </p>
          <p className="text-white text-lg signUp__heading pt-5">
            Sign up with your phone number and get exclusive access to discounts
            and savings on OYO stays and with our many travel partners.
          </p>
        </div>

        <div className="bg-white signUp__card ">
          <div className="flex items-center justify-evenly bg-gradient-to-r from-red-500 to-red-800 text-white p-2">
            <p className="text-sm font-bold">Sign up & Get ₹500 OYO Money</p>
          </div>
          <div className="px-12 py-8">
            <p className="text-3xl font-semibold pb-4">Signup</p>
            <p className="text-gray-500 text-sm font-semibold pb-6">
              Please Enter your credintials to continue
            </p>

            <form>
              <p>Email</p>
              <input
                type="email"
                placeholder="e.g name@abc.com"
                className="border px-2 py-3 w-64 mt-2 mb-2 focus:outline-none "
                ref={inputRef}
              />
              <p>Password</p>
              <input
                type="password"
                placeholder="password"
                className="border px-2 py-3 w-64 mt-2 mb-2 focus:outline-none"
                ref={passwordRef}
              />
              <button
                className="block mt-3 border py-2 w-64 bg-red-500 hover:bg-red-600 font-semibold text-white transition focus:outline-none"
                onClick={registerUser}
              >
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-gray-500">
              Already a User?{" "}
              <span
                className="text-red-500 font-semibold ml-1 cursor-pointer"
                onClick={loginUser}
              >
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
