export default function Search() {
  return (
    <search className="h-12 w-full">
      <form className="flex h-full gap-x-2 font-mono">
        <input
          className="flex-1 rounded-sm bg-[#1A1A1A] bg-[url('/img/search-normal.svg')] bg-[left_0.5rem_center] bg-no-repeat pl-10 text-sm uppercase text-white"
          type="text"
          placeholder="Search"
        />
        <button className="">
          <img className="size-6" src="/img/notification.svg" alt=""></img>
        </button>
        <select className="appearance-none bg-transparent bg-[url('/img/arrow-down.svg')] bg-[length:8px_4px] bg-[right_0.6rem_center] bg-no-repeat pr-6 text-white">
          <option>0xfC...E63d1</option>
        </select>
      </form>
    </search>
  );
}
