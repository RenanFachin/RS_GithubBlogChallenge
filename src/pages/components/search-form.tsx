import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const {
    register,
    handleSubmit
  } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema)
  })

  // data é do tipo searchFormInput e é recebido quando for feito o submit
  function handleSearchGithubIssues(data: SearchFormInput) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleSearchGithubIssues)}>
      <input
        type="text"
        className="w-full rounded-md px-4 py-3 bg-base-input border border-base-border outline-none focus:ring-2 leading-relaxed text-base-text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </form>

  )
}