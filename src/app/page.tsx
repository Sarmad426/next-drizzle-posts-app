import { Post } from "@/components/post";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { db } from "@/db/drizzle";
import { posts } from "@/db/schema";

export default async function Home() {
  const newPosts = await db.select().from(posts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Posts UI */}
      {newPosts.length === 0 && (
        <span className="text-secondary-foreground">No posts yet.</span>
      )}
      <div className="grid grid-cols-3 gap-6">
        {newPosts.map((post, index) => (
          <div key={index}>
            {/* @ts-ignore */}
            <Post post={post} />
          </div>
        ))}
      </div>
    </main>
  );
}
