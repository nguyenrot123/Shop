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
        url: 'http://localhost/api/products/index.php',
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
        url: 'http://localhost/api/products/index.php',
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
            <div class="item">
            <a href="detail.html?productId=${product.id}"><img src="${product.image}"  alt=""></a>
            <div class="stars">
            <i class='bx bxs-star stars' ></i>
            <i class='bx bxs-star stars' ></i>
            <i class='bx bxs-star stars' ></i>
            <i class='bx bxs-star stars' ></i>
            <i class='bx bxs-star stars' ></i>
            </div>

            <div class="name">${product.name}</div>
            <div class="desc">${product.description}</div>
            <div class="price">$${product.price}</div>
        </div>
            
            
        
        
            `
        )
    });
}

// get hot Products
function getHotProducts() {
    $.ajax({
        url: 'http://localhost/api/products/index.php',
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
            <div class="product-box">
            <a href="detail.html?productId=${product.id}"><img src="${product.image}"  alt=""></a>
                    <h4 class="product-title">${product.name}</h4>
                    <span class="price">$${product.price}</span>
                    <i class='bx bxs-cart add-cart'></i>
                </div>
            `
        )
    });
}

// get new Products
function getNewProducts() {
    $.ajax({
        url: 'http://localhost/api/products/index.php',
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
            `<table>
            
            
                                        <tr>
                                        <td>${product.id}</td>
                                        <td>${product.name}</td>
                                        <td>$${product.price}</td>
									<td>
										<span class="dot">
											<i class="bg-success"></i>
											${product.quantity}
										</span>
									</td>
									<td>${product.description}</td>
								</tr>
								
                                </table>
            `
        )
    });
}






