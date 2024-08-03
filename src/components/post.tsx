"use client";

import { IPostsData } from "@/data/posts-data";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export const Post = ({ post }: { post: IPostsData }) => {
  const [likePost, setLikePost] = useState<boolean>(false);
  const [disLikePost, setDisLikePost] = useState<boolean>(false);

  const handleLike = () => {
    setLikePost(!likePost);
    setDisLikePost(false);
    updateInteractionsCounter(post.likes);
  };
  const handleDisLike = () => {
    setDisLikePost(!disLikePost);
    setLikePost(false);
    updateInteractionsCounter(post.dislikes);
  };

  const updateInteractionsCounter = (count: number) => {
    count++;
    return count;
  };

  return (
    <div className="dark:bg-gray-800 bg-white px-4 py-3 rounded-md col-span-1">
      <h3 className="dark:text-gray-200 text-gray-800 text-lg font-semibold text-center">
        {post.title}
      </h3>
      <p className="dark:text-gray-300 text-gray-700 my-3">
        {post.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Image
            src={`/${post.author.profileImg}`}
            alt="Author profile picture"
            width={30}
            height={30}
            className="rounded-full w-8 h-8"
          />
          <p className="text-xs text-gray-400">{post.author.name}</p>
        </div>
        <div className="flex items-center justify-end gap-x-2">
          <button title="Like post">
            <ThumbsUp
              className={`w-5 ${likePost && "text-blue-400"}`}
              onClick={handleLike}
            />
            <span className="text-xs text-gray-400">{post.likes}</span>
          </button>
          <button title="DisLike post">
            <ThumbsDown
              className={`w-5 ${disLikePost && "text-red-400"}`}
              onClick={handleDisLike}
            />
            <span className="text-xs text-gray-400">{post.dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
