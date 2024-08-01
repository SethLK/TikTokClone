import Image from "next/image";
export default function HomeHeader() {
  return (
    <>
      <div className="flex justify-between py-2">
        {/* logo of tiktok */}
        <Image
          src="/images/tiktok-dark.jpg"
          alt="tiktok"
          width={140}
          height={100}
        />
        {/* search box */}
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-12 px-4 pr-10 text-neutral-100 bg-neutral-800 rounded-full focus:outline-none focus:ring-1 focus:ring-neutral-600"
          />
          <span className="group absolute inset-y-0 right-0 flex items-center pr-3 h-12 w-auto rounded-r-full hover:bg-neutral-500 ">
            <svg
              className="w-auto h-8 text-neutral-500 border-l pl-3 border-neutral-600 group-hover:text-neutral-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </span>
        </div>
        {/* auth and menu */}
        <span className="flex justify-between w-40 h-12 items-center text-left mr-7">
          <button className="bg-red-500 text-white w-28 h-10 rounded font-bold">
            Log in
          </button>
          <button className="w-5 h-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                fill="white"
              />
            </svg>
          </button>
        </span>
      </div>
      <hr></hr>
    </>
  );
}
