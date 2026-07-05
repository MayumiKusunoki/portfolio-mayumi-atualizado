// menu responsivo
const menu = document.querySelector(".menu");
const botaoMenu = document.querySelector(".menu-btn");

if (botaoMenu && menu) {
    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("ativo");
    });
}

//tema claro e escuro: alterna as cores do site
const tema = document.getElementById("tema");

if (tema) {
    tema.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        tema.textContent = document.body.classList.contains("dark-mode")
            ? "☀️"
            : "🌙";
    });
}


//validação do formulário: mostra que o formulário foi enviado com sucesso
const formulario = document.getElementById("formContato");

if (formulario) {
    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome) return alert("Digite seu nome.");
        if (!email) return alert("Digite seu e-mail.");
        if (!mensagem) return alert("Digite uma mensagem.");

        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) return alert("Digite um e-mail válido.");

        alert("Mensagem enviada com sucesso 💜");
        formulario.reset();
    });
}


//cria um botãozinho que volta ao topo da página
const topo = document.getElementById("topo");

if (topo) {
    window.addEventListener("scroll", () => {
        topo.style.display = window.scrollY > 300 ? "block" : "none";
    });

    topo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


//animação de rolar a página
const elementos = document.querySelectorAll(".animar");

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("mostrar");
        }
    });
});

elementos.forEach((el) => observador.observe(el));