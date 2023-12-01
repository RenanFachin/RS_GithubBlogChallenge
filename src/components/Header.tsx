import { UserCard } from "./user-card";

export function Header() {
  return (
    <header className="relative bg-cover-header bg-cover bg-no-repeat h-[296px] w-full flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-center">
        <img src="/src/assets/Logo.png" alt="" className="mt-16" />
      </div>

      <UserCard />
    </header>
  )
}