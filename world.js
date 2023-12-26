
let world = document.getElementById("world")
console.log(world);

world.onmouseover = function(){
    let worldwide = document.getElementById("worldwide")
    console.log(worldwide);
    worldwide.style.height = "550px"
    // worldwide.style.width="20px";
    worldwide.style.overflow="hidden"
    worldwide.style.transition="ease all"
    worldwide.style.marginLeft="-725px"
    worldwide.style.zIndex="4000"
    worldwide.style.textDecorationStyle ="underline"
    worldwide.style.marginTop="20px"
}

world.onmouseleave = function()
{
    let worldwide = document.getElementById("worldwide")
    console.log(worldwide);
    worldwide.style.height = "0px"
    worldwide.style.overflow="hidden"
    worldwide.style.transition="ease all" 

}


//For Companies

let companies = document.getElementById("companies")
console.log(companies);

companies.onmouseover = function() {
let companies1 = document.getElementById("companies1")
console.log(companies1);
companies1.style.height= "450px"
companies1.style.overflow="hidden"
companies1.style.transition="ease all"
companies1.style.zIndex="4000"
companies1.textDecorationStyle="underline"
}
companies.onmouseleave = function()
{
    let companies1 = document.getElementById("companies1")
console.log(companies1);
companies1.style.height= "0px"
companies1.style.overflow="hidden"
companies1.style.transition="ease all"
}

//for graphics

let graphic = document.getElementById("graphic")
console.log(graphic);
graphic.onmouseover = function() {
    let graphic1 = document.getElementById("graphic1")
    console.log(graphic1);
    graphic1.style.height= "271px"
    graphic1.style.overflow="hidden"
    graphic1.style.transition="ease all"
    graphic1.style.zIndex="4000"
    graphic1.textDecorationStyle="underline"
    }
    graphic.onmouseleave = function(){
        let graphic1 = document.getElementById("graphic1")
        console.log(graphic1);
        graphic1.style.height= "0px"
        graphic1.style.overflow="hidden"
        graphic1.style.transition="ease all"
    }



