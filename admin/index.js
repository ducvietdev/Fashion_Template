
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});

$(".search-info").on("click", function() {
    var x = document.getElementById("dropdown-user");
    if (x.style.visibility === "hidden") {
        x.style.visibility = "visible";
    } else {
        x.style.visibility = "hidden";
    }
})

$(".fa-list-numeric").on("click", function() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("content")
    if (x.style.display === "none") {
        x.style.display = "block";
        y.classList.remove('col-lg-12')
        y.classList.add('col-lg-10')
        
    } else {
        x.style.display = "none";
        y.classList.remove('col-lg-10')
        y.classList.add('col-lg-12')
    }
})
