import {
  CheckIcon,
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  PlusIcon,
  SearchIcon,
} from "@/icons";

export default function IconExamples() {
  return (
    <div className="flex flex-col gap-4 text-sm text-zinc-600 dark:text-zinc-400">
      <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
        Icon usage examples
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {/* 버튼 안 아이콘: className으로 크기, 텍스트 색을 그대로 상속 */}
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
        >
          <PlusIcon className="h-4 w-4" />
          Add item
        </button>

        {/* 아이콘만 있는 버튼: aria-label로 접근성 보완 */}
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-full border border-black/[.08] p-2 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-white/[.08]"
        >
          <MenuIcon className="h-4 w-4" />
        </button>

        {/* 검색 입력창 안 아이콘: absolute 배치 */}
        <label className="relative flex items-center">
          <SearchIcon className="pointer-events-none absolute left-3 h-4 w-4 text-zinc-400" />
          <input
            type="search"
            placeholder="Search"
            className="rounded-full border border-black/[.08] bg-transparent py-2 pl-9 pr-4 text-sm outline-none dark:border-white/[.145]"
          />
        </label>

        {/* 드롭다운 트리거: 텍스트 옆 chevron */}
        <button
          type="button"
          className="flex items-center gap-1 rounded-full border border-black/[.08] px-4 py-2 text-sm font-medium dark:border-white/[.145]"
        >
          Sort by
          <ChevronDownIcon className="h-4 w-4" />
        </button>

        {/* 닫을 수 있는 chip: 색은 text-* 유틸리티로 제어 */}
        <span className="flex items-center gap-1.5 rounded-full bg-black/[.06] px-3 py-1.5 text-sm text-zinc-950 dark:bg-white/[.08] dark:text-zinc-50">
          svg-icons
          <CloseIcon className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />
        </span>

        {/* 상태 표시: 색상 유틸리티만 바꿔서 톤 변경 */}
        <span className="flex items-center gap-1.5 text-sm text-emerald-600 dark:text-emerald-400">
          <CheckIcon className="h-4 w-4" />
          Synced
        </span>
      </div>
    </div>
  );
}
