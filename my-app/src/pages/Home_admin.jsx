function Home_admin() {
  return (
    <>
      <div className="w-full max-w-sm p-4 pb-20">
        <h1 className="text-2xl font-bold mb-2">Dashboard</h1>

        <div className="w-full h-52 bg-gray-300 rounded-2xl mb-4"></div>

        <div className="bg-blue-700 text-white rounded-xl p-3 mb-4">
          <p className="font-semibold">Task Allocation</p>
          <div className="bg-white text-black rounded-xl p-3 mt-2 flex items-center gap-3">
            <i data-lucide="alert-circle" className="text-yellow-500"></i>
            Task assigned
          </div>
        </div>

        <div className="bg-blue-700 text-white rounded-xl p-3">
          <p className="font-semibold">Weather Reports</p>
          <div className="bg-white text-black rounded-xl p-3 mt-2 flex items-center gap-3">
            <i data-lucide="alert-circle" className="text-red-500"></i>
            WEATHER WARNING
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_admin;
