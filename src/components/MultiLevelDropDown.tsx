import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";

// Define types for MenuItem
interface MenuItemType {
  label: string;
  submenu?: MenuItemType[];
}

const MenuItem = ({ item }: { item: MenuItemType }) => {
  if (item.submenu) {
    return (
      <DropdownMenuSub>
        <DropdownMenuSubTrigger className="flex items-center justify-between">
          {item.label}
          <ChevronRight className="ml-2 h-4 w-4" />
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent>
          {item.submenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  }
  return <DropdownMenuItem>{item.label}</DropdownMenuItem>;
};

const MultilevelDropdown = () => {
  const menuItems: MenuItemType[] = [
    { label: "Action" },
    { label: "Another action" },
    {
      label: "Submenu",
      submenu: [
        { label: "Submenu item 1" },
        { label: "Submenu item 2" },
        {
          label: "Submenu item 3",
          submenu: [{ label: "Multi level 1" }, { label: "Multi level 2" }],
        },
        { label: "Submenu item 4" },
        { label: "Submenu item 5" },
      ],
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default">Dropdown button</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MultilevelDropdown;
