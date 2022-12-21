document.getElementsByTagName("button")[0].addEventListener("click", () => {
    setInterval(() => {
        let xhr = new XMLHttpRequest()
        xhr.open('GET', 'https://shumpoliteh.ru/')
        xhr.send()
        xhr.onload = function() {
            console.log(xhr.status)
        }
    }, 25)
})
