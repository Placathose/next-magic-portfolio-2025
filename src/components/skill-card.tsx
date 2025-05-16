import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import BlurFade from "@/components/magicui/blur-fade";
import Link from "next/link";

interface Props {
  category: string;
  skills: readonly string[];
  image?: string;
  // description: string;
  // dates: string;
  // location: string;
  // links?: readonly {
  //   icon: React.ReactNode;
  //   title: string;
  //   href: string;
  // }[];
}

const BLUR_FADE_DELAY = 0.04;

export function SkillCard({
  category,
  skills,
  image,
}: Props) {
  return (
    <li className="relative ml-10 py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={category} className="object-contain" />
          <AvatarFallback>{category[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {/* {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )} */}
        <h2 className="font-semibold leading-none mb-2">{category}</h2>
        {/* {location && (
          <p className="text-sm text-muted-foreground">{location}</p>
        )} */}
        {skills && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
             <div className="flex flex-wrap gap-1">
            {skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill} className="bg-[#6e737a]">{skill}</Badge>
              </BlurFade>
            ))}
          </div>
          </span>
        )}
      </div>
      {/* {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )} */}
    </li>
  );
}
