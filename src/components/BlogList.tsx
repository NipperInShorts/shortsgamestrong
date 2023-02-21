import React from "react";
import BlogItem from "./BlogItem";

import { Post } from "../typings";

type Props = {
  posts: Post[];
};

export function BlogList({ posts }: Props) {
  console.log(posts.length);
  return (
    <div>
      <hr className="border-brand-primary mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 px-8 gap-8 gap-y-16 pb-24 bg">
        {posts.map((post) => (
          <BlogItem key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
