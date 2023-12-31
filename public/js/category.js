function getParam(param){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    return urlParams.get(param)
}

$(document).ready(function () {
    var categoryid = getParam('categoryid')
    $.ajax({
        url: 'http://localhost/api/categories/show.php?categoryId=' + categoryid,
        type: 'GET',
        success: function (data) {
            var categoryList = JSON.parse(data)
            renderProductListUI(categoryList)
        },
        error: function (e) {
            console.log(e.message);
        }
    });
})


// showAllProducts
function renderProductListUI(categoryList) {
    categoryList.forEach(category => {
        $('#category-list').append(
            `
            <div class="product-box">
                <img src="${category.image}"  class="product-img">
                <h4 class="product-title">${category.name}</h4>
                <span class="price">$${category.price}</span>
            </a>
                <i class='bx bxs-cart add-cart'></i>
            </div>
            `
        )
    });
}