/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// import { Separator } from "@/components/ui/separator"
import { SiModrinth, SiCurseforge } from '@icons-pack/react-simple-icons';
import Image from "next/image";
import { useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react"
import { RxDownload } from "react-icons/rx";
 
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

// replace minecraft mod loader with nugget/nugget.json
const minecraftmod = [
  {
    value: "Forge",
    label: "Forge",
  },
  {
    value: "NeoForge",
    label: "NeoForge",
  },
  {
    value: "Fabric",
    label: "Fabric"
  }
]
// replace minecraft version with nugget/nugget.json
const minecraftversion = [
  {
    value: "1.21",
    label: "1.21",
  },
  {
    value: "1.21.1",
    label: "1.21.1",
  },
  {
    value: "1.21.3",
    label: "1.21.3"
  }
]

export default function Home() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

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
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[220px] justify-between"
                          >
                            {value
                              ? minecraftmod.find((minecraftmod) => minecraftmod.value === value)?.label
                              : <>Select Mod Loader</>}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="Forge..." />
                            <CommandList>
                              <CommandEmpty>No Mod Loader found.</CommandEmpty>
                              <CommandGroup>
                                {minecraftmod.map((minecraftmod) => (
                                  <CommandItem
                                    key={minecraftmod.value}
                                    value={minecraftmod.value}
                                    onSelect={(currentValue) => {
                                      setValue(currentValue === value ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                  >
                                    <div className="mr-2 ">
                                      {minecraftmod.value === "Forge" && <Image 
                                        src="/forge.svg"
                                        alt="Forge Logo"
                                        className="w-7 h-7"
                                        width={64}
                                        height={64}
                                      />}
                                      {minecraftmod.value === "NeoForge" && <Image
                                        src="/neoforged.svg"
                                        alt="NeoForge Logo"
                                        className="w-7 h-7"
                                        width={64}
                                        height={64}
                                      />}
                                      {minecraftmod.value === "Fabric" && <>
                                        <Image
                                          src="/fabric.png"
                                          alt="Fabric Logo"
                                          className="w-7 h-7"
                                          width={64}
                                          height={64}
                                        />
                                      </>}
                                    </div>
                                    {minecraftmod.label}
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === minecraftmod.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="username" className="text-right">
                        Minecraft Version
                      </Label>
                      <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-[220px] justify-between"
                          >
                            {value
                              ? minecraftversion.find((minecraftversion) => minecraftversion.value === value)?.label
                              : <>Select Minecraft Version</>}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                          <Command>
                            <CommandInput placeholder="1.21..." />
                            <CommandList>
                              <CommandEmpty>No Version found.</CommandEmpty>
                              <CommandGroup>
                                {minecraftversion.map((minecraftversion) => (
                                  <CommandItem
                                    key={minecraftversion.value}
                                    value={minecraftversion.value}
                                    onSelect={(currentValue) => {
                                      setValue(currentValue === value ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                  >
                                    {minecraftversion.label}
                                    <Check
                                      className={cn(
                                        "mr-2 h-4 w-4",
                                        value === minecraftversion.value ? "opacity-100" : "opacity-0"
                                      )}
                                    />
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
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

{/*  */}