//Variable
    let taskId = 0;
    //div space
    const popupSpace = document.getElementById("popup_space");
    const taskSpace = document.getElementById("task_space");
    //sound
    var audio_check = new Audio('assets/audio/check_sound.mp3');


//////////

//Functions

//TASK SPACE

function noTask(){
    console.log(taskSpace.innerHTML)
    if (taskSpace.innerHTML==""){
        taskSpace.innerHTML = `<p id="notask_info">Ajoutez votre première tâche en cliquant sur le bouton "Nouvelle tâche".</p>`;
    } else {
        document.getElementById("notask_info").remove();
    }
};

//////////

//NAVBAR
    //Get current date time and display it in navbar
    function getCurrentDateTime(){
        const datetimeElement = document.getElementById('datetime_general');
        let currentDatetime = new Date();
        let jour = currentDatetime.getDate();
        let mois = currentDatetime.getMonth()+1;
        let annee = currentDatetime.getFullYear();
        let heures = currentDatetime.getHours();
        let minutes = currentDatetime.getMinutes();

        datetimeElement.innerHTML = `${jour}/${mois}/${annee} - ${heures}h${minutes}`;
    };

//////////

//Pop Up
    //DISPLAY POP UP
        //Legal mentions popup
        function legalMentions(){
            popupSpace.classList.add('active');
            popupSpace.innerHTML=`<div class="popup"><h1>Mentions légales</h1><h3>To do</h3><p>This project is an HTML/CSS/JavaScript student project on a to do list online tool.<br/><br/>This site was created as part of a student project at the Institut de l'Internet et du Multimédia (IIM).<br/><br/>The code of this one is of course open-source.<br/><br/>Github Logo.<br/>GitHub Inc. &copy; All right reserved.<br/><br/>All other illustrations belong to Thibault MORISSE, you have the right to use them in a non-commercial context with the mention "©Thibault MORISSE".</p><br/><br/><h3>Thibault MORISSE</h3><a href="https://thibaultmorisse.com/" target="_blank">My website</a><br/><a href="https://fr.linkedin.com/in/thibault-morisse-" target="_blank">Linkedin</a><br/><a href="https://thibaultmorisse.com/about_me#contact" target="_blank">Contact</a><br/><br/><h3>Website informations</h3><p>This website is edited by M.MORISSE Thibault as a personnal website.<br/><br/>Thibault MORISSE<br/>Email: <a href="mailto:contact@thibaultmorisse.com">contact@thibaultmorisse.com</a></p>
            <h3>Hosting</h3>
            <p>This website is hosted by Planethoster inc., on servers based in France and Swiss.<br/><br/>PLANETHOSTER, Inc – https://planethoster.com/<br/>4416 Louis-B.-Mayer, Laval, Québec, Canada, H7P 0G1<br/><br/>Code source is available on <a href="https://github.com/LOgreee/todo" target="_blanck">Github</a>.</p>
            <h3>Warning</h3>
            <p>The domain name todo.thibaultmorisse.com and thibaultmorisse.com is the exclusive property of Thibault MORISSE. Similarly, trademarks and logos appearing on the website are the exclusive property of Thibault MORISSE. Any reproduction or use of these trademarks, logos or domain names, in any way and for any reason whatsoever, is prohibited.<br/><br/>The creation of hypertext links to this site can only be made with the prior written authorization of Thibault MORISSE, who declines all responsibility for the content of third-party sites that may be linked to its website.</p><br/><br/><div class="actions"><a class="btn" onclick="closePopUp();">Fermer</a></div></div>`;
        };


        //Patch note popup
        function patchNote(){
            popupSpace.classList.add('active');
            popupSpace.innerHTML=`<div class="popup"><h1>Patch Note</h1><h3>v.0.2</h3><ul><li>Ajout d'un son lors de la validation d'une tâche.</li><li>Ajout d'une icone à côté du titre de la tâche, afin d'indiquer que cette tâche possède une description.</li><li>Correction de certains bugs.</li></ul><h3>v.0.1</h3><p>Publication de l'outil en ligne de To Do list</p><ul><li>Créations de tâches avec titre, description et date limite.</li><li>Validation des tâches.</li><li>Outil de supression des tâches.</li></ul><br/><br/><div class="actions"><a class="btn" onclick="closePopUp();">Fermer</a></div></div>`;
        };


        //Help popup
        function help(){
            popupSpace.classList.add('active');
            popupSpace.innerHTML=`<div class="popup"><h1>Besoin d'aide?</h1><h3>Comment créer une tâche ?</h3><p>Appuyez sur le boutton "Nouvelle tâche" en haut à droite de votre écran, puis personnalisez la.</p><br/><h3>Comment modifier une tâche ?</h3><p>...</p><br/><h3>Comment supprimer une tâche ?</h3><p>Appuyez sur l'icone "Poubelle" à droite de la tâche afin de la supprimer.</p><br/><h3>Je rencontre un bug, puis-je le faire remonter ?</h3><p>Bien évidemment!</p><a href="https://thibaultmorisse.com/about_me#contact" target="_blank">Contactez-moi via le formulaire de contact suivant ></a><br/><br/><br/><div class="actions"><a class="btn" onclick="closePopUp();">Fermer</a></div></div>`;
        };

    //CLOSE
        //Close all active popup
        function closePopUp(){
            popupSpace.classList.remove('active');
            popupSpace.innerHTML="";
        };

