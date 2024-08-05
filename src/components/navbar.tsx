"use client";

import { useEffect, useState } from "react";

import { NewPostDialog } from "./new-post-dialog";
import { ThemeSwitcher } from "./theme-switcher";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="flex items-center justify-end gap-4 mt-6 mb-2 w-[90%]">
      {/* Theme switcher */}
      <ThemeSwitcher />
      <NewPostDialog />
    </nav>
  );
};
