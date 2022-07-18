{
    let i = 0;
    let text = 'Сайт-портфолио Web-разработчика';
    const speed = 80;

    function cursorHide(){
        document.querySelector('.cursor').classList.toggle('cursor-hide'); 
    }
    function printText(cursorHide) {
        if (i < text.length) {
        document.querySelector('.title').textContent += text.charAt(i);
        i++;
        setTimeout(printText, speed);
        }
        if (i == text.length){
        document.querySelector('.title').innerHTML += '<div class="cursor">_</div>';
        
        }
    }
    setTimeout(printText, speed);

    function cursorHide(){
        if (i == text.length){
            document.querySelector('.cursor').classList.toggle('cursor-hide'); 
        }
    }
    setInterval(cursorHide, 500);
}