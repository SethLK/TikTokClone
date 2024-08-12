import HomeNewsFeedEngagementBar from "../HomeNewsFeedEngagementBar/HomeNewsFeedEngagementBar";
import HomeNewsFeedVideo from "../HomeNewsFeedVideo/HomeNewsFeedVideo";

export default function HomeNewsFeed() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <HomeNewsFeedVideo />
      <HomeNewsFeedEngagementBar />
    </div>
  );
}
