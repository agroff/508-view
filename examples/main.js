var ScreenReaderView = window["508-view"];

var screenReaderView = new ScreenReaderView({});

screenReaderView.run();


$("#close-modal").click(function(){
    $(".modal").hide();
});
