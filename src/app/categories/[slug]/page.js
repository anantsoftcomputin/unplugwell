import ajaxCall from "@/helpers/ajaxCall";
import CategoriesBlogs from "@/components/Categories/CategoriesBlogs";

export const generateMetadata = async ({ params }) => {
  try {
    const { data: category } = await ajaxCall(
      `/category-slug/?site_domain=unplugwell.com&category_slug=${params?.slug}/`,
      { method: "GET" }
    );
    return {
      title: category[0].meta_title,
      description: category[0].meta_description,
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default function CategoryDetails({ params }) {
  return <CategoriesBlogs slug={params.slug} />;
}
