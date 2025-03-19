import ajaxCall from "@/helpers/ajaxCall";
import ResponsiveBlogContainer from "@/components/BlogDetails/ResponsiveBlogContainer";

export const generateMetadata = async ({ params }) => {
  try {
    const { data: blog } = await ajaxCall(`/post/${params?.slug}/`, { method: "GET" });
    return {
      title: blog.meta_title,
      description: blog.meta_description,
      openGraph: {
        title: blog.meta_title,
        description: blog.meta_description,
        images: [
          {
            url: blog.featured_image,
            alt: blog.image_alt || blog.meta_title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: blog.meta_title,
        description: blog.meta_description,
        images: [blog.featured_image],
      },
    };
  } catch (error) {
    console.log("error", error);
  }
};

export default async function BlogDetail({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  if (!slug) {
    return <div>Blog not found</div>;
  }
  return <ResponsiveBlogContainer slug={slug} />;
}
