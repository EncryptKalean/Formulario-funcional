function solicitarEmail() {
    let email = prompt("Informe o e-mail para onde deseja receber o formulário:");

    if (email === null) {
        alert("Operação cancelada.");
        return null;
    }

    email = email.trim();

    if (email === "") {
        alert("E-mail inválido. Tente novamente.");
        return solicitarEmail();
    }

    return email;
}

const emailReceber = solicitarEmail();
if (emailReceber) {
    const form = document.querySelector('form');
    form.setAttribute("action", `https://formsubmit.co/${emailReceber}`);
    alert("Seu e-mail está registrado como: " + emailReceber);
}
