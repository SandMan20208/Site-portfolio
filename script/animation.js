{
    const animItems = document.querySelectorAll('.anim-items');
    const title = document.querySelector('.title');

    if(animItems.length > 0){
        document.querySelector('.wrapper').addEventListener('scroll', animOnScroll);
        function animOnScroll(elem){
            let screenHeihgt = document.documentElement.clientHeight;
            let animStart = screenHeihgt / 4;
            for (let i = 0; i<animItems.length; i++){
                const animItem = animItems[i];
                let animPosition = animItem.getBoundingClientRect().top;
                if (animPosition < screenHeihgt/1.3){
                    animItem.classList.add('_active');
                }
            }
        }
    }
}
