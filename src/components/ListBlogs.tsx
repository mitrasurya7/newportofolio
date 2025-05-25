'use client'

import { Post } from "@/interfaces/post"
import Image from "next/image"
import { useState } from "react"

export default function ListBlogs({ allPosts }: { allPosts: Post[] }) {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <div className="mb-8">
        <input
          type="text"
          placeholder="Cari postingan..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border dark:border-stone-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-stone-800"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <div key={post.slug} className="bg-white dark:bg-stone-800 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Gambar Thumbnail */}
              <Image
                src={post.coverImage}
                alt={post.title}
                className="w-full h-48 object-cover"
                height={500}
                width={500}
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {post.excerpt}
                </p>
                <a
                  href={`/blogs/${post.slug}`}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada postingan yang ditemukan.</p>
        )}
      </div>
    </>
  )
}
