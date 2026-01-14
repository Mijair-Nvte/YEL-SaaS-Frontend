"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Características",
    href: "#features",
    description: "Explora lo que nuestra plataforma puede hacer por ti.",
  },
  {
    title: "Precios",
    href: "#pricing",
    description: "Planes flexibles para cada etapa de tu crecimiento.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans dark:bg-black">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo o Nombre */}
          <Link href="/" className="font-bold text-xl">
            MiSaaS
          </Link>

          {/* Menú de Navegación Central */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Producto</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/docs">Documentación</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Botones de Acción (Derecha) */}
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT (Hero Section) */}
      <main className="flex flex-1 flex-col items-center justify-center py-32 px-16 text-center sm:items-start sm:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
          Bienvenido a tu Landing Page
        </h1>
        <p className="max-w-[600px] text-muted-foreground mb-8">
          Esta es la estructura base con el menú de navegación
          integrado.
        </p>

        <div className="flex gap-4">
          <Link href="/signup">
            <Button size="lg">Empieza ahora</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}

// Componente auxiliar para los items del menú desplegable
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
