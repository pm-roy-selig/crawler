function main() {

    document.getElementById( 'go' ).addEventListener( 'click', clickGo );
    chrome.extension.getBackgroundPage().popupLoaded( document );
}

function clickGo() {
   chrome.extension.getBackgroundPage().popupGo();
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    main();
});