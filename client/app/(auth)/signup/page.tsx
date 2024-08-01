import Image from "next/image";
import SignUpBox from "../../../components/SignUpBox/SignUpBox";
import Link from "next/link";

export default function Login() {
  return (
    <>
      {/* Header of Sign Up Page */}
      <div className="flex justify-between px-3">
        <Image
          src="/images/tiktok-light.png"
          alt="tiktok"
          width={140}
          height={100}
        />
        <a
          href="http://"
          className="m-3 hover:underline font-medium flex justify-center text-neutral-400 py-3"
        >
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
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
            />
          </svg>
          <span className="text-black ml-2">Feedback and help</span>
        </a>
      </div>
      {/* Center of Sign Up Page, Auth Box */}
      <SignUpBox />
      {/* footer 1 */}
      <div className="mt-20">
        <hr></hr>
        <div className="flex justify-center">
          <div className="m-5">
            Don&apos;t have an account?{" "}
            <Link href="/login" className="text-red-500 font-semibold">
              Log in
            </Link>
          </div>
        </div>
        <div className="bg-black w-full h-20 flex justify-between py-5 px-36">
          <div className="text-white border pl-4 py-2 pr-28 h-11 inline-block rounded-sm hover:cursor-pointer">
            English
          </div>
          <span className="text-neutral-400 font-semibold py-1">
            @2024 TikTok
          </span>
        </div>
      </div>
    </>
  );
}
