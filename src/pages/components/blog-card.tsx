interface BlogCardProps {
  title: string
  body: string
  number: number
}


export function BlogCard({ body, title, number }: BlogCardProps) {
  return (
    <a href={`/post/${number}`} className="bg-base-post rounded-lg p-8 flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <h2 className="text-base-title font-bold leading-relaxed text-xl max-w-[280px]">
          {title}
        </h2>

        <span className="text-base-span text-sm leading-relaxed">
          Há 1 dia
        </span>
      </div>

      <span className="h-12 max-h-[112px] overflow-hidden overflow-ellipsis whitespace-nowrap leading-relaxed text-base-text">
        {body}
      </span>
    </a>
  )
}