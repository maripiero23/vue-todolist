const { createApp } = Vue;

createApp({
    data(){
        return{
            toDoList: [
                {
                    text: "cosa1",
                    done: false
                },

                {
                    text: "cosa2",
                    done: false
                },

                {
                    text: "cosa3",
                    done: false
                },

                {
                    text: "cosa4",
                    done: false
                }
            ]
        };
    },

    methods: {

    }

}).mount("#app")