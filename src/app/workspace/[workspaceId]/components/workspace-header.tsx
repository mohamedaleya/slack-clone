import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Doc } from "../../../../../convex/_generated/dataModel";
import {
  ChevronDown,
  ListFilter,
  Settings,
  SquarePen,
  UserPlus2,
} from "lucide-react";
import { Hint } from "@/components/hint";

interface WorkspaceHeaderProps {
  workspace: Doc<"workspaces">;
  isAdmin: boolean;
}

export const WorkspaceHeader = ({
  workspace,
  isAdmin,
}: WorkspaceHeaderProps) => {
  return (
    <div className="flex h-[49px] items-center justify-between gap-0.5 px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="transparent"
            className="text-large w-auto overflow-hidden p-1.5 font-semibold text-white"
            size="sm"
          >
            <span className="truncate">{workspace.name}</span>
            <ChevronDown className="ml-1 size-4 shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem className="cursor-pointer capitalize">
            <div className="relative mr-2 flex size-9 items-center justify-center overflow-hidden rounded-md bg-[#616061] text-xl font-semibold text-white">
              {workspace.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">{workspace.name}</p>
              <p className="text-xs text-muted-foreground">Active workspace</p>
            </div>
          </DropdownMenuItem>
          {isAdmin && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer py-2"
                onClick={() => {}}
              >
                <UserPlus2 className="mr-2 size-5 text-muted-foreground" />
                <span className="truncate">
                  Invite people to {workspace.name}
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="cursor-pointer py-2"
                onClick={() => {}}
              >
                <Settings className="mr-2 size-5 text-muted-foreground" />
                Preferences
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-0.5">
        <Hint label="Filter conversations" side="bottom">
          <Button variant="transparent" size="iconSm">
            <ListFilter className="size-4" />
          </Button>
        </Hint>
        <Hint label="New message" side="bottom">
          <Button variant="transparent" size="iconSm">
            <SquarePen className="size-4" />
          </Button>
        </Hint>
      </div>
    </div>
  );
};
