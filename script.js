/*
auteur : Mimouni Aicha
date : 17 sept 2023
précision: j'ai mis énormément de temps à factoriser ce code et me rendre compte que le swicth case n'était pas la bonne méthode qu'il fallait employer. pour les sélecteur javascript, j'ai parfois fait appel à l'inspecteur d'élement du navigateur (chrome)-> copy jS path
*/

const oppoStatus = [
    {
        "K_OPPO_STATUS": 1,
        "STATUS": "1. Initial Contact",
        "SUCCESS": 0
    },
    {
        "K_OPPO_STATUS": 2,
        "STATUS": "2. Demonstration",
        "SUCCESS": 25
    },
    {
        "K_OPPO_STATUS": 3,
        "STATUS": "3. Proposal",
        "SUCCESS": 50
    },
    {
        "K_OPPO_STATUS": 4,
        "STATUS": "4. Negotiation",
        "SUCCESS": 75
    },
    {
        "K_OPPO_STATUS": 5,
        "STATUS": "5. Order",
        "SUCCESS": 100
    }
];

class FormComponent {
    constructor() {
        this.selectElement = document.querySelector('select[name="status"]');
        this.outputElement = document.querySelector('.output');
        this.inputElement = document.querySelector("body > form > input[type=number]")
        this.formElement = document.querySelector('form');

        // event listener pour soumission form
        this.formElement.addEventListener('submit', this.submitForm.bind(this));
    }
    

    addSelectedOptions() {
        for (const status of oppoStatus) {
            const option = document.createElement('option');
            option.value = status.K_OPPO_STATUS;
            option.textContent = status.STATUS;
            this.selectElement.appendChild(option);
        }
    }

    submitForm(event) {
        event.preventDefault();

        // Récupère la valeur sélectionnée dans le <select>
        const selectedValue = this.selectElement.value;

        // Recherche le statut correspondant dans oppoStatus
        //ici je me suis fait aider en ligne, ca n'est pas encore dans meds capacités ce genre d'écriture avec les fonctions flechées bien que je comprenne la lecture
        const selectedStatus = oppoStatus.find(status => status.K_OPPO_STATUS === parseInt(selectedValue));
       
        //tache 1 : modifie la valeur de l'input
        this.inputElement.value = selectedValue;

        // tache n°2 : Affiche le resultat dans la div
        this.outputElement.textContent = ` { "STATUS": ${selectedStatus.K_OPPO_STATUS}, "SUCCESS": ${selectedStatus.SUCCESS}"}`;

        
    }

    start() {
        console.log('status array : ', oppoStatus);
        this.addSelectedOptions();

        var option = document.createElement('option');

            for(var i in oppoStatus) {
                let statusArray = oppoStatus[i].STATUS;
                for(var o in option) {
                    option = statusArray;
                    this.selectElement.value= statusArray, " ";
                }
            
            };

      
            /*const selectedValue = this.selectElement.value;
            console.log('selectedValue ici : ', selectedValue, 'selected element ici :', this.selectElement);
            //j'ai récuperé ce selecteur via l'inspecteur d'élement du navigateur (ici Chrome)
            let input = document.querySelector("body > form > input[type=number]"); */

  
    }
}

const fc = new FormComponent();
fc.start();
