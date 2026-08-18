function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-200">
      <div className="text-2xl font-bold">
        Hire<span className="text-blue-600">Spot</span>
      </div>

      <ul className="flex gap-8">
        <li>Home</li>
        <li>Jobs</li>
        <li>Companies</li>
        <li>About</li>
      </ul>

      <button className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700">
        Sign In
      </button>
    </nav>
  )
}

export default Navbar