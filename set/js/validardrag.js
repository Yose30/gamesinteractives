function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("src", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var src = document.getElementById(ev.dataTransfer.getData("src"));
    var srcParent = src.parentNode;
    var tgt = ev.currentTarget.firstElementChild;

    ev.currentTarget.replaceChild(src, tgt);
    srcParent.appendChild(tgt);
}

function submitNewRoles() {
    var x = document.getElementsByClassName("sch");
    var str ="";
    for (var i = 0; i < x.length; i++) {
        str += x[i].innerHTML;
        if (i< x.length -1) str +=", ";
    }
    var y = document.getElementById("GrantRoles");
    y.innerHTML = str;
}

function submitNewRoles2() {
    var x = $( "#second" ).find(".sch");
    var str ="";
    for (var i = 0; i < x.length; i++) {
        str += x[i].innerHTML;
        if (i< x.length -1) str +=", ";
    }
    var y = document.getElementById("GrantRoles");
    y.innerHTML = str;
}


function myFunction() {
    var y = document.getElementById("GrantRoles");
}

$('#formAssignRoles :input').keypress(function(e){
    alert("Arrastra y suelta en la casilla correspondiente"); 
    //$(this).pop();
    return false;
});
$('#formAssignRoles :input').bind('copy paste',function(e){
    alert("Arrastra y suelta en la casilla correspondiente"); 
    e.preventDefault();
});