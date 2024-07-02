import { Link } from 'react-router-dom'

interface BlogCardProps {
    authorName: string
    title: string
    content: string
    publishedDate: string
    id: number
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`} className="block w-full">
            <div className="mx-auto bg-gray-800 hover:bg-gray-700 shadow-md rounded-lg p-6 mb-4 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-105 w-full max-w-4xl">
                <div className="flex items-center space-x-3 mb-4">
                    <Avatar name={authorName} />
                    <div className="text-gray-400 text-sm">{authorName}</div>
                    <Circle />
                    <div className="text-gray-500 text-xs">{publishedDate}</div>
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                    {title}
                </div>
                <div className="text-gray-400 text-sm">
                    {content.slice(0, 100) + '...'}
                </div>
                <div className="text-gray-500 text-xs mt-4">
                    {`${Math.ceil(content.length / 100)} minute(s) read`}
                </div>
            </div>
        </Link>
    )
}

export function Circle() {
    return <div className="h-2 w-2 rounded-full bg-gray-500"></div>
}

export function Avatar({
    name,
    size = 'small',
}: {
    name: string
    size?: 'small' | 'big'
}) {
    return (
        <div
            className={`relative flex items-center justify-center overflow-hidden bg-gray-600 text-white rounded-full ${size === 'small' ? 'w-8 h-8' : 'w-12 h-12'}`}
        >
            <span
                className={`font-medium ${size === 'small' ? 'text-sm' : 'text-lg'}`}
            >
                {name[0].toUpperCase()}
            </span>
        </div>
    )
}
