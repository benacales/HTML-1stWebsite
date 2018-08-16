function clicked() {
    var getter = document.getElementsByClassName("directory");
    var action = getter.options [getter.selectedIndex].value;

    if (action = "1"){
        src = "hobbies.html";
    }
    if (action = "2"){
        src = "myChildhood.html";       
    }
    if (action = "3"){
        src = "myTeenageYears.html";        
    }
    if (action = "4"){
        src = "plansForTheFuture.html";       
    }
}