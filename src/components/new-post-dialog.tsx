"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NewPostForm } from "./new-post-form";

export const NewPostDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          title="Create new post"
          size="icon"
          // onClick={handleNewPostModal}
        >
          <Plus />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create new post</DialogTitle>
        <DialogDescription>
          What&apos;s happening, share with everyone.
        </DialogDescription>
        <div>
          <NewPostForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};
