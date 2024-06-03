"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "../util/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-8 w-auto" src="/logo-bws.png" alt="BSoft" />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    href="/"
                    className={cn(
                      "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      pathname === "/" && "border-indigo-500  text-gray-900"
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    href="/map"
                    className={cn(
                      "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      pathname === "/map" && "border-indigo-500  text-gray-900"
                    )}
                  >
                    Mapa
                  </Link>
                  <Link
                    href="/table"
                    className={cn(
                      "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      pathname === "/table" &&
                        "border-indigo-500  text-gray-900"
                    )}
                  >
                    Tabela
                  </Link>

                  <Link
                    href="/history"
                    className={cn(
                      "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700",
                      pathname === "/history" &&
                        "border-indigo-500  text-gray-900"
                    )}
                  >
                    Histórico
                  </Link>
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              <Link href="/map">
                <Disclosure.Button
                  className={cn(
                    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 w-full",
                    pathname === "/map" &&
                      "border-indigo-500 bg-indigo-50 text-indigo-700"
                  )}
                >
                  Mapa
                </Disclosure.Button>
              </Link>
              <Link href="/table">
                <Disclosure.Button
                  className={cn(
                    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 w-full",
                    pathname === "/table" &&
                      "border-indigo-500 bg-indigo-50 text-indigo-700"
                  )}
                >
                  Tabela
                </Disclosure.Button>
              </Link>
              <Link href="/history">
                <Disclosure.Button
                  className={cn(
                    "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 w-full",
                    pathname === "/history" &&
                      "border-indigo-500 bg-indigo-50 text-indigo-700"
                  )}
                >
                  Histórico
                </Disclosure.Button>
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
