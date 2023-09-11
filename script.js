
const data = [
    {
        image:"./1.jpg",
        titleNew:"$60.00",
        titleOld:"$115.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
    {
        image:"2.jpeg",
        titleNew:"$95.00",
        titleOld:"$195.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
    {
        image:"3.avif",
        titleNew:"$40.00",
        titleOld:"$95.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
    {
        image:"4.jpeg.webp",
        titleNew:"$95.00",
        titleOld:"$195.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
    {
        image:"5.jpg.webp",
        titleNew:"$20.00",
        titleOld:"$45.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
    {
        image:"6.png",
        titleNew:"$50.00",
        titleOld:"$98.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
    {
        image:"7.jpeg.webp",
        titleNew:"$25.00",
        titleOld:"$65.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
    {
        image:"8.jpeg",
        titleNew:"$36.00",
        titleOld:"$84.00",
        main: " ` `````````` ` ",
        button:"ADD TO CART",
    },
];

let container = document.createElement('div')
container.classList.add('container');

const renderBlock =() => {
    let fragment = new DocumentFragment();
    data.map((elem,id) => {
        console.log(id)
        let block = document.createElement("div");
        block.className = 'block-item'
        block.innerHTML = `
        <img width="50px" src=${elem.image}>
        <div>${elem.titleNew} ${elem.main} <strike> ${elem.titleOld} </strike> </div>        
        <button>${elem.button}</button>`;        
        fragment.append(block);
    });
    return fragment;

};
container.append(renderBlock());

document.body.append(container);
