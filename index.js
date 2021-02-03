window.addEventListener("load",() => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.getElementById("visual");
    const colors = [
        "#60d394" ,
        "#d36060",
        "#c060d3",
        "#6062d3",
        "#60d360"
        
    ]; 

    pads.forEach((pad,index) => {
        pad.addEventListener("click",function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1S ease";
        bubble.addEventListener("animationend",function() {
            visual.removeChild(this);

        })
    }
});