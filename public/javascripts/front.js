//! Error Function
let ERR = (msg) => {
    $("#errorMessage").html(msg);
    $("#addCompany").css("box-shadow", "0px 0px 15px rgba(255, 0, 0, 0.719)");
    $("#errorMessage").fadeIn();
    setTimeout(() => {
        $("#addCompany").css("box-shadow", "0px 0px 10px gray");
        $("#errorMessage").fadeOut();
    }, 3000);
};


//* Success Function
let SUC = (msg) => {
    $("#addCompany").css("box-shadow", "0px 0px 15px green");
    setTimeout(() => {
        $("#addCompany").css("box-shadow", "0px 0px 10px gray");
    }, 3000);
}




$("#plusButton").click(function () {
    $("#addCompany").fadeIn();
    //todo: $("#addProduct").fadeIn();
});






$("#companyAddButton").click(function (e) {
    e.preventDefault();
    if (!$("#exampleInputName").val() || !$("#exampleInputPhoneNumber").val()) {
        ERR("Empty Field!");
    } else {
        $.post("/company", {
                "name": $("#exampleInputName").val(),
                "phoneNumber": $("#exampleInputPhoneNumber").val()
            },
            function (data, Status) {
                
            }
        );
    }
});