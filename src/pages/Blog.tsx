import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { UserCard } from "../components/user-card";
import { api } from "../lib/axios";
import { SearchForm } from "./components/search-form";
import { BlogCard } from "./components/blog-card";


// api.github.com/users/${username}
export interface GithubDataProps {
  avatar_url: string
  bio: string
  name: string
  location: string
  followers: number
  html_url: string
  login: string
}

export function Blog() {
  // Iniciando o estado com um objeto vazio do tipo GithubDataProps
  const [userGithubData, setUserGithubData] = useState<GithubDataProps>({} as GithubDataProps)

  async function fetchGithubData() {
    // Chamada para API
    const response = await api.get('/users/RenanFachin')
    const data = response.data
    // console.log(data)

    // Armazenadno cada dado de dentro do objeto conforme o retorno da API
    setUserGithubData({
      name: data.name,
      avatar_url: data.avatar_url,
      bio: data.bio,
      followers: data.followers,
      html_url: data.html_url,
      location: data.location,
      login: data.login
    })
  }

  // Realizando o fetch nos dados toda vez que a página for recarregada
  useEffect(() => {
    // fetchGithubData()
  }, [])

  return (
    <div className="h-screen">
      <Header />

      {/* Repassando o estado para o componente */}
      <UserCard userInfo={userGithubData} />

      <div className="mt-16 max-w-4xl mx-auto flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base-subtitle text-lg font-bold leading-relaxed">Publicações</h2>

          <span className="text-base-span text-sm leading-relaxed">6 publicações</span>
        </div>
        <SearchForm />
      </div>

      <main className="max-w-4xl mx-auto mt-12 grid grid-cols-2 gap-8 pb-32">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </main>
    </div >
  )
}

