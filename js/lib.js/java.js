const products = [
{
    name: "Chó chihuahua",
    price: "500.000VND",
    description: "Mắt Lòi",
    image: "../acssets/images/chocon.webp",
    link: "page1.html"
},
{
    name: "Con gà",
    price: "250.000VND",
    description: "Đồng hồ báo thức buổi sáng",
    image: "../acssets/images/gave.webp",
    link: "page1.html"
},
{
    name: "Con Mèo",
    price: "350.000VND",
    description: "Kêu meomeo",
    image: "../acssets/images/conmeo.jpg",
    link: "page1.html"
},
{

    name: "Cá Mập",
    price: "1.000.000VND",
    description: "Thao túng",
    image: "../acssets/images/câmp.png",
    link: "page1.html"
}
];

function createItem(obj) {
    const listProducts = document.getElementById("products-list");

    const item = document.createElement("div");
    item.className = "item";
    item.className = "item";

    // Tạo khung
    item.style.width = "250px";
    item.style.padding = "15px";
    item.style.border = "2px solid #ffb6c1";
    item.style.borderRadius = "20px";
    item.style.backgroundColor = "#fff";
    item.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    item.style.textAlign = "center";

    // Khung ảnh
    const containerImage = document.createElement("div");
    containerImage.className = "image-box";
    containerImage.style.backgroundColor = "blue";
    containerImage.style.borderRadius = "20px";
    containerImage.style.padding = "15px";

    const img = document.createElement("img");
    img.src = obj.image;
    img.alt = obj.name;
    img.style.width = "100%";
    img.style.maxWidth = "150px";

    containerImage.appendChild(img);

    // Khung thông tin
    const containerInfo = document.createElement("div");
    containerInfo.className = "info";

    const name = document.createElement("p");
    name.textContent = obj.name;

    const price = document.createElement("p");
    price.textContent = obj.price;

    const description = document.createElement("p");
    description.textContent = obj.description;

    const linkProduct = document.createElement("a");
    linkProduct.textContent = "Xem chi tiết";
    linkProduct.href = obj.link;

    containerInfo.appendChild(name);
    containerInfo.appendChild(price);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    listProducts.appendChild(item);
}

function loadAllProducts(objArray) {
    const listProducts = document.getElementById("products-list");

    listProducts.style.display = "flex";
    listProducts.style.gap = "50px";
    listProducts.style.flexWrap = "wrap";
    for (let i = 0; i < objArray.length; i++) 
        {
        createItem(objArray[i]);
        }
}

