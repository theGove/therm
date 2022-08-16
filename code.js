const factor=2
const height=400
const therm_top = 0
const therm_left = 0
const head_space= 10
const max = 1000

function set_temp(degrees){
    const tube=tag("tube")
    const bulb_top=tag("bulb").style.top.split("px")[0]
    const the_top=get_mercury(degrees)
    tube.style.top = the_top
    tube.style.height = bulb_top-the_top+10*factor
    console.log(bulb.style.top)
    console.log(tube.style.top)

}

function get_mercury(degrees){
    const tube=tag("tube")
    const percent = degrees/max
    const tube_top = parseInt(tag("tube-border").style.top.split("px")[0])
    let bar_height = (((height-26 - (head_space*factor*.1))) * factor * (percent))+(18*factor )
    return tube_top + ((height*factor)-bar_height)

}

function start_me_up(){    
    //tag("tube").style.backgroundColor="green"
    scale_thermometer()
    add_numbers()
    set_temp(320)
    add_goal(911)
    
}
function scale_thermometer(){
    const bulb=tag("bulb")
    bulb.style.height = 40*factor
    bulb.style.width = 40*factor
    bulb.style.top = height*factor+therm_top
    bulb.style.left = 2*factor+therm_left

    const tube=tag("tube")
    tube.style.width = 20*factor
    tube.style.left = 12*factor+therm_left
    tube.style.height = 10*factor
    tube.style.top = (height-(height/200))*factor+therm_top
    console.log((height-(height/200))*factor+therm_top)
    
    const bulb_border=tag("bulb-border")
    bulb_border.style.height = 44*factor
    bulb_border.style.width = 44*factor
    bulb_border.style.top = (height-2)*factor+therm_top
    bulb_border.style.left = 0+therm_left
    
    const tube_border=tag("tube-border")
    tube_border.style.height = height*factor
    tube_border.style.width = 20*factor
    tube_border.style.top = 16*factor+therm_top
    tube_border.style.left = 10*factor+therm_left
    tube_border.style.borderWidth = 2*factor
    tube_border.style.borderRadius = (20*factor) + "px"
    

}
function add_numbers(){
    for(let j=0;j<=1000;j=j+100){
        add_number(j)
    }
}

function add_number(degrees){
    const percent = degrees/max
    const new_div = document.createElement("div");
    const text=document.createTextNode("-" + degrees)
    new_div.style.whiteSpace="nowrap"
    new_div.style.fontFamily = "Tahoma,Arial,sans-serif"
    new_div.style.fontSize = (12*factor)+"px"
    new_div.appendChild(text);
    new_div.style.position = "absolute"
    new_div.style.left=10*factor+therm_left + 23*factor 
    new_div.style.top=get_mercury(degrees) - 7.7*factor
    tag("therm").prepend(new_div)
}


function add_goal(degrees){
    const percent = degrees/max
    const new_div = document.createElement("div");
    const text=document.createTextNode(degrees + "-")
    new_div.style.whiteSpace="nowrap"
    new_div.style.fontFamily = "Tahoma,Arial,sans-serif"
    new_div.style.fontSize = (12*factor)+"px"
    new_div.appendChild(text);
    new_div.style.position = "absolute"
    new_div.style.left=therm_left -20*factor
    new_div.style.width=31*factor
    new_div.style.textAlign="right"
    // new_div.style.borderWidth="2px"
    // new_div.style.borderColor="black"
    // new_div.style.borderStyle="solid"
    new_div.style.top=get_mercury(degrees) - 7.7*factor
    tag("therm").prepend(new_div)
}



function set_tempx(degrees){
    const tube=tag("tube")
    const percent = degrees/max
    const tube_top = parseInt(tag("tube-border").style.top.split("px")[0])
    let bar_height = (((height-26 - (head_space*factor*.1))) * factor * (percent))+(18*factor )
    tube.style.height = bar_height + 10 * factor
    tube.style.top = tube_top + ((height*factor)-bar_height)
    console.log(bar_height , 10 * factor)
    console.log(tube_top + ((height*factor)-bar_height))
}


function tag(id){
    return document.getElementById(id)
}


function submit_form(){
    alert("ready to submit")
}