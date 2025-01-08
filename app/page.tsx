/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { SiModrinth, SiCurseforge } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import { useState, useRef } from "react";
import { RxDownload } from "react-icons/rx";
import nuggetData from "@/public/nugget/nugget.json";

interface NuggetData {
  [key: string]: {
    [version: string]: {
      changelog: string;
      supports: {
        [minecraftVersion: string]: string;
      };
    };
  };
}

const typedNuggetData: NuggetData = nuggetData;

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const minecraftmodloader = Object.keys(nuggetData).map(modLoader => ({
  value: modLoader,
  label: modLoader.charAt(0).toUpperCase() + modLoader.slice(1)
}));

export default function Home() {
  const [selectedModLoader, setSelectedModLoader] = useState("");
  const [selectedVersion, setSelectedVersion] = useState("");
  const boundingRef = useRef<DOMRect | null>(null);

  // Filter minecraftversion based on selected mod loader
  const minecraftversion = selectedModLoader
    ? Array.from(new Set(Object.keys(nuggetData[selectedModLoader as keyof typeof nuggetData]).flatMap(version =>
        Object.keys(typedNuggetData[selectedModLoader][version].supports)
      ))).map(version => ({
        value: version,
        label: version
      }))
    : [];

  // Generate download URL based on selected mod loader and version
  const generateDownloadUrl = () => {
    if (selectedModLoader && selectedVersion) {
      const modLoaderData = nuggetData[selectedModLoader as keyof typeof nuggetData];
      
      for (const version in modLoaderData) {
        const versionData = modLoaderData[version as keyof typeof modLoaderData] as {
          supports: { [key: string]: string };
        };
  
        if (versionData.supports[selectedVersion]) {
          return versionData.supports[selectedVersion];
        }
      }
    }
    return "#";
  };
  

  return (
    <>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="p-5 grid auto-rows-min gap-4 md:grid-cols-3">
          <div 
          onMouseLeave={() => (boundingRef.current = null)}
          onMouseEnter={(ev) => {
            boundingRef.current = ev.currentTarget.getBoundingClientRect();
          }}
          onMouseMove={(ev) => {
            if (!boundingRef.current) return;
            const x = ev.clientX - boundingRef.current.left;
            const y = ev.clientY - boundingRef.current.top;
            const xPercentage = x / boundingRef.current.width;
            const yPercentage = y / boundingRef.current.height;
            const xRotation = (xPercentage - 0.2) * 20;
            const yRotation = (0.2 - yPercentage) * 20;
  
            ev.currentTarget.style.setProperty("--x-rotation", `${yRotation}deg`);
            ev.currentTarget.style.setProperty("--y-rotation", `${xRotation}deg`);
            ev.currentTarget.style.setProperty("--x", `${xPercentage * 100}%`);
            ev.currentTarget.style.setProperty("--y", `${yPercentage * 100}%`);
          }}
          className="aspect-auto rounded-xl bg-muted/50 p-5 group relative transition-transform ease-out "
          >
            <Image
              src="/nuggetmod-icon.png" // replace with the actual path to your mod icon
              alt="Nugget Mod Icon"
              className="w-16 h-16"
              width={64}
              height={64}
            />

            <div className="flex items-center justify-between mt-2">
              <h2 className="text-xl font-semibold">Nugget Mod</h2>
                <div className="flex space-x-4 mb-1">
                <a
                  href="https://modrinth.com/mod/nuggetmod/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiModrinth className="w-6 h-6" style={{ color: '#00AF5C' }} />
                </a>
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/gegagedigedagedago-nugget/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiCurseforge className="w-6 h-6" style={{ color: '#F16436' }} />
                </a>
                </div>
            </div>
            <p className="text-gray-400 mt-1">
              minecraft mod that adds the chicken nugget meme into minecraft with armor and tools along with horse armor and music disc and nugget block 
            </p>
            <div className="mt-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline"> <RxDownload className=""/> Download</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Download</DialogTitle>
                    <DialogDescription>
                      download page for Nugget Mod
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label className="text-right">
                        Mod Loader
                      </Label>
                      <Select onValueChange={(value) => setSelectedModLoader(value)}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Mod Loader" />
                        </SelectTrigger>
                        <SelectContent>
                          {minecraftmodloader.map((modLoader) => (
                            <SelectItem key={modLoader.value} value={modLoader.value}>
                              <div className="flex items-center">
                                {modLoader.value === "forge" && (
                                  <Image
                                    src="/forge.svg"
                                    alt="Forge Logo"
                                    className="w-7 h-7 mr-2"
                                    width={28}
                                    height={28}
                                  />
                                )}
                                {modLoader.value === "neoforge" && (
                                  <Image
                                    src="/neoforged.svg"
                                    alt="NeoForge Logo"
                                    className="w-7 h-7 mr-2"
                                    width={28}
                                    height={28}
                                  />
                                )}
                                {modLoader.value === "fabric" && (
                                  <Image
                                    src="/fabric.png"
                                    alt="Fabric Logo"
                                    className="w-7 h-7 mr-2"
                                    width={28}
                                    height={28}
                                  />
                                )}
                                {modLoader.label}
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="minecraft-version" className="text-right">
                        Minecraft Version
                      </Label>
                      <Select onValueChange={(value) => setSelectedVersion(value)}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Minecraft Version" />
                        </SelectTrigger>
                        <SelectContent>
                          {minecraftversion.map((version) => (
                            <SelectItem key={version.value} value={version.value}>
                              {version.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={() => window.open(generateDownloadUrl(), "_blank")}>
                      Download
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            <div className="pointer-events-none absolute inset-0 group-hover:bg-[radial-gradient(at_var(--x)_var(--y),rgba(255,255,255,0.05)_5%,transparent_50%)]" />
          </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </>
  )
}