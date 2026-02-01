
let lines = document.getElementsByClassName("checker");

const checkerSize = 6;
let checkerColour = window.getComputedStyle(document.body).getPropertyValue("--divider");


class Message {
    constructor(text, date) {
        this.text = text;
        this.date = date;
    }
}


const statuses = [
    new Message("website is now running at fiveleafclover.xyz!!", "(1/2/2026)"),
    new Message("now im using javascript so i can do cooler stuff", "(1/2/2026)"),
    new Message("i need to get a new font for the website this one kinda sucks", "(1/2/2026)"),
    new Message("bleh!!", "(31/1/2026)"),
];

const updates = [
    new Message("wip pages added so its not just all dead links", "(1/2/2026)"),
    new Message("i updated some stuff", "(1/2/2026)"),
    new Message("IM WORKINH ON IT", "(31/1/2026)"),
];



offset = 0;

function updateCheckers() {

    offset += 0.4;
    offset = offset % (checkerSize * 2);
    
    for (let i = 0; i < lines.length; i++) {

        let l = lines[i];

        let ctx = l.getContext("2d");
        ctx.fillStyle = checkerColour;
        ctx.clearRect(0, 0, l.width, l.height);

        let x = -checkerSize * 4;
        let alt = false;
        while (x < l.width + checkerSize * 4) {

            ctx.fillRect(i % 2 == 0 ? (x + offset) : (x - offset), alt * checkerSize, checkerSize, checkerSize);
            
            alt = !alt;
            x += checkerSize;
            
        }
        
    }

    window.requestAnimationFrame(updateCheckers);
}

window.requestAnimationFrame(updateCheckers);


let status = document.getElementById("status");
if (status != null) {
    status.firstElementChild.innerHTML = statuses[0].date;
    status.lastElementChild.innerHTML = "status: " + statuses[0].text;
}


let archive = document.getElementById("archive");
if (archive != null) {
    for (let i = 0; i < statuses.length; i++) {
        let canvas = document.createElement("canvas");
        canvas.className = "checker";
        
        let s = document.createElement("p");
        s.innerHTML = statuses[i].text;
        
        let d = document.createElement("p");
        d.innerHTML = statuses[i].date;
        d.classList.add("otherside");
        d.classList.add("green");
        
        archive.appendChild(canvas);
        archive.appendChild(d);
        archive.appendChild(s);
    }
}

let update = document.getElementById("updates");
if (updates != null) {
    for (let i = 0; i < updates.length; i++) {
        let canvas = document.createElement("canvas");
        canvas.className = "checker";
        
        let s = document.createElement("p");
        s.innerHTML = updates[i].text;
        
        let d = document.createElement("p");
        d.innerHTML = updates[i].date;
        d.classList.add("otherside");
        d.classList.add("green");
        
        update.appendChild(canvas);
        update.appendChild(d);
        update.appendChild(s);
    }
}










for (let i = 0; i < lines.length; i++) {
    lines[i].height = checkerSize * 2;
    lines[i].style.height = checkerSize * 2 + "px";
    let w = window.getComputedStyle(lines[i]).width
    lines[i].width = w.slice(0, w.length - 2);
}


























