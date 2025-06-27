import { SearchIcon } from "lucide-react";

export default function SearchInput() {
  // TODO: Add search functionality
  return (
    <form className="flex w-full max-w-xl">
      <div className="relative w-full">
        <input type="text" placeholder="Search" className="w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500" />
        {/* TODO: add remove search button */}
      </div>
      <button type="submit" className="px-4 py-2 bg-gray-100 border border-l-0 rounded-r-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed">
        <SearchIcon />
      </button>
    </form>
  )
}
