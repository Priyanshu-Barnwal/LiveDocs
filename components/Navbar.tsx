import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <header className="navbar bg-darkgray p-4 border-b flex justify-between items-center">
        <h1>LiveDocs</h1>
        <UserButton 
            appearance={{ elements: { avatarBox: "w-10 h-10" } }}
        /> 
    </header>
  )
}
