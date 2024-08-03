import { Post } from "@/components/post";
import { postsData } from "@/data/posts-data";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Posts UI */}
      <div className="grid grid-cols-3 gap-6">
        {postsData.map((post, index) => (
          <div key={index}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </main>
  );
}
