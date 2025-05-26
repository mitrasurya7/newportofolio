import { Post } from "@/interfaces/post";
import Link from "next/link";
import { FiEdit3 } from "react-icons/fi";

export default async function ArticleDisplay({posts} : {posts: Post[]}) {
  return (
    <div className=" lg:p-10  dark:text-gray-200 text-slate-800" id="blogs">
      <div className="md:text-2xl text-xl font-bold mb-4 flex gap-2 items-center">
        <FiEdit3 />
        <h1 className=" ">
          I&apos;m Writing on{" "}
          <span className=" underline  decoration-wavy underline-offset-4 d decoration-blue-400">
            here...
          </span>
        </h1>
      </div>

      <div className="border-l-2 border-stone-800 dark:border-stone-400 h-10"></div>
      <ul className="relative border-l-2 border-stone-800 dark:border-stone-400 pl-4 space-y-2">
        {posts.map((post, index) => (
          <li key={post.slug} className="relative pb-6">
            <div className="flex items-center">
              <span className="relative flex h-3 w-3">
                {index === 0 && (
                  <span className="animate-ping absolute -left-[1.46rem] top-0 h-full w-full rounded-full dark:bg-stone-400 bg-stone-800 opacity-75"></span>
                )}
                <span className="relative -left-[1.46rem] top-0 rounded-full h-3 w-3 dark:bg-stone-400 bg-stone-800"></span>
              </span>
              <Link
                href={`/blogs/${post.slug}`}
                rel="noopener noreferrer"
                className="block dark:bg-stone-900 bg-stone-100 p-5 rounded-lg border shadow dark:border-stone-700 hover:border-blue-400 transition-all duration-500"
              >
                <p className="text-stone-400 text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </p>
                <h2 className="text-xl font-semibold  hover:underline">
                  {post.title}
                </h2>

                <p className="mt-2 text-stone-500 line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <Link
        href="/blogs"
        className={`hover:text-vscode-modified transition duration-300 }`}
      >{`See more >>`}</Link>
    </div>
  );
}
