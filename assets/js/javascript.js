
let btn = document.querySelector('.btn.btn--success')
let listToast = document.querySelector('.list-toast')

function toast({
    title = '', 
    message = '', 
    type = 'Info', 
    duration = 3000
}) {
    const listToast = document.querySelector('.list-toast');
    const createDiv = document.createElement('div');
    const icons =  {
        success: "fa-solid fa-circle-check",
        error: "fa-solid fa-circle-xmark",
        info: "fa-solid fa-circle-info",
        warning: "fa-solid fa-circle-exclamation",


    }
    createDiv.classList.add('toast', `btn--${type}`);
    createDiv.innerHTML = `
            <div class="toast__main">
                <div class="btn__icon">
                    <i class="${icons[type]}"></i>
                </div>
                <div class="toast__body">
                    <h3 class="btn__title">${title}</h3>
                    <p class="btn__msg">${message}</p>
                </div>
                <div class="btn__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="inline-execute"></div>
    `;
    listToast.appendChild(createDiv);
    
    let executeElement = createDiv.querySelector('.inline-execute');
    let btnClose = createDiv.querySelector('.btn__close');

    let isCheckitem = createDiv.animate([
        {opacity: "1"},
        {opacity: "0"}
    ], {
        duration: 1000,
        iterations: 1,
        fill: 'forwards'
    })
    isCheckitem.pause();
    
    let isAnimation = executeElement.animate([
        {width: "100%"},
        {width: "0%"},
    ], {
        duration: duration,
        iterations: 1,
        fill: 'forwards'
    })

    btnClose.addEventListener('click', () => {
        createDiv.remove()
    })
    
    createDiv.addEventListener('mouseover', () => {
        isAnimation.pause();
    })

    createDiv.addEventListener('mouseout', () => {
        isAnimation.playbackRate = 3;
        isAnimation.play()
    })

    isAnimation.onfinish = () => {
        isCheckitem.play()
        isCheckitem.onfinish = () => {
            createDiv.remove()
        }
    }

}
onresize = () => {
    if(window.innerWidth <= 760) {
        let listToast = document.querySelector('.list-toast')
        listToast.style.top = '250px';
    } else {
        listToast.style.top = '32px';
    }
    
}
function showSuccessToast() {
    toast({
        title: "Success",
        message: "Đăng ký tài khoản thành công",
        type: "success",
        duration: 8000,
    })
}
function showErrorToast() {
    toast({
        title: "Error",
        message: "Đăng ký tài khoản thất bại",
        type: "error",
        duration: 8000,
    })
}
function showWarningToast() {
    toast({
        title: "Warning",
        message: "Hiện chức năng đăng ký tài khoản hiện đang bảo trì",
        type: "warning",
        duration: 8000,
    })
}
function showInfoToast() {
    toast({
        title: "Info",
        message: "Có câu hỏi thắc mắc về việc đăng ký xin liên hệ với BQT",
        type: "info",
        duration: 8000,
    })
}