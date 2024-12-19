// Scroll suave ao clicar nos links do menu de navegação
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Destacar o link ativo no menu baseado na secção visível
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Ajuste para compensar o menu fixo
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Verificar se está no final da página para destacar a última secção (Contactos)
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        current = 'contacto';
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Funcionalidade para o botão "Voltar ao Topo"
document.querySelector('#voltar-topo').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mostrar ou ocultar o botão "Voltar ao Topo" ao rolar a página
window.addEventListener('scroll', function () {
    const btnTopo = document.querySelector('#voltar-topo');
    if (window.scrollY > 200) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});