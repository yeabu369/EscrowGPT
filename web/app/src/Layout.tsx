import { Link } from "react-router-dom"
import hero from "/hero.svg"

interface MarketingLayoutProps {
  children?: React.ReactNode
}

const RootLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen justify-center px-96 text-sm">
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-bold text-center py-4">ScheduleGPT</h1>
        <ul className="flex items-center space-x-3">
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/docs">Documentation</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <Link to="/auth/login" className="border px-6 py-2 rounded-lg bg-gray-900 text-gray-100">Login</Link>
      </header>
      <main className="flex-grow border-t-2 pt-10">
        <div className="flex flex-col space-y-3 px-80 ">
          <img className="w-64" src={hero} />
          <div className="flex flex-col space-y-10">
            <h2 className="text-6xl font-bold">Build schedule blocks with GPT</h2>
            <p className="text-lg text-gray-500">
              Use GPT to generate schedule blocks for your calendar. Schedule tasks, breakdown
              taks into subtasks, and more. Create asynchronous events and have an AI assistant
              complete the task with AutoGPT for you.
            </p>
          </div>
          <div className="flex space-x-4 pt-8">
            <Link to="/auth/signup" className="border px-8 py-3 rounded-md bg-gray-900 text-gray-100">Get Started</Link>
            <Link to="/" className="border px-8 py-3 rounded-md">Github</Link>
          </div>
        </div>
      </main>
      <footer className="flex-shrink-0">
        <p className="text-center py-4">© {new Date().getFullYear()} ScheduleGPT</p>
      </footer>
    </div>
  )
}

export default RootLayout