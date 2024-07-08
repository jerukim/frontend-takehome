export default function Search() {
  return (
    <search>
      <form className="flex h-12 gap-x-2 font-mono">
        <input
          className="bg-black-1a flex-1 rounded-sm bg-[url('/img/search-normal.svg')] bg-[left_0.5rem_center] bg-no-repeat pl-10 text-sm uppercase text-white"
          id="search"
          name="search"
          type="text"
          placeholder="Search"
        />
        <button className="shrink-0">
          <img className="size-6" src="/img/notification.svg" alt=""></img>
        </button>
        <select
          className="appearance-none bg-transparent bg-[url('/img/arrow-down.svg')] bg-[length:8px_4px] bg-[right_0.6rem_center] bg-no-repeat pr-6 text-white"
          id="address"
          name="address"
          autoComplete="off"
        >
          <option>0xfC...E63d1</option>
        </select>
      </form>
    </search>
  );
}
