function deboucen(func, wait, inmediate){
    let timeout;
    return function(...params){
        let _this = this;
        let later = function(){
            timeout = null;
            if(!inmediate)func.apply(_this, params)
        }

        const callNow = inmediate && !timeout
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(_this, params)
    }
}

function onscroll(ev){
    console.log('El usuario hizo scroll');
}

window.addEventListener('scroll', deboucen(onscroll, 250));