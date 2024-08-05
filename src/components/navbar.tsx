"use client";

import { useEffect, useState } from "react";

import { NewPostDialog } from "./new-post-dialog";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex items-center justify-end mt-6 mb-2 w-[90%]">
      <NewPostDialog />
    </nav>
  );
};
