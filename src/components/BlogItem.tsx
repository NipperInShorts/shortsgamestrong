import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

import urlFor from "../lib/helpers/urlFor";
import { Post } from "../typings";
import Link from "next/link";

interface Props {
  post: Post;
}

export default function BlogItem({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug.current}`}>
      <div className=" group flex flex-col cursor-pointer bg-brand-primary/50">
        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
          {post.mainImage ? (
            <Image
              className="object-cover object-left lg:object-center rounded-t-md group-hover:rounded-b-md"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          ) : null}
          <div className="absolute bottom-0 w-full bg-opacity-20 bg-brand-dark backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
            <div>
              <p className="font-bold">{post.title}</p>
              <p className="">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
              {post.categories.map((category) => (
                <div
                  key={category._id}
                  className="bg-brand-primary text-center text-brand-dark px-3 py-1 rounded-full text-sm font-semibold"
                >
                  <p>{category.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 flex-1 px-8">
          <p className="underline text-lg font-bold">{post.title}</p>
          <p className="text-gray-500 line-clamp-2">{post.description}</p>
        </div>
        <p className="mt-5 font-bold flex items-center group-hover:underline px-8 pb-4">
          Read Post
          <ArrowUpRightIcon className="ml-2 h-4 w-4" />
        </p>
      </div>
    </Link>
  );
}
