import React from "react";
import { Post } from "../typings";

type Props = {
  posts: Post[];
};

export function BlogList({ posts }: Props) {
  console.log(posts.length);
  return <div>BlogList</div>;
}
