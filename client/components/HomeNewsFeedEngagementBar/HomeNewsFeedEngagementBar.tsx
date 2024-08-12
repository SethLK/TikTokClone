import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentDots,
  faBookmark,
  faShare,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function HomeNewsFeedEngagementBar() {
  return (
    <div className="flex flex-col items-center space-y-7 relative mx-5">
      {/* Profile */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10">
          <Image
            src="/images/adidas.png"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full borderw-full h-full"
          />
        </div>
      </div>

      {/* Like Button */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faHeart} className="text-white text-2xl" />
        <span className="text-white text-sm font-semibold">122K</span>
      </div>

      {/* Comment Button */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faCommentDots} className="text-white text-2xl" />
        <span className="text-white text-sm font-semibold">1307</span>
      </div>

      {/* Save Button */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon
          icon={faBookmark}
          className="text-white text-2xl size-8"
        />
        <span className="text-white text-sm font-semibold">1989</span>
      </div>

      {/* Share Button */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon icon={faShare} className="text-white text-2xl" />
        <span className="text-white text-sm font-semibold">1989</span>
      </div>

      {/* Menu Button */}
      <div className="flex flex-col items-center">
        <FontAwesomeIcon
          icon={faEllipsis}
          className="text-white text-2xl size-8"
        />
      </div>
    </div>
  );
}
