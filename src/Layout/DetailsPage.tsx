import { useEffect, useState } from "react";
import {
  HiOutlineArrowRight,
  HiOutlineClipboardList,
  HiOutlineUser,
} from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function DetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <>
        <div className="flex justify-center items-center h-[80vh]  flex-col gap-5">
          <p className="text-lg md:text-3xl text-blue-600">Loading</p>
        </div>
      </>
    );

  return post ? (
    <>
      <div className="flex items-center h-screen p-3 flex-col justify-center gap-4 ">
        <div className="bg-gray-50 rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 max-w-xl mx-auto border-l-8 border-blue-500 text-left">
          <div className="flex items-center text-gray-600 text-sm mb-3 space-x-2">
            <HiOutlineUser className="text-gray-400" />
            <span className="font-light">User ID: </span>
            <span className="font-semibold"> {post.userId} </span>{" "}
            <span>|</span>
            <HiOutlineClipboardList className="text-gray-400" />
            <span className="font-light">Post ID: </span>{" "}
            <span className="font-semibold">{id}</span>
          </div>
          <h2 className="text-lg font-bold text-gray-800 mb-3 ">
            {post.title}
          </h2>
          <p className="text-sm text-gray-600  mb-3">{post.body}</p>
        </div>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
     

    </>
  ) : (
    <>
      <div className="flex justify-center items-center h-[80vh]  flex-col gap-5">
        <p className="text-lg md:text-3xl text-blue-600">No post found.</p>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </>
  );
}
