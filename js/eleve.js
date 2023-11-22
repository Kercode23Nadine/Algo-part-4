class Studient{
    constructor(n,f,l){
        this.name=n;
        this.firstname=f;
        this.level= l;
        this.notes={
            maths:[],
            algorithmique:[],
            javaScript:[],
        };

    }
    // méthode de présentation
        presentation () {
            alert (`Bonjour, je suis ${this.name} ${this.firstname} et je suis en classe ${this.level}!`)
        }   
    // méthode ppour ajouter une note algorithmique
        addNoteAlgo () {
            this.notes.algorithmique.push(n);
        }
        // 
        addNote (matiere, note) {
            this.notes[matiere].push(note);
        }
    }



