// Função para verificar e aplicar o modo salvo no localStorage
function applySavedMode() {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('btnToggleDarkMode').textContent = 'Modo Claro';
    } else {
        document.body.classList.remove('light-mode');
        document.getElementById('btnToggleDarkMode').textContent = 'Modo Escuro';
    }
}

// Aplicar modo salvo ao carregar a página
applySavedMode();

// Evento para o botão "Saiba Mais"
document.getElementById('btnSaibaMais').addEventListener('click', () => {
    const title = document.querySelector('#home h1') || document.createElement('h1');
    if (!document.querySelector('#home h1')) {
        title.textContent = 'Bem-vindo à Koenigsegg';
        title.style.color = '#ffffff';
        title.style.textAlign = 'center';
        title.style.marginBottom = '20px';
        document.querySelector('.gif-banner').prepend(title);
    }
    title.textContent = 'Você está pronto para começar!';
    title.style.color = '#ff5733';
    const button = document.getElementById('btnSaibaMais');
    button.style.backgroundColor = '#28a745';
    button.textContent = 'Vamos lá!';
});

// Eventos para os botões "Ver Mais" dos produtos
document.querySelectorAll('.btnVerMais').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Impede que o clique no botão acione o evento do produto
        const product = button.closest('.product');
        const model = product.dataset.model;
        let name = '';
        if (model === 'regera') name = 'Koenigsegg Regera';
        else if (model === 'jesko') name = 'Koenigsegg Jesko';
        else if (model === 'gemera') name = 'Koenigsegg Gemera';
        alert(`Nome do produto: ${name}`);
    });
});

// Evento para o botão "Adicionar Produto"
document.getElementById('btnAddProduto').addEventListener('click', () => {
    const productsGrid = document.getElementById('productsGrid');
    const newProduct = document.createElement('div');
    newProduct.classList.add('product');
    newProduct.dataset.model = 'agera';
    newProduct.innerHTML = `
        <img src="img/card4.jpg" alt="Koenigsegg Agera">
        <button class="btnVerMais">Ver Mais</button>
    `;
    productsGrid.appendChild(newProduct);

    // Adicionar evento ao novo botão "Ver Mais"
    newProduct.querySelector('.btnVerMais').addEventListener('click', (e) => {
        e.stopPropagation();
        alert('Nome do produto: Koenigsegg Agera');
    });

    // Adicionar evento ao novo produto para modal (se necessário)
    newProduct.addEventListener('click', function() {
        // Lógica para modal, se quiser adicionar detalhes para o novo produto
    });
});

// Evento para o botão de alternar modo escuro/claro
document.getElementById('btnToggleDarkMode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('darkMode', isLight ? 'light' : 'dark');
    document.getElementById('btnToggleDarkMode').textContent = isLight ? 'Modo Claro' : 'Modo Escuro';
});

// Informações detalhadas dos carros (movido do inline script)
const carDetails = {
    regara: {
        name: "Koenigsegg Regera",
        desc: "O Koenigsegg Regera é um hipercarro híbrido plug-in sueco projetado para desempenho extremo e luxo absoluto.",
        list: [
            "0-100 km/h: 2.8s",
            "Potência: 1.500 cv (combinação motor V8 + motores elétricos)",
            "Velocidade máxima: 410 km/h",
            "Torque: 2.000 Nm",
            "Transmissão: Direct Drive (KDD)",
            "Peso: 1.590 kg",
            "Produção limitada: 80 unidades"
        ]
    },
    jesko: {
        name: "Koenigsegg Jesko",
        desc: "O Koenigsegg Jesko é voltado para pista, com foco absoluto em aerodinâmica, velocidade e precisão.",
        list: [
            "0-100 km/h: 2.6s",
            "Potência: 1.280 cv (gasolina) / 1.600 cv (E85)",
            "Velocidade máxima: +480 km/h (estimada)",
            "Torque: 1.500 Nm",
            "Transmissão: Light Speed Transmission (LST) de 9 marchas",
            "Peso: 1.420 kg",
            "Produção limitada: 125 unidades"
        ]
    },
    gemera: {
        name: "Koenigsegg Gemera",
        desc: "O Koenigsegg Gemera é o primeiro Mega-GT do mundo, leva até quatro pessoas com desempenho de hipercarro.",
        list: [
            "0-100 km/h: 1.9s",
            "Potência: 1.700 cv (combinação motor 3 cilindros + motores elétricos)",
            "Velocidade máxima: 400 km/h",
            "Torque: 3.500 Nm",
            "Transmissão: Single Speed Koenigsegg Direct Drive",
            "Peso: 1.850 kg",
            "Produção limitada: 300 unidades"
        ]
    }
};

// Eventos para os produtos (modal)
document.querySelectorAll('.product').forEach(card => {
    card.addEventListener('click', function() {
        let model = card.dataset.model;
        if (model === "regera") model = "regara";
        const details = carDetails[model];
        if (details) {
            document.getElementById('modalDetails').innerHTML = `
                <h3>${details.name}</h3>
                <p>${details.desc}</p>
                <ul>
                    ${details.list.map(item => `<li>${item}</li>`).join('')}
                </ul>
            `;
            document.getElementById('carModal').style.display = 'flex';
        }
    });
});

// Fechar modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('carModal').style.display = 'none';
};
window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) modal.style.display = 'none';
};
