import ArticleDisplay from "@/components/ArticleDisplay";
import Hero from "@/components/hero";
import ServicesPage from "@/components/SerivePage";
import TechDiagram from "@/components/TechDiagram";
import { getAllPosts } from "@/lib/api";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main>
      <Hero />
      <h2 className="w-full text-center lg:text-2xl text-xl font-semibold">
        Technologies I&apos;m Proficient In
      </h2>
      <TechDiagram />
      <ServicesPage />
      <ArticleDisplay posts={posts} />
    </main>
  );
}
