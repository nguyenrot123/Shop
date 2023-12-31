/**
 * Home Page
 */
// ready
$(document).ready(function () {
    getAllProducts();
    getHotProducts();
    getNewProducts();
})

// get all products
function getAllProducts() {
    $.ajax({
        url: 'http://localhost:8080/api/products/index.php',
        type: 'GET',
        success: function (data) {
            var productList = JSON.parse(data)
            renderProductListUI(productList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}
// showAllProducts
function getAllProducts() {
    $.ajax({
        url: 'http://localhost:8080/api/products/index.php',
        type: 'GET',
        success: function (data) {
            var productList = JSON.parse(data)
            renderProductListUI(productList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}

// showAllProducts
function renderProductListUI(productList) {
    productList.forEach(product => {
        $('#product-list').append(
            `
            <div class="product-box">
            <a href="details.html?id=8">
            <img src="${product.image}"  alt="" class="product-img">
            <h4 class="product-title">${product.name}</h4>
            <span class="price">$16</span>
        </a>
            <i class='bx bxs-cart add-cart'></i>
        </div>
            `
        )
    });
}

// get hot Products
function getHotProducts() {
    $.ajax({
        url: 'http://localhost:8080/api/products/hot.php',
        type: 'GET',
        success: function (data) {
            var productList = JSON.parse(data)
            renderHotProducts(productList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
} addEventListener
// show hot products
function renderHotProducts(productList) {
    productList.forEach(product => {
        $('#product-hot').append(
            `
            <div class="item">
            <img src="${product.image}" alt="">
            <div class="stars">
                <i class='bx bxs-star star'></i>
                <i class='bx bxs-star star'></i>
                <i class='bx bxs-star star'></i>
                <i class='bx bxs-star star'></i>
                <i class='bx bxs-star star'></i>
            </div>

            <div class="name">${product.name}</div>
            <div class="desc">${product.description}</div>
            <div class="price">$${product.price}</div>
        </div>
            `
        )
    });
}

// get new Products
function getNewProducts() {
    $.ajax({
        url: 'http://localhost:8080/api/products/new.php',
        type: 'GET',
        success: function (data) {
            var productList = JSON.parse(data)
            renderNewProducts(productList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
}
// show new products
function renderNewProducts(productList) {
    productList.forEach(product => {
        $('#product-new').append(
            `
                <div class="col-md-3 py-3">
                
                <a class="card" style="text-decoration: none" href="detail.html?productId=${product.id}">
                 <img src= "${product.image}" alt="">
                    <div class="card-body">
                        <h3 class="text-center">${product.name}</h3>
                        <p class="text-center">Sản phẩm bán chạy nhất.</p>
                        <div class="star text-center">
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        <i class="fa-solid fa-star checked"></i>
                        </div>
                        <h2>$${product.price} <span>
                            <li class="fa-solid fa-cart-shopping"></li>
                        </span></h2>
                    </div>
                </a>
            </div> 
            `
        )
    });
}






