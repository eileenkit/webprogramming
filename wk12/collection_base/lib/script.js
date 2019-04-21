Vue.component('game-container', {
	props: ['manufacturer', 'name', 'releaseDate', 'collected'],
	template: `
            <div class="collectionRow">
            <div class="cell console-manufacturer">{{manufacturer}}</div> \
            <div class="cell console-name">{{name}}</div> \
            <div class="cell release-date">{{releaseDate}}</div> \
            <div class="cell collected">{{collected}}</div> \
            </div>
	`
});

var vm = new Vue({
    el: "#app",
    data: {
        manufacturerInput:"",
        nameInput:"",
        dateInput:"",
        generationInput:"",
        collectedInput:"",
        consoles: [
            {
                manufacturer: "Atari",
                name: "2600",
                releaseDate: "09/1977",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Atari-2600-Wood-4Sw-Set.jpg/320px-Atari-2600-Wood-4Sw-Set.jpg",
                generation: "2nd",
                collected: false,
                id:1
            },{
                manufacturer: "Atari",
                name: "5200",
                releaseDate: "11/1982",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Atari-5200-4-Port-wController-L.jpg/320px-Atari-5200-4-Port-wController-L.jpg",
                generation: "2nd",
                collected: false,
                id:2
            },{
                manufacturer: "Coleco",
                name: "(Coleco) Vision",
                releaseDate: "08/1982",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Atari-5200-4-Port-wController-L.jpg/320px-Atari-5200-4-Port-wController-L.jpg",
                generation: "2nd",
                collected: false,
                id:3
            },{
                manufacturer: "Nintendo",
                name: "(Nintendo) Entertainment System",
                releaseDate: "07/1985",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/NES-Console-Set.jpg/320px-NES-Console-Set.jpg",
                generation: "3rd",
                collected: true,
                id:4 
            },{
                manufacturer: "Nintendo",
                name: "Super Nintendo Entertainment System",
                releaseDate: "11/1990",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/SNES-Mod1-Console-Set.jpg/320px-SNES-Mod1-Console-Set.jpg",
                generation: "4th",
                collected: true,
                id:5
            },{
                manufacturer: "Sega",
                name: "Dreamcast",
                releaseDate: "11/1998",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Dreamcast-Console-Set.jpg/320px-Dreamcast-Console-Set.jpg",
                generation: "6th",
                collected: true,
                id:6
            }
        ],
    },
    methods:{
        //deleteConsole: function(consoleObject){
        //    this.consoles=this.consoles.filter(function(console){
        //        if (console.id !==consoleObject.id){
        //            return true;
        //        }else{
        //            return false;
        //        }
        //        });
        //    },
        addConsole: function(){
            if (this.validateConsole()){
            let newConsole={
                manufacturer: this.manufacturerInput,
                name: this.nameInput,
                releaseDate: this.dateInput,
                generation: this.generationInput,
                collected: this.collectedInput,
                id: this.collectedIdInput
            };
            this.consoles.push(newConsole);
            this.manufacturerInput=this.nameInput=this.dateInput=this.imageInput=this.generationInput=this.collectedInput="";
        }
        },
        validateConsole: function(){
            if (this.manufacturerInput==="" ||
                this.nameInput==="" ||
                this.dateInput==="" ||
                this.IdInput==="" ||
                this.collectedInput===""){
            alert ("Fill in fields.");
                return false;
            }
            else {return true;}
    }
}
})