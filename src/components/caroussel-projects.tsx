// import * as React from "react"
 
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
 
// export function CarouselSpacing() {
//   return (
//     <Carousel className="w-full max-w-3xl mx-auto">
//       <CarouselContent className="-ml-1">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6 bg-red-700 w-">
//                   <span className="text-2xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProjectCard } from "./project-card"
import { DATA } from "@/data/resume";

// interface Project {
//   href: string
//   title: string
//   description: string
//   dates: string
//   technologies: string[]
//   image?: string
//   video?: string
//   links?: string[]
// }

// interface CarouselSpacingProps {
//   projects: Project[]
// }

export function CarouselProjects() {
  return (
    <Carousel className="w-full max-w-6xl mx-auto h-auto">
      <CarouselContent className="-ml-1">
        {DATA.projects.map((project:any, index) => (
          <CarouselItem
            key={project.title}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <ProjectCard
                    href={project.href}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
