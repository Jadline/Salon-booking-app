



// 2.with_multiple_flyout_nav

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from 'react-router-dom'

// Services dropdown
const services = [
  { name: 'Hair Styling', description: 'Trendy cuts and styling options', to: '/services' },
  { name: 'Nail Art', description: 'Creative designs for every occasion', to: '/services' },
  { name: 'Makeup', description: 'Professional touch for your look', to: '/services' },
  { name: 'Spa Treatments', description: 'Relax and unwind completely', to: '/services' },
]

// About dropdown
// const aboutLinks = [
//   { name: 'About Us', to: '/about' },
//   { name: 'Our Team', to: '/about' },
//   { name: 'Careers', to: '/about' },
//   { name: 'Contact', to: '/contact' },
// ]

// Main nav
const navigation = [
  { name: 'Home', to: '/' },
  
  { name: 'Booking', to: '/booking' },
  // { name: 'Admin', to: '/admin' },
 
  {name: 'Gallery', to:'/gallery'}
 
]

export default function PageNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header-gradient">
      {/* Desktop Nav */}
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Salon</span>
            {/* <img
              alt="Salon logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              className="h-8 w-auto"
            /> */}
          </NavLink>
        </div>

        {/* Mobile Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors duration-200 ${
                  isActive ? 'text-indigo-400' : 'text-white hover:text-indigo-400'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Services dropdown */}
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
              Services
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-white-500" />
            </PopoverButton>
            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-gradient-to-tr from-purple-500 to-indigo-900 ring-1 ring-white/10">
              <div className="p-4">
                {services.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm font-semibold text-white hover:bg-white/5"
                  >
                    <div className="flex-auto">
                      {item.name}
                      <p className="mt-1 text-gray-400 text-sm font-normal">{item.description}</p>
                    </div>
                  </NavLink>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}

          {/* About dropdown */}
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
              About
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
            </PopoverButton>
            <PopoverPanel className="absolute left-1/2 z-10 mt-3 w-56 -translate-x-1/2 rounded-xl bg-gray-800 p-2 ring-1 ring-white/10">
              {aboutLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-white/5"
                >
                  {item.name}
                </NavLink>
              ))}
            </PopoverPanel>
          </Popover> */}
        </PopoverGroup>

        {/* Login button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <p>Welcome!</p>
          {/* <NavLink to="/login" className="text-sm font-semibold text-white hover:text-indigo-400">
            Log in <span aria-hidden="true">&rarr;</span>
          </NavLink> */}
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5">
              {/* <img
                alt="Salon logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              /> */}
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                  >
                    {item.name}
                  </NavLink>
                ))}

                {/* Services */}
                {/* <Disclosure>
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                    Services
                    <ChevronDownIcon className="h-5 w-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-1">
                    {services.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pl-6 text-sm font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}

                {/* About */}
                {/* <Disclosure>
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                    About
                    <ChevronDownIcon className="h-5 w-5 group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-1">
                    {aboutLinks.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg py-2 pl-6 text-sm font-semibold text-white hover:bg-white/5"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </DisclosurePanel>
                </Disclosure> */}
              </div>

              <div className="py-6">
                <p>Welcome</p>
                {/* <NavLink
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-base font-semibold text-white hover:bg-white/5"
                >
                  Log in
                </NavLink> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}



