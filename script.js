var nineAmElement = document.querySelector("#user-input9");
var tenAmElement = document.querySelector("#user-input10");
var elevenAmElement = document.querySelector("#user-input11");
var twelevePmElement = document.querySelector("#user-input12");
var onePmElement = document.querySelector("#user-input1");
var twoPmElement = document.querySelector("#user-input2");
var threePmElement = document.querySelector("#user-input3");    
var fourPmElement = document.querySelector("#user-input4");
var fivePmElement = document.querySelector("#user-input5");
var saveBtn = document.querySelector("#save");
var today = document.querySelector("#currentDay");
var momentElement = moment().hours(Number);

 today.innerHTML=(momentElement);
 backgroundColor();

$(".save").on("click",function(){
    event.preventDefault();

    var nineElem = nineAmElement.value;
    var tenElem = tenAmElement.value;
    var elevenElem = elevenAmElement.value;
    var twelveElem = twelevePmElement.value;
    var oneElem = onePmElement.value;
    var twoElem = twoPmElement.value;
    var threeELem = threePmElement.value;
    var fourElem = fourPmElement.value;
    var fiveElem = fivePmElement.value;

   
    localStorage.setItem("9AM-UR", JSON.stringify (nineElem));
    localStorage.setItem("10AM-UR", JSON.stringify (tenElem));
    localStorage.setItem("11AM-UR", JSON.stringify (elevenElem));
    localStorage.setItem("12PM-UR", JSON.stringify (twelveElem));
    localStorage.setItem("1PM-UR", JSON.stringify (oneElem));
    localStorage.setItem("2PM-UR", JSON.stringify (twoElem));
    localStorage.setItem("3PM-UR", JSON.stringify (threeELem));
    localStorage.setItem("4PM-UR", JSON.stringify (fourElem));
    localStorage.setItem("5PM-UR", JSON.stringify (fiveElem));
              
});

    displayText();

    function displayText(){
        var nineAM = JSON.parse(localStorage.getItem("9AM-UR"));
        var tenAM = JSON.parse(localStorage.getItem("10AM-UR"));
        var elevenAM = JSON.parse(localStorage.getItem("11AM-UR"));
        var twelevePM = JSON.parse(localStorage.getItem("12PM-UR"));
        var onePM = JSON.parse(localStorage.getItem("1PM-UR"));
        var twoPM = JSON.parse(localStorage.getItem("2PM-UR"));
        var threePM = JSON.parse(localStorage.getItem("3PM-UR"));
        var fourPM = JSON.parse(localStorage.getItem("4PM-UR"));
        var fivePM = JSON.parse(localStorage.getItem("5PM-UR"));

        nineAmElement.value = nineAM;
        tenAmElement.value = tenAM;
        elevenAmElement.value = elevenAM;
        twelevePmElement.value = twelevePM;
        onePmElement.value = onePM;
        twoPmElement.value = twoPM;
        threePmElement.value = threePM;
        fourPmElement.value = fourPM;
        fivePmElement.value = fivePM;
    }

    function backgroundColor(){
        if(momentElement < 2){
            document.querySelector("#user-input9").style.backgroundColor = "red";
        }
    }

    backgroundColor();