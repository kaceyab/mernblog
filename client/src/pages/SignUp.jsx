import { Button, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    // All 
    <div className="min-h-screen mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          
          {/* Left */}
          <div className="flex-1">
            <Link
              to='/'
              className='font-bold dark:text-white text-4xl'
              >
                <span className='px-2 py-1 bg-gradient-to-r
                from-indigo-500 via-purple-500 to-pink-500 
                rounded-lg text-white'>
                  Kacey's
                </span>
              Blog
            </Link>
            <p className="text-sm mt-5">This is a demo project</p>
          </div>

          {/* Right */}
          <div className="flex-1">
            <form className="flex flex-col gap-4">
              <div>
                <Label value="Your Username"/>
                <TextInput
                type='text'
                placeholder="Username"
                id="username"
                />
                <Label value="Your Email"/>
                <TextInput
                type='text'
                placeholder="Email"
                id="email"
                />
                <Label value="Your Password"/>
                <TextInput
                type='text'
                placeholder="Password"
                id="password"
                />
              </div>
              <Button gradientDuoTone='purpleToPink' type="submit">
                Sign Up
              </Button>
            </form>
            <div className="mt-4">
              <span>Have an account?</span>
              <Link to='/sign-in' className="text-blue-500 ml-2">
                Sign In
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}