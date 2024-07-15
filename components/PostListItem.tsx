import Link from "next/link";
import type { PostItem } from "@/types";

interface Props {
  posts: PostItem[];
}

const PostItemList = ({ posts }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2.5 font-poppins text-lg">
        {posts.map((post, id) => (
          <Link
            href={`/${post.id}`}
            key={id}
            className="text-neutral-900 hover:text-amber-700 transition duration-150"
          >
            {post.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostItemList
