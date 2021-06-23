let nome = document.querySelector("#validationCustom01")
let sobrenome = document.querySelector("#validationCustom02")
let email = document.querySelector("#inputGroupPrepend")
let nomeOk = false
let sobrenomeOk = false
let emailOk = false

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaSobrenome() {
    let txt = document.querySelector("#txtSobrenome")
    if (nome.value.length < 3) {
        txt.innerHTML = "Sobrenome Inválido"
        txt.style.color = "red"
    } else {
        txtNome.innerHTML = "Sobrenome Válido"
        txtNome.style.color = "green"
        sobrenomeOk = true
    }
}


function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar.")
    }
}