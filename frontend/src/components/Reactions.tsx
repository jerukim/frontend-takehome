function Reaction({ value }: { value: string }) {
  function dragStartHandler(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.dropEffect = "copy";
    event.dataTransfer.setData("text/plain", event.currentTarget.innerText);
  }

  return (
    <div className="" draggable onDragStart={dragStartHandler}>
      {value}
    </div>
  );
}

export function Reactions({ options }: { options: string[] }) {
  return (
    <div className="flex h-10 shrink items-center gap-x-4 self-start rounded-full bg-black-25 px-4 py-2">
      {options.map((value) => (
        <Reaction key={value} value={value} />
      ))}
      <button type="button" aria-label="Show more reactions">
        <img src="/img/add-circle-dark.svg" alt="" />
      </button>
    </div>
  );
}
