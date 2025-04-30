import {
  HiOutlineUser,
  HiOutlineClipboardList,
  HiOutlineArrowRight,
} from "react-icons/hi";

type CardProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Cards({ userId, id, title, body }: CardProps) {
  const handleReadMore = () => {
    window.open(`/details/${id}`, "_blank");
  };

  return (
    <div className="bg-gray-50 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 max-w-md mx-auto border-l-8 border-blue-500 text-left">
      <div className="flex items-center text-gray-600 text-sm mb-3 space-x-2">
        <HiOutlineUser className="text-gray-400" />
        <span className="font-light">User ID: </span>
        <span className="font-semibold"> {userId}   </span> <span>|</span>
        <HiOutlineClipboardList className="text-gray-400" />
        <span className="font-light">Post ID: </span>{" "}
        <span className="font-semibold">{id}</span>
      </div>
      <h2 className="text-lg font-bold text-gray-800 mb-3 line-clamp-1 capitalize ">{title}</h2>
      <p className="text-sm text-gray-600 line-clamp mb-3 normal-case line-clamp-2">{body}</p>
      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handleReadMore}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800 hover:underline space-x-1 font-semibold"
        >
          <span>Read More</span>
          <HiOutlineArrowRight className="text-blue-600 font-semibold" />
        </button>
      </div>
    </div>
  );
}
