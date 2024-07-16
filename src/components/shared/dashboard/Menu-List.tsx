import {
    LayoutGrid,
    LucideIcon,
    MessageCircleCode,
    BarChart2,
    ShoppingBagIcon,
    AudioWaveformIcon
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: LucideIcon
    submenus: Submenu[];
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  
  export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname.includes("/dashboard"),
            icon: LayoutGrid,
            submenus: []
          },
          {
            href: "/dashboard/inbox",
            label: "Inbox",
            active: pathname.includes("/dashboard/inbox"),
            icon: MessageCircleCode,
            submenus: []
          },
          {
            href: "/dashboard/orders",
            label: "Orders",
            active: pathname.includes("/dashboard/orders"),
            icon: BarChart2,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Products",
        menus: [
          {
            href: "",
            label: "Inventory",
            active: pathname.includes("/dashboard/products"),
            icon: ShoppingBagIcon,
            submenus: [
              {
                href: "/dashboard/category",
                label: "Categories",
                active: pathname === "/dashboard/category"
              },
              {
                href: "/dashboard/products",
                label: "Produts",
                active: pathname === "/dashboard/products"
              },
              {
                href: "/dashboard/coupons",
                label: "Coupons",
                active: pathname === "/dashboard/coupons"
              }
            ]
          },
        ]
      },
      {
        groupLabel: "Management",
        menus: [
          {
            href: "",
            label: "Admin Management",
            active: pathname.includes("/dashboard/products"),
            icon: AudioWaveformIcon,
            submenus: [
         
              {
                href: "/dashboard/admins",
                label: "Admins Role",
                active: pathname === "/dashboard/admins"
              },
              {
                href: "/dashboard/permission",
                label: "Permissions",
                active: pathname === "/dashboard/permission"
              },
              {
                href: "/dahboard/users",
                label: "User Management",
                active: pathname === "/dahboard/users"
              },
            ]
          },
        ]
      },

    ];
  }
  