/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { SiModrinth, SiCurseforge } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react"
import { RxDownload } from "react-icons/rx";
import nuggetData from "@/public/nugget/nugget.json";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Generate minecraftmod and minecraftversion from nugget.json
const minecraftmodloader = Object.keys(nuggetData).map(modLoader => ({
  value: modLoader,
  label: modLoader.charAt(0).toUpperCase() + modLoader.slice(1)
}));

const minecraftversion = Array.from(new Set(Object.values(nuggetData).flatMap(modLoader =>
  Object.values(modLoader).flatMap(versionData =>
    Object.keys(versionData.supports)
  )
))).map(version => ({
  value: version,
  label: version
}));

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
                      {/* Populate data from minecraftmodloader */}
                      <Select>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select Mod Loader" />
                        </SelectTrigger>
                        <SelectContent>
                          {minecraftmodloader.map((modLoader) => (
                            <SelectItem key={modLoader.value} value={modLoader.value}>
                              {modLoader.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="minecraft-version" className="text-right">
                        Minecraft Version
                      </Label>
                      {/* Populate data from minecraftversion */}
                      <Select>
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
                    <Button type="submit">Download</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </>
  )
}