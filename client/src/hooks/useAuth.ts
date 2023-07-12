type AuthReturn = {
  handleSignIn: () => void
  handleSignUp: () => void
  handleSignOut: () => void
}

const useAuth = (): AuthReturn => {
  const handleSignIn = (): void => {
    alert('Sign In')
  }

  const handleSignUp = (): void => {
    alert('Sign Up')
  }

  const handleSignOut = (): void => {
    alert('Sign Out')
  }

  return {
    handleSignIn,
    handleSignUp,
    handleSignOut
  }
}

export default useAuth
