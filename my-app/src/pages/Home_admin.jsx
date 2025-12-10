function Home_admin() {
  return (
    <>
      <div class="flex justify-center bg-gray-100">

 

    <div class="bg-blue-700 text-white rounded-xl p-3 mb-4">
      <p class="font-semibold">Task Allocation</p>
      <div class="bg-white text-black rounded-xl p-3 mt-2 flex items-center gap-3">
        <i data-lucide="alert-circle" class="text-yellow-500"></i>
        Task assigned
      </div>
    </div>

    <div class="bg-blue-700 text-white rounded-xl p-3">
      <p class="font-semibold">Weather Reports</p>
      <div class="bg-white text-black rounded-xl p-3 mt-2 flex items-center gap-3">
        <i data-lucide="alert-circle" class="text-red-500"></i>
        WEATHER WARNING
      </div>
    </div>
  </div>

  <nav class="w-full fixed bottom-0 bg-white shadow flex justify-around py-3">
    <a href="home.html"><i data-lucide="home" class="w-7 h-7 text-blue-600"></i></a>
    <a href="messages.html"><i data-lucide="message-square" class="w-7 h-7 text-gray-400"></i></a>
    <a href="alerts.html"><i data-lucide="alert-circle" class="w-7 h-7 text-gray-400"></i></a>
    <a href="settings.html"><i data-lucide="settings" class="w-7 h-7 text-gray-400"></i></a>
  </nav>

  <script>
    lucide.createIcons();
  </script>

    </>
  );
}

export default Home_admin;
