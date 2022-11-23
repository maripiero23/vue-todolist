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
            ],

            newTextList: "",
        };
    },

    methods: {
        onFormSubmit(){
            this.toDoList.push({
                text: this.newTextList,
                done: false,
                createdAt:"",
                completedAt:"",
            })
        }

    }

}).mount("#app")