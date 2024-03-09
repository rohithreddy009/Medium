import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const { loading, blog } = useBlog({ id: id || "" });
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {loading || !blog ? (
                <div className="flex flex-col justify-center items-center min-h-screen">
                    <Spinner />
                </div>
            ) : (
                <div className="py-4">
                    <FullBlog blog={blog} />
                </div>
            )}
        </div>
    );
};
