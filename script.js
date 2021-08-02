const modalLoginContent = document.querySelector('.md-login')
const modalSubscribeContent = document.querySelector('.md-subscribe')

const ModalLogin = {
    
    open() {
        modalLoginContent.classList.add('active')
    },
    close() {
        modalLoginContent.classList.remove('active')
    }
}


const ModalSubscribe = {
    
    open() {
        modalSubscribeContent.classList.add('active')
    },
    close() {
        modalSubscribeContent.classList.remove('active')
    }
}