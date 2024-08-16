"use client"

import { useState } from "react";

export default function LoginBox() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      {/* Scroll box  */}
      <div className="flex justify-center">
        <div className="w-80 text-center max-h-72 overflow-y-scroll scroll-smooth no-scrollbar">
          <h1 className="text-3xl font-bold my-7">Sign up for TikTok</h1>
          <p className="text-neutral-400 mb-2">
            Manage your account, check notifications, comment on videos, and
            more.
          </p>
          <ul>
            <li className="w-full py-2 px-3 rounded border my-3 flex hover:bg-neutral-100 cursor-pointer">
              <div className="w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              <div className="text-center w-full font-semibold" onClick={toggleModal}>
                Use phone or email
              </div>
            </li>
            <li className="w-full py-2 px-3 rounded border my-3 flex hover:bg-neutral-100 cursor-pointer">
              <div className="w-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                </svg>
              </div>
              <div className="text-center w-full font-semibold">
                Continue with Facebook
              </div>
            </li>
            <li className="w-full py-2 px-3 rounded border my-3 flex hover:bg-neutral-100 cursor-pointer">
              <div className="w-7">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </div>
              <div className="text-center w-full font-semibold">
                Contiue with Google
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* instruction paragraph */}
      <div className="flex justify-center">
        <p className="w-80 text-center text-xs m-4 text-neutral-400">
          By continuing with an account located in{" "}
          <span className="text-gray-950">Myanmar (Burma)</span>, you agree to
          our <span className="text-gray-950">Terms of Service</span> and
          acknowledge that you have read our{" "}
          <span className="text-gray-950"> Privacy Policy.</span>
        </p>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Sign Up</h2>
            <form>
              <input
                type="text"
                placeholder="Phone / Email / Username"
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded"
              >
                Sign Up
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="mt-4 text-sm text-neutral-500 underline"
            >
              Close
            </button>
          </div>
        </div> )}
    </>
  );
}
