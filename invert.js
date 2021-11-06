// Just type this into your console and it will invert the whole page!

var styles = `
html {
    background-color: black;
}

body {
    filter: invert(100%);
    background-color: white;
    color: black;
}
`
var styleSheet = document.createElement("style")
styleSheet.type = "text/css"
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

// https://github.com/DaCuteRaccoon/invert-color
