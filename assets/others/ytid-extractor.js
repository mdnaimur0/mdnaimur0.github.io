function initYtIdExtractor() {
    var button = document.createElement("div");
    button.id = "ytIdExtractorButton";
    button.innerHTML = '<svg viewBox="0 0 24 24" fill="white"><path d="M10 7V9H9V15H10V17H6V15H7V9H6V7H10M16 7C17.11 7 18 7.9 18 9V15C18 16.11 17.11 17 16 17H12V7M16 9H14V15H16V9Z" /></svg>';
    button.style = "position:fixed!important;z-index:100000!important;right:20px;bottom:20px;background-color:purple!important;padding:5px;height:40px;width:40px;text-decoration:none;display:flex;align-items:center;justify-content:center;border-radius:50%;cursor:pointer;box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);";
    button.onclick = () => showOrHidePopup();
    document.body.appendChild(button);
}
function showOrHidePopup() {
    var element = document.getElementById("ytIdExtractorPopup");
    if (element) {
        element.remove();
        return;
    }
    var popup = document.createElement("div");
    popup.id = "ytIdExtractorPopup";
    popup.style = "position:fixed!important;z-index:9999!important;right:70px!important;bottom:20px!important;background-color:purple!important;color:white!important;padding:10px!important;margin-left:10px;border-radius:10px;border:1px solid white;white-space:pre-wrap!important;word-break:break-word!important;";
    var id = extractYtId();
    if (id) popup.innerHTML = `<b>Youtube Video ID:</b> <i>${id}</i><br><b>Youtube Video URL:</b> <i>https://www.youtu.be/${id}</i><br><br><a href="https://youtu.be/${id}" target="_blank" style="color:purple;text-decoration:none;padding:5px 10px;font-weight:bold;background-color:white;border-radius:30px;">Open in Youtube</a>`;
    else popup.innerHTML = '<h4 style="color:white!important">Sorry, Youtube ID not found :(</h4>';
    document.body.appendChild(popup);
}
function extractYtId() {
    var body = document.body.innerHTML;
    var index = body.indexOf('data-youtube-video="');
    if (index == -1) return null;
    try {
        var substring = body.substring(index);
        var index = substring.indexOf('"');
        var substring = substring.substring(index + 1);
        var index = substring.indexOf('"');
        var substring = substring.substring(0, index);
        return substring;
    } catch (e) {
        return null;
    }
}