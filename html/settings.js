function handleWiFiDetails() {
    if (document.getElementById("wifi1").checked) {
        document.getElementById("wifi1div").style.display = ""
        document.getElementById("wifi2div").style.display = "none"
    } else {
        document.getElementById("wifi1div").style.display = "none"
        document.getElementById("wifi2div").style.display = ""
    }
}