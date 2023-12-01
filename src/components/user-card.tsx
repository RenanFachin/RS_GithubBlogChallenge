import { ArrowSquareOut, GithubLogo, Buildings, Users } from 'phosphor-react'
import { GithubDataProps } from '../pages/Blog'

interface UserCardProps {
  userInfo: GithubDataProps
}

export function UserCard({ userInfo }: UserCardProps) {
  return (
    <div className="max-w-4xl w-full bg-base-profile py-8 pl-10 pr-8 -mt-24 rounded-xl shadow-lg z-20 mx-auto">

      <div className="flex gap-8">
        <img src={userInfo.avatar_url} alt="" className="w-36 h-36" />

        <div className="mt-2 flex flex-col items-start">
          <div className="flex items-center justify-between w-full">
            <h1 className="flex-1 text-base-title text-2xl leading-tight font-bold">
              {userInfo.username}
            </h1>

            <a
              href={userInfo.html_url}
              className='flex gap-2 text-blue cursor-pointer hover:underline'
              target='_blank'
            >
              <span className="uppercase text-xs leading-relaxed font-bold">Gitbhub</span>
              <ArrowSquareOut className='w-4 h-4' />
            </a>
          </div>

          <span className='text-base-text leading-relaxed mt-2'>
            {userInfo.bio}
          </span>

          <div className='mt-6 flex items-center justify-center gap-6'>
            <div className='flex items-center gap-2'>
              <GithubLogo className='w-5 h-5 text-base-label' />
              <p className='text-base-subtitle leading-relaxed'>{userInfo.login}</p>
            </div>

            <div className='flex items-center gap-2'>
              <Buildings className='w-5 h-5 text-base-label' />
              <p className='text-base-subtitle leading-relaxed'>{userInfo.location}</p>
            </div>

            <div className='flex items-center gap-2'>
              <Users className='w-5 h-5 text-base-label' />
              <p className='text-base-subtitle leading-relaxed'>{userInfo.followers} seguidores</p>
            </div>
          </div>
        </div>
      </div>


    </div >
  )
}