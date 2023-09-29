<template>
    <div class="bg-slate example">
        <header class="text-gray-700 border-b border-gray-200 body-font bg-slate-50">
            <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0" href="#" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2" class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full"
                        viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 text-xl">MedicMatch</span>
                </a>
                <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto">
                    <a href="#" class="mr-5 hover:text-gray-900">Quem somos?</a>
                    <a href="#" class="mr-5 hover:text-gray-900">Fale Conosco</a>
                    <Router-Link :to="{ name: 'Guia' }" class="mr-5 hover:text-gray-900">
                        Guia Médico
                    </Router-Link>
                </nav>
                <button
                    class="flex items-center px-3 py-1 mt-4 text-base bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300 md:mt-0">ADMIN
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
        <div class="container mx-auto mt-8 rounded-md bg-slate">
            <div class="w-full mx-auto md:w-2/3">
                <Carousel :autoplay="2000" :wrap-around="true">
                    <Slide v-for="slide in 2" :key="slide">
                        <div class="carousel__item">{{ slide }}</div>
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template>
                </Carousel>
            </div>
        </div>

        <div class="container mx-auto mt-8 border rounded-md bg-slate">
            <div class="w-full mx-auto">
                <section class="relative p-0 m-0 text-gray-600 body-font"></section>
                <div class="container mx-auto">
                    <div class="flex flex-col w-full mb-1 text-center">
                        CADASTRE-SE NO NOSSO GUIA
                    </div>
                    <div class="mt-10 md:mt-0 md:col-span-2">
                        <form @submit.prevent="submitForm">
                            <div class="overflow-hidden shadow sm:rounded-md">
                                <div class="px-2 py-8 bg-white sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Nome
                                                Completo</label>
                                            <input type="text" name="first-name" placeholder="João da Silva" id="first-name"
                                                autocomplete="given-name" v-model="pesnome"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Data de
                                                Nascimento</label>
                                            <input type="text" name="last-name" placeholder="09/02/2008" id="last-name"
                                                autocomplete="family-name" v-model="pesdatanascimento"
                                                class="block w-full mt-1 text-gray-300 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Documento
                                                (RG)</label>
                                            <input type="text" name="last-name" placeholder="11.222.333-4" id="last-name"
                                                autocomplete="family-name" v-model="pesdorg"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Documento (CPF)</label>
                                            <input type="text" name="last-name" placeholder="111.222.333-44" id="last-name"
                                                autocomplete="family-name" v-model="pesdocpf"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Telefone 1 </label>
                                            <input type="text" name="last-name" placeholder="(00) 12345-6789" id="last-name"
                                                autocomplete="family-name" v-model="pescontatotel1"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Telefone 2</label>
                                            <input type="text" name="last-name" placeholder="(00) 12345-6789" id="last-name"
                                                autocomplete="family-name" v-model="pescontatotel2"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Email 1</label>
                                            <input type="text" name="last-name" placeholder="joaodasilva@email.com.br"
                                                id="last-name" autocomplete="family-name" v-model="pescontatoemail1"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Email 2</label>
                                            <input type="text" name="last-name" placeholder="joaodasilva@email.com.br"
                                                id="last-name" autocomplete="family-name" v-model="pescontatoemail2"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Endereço</label>
                                            <input type="text" name="last-name" placeholder="Rua perdida" id="last-name"
                                                autocomplete="family-name" v-model="pesendrua"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Número</label>
                                            <input type="text" name="last-name" placeholder="0123" id="last-name"
                                                autocomplete="family-name" v-model="pesendnumero"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Bairro</label>
                                            <input type="text" name="last-name" placeholder="Bairro dos pardais"
                                                id="last-name" autocomplete="family-name" v-model="pesendbairro"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="state"
                                                class="block text-sm font-medium text-gray-700">Estado</label>
                                            <select id="state" name="state" v-model="selectedState" @change="loadCities"
                                                class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300
                                                rounded-md shadow-sm focus:outline-none focus:ring-indigo-500
                                                focus:border-indigo-500 sm:text-sm">
                                                <option value="">Selecione um estado</option>
                                                <option v-for="state in states" :key="state.estcodibge"
                                                    :value="state.estcodibge">
                                                    {{ state.estnome }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="city" class="block text-sm font-medium text-gray-700">Cidade</label>
                                            <select id="city" name="city" v-model="selectedCity" :disabled="!selectedState"
                                                class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option value="">Selecione uma cidade</option>
                                                <option v-for="city in cities" :key="city.cidcodibge"
                                                    :value="city.cidcodibge">
                                                    {{ city.cidnome }}
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="country" class="block text-sm font-medium text-gray-700">
                                                Gênero</label>
                                            <select id="country" name="country" autocomplete="country" v-model="pessexo"
                                                class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <option>Homem</option>
                                                <option>Mulher</option>
                                                <option>Outros</option>
                                            </select>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="specialties"
                                                class="block text-sm font-medium text-gray-700">Especialidades</label>
                                            <div @click="showSpecialties = !showSpecialties"
                                                class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <span class="inline-block">{{ selectedSpecialties.length > 0 ?
                                                    selectedSpecialties.map(s => s.espnome).join(', ') : 'Selecione uma ou mais especialidades' }}</span>
                                            </div>
                                            <div v-show="showSpecialties"
                                                class="relative z-20 mt-1 flex w-64 flex-col px-4 py-8 whitespace-nowrap border border-gray-600 rounded bg-white">
                                                <div v-for="specialty in specialties" :key="specialty.espcodigo">
                                                    <input type="checkbox" :name="'type[]'" :value="specialty"
                                                        v-model="selectedSpecialties" class="inline-block mr-2">
                                                    <label>{{ specialty.espnome }}</label>
                                                </div>
                                            </div>

                                            <label for="services"
                                                class="block text-sm font-medium text-gray-700">Serviços</label>
                                            <div @click="showServices = !showServices"
                                                class="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                <span class="inline-block">{{ selectedServices.length > 0 ?
                                                    selectedServices.map(s => s.servnome).join(', ') : 'Selecione um ou mais serviços' }}</span>
                                            </div>
                                            <div v-show="showServices"
                                                class="relative z-20 mt-1 flex w-64 flex-col px-4 py-8 whitespace-nowrap border border-gray-600 rounded bg-white">
                                                <div v-for="service in services" :key="service.servcodigo">
                                                    <input type="checkbox" :name="'type[]'" :value="service.servnome"
                                                        v-model="selectedServices" class="inline-block mr-2">
                                                    <label>{{ service.servnome }}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Descrição do Profissional</label>
                                            <input type="text" name="last-name" placeholder="Eu faço..." id="last-name" v-model="pesprodescricao"
                                                autocomplete="family-name"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">
                                                Descrição do Serviço</label>
                                            <input type="text" name="last-name" placeholder="Meus serviços inclui..." v-model="pesprodescricaoservicos "
                                                id="last-name" autocomplete="family-name"
                                                class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        </div>
                                    </div>

                                </div>
                                <div class="px-4 py-3 text-right bg-white sm:px-6">
                                    <button type="submit"
                                        class="inline-flex justify-center w-24 px-4 py-2 text-sm font-medium bg-indigo-600 border border-transparent rounded-md shadow-sm ring ring-indigo-500 ring-offset-4 hover:bg-indigo-700 text-whitefocus:outline-none focus:ring-2 focus:ring-indigo-500">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import axios from 'axios';

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Autoplay',
    data() {
        return {
            states: [],
            selectedState: '',
            cities: [],
            selectedCity: '',
            specialties: [],
            selectedSpecialties: [],
            services: [],
            selectedServices: [],
            showSpecialties: false,
            showServices: false,
            pesnome: '',
            pessexo: '',
            pesdatanascimento: '',
            pesdocrg: '',
            pesdoccpf: '',
            pescontatotel1: '',
            pescontatotel2: '',
            pescontatoemail1: '',
            pescontatoemail2: '',
            pesendrua: '',
            pesendnumero: '',
            pesendbairro: '',
            pesendcidcod: '',
            pesendestcod: '',
            pessituacao: '0',
            pesprodescricao: '',
            pesprodescricaoservicos: '',
            prosituacao: '',
            idservico: '',
            prosituacao: '1',
        };
    },
    components: {
        Carousel,
        Slide,
        Pagination
    },
    mounted() {
        axios
            .get('http://192.168.4.15:8000/api/Estado')
            .then((response) => {
                this.states = response.data;
            })
            .catch((error) => {
                console.error('Erro ao buscar estados:', error);
            });
    },
    methods: {
        loadCities() {
            if (this.selectedState) {
                axios
                    .get(`Cidade/${this.selectedState}`)
                    .then((response) => {
                        this.cities = response.data;
                        this.$forceUpdate();
                    })
                    .catch((error) => {
                        console.error('Erro ao buscar cidades:', error);
                    });
            } else {
                this.cities = [];
            }
        },
        submitForm() {
        axios.post('Profissional/create', {
            pesnome: this.pesnome,
            pessexo: this.pessexo,
            pesendestcod: this.selectedState,
            pesendcidcod: this.selectedCity,
            proespcodigofk: this.selectedSpecialties.join(','),
            idservico: this.selectedServices.join(','),
            pesdatanascimento: this.pesdatanascimento,
            pesdocrg: this.pesdocrg,
            pesdoccpf: this.pesdoccpf,
            pescontatotel1: this.pescontatotel1,
            pescontatotel2: this.pescontatotel2,
            pescontatoemail1: this.pescontatoemail1,
            pescontatoemail2: this.pescontatoemail2,
            pesendrua: this.pesendrua,
            pesendnumero: this.pesendnumero,
            pesendbairro: this.pesendbairro,
            pessituacao: this.pessituacao,
            pesprodescricao: this.pesprodescricao,
            pesprodescricaoservicos: this.pesprodescricao,
            prosituacao: this.prosituacao,
        })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });
        },
    },
    created() {
        axios
            .get('Especialidade')
            .then((response) => {
                this.specialties = response.data;
            })
            .catch((error) => {
                console.error('Erro ao buscar especialidades:', error);
            });
    },
    watch: {
    selectedSpecialties(newVal, oldVal) {
        if (newVal !== oldVal) {
            this.services = [];
            let ids = newVal.map(specialty => specialty.espcodigo).join(',');  
            if (ids) {
                axios
                    .get(`Servico/${ids}`)
                    .then((response) => {
                        this.services = response.data;
                    })
                    .catch((error) => {
                        console.error('Erro ao buscar serviços:', error);
                    });
            }
        }
    }
}

})
</script>

<style>
.example::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}</style>