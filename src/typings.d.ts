import { BlockDefinition, Image, Slug } from "sanity";

type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: BlockDefinition[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Category extends Base {
  description: string;
  title: string;
}
