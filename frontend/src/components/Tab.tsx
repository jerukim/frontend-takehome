import clsx from "clsx";

export function TabItem({
  className,
  label,
  isActive,
}: {
  className?: string;
  label: string;
  isActive: boolean;
}) {
  return (
    <button
      className={clsx(
        className,
        "relative p-4 font-mono text-sm uppercase",
        isActive ? "text-red" : "text-white-50 opacity-75",
      )}
      type="button"
    >
      {label}
      {isActive && (
        <div className="absolute -bottom-px left-0 h-px w-full bg-red" />
      )}
    </button>
  );
}

export function Tab({ children }: { children: React.ReactNode }) {
  return (
    <menu className="border-black-1a flex gap-x-4 border-b border-solid">
      {children}
    </menu>
  );
}
