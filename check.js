const button = document.querySelector(".check-button");
const element = document.querySelector('.child-div');
const style = getComputedStyle(element);


button.addEventListener("click", checkCSS);


function checkCSS() {
  if (style.right == "0px" || style.right == "0") {
    console.log('OK');
    const successText = document.createElement("p");
    successText.textContent = "The `right` property is set correctly!";
    button.after(successText);
  } else {
    console.log('not OK');
    const notSuccessText = document.createElement("p");
    notSuccessText.textContent = "Make sure you've added the `right` property to the neccesary element.";
    button.after(notSuccessText);
  }
}
