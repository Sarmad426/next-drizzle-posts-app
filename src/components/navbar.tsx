"use client";

import { Plus } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-end mt-6 mb-2 w-[90%]">
      <button
        title="Create new post"
        className="bg-gray-700 text-white rounded p-2 hover:bg-gray-600 transition-colors duration-300 ease-linear"
        // onClick={handleNewPostModal}
      >
        <Plus />
      </button>
    </nav>
  );
};
