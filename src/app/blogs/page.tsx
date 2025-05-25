import ListBlogs from "@/components/ListBlogs"
import { getAllPosts } from "@/lib/api"

export default function BlogsPage() {
  const allPosts = getAllPosts()


  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Blog Posts.</h1>

     <ListBlogs allPosts={allPosts} />
    </div>
  )
}
