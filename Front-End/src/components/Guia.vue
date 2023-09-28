<template>
    <div class="flex flex-col h-screen bg-gray-100">

        <div class="bg-white text-white shadow w-full p-2 flex items-center justify-between">
            <div class="flex items-center">
                <div class="hidden md:flex items-center">
                    <img src="" alt="Logo" class="w-28 h-18 mr-2">
                    <h2 class="font-bold text-xl">MedicMatch-Teste</h2>
                </div>
            </div>
        </div>

        <div class="flex-1 flex">
            <div class="p-2 bg-white w-60 flex flex-col hidden md:flex" id="sideNav">
                <nav>
                    <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                        href="#">
                        <i class="fas fa-home mr-2"></i>Serviços:
                    </a>
                    <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                        href="#">
                        <i class="fas fa-users mr-2"></i>Especialidades:
                    </a>
                </nav>

            </div>

            <div class="flex-1 p-4">
            </div>
        </div>
    </div>
</template>
<script>

</script>