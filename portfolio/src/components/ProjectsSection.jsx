import { ArrowRight, ExternalLink, Github } from "lucide-react";
import ScrollMarquee from "./ScrollMarquee";
import GuitarEffect from "./GuitarEffect";

const projects = [
  {
    id: 1,
    title: "Discord frontend",
    description: "A beautiful landing page of discord app using React and Tailwind.",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEVYZfL///9WY/JLWvFRX/JJWPFPXfLLzvpSYPLX2ftFVfFIV/Ho6f1ZZvKxtviNlfWWnfbs7f1cafK+wvnz9P5pdPN9hvTv8P2KkvX7+//f4fx7hPSZoPaGjvXDxvmtsvg/UPG5vflkcPOhp/d2f/Ti5PxuePPU1vufpffIy/qBivQ8TfG6vvmnrPdncvOUkawqAAAGiElEQVR4nO2c63biIBSFhQAmRGOM0dZLNbZeOp3pvP/jTeK0jhcQqgWctfb3s5KGHeDAORxotQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4INYCGpVkKVCxI4r883QWESyelq2RzYSRVbOs7dK8v9FZsy46GUJaVhLc3lakL905j3OLZs9HLGoRouE7NmYKywn/4qT7aJI71hkHKX5gBxhbsT46fgJ0hlMeRTfocrarozmJTnlyTS2oh9nz5By22PRfWmkTL4tzuXVTHj9a039AYTg/6itZ/3X+reu6qmaQczvx/AwPsw7moqSNy43m82wl2XZvN/Zs8h6w82z5PJd9yBJRoKFlrZD8FmirSUh/ayv//Fhkilb/vPnvBCh5bVa6XJ8oY4381qEHo+y7VJfTcdiSnUJH5jreCPvQTtqvHIukJBuyH5aOR2DH4Tsp5H7PtqwiEIJpL+9CCTkOVQ/lWtPCteBGpHlngTWs2IQe0rFpeXI91IG8ajYzJtAQmYhGlHnFDih5P4bMZr7VEjm3LdAn6Nwx8p3I3K/TVh7i55XNtTHgvSYnl+X39N67ZDE80j0LtDzSPTgFp4z8NiIAUZhg8dGjJZBFC69LcC1MU7XePP2xTKQwqWv1an0vJzZU3qa9cVLIIGEvPgJgkehmpCQBy+NyMI1ISFeIuDpxFwRZ/iwNXQTUCApmftGFFlIheTRvYfBL22luaftfF2zz5wIhHtrGtSSNjjvpqrEAq84t6aBO2ndTR17ifGjZUXG/Ye+9dbbw3K5zNaWxS2SkG4hstvUbq9aaZrSVaZN0TggGcomFSXtrrY2/9txN40uJFbs6T/JJlWmRangxt2b8vEzN4hSabNRsE5dCqTUogrb6sDcRb3LhcdH+STcRqLTjDCbuSKpjh65LHFcHBt/c5s7dqEsvPvk58kzlySOu6ezm4VEp8sabvQr+tX5Q/rErun59C2NE+6DQ4VUGD+wastd6uaBHwqjQYfGd1B3A9EcJ22r5mOha0RlBgI3Tkiv7gaitqp7hqo6U03c44dyeWJ2QH+5mxEjk+ekbEKtx6X8HPWMZIoDJe4GYmRadGTqrysWytKaNJnUtKpwGFSsDK/WTVXxm7KimqnbHEVwFo+KjXOVut+16LOqcEez/DIrzF35iJrOdoBm3a9RqPGDzAoXrkyNcRh+sQ2vVrh1ZWrMrpNmHKoV6iyNuas4U8iN3p7Glp6dGvmLpsXNS0NnW/rS9GYyURsPzUpB48ta+KCupguzQo0dT9Uzfv/KNU1QhcqBqM20VZre1CJQ4kqhccKvu6nq3doweaawGJox60VhbAhI7Hg6H1vxSFtaYU2lTSSoCqiQ/D6tNP15ofTP09Kp1cbP1M2yzS5WOqmO307lJYckSY9L81ebd7jKcRN2iVDl8PD1VGNHPxk/H9omaSfQlULLaHA9k6f7CghqcinHq/2Rb8Z/Wb4htEKSjArehLEjnluE6vvLUVoji/zB9gXBFdZsBzVz252LsuELJ4zuQaFbHG0i3pFCR0FhKPQIFEIhFIYHCq/EznvyAhT+/wodrdruSKGrU17mSNRvY7jagkXPGHl2pdAUTRxvmKAzm0jSJX1UMGOitSuFzNBCcxHvbhuydgvP/8OsWzv8ghkCA2tnh2e4KcFpI+PmQqzoLbnixEInLyJGW4znhoffK3fJGGJk6IP9kWxyzWMezb52jHa76KZsd+FUbnyF00TomJqGSH9Gm8gSZVH3bWHXX8v5rMWbSHLMzcN44PxmvvTRWOuM7U7PN3cLimE2SS5VuvMy7LJod8aAVrkxS3786OGWM9Y1x0233X1GpeA8EvT1PTlmO3t97XFWfwP6keJE9cH/PWvq6eATNV5qcrwhQWkt5QTGWEwP87fMIfXxo7cT67QyJEfNrzEGF8P/Nb8Kn9e3ieJiV70q4UWddfNJ+9nzPYOUT/VW9aomPLkF84jxoAhw9QeVI023Gl+Zs6RtxIwHuicyTp+V0/ro2vGiPua/6Aa80ZRGrXON19/RQYuzubas9X1nja8g6p5c63ltH22Ip8f6JlMRWl+D4KtDE5HfYtPloWs4mKb3coUprV72a4Db7pH510/L9+KurqFlctoub+2jDR/9dJ1Xd3dhMo3ktLcl+a3jRvTK9ftU3kv3PIbG0TfULE7v/1JvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIBL/gAz/2icJODyvQAAAABJRU5ErkJggg==",
    tags: ["React", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/Deep-2108/Discord_frontend",
  },
  {
    id: 2,
    title: "Password Generator",
    description:
      "Interactive password generating application providing user choices to built customize safer passwords",
    image: "data:image/jpeg;base64,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",
    tags: ["JavaScript","Next.js"],
    demoUrl: "#",
    githubUrl: "https://github.com/Deep-2108/Password-Generator",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with localSotrage and full functionality",
    image: "data:image/jpeg;base64,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",
    tags: ["React", "Tailwind"],
    demoUrl: "#",
    githubUrl: "https://github.com/Deep-2108/AmazonFullProject",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2> */}
        <ScrollMarquee/>
        <br></br>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/deep-2108"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
          {/* <GuitarEffect/> */}
    </section>
  );
};