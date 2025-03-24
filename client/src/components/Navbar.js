"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  FlaskConical,
  Settings,
  Users,
  FileText,
  Home,
} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FlaskConical size={28} />
          <span className="text-lg font-bold">Special Lab Dashboard</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <NavLink
            href="/dashboard"
            icon={<Home size={20} />}
            label="Dashboard"
          />
          <NavLink
            href="/join-lab"
            icon={<FlaskConical size={20} />}
            label="Join Lab"
          />
          <NavLink
            href="/requests"
            icon={<FileText size={20} />}
            label="Requests"
          />
          <NavLink
            href="/events"
            icon={<Settings size={20} />}
            label="Events"
          />
          <NavLink
            href="/faculty_demo"
            icon={<Home size={20} />}
            label="Faculty Demo"
          />
          <NavLink href="/profile" icon={<Users size={20} />} label="Profile" />
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          <MobileNavLink href="/" label="Dashboard" />
          <MobileNavLink href="/inventory" label="Inventory" />
          <MobileNavLink href="/reports" label="Reports" />
          <MobileNavLink href="/users" label="Users" />
          <MobileNavLink href="/settings" label="Settings" />
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, icon, label }) {
  return (
    <Link
      href={href}
      className="flex items-center space-x-2 hover:text-gray-400"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function MobileNavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="block py-2 text-center hover:bg-gray-700 rounded"
    >
      {label}
    </Link>
  );
}
