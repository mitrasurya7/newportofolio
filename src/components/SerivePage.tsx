import {
  FaLaptopCode,
  FaPaintBrush,
  FaMobileAlt,
} from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Build fast, responsive, and fully integrated websites using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: <FaLaptopCode className="text-4xl text-vscode-modified" />,
    },
    {
      title: "Tech Writer",
      description:
        "Create clear, concise, and well-structured technical documentation that improves product understanding and user onboarding.",
      icon: <FaPaintBrush className="text-4xl text-vscode-modified" />, // Ganti ikon ini jika ingin ikon yang lebih sesuai
    },
    {
      title: "Firebase Expert",
      description:
        "Implement scalable backend services with Firebase, including real-time databases, authentication, cloud functions, and hosting.",
      icon: <SiFirebase className="text-4xl text-vscode-modified" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Develop Android and iOS mobile apps using Flutter for native performance and modern UI.",
      icon: <FaMobileAlt className="text-4xl text-vscode-modified" />,
    },
  ];

  return (
    <section className=" py-20 px-2 lg:px-5" id="services">
      <h1 className="text-xl lg:text-2xl font-bold text-center mb-16">
        We Have Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className=" dark:bg-stone-900 bg-stone-100 p-8 rounded-xl shadow border dark:border-stone-700 hover:border-blue-400 cursor-pointer  transition-all duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h2 className="text-lg font-semibold mb-2">{service.title}</h2>
            <p className="text-stone-500 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
