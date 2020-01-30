var nineAmElement = document.querySelector("#nine-am");
var tenAmElement = document.querySelector("#ten-am");
var elevenAmElement = document.querySelector("#eleven-am");
var twelevePmElement = document.querySelector("#tweleve-pm");
var onePmElement = document.querySelector("#one-pm");
var twoPmElement = document.querySelector("#two-pm");
var threePmElement = document.querySelector("#three-pm");
var fourPmElement = document.querySelector("#four-pm");
var fivePmElement = document.querySelector("#five-pm");
var saveBtn = document.querySelector("#save");
var today = document.querySelector("#currentDay");
var momentElement = moment().format('llll');



 today.innerHTML=(momentElement);

$("#save").on("click",function(){
    console.log("hi");
    
    event.preventDefault();

    var nineAM = document.querySelector("#nine-am").value;
    var tenAM = document.querySelector("#ten-am").value;
    var elevenAM = document.querySelector("#eleven-am").value;
    var twelvePM = document.querySelector("#twelve-pm").value;
    var onePM = document.querySelector("#one-pm").value;
    var twoPM = document.querySelector("#two-pm").value;
    var threePM = document.querySelector("#three-pm").value;
    var fourPM = document.querySelector("#four-pm").value;
    var fivePM = document.querySelector("#five-pm").value;

    if(nineAM === ""){
        displayMessage("error", "Email cannot be blank");

        localStorage.setItem("#nine-am", nineAm);


    }

    
    
   
});