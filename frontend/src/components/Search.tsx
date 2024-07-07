export default function Search() {
  return (
    <search className="h-12 w-full">
      <form className="flex h-full gap-x-2 font-mono">
        <input
          className="flex-1 rounded-sm bg-[#1A1A1A] bg-[url('/img/search-normal.svg')] bg-[left_0.5rem_center] bg-no-repeat pl-10 text-sm uppercase text-white"
          type="text"
          placeholder="Search"
        />
      </form>
    </search>
  );
}
