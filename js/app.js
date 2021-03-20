$( document ).ready(function() {
  var page = $("body").attr('id');

  if (page === "page_product") {
    tagProductView();

    $(".buy-button").on("click", function () {
      tagAddToCart();
    })

  }
});

function tagAddToCart() {
  console.log("disparou add to cart");
  gtag('event', 'add_to_cart', {
    currency: 'USD',
    items: [{
      id: "P12345",
      name: $("#product_name").html(),
      brand: "Google",
      category: "Apparel/T-Shirts",
      coupon: "SUMMER_DISCOUNT",
      list_name: "Search Results",
      list_position: 1,
      price: 14.99,
      quantity: 2,
      variant: "Black"
    }],
    value: 29.98
  });
}

function tagProductView() {
  console.log("disparou product view");
  gtag('event', 'view_item', {
    items: [{
      id: "P12345",
      name: $("#product_name").html(),
      brand: "Google",
      category: "Apparel/T-Shirts",
      coupon: "SUMMER_DISCOUNT",
      list_name: "Search Results",
      list_position: 1,
      price: 14.99,
      quantity: 2,
      variant: "Black"
    }]
  });
}