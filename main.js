$(document).ready(function() {
    // Hide all product lists except for "Featured" products
    $("#recent-products").hide();
    $("#bestselling-products").hide();

    // Click event for text links
    $(".f-products-titles").click(function() {
        // Get the data-category attribute of the clicked element
        var category = $(this).data("category");

        // Hide all product lists
        $(".f-products-list").hide();

        // Show the product list corresponding to the clicked category
        $("#" + category + "-products").show();
    });
});
