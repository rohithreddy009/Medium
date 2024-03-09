import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const { loading, blogs } = useBlogs();

    if (loading) {
        return (
            <div className="bg-gray-950 min-h-screen">
                <Appbar /> 
                <div className="flex justify-center p-4">
                    <div className="w-full max-w-4xl space-y-4">
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                        <BlogSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-950 min-h-screen">
            <Appbar />
            <div className="flex justify-center p-4">
                <div className="w-full max-w-4xl space-y-4">
                    {blogs.map(blog => (
                        <BlogCard
                            key={blog.id} // Adding a key for React list rendering
                            id={blog.id}
                            authorName={blog.author.name || "Anonymous"}
                            title={blog.title}
                            content={blog.content}
                            publishedDate={"2nd Feb 2024"}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
