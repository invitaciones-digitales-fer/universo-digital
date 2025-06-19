   // Generar estrellas
        function createStars() {
            const starsContainer = document.getElementById('stars');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = star.style.height = Math.random() * 3 + 1 + 'px';
                star.style.animationDelay = Math.random() * 2 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Generar partículas
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // Crear conexiones dinámicas entre nodos IA
        function createConnections() {
            const aiNodes = document.querySelectorAll('.ai-node');
            aiNodes.forEach((node, index) => {
                if (index < aiNodes.length - 1) {
                    const connection = document.createElement('div');
                    connection.className = 'connection';
                    
                    const rect1 = node.getBoundingClientRect();
                    const rect2 = aiNodes[index + 1].getBoundingClientRect();
                    
                    const x1 = rect1.left + rect1.width / 2;
                    const y1 = rect1.top + rect1.height / 2;
                    const x2 = rect2.left + rect2.width / 2;
                    const y2 = rect2.top + rect2.height / 2;
                    
                    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
                    
                    connection.style.width = length + 'px';
                    connection.style.left = x1 + 'px';
                    connection.style.top = y1 + 'px';
                    connection.style.transform = `rotate(${angle}deg)`;
                    connection.style.transformOrigin = '0 0';
                    connection.style.animationDelay = index * 0.5 + 's';
                    
                    document.querySelector('.ai-nodes').appendChild(connection);
                }
            });
        }

        // Inicializar
        createStars();
        createParticles();
        
        // Crear conexiones después de un pequeño delay para que los elementos se posicionen
        setTimeout(createConnections, 100);

        // Efecto de hover en satélites
        document.querySelectorAll('.satellite').forEach(satellite => {
            satellite.addEventListener('mouseenter', function() {
                this.style.transform += ' scale(1.2)';
                this.style.boxShadow = '0 0 20px rgba(255,255,255,0.8)';
            });
            
            satellite.addEventListener('mouseleave', function() {
                this.style.transform = this.style.transform.replace(' scale(1.2)', '');
                this.style.boxShadow = 'none';
            });
        });