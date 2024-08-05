import { useState, useTransition } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogClose } from "./ui/dialog";
import { createNewPost } from "@/actions/post-actions";
import { useRouter } from "next/navigation";

export const NewPostForm = () => {
  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  const handleNewPost = async (event: FormData) => {
    // @ts-ignore
    startTransition(async () => {
      const title = event.get("title")?.valueOf() as string;

      if (!title) {
        setError("Title is required");
        return { message: "Title is required" };
      }

      const description = event.get("description")?.valueOf() as string;
      if (!description) {
        setError("Details are required");
        return { message: "Details are required" };
      }
      await createNewPost(title, description);
      setSuccess("Post published");
      setError(null);
      router.refresh();
    });
  };

  return (
    <form action={handleNewPost}>
      <div className="my-3">
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          // required
          disabled={isPending}
        />
      </div>
      <div className="my-3">
        <Label htmlFor="description">Describe what you mean?</Label>
        <textarea
          name="description"
          id="description"
          title="Post details"
          rows={8}
          cols={50}
          className="border-2 rounded-md p-2"
          disabled={isPending}
        ></textarea>
      </div>
      <span className="text-red-500 text-xs">{error}</span>
      {!error && <span className="text-teal-600 text-xs">{success}</span>}
      <div className="flex items-center justify-end gap-x-4 px-6">
        <DialogClose>
          <Button type="button" variant="outline" disabled={isPending}>
            Cancel
          </Button>
        </DialogClose>
        <Button type="submit" disabled={isPending}>
          Publish
        </Button>
      </div>
    </form>
  );
};
