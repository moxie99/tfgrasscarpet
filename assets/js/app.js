const card = document.querySelector('.card');
const container = document.querySelector('.container');
const footwear = document.querySelector('.footwear img');


container.addEventListener(
    'mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
        card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
        footwear.style.transform = "translateZ(200px) rotateZ(360deg)";
    }
);

container.addEventListener(
    'mouseenter', (e) => {
        
        card.style.transition = "none";
    }
);
container.addEventListener(
    'mouseleave', (e) => {
        card.style.transition = "all 0.5s ease";
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        footwear.style.transform = "translateZ(0) rotateZ(0)";
    }
);