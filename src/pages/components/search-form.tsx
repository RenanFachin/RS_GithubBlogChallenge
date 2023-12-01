export function SearchForm() {
  return (
    <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base-subtitle text-lg font-bold leading-relaxed">Publicações</h2>

        <span className="text-base-span text-sm leading-relaxed">6 publicações</span>
      </div>

      <form className="">
        <input
          type="text"
          className="w-full rounded-md px-4 py-3 bg-base-input border border-base-border outline-none focus:ring-2 leading-relaxed text-base-text"
          placeholder="Buscar conteúdo"
        />
      </form>
    </div>
  )
}