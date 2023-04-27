import React, { Component } from 'react'
import { Link } from "react-router-dom"
import hero from "/hero.svg"

interface MarketingLayoutProps {
  children?: React.ReactNode
}


class RootLayout extends Component {
  constructor(props: MarketingLayoutProps) {
    super(props);
  }
  
  render() {
    return (
      <div className="flex flex-col justify-center min-h-screen text-sm px-96">
        <header className="flex items-center justify-between">
          <h1 className="py-4 text-lg font-bold text-center">ScheduleGPT</h1>
          <ul className="flex items-center space-x-3">
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/docs">Documentation</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <Link to="/auth/login" className="px-6 py-2 text-gray-100 bg-gray-900 border rounded-lg">Login</Link>
        </header>
        <main className="flex-grow pt-10 border-t-2">
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
            <div className="flex pt-8 space-x-4">
              <Link to="/auth/signup" className="px-8 py-3 text-gray-100 bg-gray-900 border rounded-md">Get Started</Link>
              <Link to="/" className="px-8 py-3 border rounded-md">Github</Link>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0">
          <p className="py-4 text-center">© {new Date().getFullYear()} ScheduleGPT</p>
        </footer>
      </div>
    )
  }
}

export default RootLayout
