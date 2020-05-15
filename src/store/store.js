import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        chemistry: {
            lessons: [
                {
                    name: "Modele-1",
                    topic: "Electrochemistry and Battery Technology",
                    notes: ""
                },
                {
                    name: "Module-2",
                    topic: "Corrosion and Metal Finishing",
                    notes: ""
                },
                {
                    name: "Module-3",
                    topic: "Fuels and Solar Energy",
                    notes: ""
                },
                {
                    name: "Module-4",
                    topic: "Polymers",
                    notes: ""
                },
                {
                    name: "Module-5",
                    topic: "Water Technology and Nanomaterials",
                    notes: ""
                }
            ],
            subject_code: "15CHE22",
            name: "Engineering Chemistry"

        },
        physics: {

        }
    },
    getters: {
        subject: (state) => {
            return state;
        }
    },
    mutations: {
        // reducePrice: (state, payload) => {

        // }
    },
    actions: {
        // reducePrice: (context, payload) => {
        //     setTimeout(function () { // reach out for data
        //         context.commit('reducePrice', payload);
        //     }, 2000);
        // }
    }
});