import clsx from "clsx";

type TabItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean;
};

export function TabItem({
  className,
  children,
  isActive,
  ...props
}: TabItemProps) {
  return (
    <button
      className={clsx(
        className,
        "relative p-4 font-mono text-sm uppercase",
        isActive ? "text-red" : "text-white-50 opacity-75",
      )}
      type="button"
      {...props}
    >
      {children}
      {isActive && (
        <div className="absolute -bottom-px left-0 h-px w-full bg-red" />
      )}
    </button>
  );
}

export function Tabs({ children }: { children: React.ReactNode }) {
  return (
    <menu className="flex gap-x-4 border-b border-solid border-black-1a">
      {children}
    </menu>
  );
}
