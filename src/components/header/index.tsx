import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="content-grid bg-primary-foreground border-b border-b-slate-500 py-4">
      <div className="feature flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold"> CSS Fluid Size Calculator</h1>
        </Link>
        <Link
          to="/about"
          className="rounded border border-slate-400 px-4 py-2 duration-300 hover:bg-slate-100 hover:text-black"
        >
          About
        </Link>
      </div>
    </header>
  )
}

export default Header
