//Проверяем есть ли таблица и делаем асинхронный запрос на сервер
var request = new XMLHttpRequest();
request.open('GET', 'json/Flights.json', true);
request.send(null);

//Проверка Находки 
request.onload = function () {
    if (request.status === 200) {
        //alert("Успешно нашел файл!");
        var responsibleObject = JSON.parse(request.responseText);

        // группа слушателей кнопок
        var activeArrivel = document.getElementById("option1");
        activeArrivel.addEventListener('click', outputArrivel);

        var activeDeparture = document.getElementById("option2");
        activeDeparture.addEventListener('click', outputDeparture);
        
        var activeStatus = document.getElementById("option3");
        activeStatus.addEventListener('click', delay);

        // группа слушателей кнопок
        
        //Слушаем нажатие кнопки на клавиатуре 
        var activeSort = document.getElementById("Name");
        activeSort.addEventListener('keydown', autosearch);
        //Слушаем нажатие кнопки на клавиатуре 
        
        var Flag = 0; //Флажок для отслеживаний вывода таблицы(Отключение повторного вызова)
        outputArrivel(); // Вызываем функцию вывода таблицы при заходе на страницу 
        var Newtd;

        // Функция получения Самолетов на прибытие 
        function outputArrivel() {

            //Очищаем таблицу от старых записей
            Clear()
            //Очищаем таблицу от старых записей
            Flag = 0; // Переводим флажок в состояние отсутствия таблицы
            //Выводим данные 
            for (let i = 0; i < responsibleObject.FlightsArrival.length; i++) {

                var AircraftTable = document.getElementById("AircraftTable");

                var table = document.createElement('tr');
                AircraftTable.appendChild(table);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsArrival[i].Number;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsArrival[i].Cite;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsArrival[i].TimeOfArrival;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsArrival[i].Company;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                var status = responsibleObject.FlightsArrival[i].Status;

                switch (status) {
                    case "1":
                        Newtd.textContent = "Прибыл";
                        AircraftTable.appendChild(Newtd);
                    case "2":
                        Newtd.textContent = "Погрузка";
                        AircraftTable.appendChild(Newtd);
                        break;

                    case "3":
                        Newtd.textContent = "Ожидает";
                        AircraftTable.appendChild(Newtd);
                        break;
                    case "4":
                        Newtd.textContent = "Задерживается";
                        Newtd.classList.add('red');
                        AircraftTable.appendChild(Newtd);
                        break;
                    default:
                        alert('Неизвестный статус');
                }


                

            }
            Flag = 1; //Ставим флажок что вывели данные
        }

        // Функция получения Самолетов на убытие
        function outputDeparture() {
            //Очищаем таблицу от старых записей
            Clear()
            Flag = 0; // Переводим флажок в состояние отсутствия таблицы

            //Выводим данные 
            for (let i = 0; i < responsibleObject.FlightsDeparture.length; i++) {

                var AircraftTable = document.getElementById("AircraftTable");



                var table = document.createElement('tr');
                AircraftTable.appendChild(table);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsDeparture[i].Number;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsDeparture[i].Cite;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsDeparture[i].TimeOfDeparture;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                Newtd.textContent = responsibleObject.FlightsDeparture[i].Company;
                AircraftTable.appendChild(Newtd);

                Newtd = document.createElement('td');
                var status = responsibleObject.FlightsDeparture[i].Status;

                switch (status) {
                    case "1":
                        Newtd.textContent = "Прибыл";
                        AircraftTable.appendChild(Newtd);
                    case "2":
                        Newtd.textContent = "Погрузка";
                        AircraftTable.appendChild(Newtd);
                        break;

                    case "3":
                        Newtd.textContent = "Ожидает";
                        AircraftTable.appendChild(Newtd);
                        break;
                    case "4":
                        Newtd.textContent = "Задерживается";
                        Newtd.classList.add('red');
                        AircraftTable.appendChild(Newtd);
                        break;
                    default:
                        alert('Неизвестный статус');
                }
                //Выводим данные 

            }



            Flag = 1; //Ставим флажок что вывели данные
        }

        //Функция отбора самолетов с задержкой 
        function delay() {

            //Очищаем таблицу от старых записей

            Clear()

            Flag = 0; // Переводим флажок в состояние отсутствия таблицы

            if (Flag == 0) { //Проверяем есть ли таблица

                //Выводим данные 
                //debugger;
                for (let i = 0; i < responsibleObject.FlightsArrival.length; i++) {

                    if (responsibleObject.FlightsArrival[i].Status == 4) {
                        var AircraftTable = document.getElementById("AircraftTable");

                        var table = document.createElement('tr');
                        AircraftTable.appendChild(table);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].Number;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].Cite;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].TimeOfArrival;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].Company;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = "Задерживается"
                        Newtd.classList.add('red');
                        AircraftTable.appendChild(Newtd);
                        //Выводим данные 
                    }
                }

                for (let i = 0; i < responsibleObject.FlightsDeparture.length; i++) {

                    if (responsibleObject.FlightsDeparture[i].Status == 4) {
                        var AircraftTable = document.getElementById("AircraftTable");

                        var table = document.createElement('tr');
                        AircraftTable.appendChild(table);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].Number;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].Cite;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].TimeOfArrival;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].Company;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = "Задерживается"
                        Newtd.classList.add('red');
                        AircraftTable.appendChild(Newtd);
                        //Выводим данные 
                    }
                }
                Flag = 1; //Ставим флажок что вывели данные
            }
        }
        // Функция поиска
        function findFast() {





            //debugger;
            //Очищаем таблицу от старых записей
            Clear()

            //Очищаем таблицу от старых записей

            Flag = 0; // Переводим флажок в состояние отсутствия таблицы

            var Name = document.getElementById("Name").value; // Берем название и строки поиска 
            Name = Name.toUpperCase(); // Приводим все символы в верхний регистр
            //Добавляем пробел если его нету в переменной
            if (Name.length>2 && Name.charAt(2) != " ") 
            {   //debugger;
                var AddingName = Name.substring(0,2) + " " +  Name.substring(2,Name.length)
                Name=AddingName;
            }
            







            if (Flag == 0) { //Проверяем есть ли таблица и делаем асинхронный запрос на сервер


                //Выводим данные на Быструю проверку строго введенное == названию рейса

                for (let i = 0; i < responsibleObject.FlightsArrival.length; i++) {
                    if (Name == responsibleObject.FlightsArrival[i].Number) {

                        var AircraftTable = document.getElementById("AircraftTable");

                        var table = document.createElement('tr');
                        AircraftTable.appendChild(table);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].Number;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].Cite;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].TimeOfArrival;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsArrival[i].Company;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        var status = responsibleObject.FlightsArrival[i].Status;

                        switch (status) {
                            case "1":
                                Newtd.textContent = "Прибыл";
                                AircraftTable.appendChild(Newtd);
                            case "2":
                                Newtd.textContent = "Погрузка";
                                AircraftTable.appendChild(Newtd);
                                break;

                            case "3":
                                Newtd.textContent = "Ожидает";
                                AircraftTable.appendChild(Newtd);
                                break;
                            case "4":
                                Newtd.textContent = "Задерживается";
                                Newtd.classList.add('red');
                                AircraftTable.appendChild(Newtd);
                                break;
                            default:
                                alert('Неизвестный статус');
                        }
                    }

                }



                for (let i = 0; i < responsibleObject.FlightsDeparture.length; i++) {
                    if (Name == responsibleObject.FlightsDeparture[i].Number) {

                        var AircraftTable = document.getElementById("AircraftTable");

                        var table = document.createElement('tr');
                        AircraftTable.appendChild(table);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].Number;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].Cite;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].TimeOfArrival;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        Newtd.textContent = responsibleObject.FlightsDeparture[i].Company;
                        AircraftTable.appendChild(Newtd);

                        Newtd = document.createElement('td');
                        var status = responsibleObject.FlightsDeparture[i].Status;

                        switch (status) {
                            case "1":
                                Newtd.textContent = "Прибыл";
                                AircraftTable.appendChild(Newtd);
                            case "2":
                                Newtd.textContent = "Погрузка";
                                AircraftTable.appendChild(Newtd);
                                break;

                            case "3":
                                Newtd.textContent = "Ожидает";
                                AircraftTable.appendChild(Newtd);
                                break;
                            case "4":
                                Newtd.textContent = "Задерживается";
                                Newtd.classList.add('red');
                                AircraftTable.appendChild(Newtd);
                                break;
                            default:
                                alert('Неизвестный статус');
                        }
                    }

                }
            findHard();
        }
        // Усложненный поиск по 2 символам
        function findHard(){   
           // debugger;
            // Углубленный поиск по буквам на прибытие
                var AircraftTable = document.getElementById("AircraftTable");
                if (AircraftTable.firstChild == null) {
                    var similarNumberArrival = [];
                    var p = 0; // Флажок кол-ва символов
                    var notFindArrival = 0; // Флажок Отсутствия Самолетов которые прилетелают
                    var notFindDeparture = 0; // Флажок Отсутствия   Самолетов которые Улетают
                    var findAir = 0; // Флажок нахождения  


                    //  Проверяем на похожий  символы из номеров прибывших самолетов и номера совпадений кидаем в массив
                    for (var z = 0; z < responsibleObject.FlightsArrival.length; z++) {
                        // Если символ 1 то берем и сравниваем по символу 
                        
                        if(Name.length == 1){
                        // Если символ 1 то берем и сравниваем по символу     
                        var CharName = Name.charAt(p); //берем символ
                        var CharNumber = responsibleObject.FlightsArrival[z].Number.charAt(p);
                        }
                        // Если символов много то берем и сравниваем 
                        else {
                        if(z == 0) {p=+2;}
                        var CharName = Name.substring(0,p); //берем символ
                        var CharNumber = responsibleObject.FlightsArrival[z].Number.substring(0,p);

                        }
                        if (CharName == CharNumber) {
                            similarNumberArrival.push(z); // кидаем в массив
                        }
                        
                      
                        
                    }
                    var similarNumberDeparture = [];
                    //  Проверяем на похожий  символы из номеров вылетающих самолетов и номера совпадений кидаем в массив    
                    for (var z = 0; z < responsibleObject.FlightsDeparture.length; z++) {
                        
                        // Если символ 1 то берем и сравниваем по символу 
                        if(Name.length == 1){
                        var CharName = Name.charAt(p); //берем символ
                        var CharNumber = responsibleObject.FlightsDeparture[z].Number.charAt(p);
                        }
                        // Если символов много то берем и сравниваем 
                        else {
                        if(z == 0) {p=+2;}
                        var CharName = Name.substring(0,p); //берем символы
                        var CharNumber = responsibleObject.FlightsDeparture[z].Number.substring(0,p);

                        }
                        if (CharName == CharNumber) {
                            similarNumberDeparture.push(z); // кидаем в массив
                        }
                       
                       
                    }


                    //  Выкладываем из массива номера и достаем рейсы прибывающих
                    if (similarNumberArrival.length != 0) { // Проверка на наличие пустого массива
                        findAir = 1; //Флажок нахождения
                        find();
                        table = document.createElement('tr');
                        table.textContent = "Прибытие:";
                        AircraftTable.appendChild(table);

                        for (let i = 0; i < similarNumberArrival.length; i++) {
                            var numberArrival = similarNumberArrival[i]; //  Выкладываем из массива номера 

                            var table = document.createElement('tr');
                            AircraftTable.appendChild(table);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsArrival[numberArrival].Number;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsArrival[numberArrival].Cite;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsArrival[numberArrival].TimeOfArrival;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsArrival[numberArrival].Company;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            var status = responsibleObject.FlightsArrival[numberArrival].Status;

                            switch (status) {
                                case "1":
                                    Newtd.textContent = "Прибыл";
                                    AircraftTable.appendChild(Newtd);
                                case "2":
                                    Newtd.textContent = "Погрузка";
                                    AircraftTable.appendChild(Newtd);
                                    break;

                                case "3":
                                    Newtd.textContent = "Ожидает";
                                    AircraftTable.appendChild(Newtd);
                                    break;
                                case "4":
                                    Newtd.textContent = "Задерживается";
                                    Newtd.classList.add('red');
                                    AircraftTable.appendChild(Newtd);
                                    break;
                                default:
                                    alert('Неизвестный статус');

                            }

                        }

                    } else {
                        //выводим если массив с похожими прибывшими рейсами пустой 
                        notFindArrival = 1;
                    }
                    //  Выкладываем из массива номера и достаем рейсы улетающих
                    if (similarNumberDeparture.length != 0) { // Проверка на наличие пустого массива
                        //debugger;
                        if (findAir == 1) {} else {
                            findAir = 1;
                            find();
                        }
                        var AircraftTable = document.getElementById("AircraftTable");
                        var table = document.createElement('tr');
                        table.textContent = "Вылет:";
                        AircraftTable.appendChild(table);


                        for (let i = 0; i < similarNumberDeparture.length; i++) {
                            var numberDeparture = similarNumberDeparture[i]; //  Выкладываем из массива номера 

                            var table = document.createElement('tr');
                            AircraftTable.appendChild(table);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsDeparture[numberDeparture].Number;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsDeparture[numberDeparture].Cite;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsDeparture[numberDeparture].TimeOfArrival;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            Newtd.textContent = responsibleObject.FlightsDeparture[numberDeparture].Company;
                            AircraftTable.appendChild(Newtd);

                            Newtd = document.createElement('td');
                            var status = responsibleObject.FlightsDeparture[numberDeparture].Status;

                            switch (status) {
                                case "1":
                                    Newtd.textContent = "Прибыл";
                                    AircraftTable.appendChild(Newtd);
                                case "2":
                                    Newtd.textContent = "Погрузка";
                                    AircraftTable.appendChild(Newtd);
                                    break;

                                case "3":
                                    Newtd.textContent = "Ожидает";
                                    AircraftTable.appendChild(Newtd);
                                    break;
                                case "4":
                                    Newtd.textContent = "Задерживается";
                                    Newtd.classList.add('red');
                                    AircraftTable.appendChild(Newtd);
                                    break;
                                default:
                                    alert('Неизвестный статус');

                            }

                        }



                    } else {
                        notFindDeparture = 1;
                    }
                }

                if (notFindArrival == 1 && notFindDeparture == 1) {
                    notfind();
                }

            }}
        // Функция автозапуска поиска
        function autosearch() {

            var Name = document.getElementById("Name").value; // Берем название и строки поиска 
            Name = Name.toUpperCase(); // Приводим все символы в верхний регистр
            if (Name.length <= 4 || Name.length >= 4 && Name.length != 0) {
                var timeout = setTimeout(check, 100);
            }
        }
        // Функция проверка на не нулевую строку 
        function check() {
            var Name = document.getElementById("Name").value; // Берем название и строки поиска 
            Name = Name.toUpperCase(); // Приводим все символы в верхний регистр
            if (Name != "") {
                findFast();
            }

        }
        // Вывод если не нашли ничего
        function notfind() {
            var AircraftTable = document.getElementById("AircraftTable");
            var table = document.createElement('tr');
            table.textContent = "Рейс не найден =(";
            AircraftTable.appendChild(table);
        }
        // Вывод если нашли 
        function find() {
            var AircraftTable = document.getElementById("AircraftTable");
            var table = document.createElement('tr');
            table.textContent = "Возможно вы искали данные рейсы:";
            AircraftTable.appendChild(table);
        }
        // Функция очистки перед выводом таблицы
         function Clear() {
             var element = document.getElementById("AircraftTable");
            while (element.firstChild) {
                element.removeChild(element.firstChild);
            }
        }
        
        
       
    }
}
