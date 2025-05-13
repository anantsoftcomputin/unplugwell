import ajaxCall from "@/helpers/ajaxCall";
import CategoriesBlogs from "@/components/Categories/CategoriesBlogs";

export const generateMetadata = async ({ params }) => {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return {
      title: "Category Blog's Not Found",
      description: "The requested category blog post was not found",
    };
  }

  try {
    const { data: category } = await ajaxCall(
      `/category-slug/?site_domain=unplugwell.com&category_slug=${slug}`,
      {
        method: "GET",
      }
    );
    return {
      title: category?.results[0]?.meta_title,
      description: category?.results[0]?.meta_description,
    };
  } catch (error) {
    console.log("error", error);
    return {
      title: "Category Blog Post",
      description: "Read our latest category blog post",
    };
  }
};

export default async function CategoryDetails({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) {
    return <div>Category Blog's Not Found</div>;
  }

  return <CategoriesBlogs slug={slug} />;
}
