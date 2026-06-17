const products = [
{
    id:"sp01",
    name: "Chó chihuahua",
    price: "500.000VND",
    description: "Mắt Lòi",
    mtct:"con cho nay la giong chó ngoại nhập với thân hình nhỏ nhắn cặp mắt lòi hung hăng nhưng có lúc dễ thương dễ nuôi dễ chăm sóc phù hợp cho các bạn yêu thú cưng",
    image: "../acssets/images/chocon.webp",
    link: "chitiet.html"
},
{
    id:"sp02",
    name: "Con gà",
    price: "250.000VND",
    description: "Đồng hồ báo thức buổi sáng",
    mtct:"con gà trống có thể dùng để sinh sản hoặc làm gà chọi cung",
    image: "../acssets/images/gave.webp",
    link: "chitiet.html"
},
{   id:"sp03",
    name: "Con Mèo",
    price: "350.000VND",
    description: "Kêu meomeo",
    mtct:"Con mèo ngu ngốc đáng yêu ngọt ngào cute phô mai que",
    image: "../acssets/images/conmeo.jpg",
    link: "chitiet.html"
},
{
    id:"sp04",
    name: "Cá Mập",
    price: "1.000.000VND",
    description: "Thao túng",
    mtct:"Đồ Chơi hình dạng chú cá mập đi bằng chân giúp trẻ em phát triển",
    image: "../acssets/images/câmp.png",
    link: "chitiet.html"
}
];

function createItem(obj) {
    const listProducts = document.getElementById("products-list");

    const item = document.createElement("div");
    item.className = "item";
    item.className = "item";

    // Tạo khung
    item.style.width = "250px";
    item.style.padding = "20px";
    item.style.border = "4px solid #87CEFA";
    item.style.borderRadius = "20px";
    item.style.backgroundColor = "#48D1CC";
    item.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
    item.style.textAlign = "center";

    // Khung ảnh
    const containerImage = document.createElement("div");
    containerImage.className = "image-box";
    containerImage.style.backgroundColor = "blue";
    containerImage.style.borderRadius = "10px";
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
    // tạo p chứa ảnh
    const name = document.createElement("p");
    name.textContent = obj.name;
    // tạo p chúa ảnh sp
    const price = document.createElement("p");
    price.textContent = obj.price;
    // tạo p chứa mô tả
    const description = document.createElement("p");
    description.textContent = obj.description;

    const linkProduct = document.createElement("a");
    linkProduct.textContent = "Xem chi tiết";
    linkProduct.setAttribute("href", `${obj.link}?masp=${obj.id}`);

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

