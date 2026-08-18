import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-80px)] bg-white">
          <div className="mx-auto flex max-w-7xl items-center px-6 py-20 lg:px-8">
            
            {/* Left side */}
            <div className="w-full lg:w-1/2">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-500">
                Your career starts here
              </p>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight text-blue-950 md:text-6xl">
                Find the job that
                <span className="text-orange-500"> fits your future.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500">
                Discover opportunities that match your skills, goals, and
                ambitions. Your next career move starts with HireSpot.
              </p>

              {/* Search */}
              <div className="mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg md:flex-row">
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="flex-1 rounded-xl bg-gray-50 px-4 py-3 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="text"
                  placeholder="Location"
                  className="flex-1 rounded-xl bg-gray-50 px-4 py-3 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500"
                />

                <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                  Search Jobs
                </button>
              </div>

              <div className="mt-6 flex gap-6 text-sm text-gray-500">
                <span>✓ Thousands of jobs</span>
                <span>✓ Easy to apply</span>
              </div>
            </div>

            {/* Right side */}
            <div className="hidden w-1/2 justify-center lg:flex">
              <div className="relative flex h-[450px] w-[450px] items-center justify-center rounded-[40%] bg-blue-50">
                
                <div className="absolute right-8 top-10 h-20 w-20 rounded-2xl bg-orange-400 rotate-12" />

                <div className="absolute bottom-12 left-8 h-16 w-16 rounded-full bg-blue-200" />

                <div className="z-10 flex h-72 w-72 items-center justify-center rounded-3xl bg-white shadow-xl">
                  <div className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
                      💼
                    </div>

                    <h2 className="text-xl font-bold text-blue-950">
                      Your next opportunity
                    </h2>

                    <p className="mt-2 text-sm text-gray-400">
                      is waiting for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  )
}

export default App