//////////

//TASK
    //ADD
        //Add task popup
        function addTask(){
            popupSpace.classList.add('active');
            popupSpace.innerHTML = `<div class="popup"><h1>Création d'une tâche</h1><form id="creation_form"><input type="text" placeholder="Nom" id="creation_form_name" required><textarea placeholder="Détails de la tâche..." id="creation_form_details"></textarea><h3>A faire pour le:</h3><input type="date" id="creation_form_date"><p>à</p><input type="time" id="creation_form_time"></form><br/><br/><div class="actions"><a class="btn" onclick="closePopUp();">Fermer</a><a class="btn primary" onclick="addTaskConfirm();">Créer</a></div></div>`;
        };

        //Create task with informations from the form
        function addTaskConfirm(){
            let name = document.getElementById('creation_form_name').value;
            let detail = document.getElementById('creation_form_details').value;
            let date = document.getElementById('creation_form_date').value;
            let hour = document.getElementById('creation_form_time').value;
            
            let classDetails = "";
            
            if (name != ""){
                taskId ++;
                if (detail != ""){
                    classDetails = "details";
                }
                if (date == "" && hour == ""){
                    taskSpace.innerHTML = `<div id="${taskId}" class="task ${classDetails}"><input type="checkbox" class="validation"><section><h1>${name}</h1><h2></h2><p>${detail}</p></section><a onclick="deleteTask(${taskId});" class="delete" title="Delete"></a></div>` + taskSpace.innerHTML;
                } else if (hour==""){
                    taskSpace.innerHTML = `<div id="${taskId}" class="task ${classDetails}"><input type="checkbox" class="validation"><section><h1>${name}</h1><h2>A faire pour le ${date}</h2><p>${detail}</p></section><a onclick="deleteTask(${taskId});" class="delete" title="Delete"></a></div>` + taskSpace.innerHTML;
                } else if (date==""){
                    taskSpace.innerHTML = `<div id="${taskId}" class="task ${classDetails}"><input type="checkbox" class="validation"><section><h1>${name}</h1><h2>A faire pour aujourd'hui à ${hour}</h2><p>${detail}</p></section><a onclick="deleteTask(${taskId});" class="delete" title="Delete"></a></div>` + taskSpace.innerHTML;
                } else {
                    taskSpace.innerHTML = `<div id="${taskId}" class="task ${classDetails}"><input type="checkbox" class="validation"><section><h1>${name}</h1><h2>A faire pour le ${date} à ${hour}</h2><p>${detail}</p></section><a onclick="deleteTask(${taskId});" class="delete" title="Delete"></a></div>` + taskSpace.innerHTML;
                }
                //Add interactions on new element
                taskValid();
                openDetails();
                //Close old popup
                closePopUp();
                //Update noTask function
                noTask();
            } else { //Display Error
                document.getElementById("creation_form").innerHTML= `<p class="error">Merci de saisir un nom.</p>` + document.getElementById("creation_form").innerHTML;
            }
        };


    //DELETE
        //Delete task confirmation popup
        function deleteTask(id){
            popupSpace.classList.add('active');
            popupSpace.innerHTML=`<div class="popup"><h1>Supprimer cette tâche?</h1><p>Cette action est définitive.</p><br/><br/><div class="actions"><a class="btn" onclick="closePopUp();">Fermer</a><br/><br/><a class="btn primary" onclick="deleteTaskConfirm(${id});">Supprimer</a></div></div>`;
        };
        
        //Delete task forever
        function deleteTaskConfirm(id){
            let task = document.getElementById(id);
            task.remove();
            //Close old popup
            closePopUp();
            //Update noTask function
            noTask();
        };

            
    //INTERACTIONS
        //Valid task
        function taskValid(){
            document.querySelectorAll('.validation').forEach((checkbox) => {
                checkbox.addEventListener('click', (event) => {
                    if (event.currentTarget.checked){
                        audio_check.play();
                        event.currentTarget.parentElement.classList.add('validate');
                    } else {
                        event.currentTarget.parentElement.classList.remove('validate');
                    }
                });
            });
        };


        //Open details
        function openDetails(){
            document.querySelectorAll('.task').forEach((task) => {
                task.addEventListener('click', (event) => {
                    event.currentTarget.classList.toggle('open');
                });
            });
        };


//////////

//Main code
noTask();
taskValid();
openDetails();
var t = setInterval(getCurrentDateTime,1000);
