import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter leading-tight mb-12 mt-10 flex items-center">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      .
    </h2>
  );
};

export default Header;