const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList: [
                {
                    text: "testo del task1",
                    done: false
                },

                {
                    text: "testo del task2",
                    done: false
                },

                {
                    text: "testo del task3",
                    done: false
                }
            ]
        };
    },

    methods: {

    }

}).mount("#app")