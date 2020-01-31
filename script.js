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
var momentElement = moment().format('llll');




 today.innerHTML=(momentElement);

$("#save").on("click",function(){
    event.preventDefault();

    var nineElem = nineAmElement.value;
    var tenAM = document.querySelector("#user-input10").value;
    var elevenAM = document.querySelector("#user-input11").value;
    var twelvePM = document.querySelector("#user-input12").value;
    var onePM = document.querySelector("#user-input1").value;
    var twoPM = document.querySelector("#user-input2").value;
    var threePM = document.querySelector("#user-input3").value;
    var fourPM = document.querySelector("#user-input4").value;
    var fivePM = document.querySelector("#user-input5").value;

   
        localStorage.setItem("9AM-UR", JSON.stringify (nineElem));
        JSON.parse(localStorage.getItem(nineElem));
        nineAmElement.textcontent = nineElem;

       
});

function storeInput(){
    
}
function renderInput(){

}