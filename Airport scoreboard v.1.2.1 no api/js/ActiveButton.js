        
        //Скрипт положения на сайте 
        //По умолчанию грузит прибывших по этому по умолчанию делаем активацию прибывающих
        ArrivelButton();
        var activeButtonArrivel = document.getElementById("option1");
        activeButtonArrivel.addEventListener('click', ArrivelButton);

        var activeButtonDeparture = document.getElementById("option2");
        activeButtonDeparture.addEventListener('click', OutputButton);

        var activeButtonStatus = document.getElementById("option3");
        activeButtonStatus.addEventListener('click', DelayButton);

        function ArrivelButton() {
        
        var activeButtonArrivel = document.getElementById("option1");
        activeButtonArrivel.classList.add("btn-success");
        var activeButtonDeparture = document.getElementById("option2")
        activeButtonDeparture.classList.remove("btn-success");
        var activeButtonStatus = document.getElementById("option3");
        activeButtonStatus.classList.remove("btn-danger");
        }

        function OutputButton() {
        var activeButtonArrivel = document.getElementById("option1");
        activeButtonArrivel.classList.remove("btn-success");
        var activeButtonDeparture = document.getElementById("option2")
        activeButtonDeparture.classList.add("btn-success");
        var activeButtonStatus = document.getElementById("option3");
        activeButtonStatus.classList.remove("btn-danger");
        }

        function DelayButton() {
        var activeButtonArrivel = document.getElementById("option1");
        activeButtonArrivel.classList.remove("btn-success");
        var activeButtonDeparture = document.getElementById("option2")
        activeButtonDeparture.classList.remove("btn-success");
        var activeButtonStatus = document.getElementById("option3");
        activeButtonStatus.classList.add("btn-danger");
        }
