"use client";

import React from "react";
import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export const ListItem = React.forwardRef(
  ({ className, title, href, children }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block py-2 px-3 text-sm hover:text-blue-700 rounded transition-colors",
            className
          )}
        >
          <div className="flex items-center justify-between">
            <span>{title}</span>
            {children}
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);

ListItem.displayName = "ListItem";
