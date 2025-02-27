import { useClerk, useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { GoPasskeyFill } from "react-icons/go";
export function SignInWithPasskeyButton() {
    const { setActive } = useClerk()
    const { signIn } = useSignIn()
    const router = useRouter()
  
    const signInWithPasskey = async () => {
      // 'discoverable' lets the user choose a passkey
      // without auto-filling any of the options
      try {
        const signInAttempt = await signIn?.authenticateWithPasskey({
          flow: 'discoverable',
        })
  
        if (signInAttempt?.status === 'complete') {
          await setActive?.({ session: signInAttempt.createdSessionId })
          router.push('/')
        } else {
          // If the status is not complete, check why. User may need to
          // complete further steps.
          console.error(JSON.stringify(signInAttempt, null, 2))
        }
      } catch (err) {
        // See https://clerk.com/docs/custom-flows/error-handling
        // for more info on error handling
        console.error('Error:', JSON.stringify(err, null, 2))
      }
    }
  
    return <button onClick={signInWithPasskey} className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200 text-white cursor-pointer"> <GoPasskeyFill className="h-5 w-5" /> Sign in with a passkey</button>
  }