


  
        document.addEventListener('DOMContentLoaded', function() {
            const sections = document.querySelectorAll('.page-section');
            const navLinks = document.querySelectorAll('.nav-link');
            const allPageLinks = document.querySelectorAll('.page-link');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            // Função para mostrar a página correta
            function showPage(pageId) {
                if (!pageId) pageId = 'home'; // Página padrão

                // Oculta todas as seções
                sections.forEach(section => {
                    section.classList.add('hidden');
                });

                // Mostra a seção alvo
                const activePage = document.getElementById(pageId);
                if (activePage) {
                    activePage.classList.remove('hidden');
                    activePage.classList.add('page-fade-in');
                }

                // Atualiza o estado ativo nos links de navegação
                navLinks.forEach(link => {
                    if (link.dataset.page === pageId) {
                        link.classList.add('text-start-gold-light', 'font-semibold');
                    } else {
                        link.classList.remove('text-start-gold-light', 'font-semibold');
                    }
                });

                // Fecha o menu mobile após a navegação
                mobileMenu.classList.add('hidden');
                
                // Rola para o topo da página
                window.scrollTo(0, 0);
            }

            // Manipulador de clique para TODOS os links de página
            allPageLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const pageId = link.dataset.page;
                    // Atualiza o hash na URL
                    window.location.hash = pageId;
                });
            });

            // Manipulador para o botão do menu mobile
            mobileMenuButton.addEventListener('click', function() {
                mobileMenu.classList.toggle('hidden');
            });

            // Função para lidar com a mudança de hash (botão voltar/avançar, links)
            function handleHashChange() {
                const pageId = window.location.hash.substring(1) || 'home';
                showPage(pageId);
            }

            // Ouve por mudanças no hash
            window.addEventListener('hashchange', handleHashChange);

            // Mostra a página inicial correta no carregamento
            handleHashChange();
        });