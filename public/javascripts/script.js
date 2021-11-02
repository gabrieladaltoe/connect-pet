const modalLoginContent = document.querySelector('.md-login')
const modalSubscribeContent = document.querySelector('.md-subscribe')

// Btn Enviar e verifica senha
let enviar = document.getElementById('btn_enviar')  
let senha = document.getElementById('senha_cad')
let senha_confirm = document.getElementById('senha_confirm_cad')

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

enviar.addEventListener('click', function(event){
    if(senha !== senha_confirm){
        console.log('senha não confere');
        alert('senha não confere');
    }
    event.preventDefault();
})