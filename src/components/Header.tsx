import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@radix-ui/react-separator";
import { House } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, User } from "lucide-react";

export default function Header() {
  return (
    <header className="px-20 py-4 flex items-center justify-between sticky top-0 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="flex items-center gap-8">
        <Link href="/" className="h-full">
          <Button variant="outline" size="icon">
            <House />
          </Button>
        </Link>
        <Link href="/register" className="transition text-muted-foreground text-sm hover:text-primary">
          Registration
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger></PopoverTrigger>
          <PopoverContent className="w-fit" align="end">
            <div>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="" alt="" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className="text-sm line-clamp-1">Test Test Test Test Test</p>
              </div>
              <Separator className=" bg-border h-[1px] my" />
              <Button
                variant="link"
                className="p-0 h-fit w-fit transition text-muted-foreground text-xs hover:text-primary"
              >
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="focus:hidden hover:bg-inherit" variant={"ghost"}>
            <Avatar>
              <AvatarImage src="" alt="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-48" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/profile">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <DropdownMenuSeparator />
          <Link href="/profile">
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
              <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
