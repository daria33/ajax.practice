// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the fortune-text div
    $("#fortune-text").load('/fortune');
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val();
    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function (result){
        $("#weather-info").text(result["forecast"]);
        }

        );
}

$("#weather-form").on('submit', showWeather);






// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    $.post("/order-melons",
        $('#order-form').serialize(),
        function (result) {
            // TODO: show the result message after your form
            $("#order-status").removeClass("order-error");

            if (result['code'] === "ERROR"){
                $("#order-status").addClass("order-error");
                $("#order-status").text(result['msg']);

            }
            else {
            $("#order-status").text(result['msg']);
        }
            // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
        }
    );
}

$("#order-form").on('submit', orderMelons);


