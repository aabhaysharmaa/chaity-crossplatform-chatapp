import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react"

const App = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal"/>
      </SignedOut>
      <SignedIn >
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default App
