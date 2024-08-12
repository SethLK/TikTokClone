import HomeHeader from "@/components/HomeHeader/HomeHeader";
import HomeNewsFeed from "@/components/HomeNewsFeed/HomeNewsFeed";
import HomeSidebar from "@/components/HomeSidebar/HomeSidebar";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HomeHeader />
      <div className="flex justify-start">
        <HomeSidebar />
        <HomeNewsFeed />
      </div>
      <span className="w-20 h-8 pt-1 rounded-full text-center text-sm font-bold bg-neutral-800 text-neutral-300 fixed right-10 bottom-5 hover:bg-neutral-700 cursor-pointer">
        Get app
      </span>
    </main>
  );
}
