const formulario = document.getElementById("contatoForm");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    mensagem.textContent = `Mensagem enviada com sucesso! Obrigado pelo contato, ${nome}.`;
    mensagem.classList.add("mostrar");

    setTimeout(() => {
        mensagem.classList.remove("mostrar");
    }, 3000);

    formulario.reset();
});