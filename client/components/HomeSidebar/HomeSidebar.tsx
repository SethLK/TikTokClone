import HomeSideFooter from "../HomeSideFooter/HomeSideFooter";
import HomeSideNav from "../HomeSideNav/HomeSideNav";
import "./scrollbar.css";

export default function HomeSidebar() {
  return (
    <div className="HomeSidebar pt-16 w-60 h-[100vh] bg-neutral-950 shadow-2xl overflow-scroll">
      <HomeSideNav />
      <p className="text-neutral-400 flex items-center w-full h-[7vh] px-4 font-semibold text-left my-10">
        Log in to follow creators, like videos, and view comments.
      </p>
      <div className="text-red-500 font-semibold text-lg flex items-center justify-center w-auto h-[7vh] mx-4 border border-red-500 rounded-md bg-neutral-800 hover:bg-neutral-900 cursor-pointer">
        Log in
      </div>
      <HomeSideFooter />
    </div>
  );
}
