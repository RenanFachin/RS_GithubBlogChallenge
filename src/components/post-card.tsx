import { ArrowLeft, ArrowSquareOut, GithubLogo, Calendar, ChatTeardropDots } from 'phosphor-react'
import { useContext } from 'react'
import { BlogContext } from '../context/blog-context'

// Criando tipagem dos dados recebidos por propriedades, no caso, userInfo é o state que tem tipo GithubDataProps
interface UserCardProps {
  title: string
  // created_at: Date
  comments: number
  id: string
}

export function PostCard({ title, comments, id }: UserCardProps) {

  const { userGithubData } = useContext(BlogContext)

  const today = new Date()
  console.log(today)

  return (
    <div className="max-w-4xl w-full bg-base-profile py-6 md:py-8 pl-6 pr-6 md:pl-10 md:pr-8 -mt-24 rounded-xl shadow-lg z-20 mx-auto min-h-[168px]">
      <div className="flex flex-col w-full">
        <div className='flex items-center justify-between w-full'>
          <a href='/' className='flex items-center gap-2 text-blue'>
            <ArrowLeft className='w-4 h-4' />
            <span className='uppercase text-xs leading-relaxed font-bold'>voltar</span>
          </a>


          <button className='flex gap-2 text-blue'>
            <a href={`${userGithubData.html_url}/RS_GithubBlogChallenge/issues/${id}`} className='uppercase text-xs leading-relaxed font-bold'>Ver no github</a>
            <ArrowSquareOut className='w-4 h-4' />
          </button>


        </div>

        <h1 className='text-base-title text-2xl leading-tight font-bold mt-5'>
          {title}
        </h1>

        <div className='mt-2 flex items-center justify-start gap-4 md:gap-8'>
          <div className='flex items-center gap-2'>
            <GithubLogo className='w-5 h-5 text-base-label' />
            <p className='text-base-subtitle leading-relaxed text-sm md:text-base'>{userGithubData.name}</p>
          </div>

          <div className='flex items-center gap-2'>
            <Calendar className='w-5 h-5 text-base-label' />
            <p className='text-base-subtitle leading-relaxed text-sm md:text-base'>Há 1 dia</p>
          </div>

          <div className='flex items-center gap-2'>
            <ChatTeardropDots className='w-5 h-5 text-base-label' />
            <p className='text-base-subtitle leading-relaxed text-sm md:text-base'>{comments} comentários</p>
          </div>
        </div>
      </div>
    </div >
  )
}