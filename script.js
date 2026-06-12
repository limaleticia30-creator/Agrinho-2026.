// Dados Dinâmicos baseados no seu cartaz
const ideias = [
    {
        titulo: "Robôs Agrícolas",
        descricao: "Máquinas inteligentes que ajudam no plantio, na colheita e no cuidado das plantações.",
        icon: "fa-solid fa-robot"
    },
    {
        titulo: "Drones",
        descricao: "Usados para monitorar as plantações, identificar pragas e analisar o solo.",
        icon: "fa-solid fa-drone"
    },
    {
        titulo: "Fazendas Inteligentes",
        descricao: "Fazendas conectadas com sensores que controlam a irrigação, a temperatura e os nutrientes.",
        icon: "fa-solid fa-seedling"
    },
    {
        titulo: "Inteligência Artificial",
        descricao: "Sistemas que analisam dados e ajudam os produtores a tomar decisões mais precisas.",
        icon: "fa-solid fa-brain"
    },
    {
        titulo: "Cidades Sustentáveis",
        descricao: "Cidades integradas ao campo usando energia limpa e práticas que preservam a natureza.",
        icon: "fa-solid fa-city"
    }
];

const faqs = [
    {
        q: "Como a tecnologia ajuda o meio ambiente?",
        a: "Através da aplicação precisa de recursos (água e insumos), evitando desperdícios e contaminação do solo."
    },
    {
        q: "O que é agro sustentável?",
        a: "É o sistema de produção que atende às necessidades atuais sem comprometer a capacidade das gerações futuras."
    }
];

// Renderização do Carrossel
const carouselContainer = document.getElementById('carousel-container');
ideias.forEach(ideia => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <i class="${ideia.icon}"></i>
        <h3>${ideia.titulo}</h3>
        <p>${ideia.descricao}</p>
    `;
    carouselContainer.appendChild(card);
});

// Lógica do Carrossel
let index = 0;
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

function moveCarousel() {
    const cardWidth = document.querySelector('.card').offsetWidth + 20;
    carouselContainer.style.transform = `translateX(${-index * cardWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < ideias.length - 1) { index++; moveCarousel(); }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) { index--; moveCarousel(); }
});

// Renderização do Acordeão
const accordionContainer = document.getElementById('faq-accordion');
faqs.forEach((faq, i) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
        <button class="accordion-header">
            ${faq.q} <i class="fa-solid fa-plus"></i>
        </button>
        <div class="accordion-content">
            <p style="padding: 20px">${faq.a}</p>
        </div>
    `;
    accordionContainer.appendChild(item);
});

// Lógica do Acordeão
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isOpen = content.style.maxHeight !== "0px" && content.style.maxHeight !== "";
        
        document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = "0px");
        content.style.maxHeight = isOpen ? "0px" : content.scrollHeight + "px";
    });
});

// Acessibilidade: Fonte e Contraste
const body = document.body;
let fontSize = 16;

document.getElementById('font-increase').addEventListener('click', () => {
    if (fontSize < 24) {
        fontSize += 2;
        document.documentElement.style.fontSize = fontSize + 'px';
    }
});

document.getElementById('font-decrease').addEventListener('click', () => {
    if (fontSize > 12) {
        fontSize -= 2;
        document.documentElement.style.fontSize = fontSize + 'px';
    }
});

document.getElementById('contrast-toggle').addEventListener('click', () => {
    body.classList.toggle('high-contrast');
});