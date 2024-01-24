let menuVisble=false;
// Funcion que oculta o muestra el menu
function mostrarOcultarMenu (){
    if(menuVisble){
        document.getElementById("nav").classList="";
        menuVisble=false
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisble=true
    }
}
function seleccionar(){
    //oculto el menu una vez que seleciono una oopcion
    document.getElementById("nav").classList="";
    menuVisble=false
}
//funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills=document.getElementById("skills")
    var diastancia_skills=window.innerHeight-skills.getBoundingClientRect().top;
    if(diastancia_skills>=300){
        let habilidades=document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("python");
        habilidades[4].classList.add("powerbi");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("probidad");
    }
}
//dedecto el scrolling para aplicar la animacion de las barra de las habilidades
window.onscroll =function(){
    efectoHabilidades();
}
