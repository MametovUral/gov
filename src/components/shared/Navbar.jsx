import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { BellDot, CircleUserRound } from "lucide-react";

function Navbar() {
  return (
    <nav className="header__head-nav container flex justify-end">
      <div className="head-nav flex items-center gap-14 ">
        <div className="head-notice">
          <BellDot size={32} color="#408A7E" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <div className="head-account flex items-center gap-3">
              <div className="head-account__img flex justify-center items-center">
                <div className="account__img flex justify-center items-center rounded-full">
                  <CircleUserRound size={70} strokeWidth={1} color="#408A7E" />
                </div>
              </div>
              <div className="head-account__id flex  h flex-col text-start ">
                <span className="font-semibold text-xl">Mametov Ural</span>
                <span>123456789</span>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" p-3  mt-4">
            <DropdownMenuGroup>
              <DropdownMenuItem>Profil</DropdownMenuItem>
              <DropdownMenuItem>Shaxsiy ma'lumotlarim</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-700 font-bold">
              Chiqish
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
