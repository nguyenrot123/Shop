function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get(param)
}

$(document).ready(function () {
  var productId = getParam('productId')
  $.ajax({
      url: 'http://localhost/api/products/show.php?productId=' + productId,
      type: 'GET',
      success: function (data) {
          var product = JSON.parse(data)
          renderProductUI(product)
          addEvents()
      },
      error: function (e) {
          console.log(e.message);
      }
  });
})


// show All Detail Products
function renderProductUI(product) {
  $('#product-detail').append(
          `
          <div class="small-container single-product">
          <div class="row">
             <div class="col-2">
             
             <a href="index.html"></i><h2>Quay lại trang chủ</h2></a>
                  <img src="${product.image}" width="100%" id="productimg">
              </div>
              <div class="col-2">
                  <p>Pizza / Drink</p>
                  <h1>${product.name}</h1>
                  <h4>$${product.price}</h4>
                  <select name="" id=""> 
                      <option value="">Sile lớn</option>
                      <option value="">Sile Vừa</option>
                      <option value="">Sile Nhỏ</option>
                  </select>
                  <input type="number" value="1">
                  <button id="add-cart" href="#" class="btn btn-warning shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to
                cart </button>
                  </br>
                  </br>
                  </br>
                  <i class='bx bxs-star stars' ></i>
                  <i class='bx bxs-star stars' ></i>
                  <i class='bx bxs-star stars' ></i>
                  <i class='bx bxs-star stars' ></i>
                  <i class='bx bxs-star stars' ></i>
                  <h3>Giới thiệu sản phẩm <i class="fa fa-ident"></i></h3>
              </br>
                  <p>${product.description}
                  </p>
              </div>
          </div>
      </div>
      
          `
  )
}
function addEvents(){
    let btnAddcart = document.getElementById("add-cart")
    btnAddcart.addEventListener('click', doAddcart)
}

function doAddToCart(){
  let productId = document.getElementById('productId').value
  let productName = document.getElementById('productName').value
  let productImage = document.getElementById('productImage').value
  let productPrice = document.getElementById('productPrice').value
  let quantity = Number(document.getElementById('quantity').value)

  let item = {
    productId,
    productImage,
    productName,
    productPrice,
    quantity
  }

  addToCart(item)
  Swal.fire("Product added to cart!");
}
