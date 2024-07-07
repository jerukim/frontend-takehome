import clsx from "clsx";

function NavItem({ label, href }: { label: string; href: string }) {
  const isActive = location.pathname === href;
  return (
    <a
      className={clsx(
        "relative p-4 font-mono text-sm uppercase",
        isActive ? "text-red" : "text-[#FFFEFE] opacity-75",
      )}
      href={href}
    >
      {label}
      {isActive && (
        <div className="absolute -bottom-px left-0 h-px w-full bg-red" />
      )}
    </a>
  );
}

export default function Nav() {
  return (
    <nav className="col-span-full flex gap-x-4 border-b border-solid border-[#1A1A1A]">
      <NavItem label="Price" href="/" />
      <NavItem label="Funding" href="/funding" />
    </nav>
  );
}
