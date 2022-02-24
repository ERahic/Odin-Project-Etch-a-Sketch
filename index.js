// When hovering over a cell, change background color to yellow

let mouse_down = 0;
document.body.onmousedown = () => {
    mouse_down++
}

document.body.onmouseup = () => {
    mouse_down--
}

let selected_color_class = "hover-default"

let hover_triggered = (cell, css_class) => {
    if(mouse_down === 1) {
        cell.classList.add(css_class)
    }
};



const hover_cell = document.querySelectorAll('.cells');
console.log(hover_cell);

hover_cell.forEach(cell=> {
    cell.addEventListener("mouseover", e => {
        hover_triggered(cell, selected_color_class)
    })
})


// When pressing the restart button, the grid will erase anything drawn
const restart_button = document.querySelector('.reset-button');

restart_button.addEventListener('click', e =>{
    hover_cell.forEach(cell => {
        cell.classList.remove(selected_color_class)
        cell.classList.remove("hover-default")
        cell.classList.remove("hover-red")
        cell.classList.remove("hover-blue")
        cell.classList.remove("hover-green")
        cell.classList.remove("hover-yellow")
        cell.classList.remove("hover-orange")
        cell.classList.remove("hover-eraser")
    })
})


// when clicking on a colored box, the etch-a-sketch will be assigned a new colour

const color_button_red = document.querySelector(".color-button-red")
const color_button_blue = document.querySelector(".color-button-blue")
const color_button_green = document.querySelector(".color-button-green")
const color_button_yellow = document.querySelector(".color-button-yellow")
const color_button_orange = document.querySelector(".color-button-orange")

color_button_red.addEventListener('click', e => {
    hover_cell.forEach(cell => {
        cell.removeEventListener("mouseover", hover_triggered)
    })
    selected_color_class = "hover-red"
    hover_cell.forEach(cell => {
        hover_triggered(cell, selected_color_class)
    })
})

color_button_blue.addEventListener("click", e => {
    hover_cell.forEach(cell => {
        cell.removeEventListener("mouseover", hover_triggered)
    })
    selected_color_class = "hover-blue"
    hover_cell.forEach(cell => {
        hover_triggered(cell, selected_color_class)
    })
})

color_button_green.addEventListener("click", e => {
    hover_cell.forEach(cell => {
        cell.removeEventListener("mouseover", hover_triggered)
    })
    selected_color_class = "hover-green"
    hover_cell.forEach(cell => {
        hover_triggered(cell, selected_color_class)
    })
})

color_button_yellow.addEventListener("click", e => {
    hover_cell.forEach(cell => {
        cell.removeEventListener("mouseover", hover_triggered)
    })
    selected_color_class = "hover-yellow"
    hover_cell.forEach(cell => {
        hover_triggered(cell, selected_color_class)
    })
})


color_button_orange.addEventListener("click", e => {
    hover_cell.forEach(cell => {
        cell.removeEventListener("mouseover", hover_triggered)
    })
    selected_color_class = "hover-orange"
    hover_cell.forEach(cell => {
        hover_triggered(cell, selected_color_class)
    })
})




