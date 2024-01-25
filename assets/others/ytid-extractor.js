function initYtIdExtractor() {
    var button = document.createElement("div");
    button.id = "ytIdExtractorButton";
    button.innerHTML = '<svg viewBox="0 0 24 24" fill="white"><path d="M10 7V9H9V15H10V17H6V15H7V9H6V7H10M16 7C17.11 7 18 7.9 18 9V15C18 16.11 17.11 17 16 17H12V7M16 9H14V15H16V9Z" /></svg>';
    button.style = "position:absolute;right:10px;bottom:10px;background-color:purple;padding:5px;height:32px;width:32px;text-align:center;text-decoration:none;display:inline-block;border-radius:50%;cursor:pointer;";
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
    popup.style = "position:absolute;right:60px;bottom:10px;background-color:purple;color:white;padding:10px;width:300px;border-radius:10px;white-space:wrap;";
    var id = extractYtId();
    if (id) popup.innerHTML = `<b>Youtube Video ID:</b> ${id}<br><b>Youtube Video URL:</b> https://www.youtu.be/${id}<br><br><a href="https://youtu.be/${id}" target="_blank" style="color:purple;text-decoration:none;padding:5px 10px;background-color:white;border-radius:30px">Open in Youtube</a>`;
    else popup.innerHTML = '<h3>Sorry, Youtube ID not found :(</h3>';
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
        return substring
    } catch (e) {
        return null;
    }
}