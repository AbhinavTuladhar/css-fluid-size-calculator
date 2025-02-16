import { Link } from '@tanstack/react-router'

const Header = () => {
  return (
    <header className="content-grid bg-primary-foreground border-b border-b-slate-500 py-4">
      <div className="feature flex items-center justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold"> CSS Fluid Size Calculator</h1>
        </Link>
        <Link to="/about"> About </Link>
      </div>
    </header>
  )
}

export default Header
