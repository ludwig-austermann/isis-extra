if (document.URL.indexOf("isis.tu-berlin.de") !== -1) {
    document.getElementsByClassName("current section")[0].scrollIntoView();
} else {
    alert("`Go to current section` is only allowed isis.tu-berlin.de pages.");
}