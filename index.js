
function createGrid(amount){
    for (let i = 0; i < amount; i++){
        const container = document.querySelector('.container');
        const gridItem  = document.createElement('div');
        gridItem.className = "grid-item";
        container.appendChild(gridItem);
        gridItem.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "purple";
            console.log(1);
        });
    }
}
createGrid(256);

const items = document.getElementsByClassName(".grid-item");
