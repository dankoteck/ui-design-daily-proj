import projects from "@/data/projects.json";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="flex flex-col gap-8 w-full">
        {projects.map((proj: Project) => (
          <li key={proj.day}>
            <p className="font-semibold text-xl">Day {proj.day}</p>
            <Link href={proj.href} target="_blank">
              <div className="relative aspect-video mt-4">
                <Image
                  fill
                  src={proj.thumbnail}
                  blurDataURL={proj.thumbnail}
                  alt={proj.href}
                  placeholder="blur"
                  sizes="100vw"
                  className="rounded-md object-cover"
                />
              </div>
            </Link>

            <div className="py-8 flex items-center justify-between gap-4">
              <Link href={`/proj/${proj.day}`}>
                <div className="rounded-md px-12 py-3 bg-[#6140b3] text-white">
                  Demo
                </div>
              </Link>

              <Link href={``} target="_blank">
                <div className="rounded-md px-12 py-3 border flex items-center gap-2 border-[#6140b3] text-[#6140b3]">
                  Source
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
