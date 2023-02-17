import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { BlogList } from "../../components/BlogList";
import { PreviewSuspense } from "../../components/PreviewSuspense";
import { client } from "../../lib/sanity.client";
import PreviewBlogList from "../../components/PreviewBlogList";
const query = groq`
  *[_type=="post"] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

export default async function HomePage() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div>
            <p className="text-center text-lg animate-pulse text-brand-primary">
              Loading preview data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return <BlogList posts={posts} />;
}
