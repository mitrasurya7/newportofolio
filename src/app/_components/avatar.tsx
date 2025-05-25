import { Eye } from 'lucide-react';
import Image from 'next/image';

type Props = {
  name: string;
  picture: string;
  views: number;
};

const Avatar = ({ name, picture, views }: Props) => {
  return (
    <section className="flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src={picture}
          className="w-12 h-12 rounded-full mr-4 object-cover"
          alt={name}
          height={48}
          width={48}
        />
        <div className="text-lg font-semibold">{name}</div>
      </div>

      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 gap-2">
        <Eye className="w-4 h-4" />
        <span>{views.toLocaleString()} views</span>
      </div>
    </section>
  );
};

export default Avatar;
