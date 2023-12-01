export function BlogCard() {
  return (
    <div className="bg-base-post rounded-lg p-8 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <h2 className="text-base-title font-bold leading-relaxed text-xl max-w-[280px]">
          JavaScript data types and data structures
        </h2>

        <span className="text-base-span text-sm leading-relaxed">
          Há 1 dia
        </span>
      </div>

      <span className="h-12 max-h-[112px] overflow-hidden overflow-ellipsis whitespace-nowrap leading-relaxed text-base-text">
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
      </span>
    </div>
  )
}