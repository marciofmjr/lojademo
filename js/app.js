$( document ).ready(function() {
  var page = $("body").attr('id');

  if (page === "page_product") {
    tagProductView();
  }
});

function tagProductView() {
  console.log("disparou product view");
  var productName = $("#product_name").html();
  gtag('event', 'view_item', {
    items: [{
      id: "P12345",
      name: productName,
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