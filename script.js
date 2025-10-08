// Informações detalhadas dos carros
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

document.querySelectorAll('.product').forEach(card => {
    card.addEventListener('click', function() {
        // Identifica qual modelo foi clicado
        let model = card.dataset.model;
        // Corrigindo possível erro de digitação em 'regera'
        if(model === "regera") model = "regara";
        // Pega os dados
        const details = carDetails[model];
        if(details) {
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

// Fecha o modal
document.getElementById('closeModal').onclick = function() {
    document.getElementById('carModal').style.display = 'none';
};
window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) modal.style.display = 'none';
};