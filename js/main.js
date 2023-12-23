var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var infoList = [];

if (localStorage.getItem("infoList")) {
    infoList = JSON.parse(localStorage.getItem("infoList"));
    display(infoList);
}

function submit() {
    var site = {
        name: siteName.value,
        url: siteUrl.value
    };
    infoList.push(site);
    saveToLocalStorage();
    display(infoList);
}
function clearForm(){
    siteName.value = "";
    siteUrl.value = "";
}


function display(list) {
    var cartona = ``;
    for (var i = 0; i < list.length; i++) {
        cartona += `<tr>
                <td>${i + 1}</td>
                <td>${list[i].name}</td>
                <td>
                    <button onclick="visit('${list[i].url}')" class="btn btn-sm">visit</button>
                </td>
                <td>
                    <button onclick="deleteName(${i})" class="btn btn-sm">delete</button>
                </td>
            </tr>`;
    }
    document.getElementById("tBody").innerHTML = cartona;
}

function clearInputFields() {
    siteName.value = "";
    siteUrl.value = "";
}

function visit(url) {
    window.open(url);
    // alert("Hello! The URL has been opened.");
}
function deleteName(box) {
    infoList.splice(box, 1);
    display(infoList);
}

function saveToLocalStorage() {
    localStorage.setItem("infoList", JSON.stringify(infoList));
}


var mybtn = document.querySelectorAll("#submit");
var lightBox = document.querySelector("#show");
var closeBtn = document.querySelector("#closeBtn");


for(var i = 0; i < mybtn.length; i++){
    mybtn[i].addEventListener("click",function(){
        if(`siteName.value=""
        siteUrl.value=""`){
        show.classList.replace("d-none","d-flex");
    }
    })
}
closeBtn.addEventListener("click",closeSlider)
function closeSlider(){
    show.classList.replace("d-flex","d-none");
}


var regx = /^[A-Za-z\s]{1,}$/;
function validate() {
  if (regx.test(bookmarkName.value)) {
    return true;
  } else {
    return false;
  }
}

var regx2 = /^(https?:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[A-Za-z]{2,}$/;
function validateURL() {
  if (regx2.test(bookmarkURL.value)) {
    return true;
  } else {
    return false;
  }
}