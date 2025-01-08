// import { Separator } from "@/components/ui/separator"
import { SiModrinth, SiCurseforge } from '@icons-pack/react-simple-icons';
import Image from "next/image";

export default function Home() {
  return (
    <>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-auto rounded-xl bg-muted/50 p-5">
            <Image
              src="/nuggetmod-icon.png" // replace with the actual path to your mod icon
              alt="Nugget Mod Icon"
              className="w-16 h-16"
              width={64}
              height={64}
            />
            <div className="flex items-center justify-between mt-2">
              <h2 className="text-xl font-semibold">Nugget Mod</h2>
              <div>
                <SiModrinth className="w-7 h-7" style={{ color: '#00AF5C' }} />
                <SiCurseforge className="w-7 h-7" style={{ color: '#F16436' }} />
                
              </div>
            </div>
            <p className="text-gray-400 mt-1">
              minecraft mod that adds the chicken nugget meme into minecraft with armor and tools along with horse armor and music disc and nugget block 
              </p>
            <div className="mt-4">
              <a
              href="https://modrinth.com/mod/nuggetmod"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
              >
              <SiModrinth className="inline w-6 h-6" /> Modrinth
              </a>
            </div>
          </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </>
  )
}
