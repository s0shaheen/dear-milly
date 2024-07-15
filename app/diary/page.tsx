import { getSortedPosts } from "@/lib/posts";
import PostItemList from "@/components/PostListItem";

export default function Diary() {
  const posts = getSortedPosts();

  console.log(posts);

  return (
    <section className="mx-auto w-11/12 md:w-1/2 mt-20 flex flex-col gap-16 mb-20">
      <header className="font-cormorantGaramond font-light text-6xl text-neutral-900 text-center">
        <h1>our diary</h1>
      </header>
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {posts && <PostItemList posts={posts}/>}
      </section>
    </section>
  );
}
