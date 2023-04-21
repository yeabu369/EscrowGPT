interface MarketingLayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: MarketingLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
        <header className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-center py-4">Escrow GPT</h1>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="flex-shrink-0">
            <p className="text-center py-4">© {new Date().getFullYear()} Escrow GPT</p>
        </footer>
    </div>
  )
}

export default Layout