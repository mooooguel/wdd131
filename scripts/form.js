const currentYearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;


const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;




const products = [
    {
        id: "mw-1000",
        name: "microwave",
        averagerating: 3.0
    },
    {
        id: "tm-2000",
        name: "time machine",
        averagerating: 4.9
    },
    {
        id: "lambo-2",
        name: "lamborghini",
        averagerating: 2.4
    },
    {
        id: "hpw-7",
        name: "harry potter wand",
        averagerating: 3.7
    },
    {
        id: "fg-2000",
        name: "food generator",
        averagerating: 4.7
    }
];

products.forEach(product => {
    let productHTML = document.createElement("option");
    productHTML.setAttribute("value", `${product.name}`);
    productHTML.innerHTML = product.name;
    document.getElementById("prodName").appendChild(productHTML);
});


let numberReviews = Number(window.localStorage.getItem("numberReviews-ls"));
numberReviews.textContent = `Number of reviews submitted: ${numberReviews}`;

numberReviews++;
localStorage.setItem("numberReviews-ls", numberReviews);