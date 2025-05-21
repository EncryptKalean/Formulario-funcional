let emailReceber = "",
    formLink = document.querySelector('#emailParaReceber');

while (!emailReceber){
    emailReceber = prompt('Informe o e-mail para onde deseja receber o formulário').trim();
    if(emailReceber != ""){
        formLink.setAttribute("action", `https://formsubmit.co/${emailReceber}`)
        alert("Seu e-mail está registrado como: " + emailReceber)
        alert("Se seu e-mail estiver errado, atualize a pagina")
    }
}