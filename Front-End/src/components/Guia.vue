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
                        <div id="servicos"></div>
                    </a>
                    <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                        href="#">
                        <i class="fas fa-users mr-2"></i>Especialidades:
                        <div id="especialidades"></div>
                    </a>
                </nav>

            </div>

            <div class="flex-1 p-4">
                <div class='flex'>
                    <div
                        class='w-full max-w-lg py-8 flex flex-row items-center justify-center mx-auto bg-[#FFFBFB] rounded-lg shadow-xl'>
                        <div class="flex flex-col md:flex-row w-3/4 md:w-5/6 space-x-0 md:space-x-8">
                            <div class="w-full md:w-2/5 flex flex-col items-center justify-center">
                                <figure class="w-1/2 md:w-full  rounded-full overflow-hidden">
                                    <img src="https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600"
                                        alt="woman wearing a headwrap and an Africa-shaped earring while smiling">
                                </figure>
                            </div>
                            <div class="w-full md:w-3/5 space-y-4 flex flex-col justify-center items-center">
                                <div class="flex flex-col justify-center">
                                    <h1 class="text-center md:text-left text-2xl font-bold text-gray-900">Nome
                                    </h1>
                                    <p class="inline text-gray-700 font-normal leading-6 w-full text-base">Descrição do
                                        Profissional</p>
                                </div>
                                <ul
                                    class="space-y-4  md:space-y-0 space-x-0 md:space-x-4 flex flex-col md:flex-row text-left justify-center">
                                    <li class="text-sm"><i class="iconoir-pin-alt mr-2"></i>Cidade/Estado</li>
                                </ul>

                                <ul class="space-x-4 flex flex-row justify-center w-full mb-4">
                                    <li class="text-sm text-gray-800"><strong class="text-gray-900">Especialidades:</strong>
                                    </li>
                                    <li class="text-sm text-gray-800"><strong class="text-gray-900">Serviços:</strong>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'App',
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const responseServico = await axios.get('Servico');
                const responseEspecialidade = await axios.get('Especialidade');

                responseServico.data.forEach(servico => {
                    document.getElementById('servicos').innerHTML += `
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
              <input type="checkbox" id="${servico.id}" name="${servico.servnome}">
              <label for="${servico.servnome}"><i class="fas fa-home mr-2"></i>${servico.servnome}</label>
            </a>
          `;
                });

                responseEspecialidade.data.forEach(especialidade => {
                    document.getElementById('especialidades').innerHTML += `
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white" href="#">
              <input type="checkbox" id="${especialidade.id}" name="${especialidade.espnome}">
              <label for="${especialidade.espnome}"><i class="fas fa-users mr-2"></i>${especialidade.espnome}</label>
            </a>
          `;
                });
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>