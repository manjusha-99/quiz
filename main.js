function add(){
    p1=document.getElementById("player_name_input1").value;
    localStorage.setItem("p1" , p1);
    window.location = "index1.html";
}