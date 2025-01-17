class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = '#2563eb';
        this.alpha = Math.random() * 0.3 + 0.1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > this.canvas.width) this.x = 0;
        if (this.x < 0) this.x = this.canvas.width;
        if (this.y > this.canvas.height) this.y = 0;
        if (this.y < 0) this.y = this.canvas.height;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${this.alpha})`;
        ctx.fill();
    }
}

class ParticleBackground {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.numberOfParticles = this.getOptimalParticleCount();
        
        this.init();
        this.animate();
    }

    getOptimalParticleCount() {
        const width = window.innerWidth;
        if (width <= 480) return 20;
        if (width <= 768) return 30;
        return 50;
    }

    init() {
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.zIndex = '-1';
        this.canvas.style.pointerEvents = 'none';
        document.body.prepend(this.canvas);

        this.resize();
        window.addEventListener('resize', () => this.resize());

        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this.canvas));
        }

        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.resize();
                const newCount = this.getOptimalParticleCount();
                if (newCount !== this.particles.length) {
                    this.particles = [];
                    for (let i = 0; i < newCount; i++) {
                        this.particles.push(new Particle(this.canvas));
                    }
                }
            }, 100);
        });
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.update();
            particle.draw(this.ctx);
        });

        requestAnimationFrame(() => this.animate());
    }
}

class RippleEffect {
    constructor() {
        this.ripples = [];
        this.isMobile = 'ontouchstart' in window;
        this.init();
    }

    init() {
        if (this.isMobile) {
            document.addEventListener('touchstart', (e) => {
                const touch = e.touches[0];
                this.createRipple(touch.clientX, touch.clientY);
            });
        } else {
            document.addEventListener('click', (e) => {
                this.createRipple(e.clientX, e.clientY);
            });
        }
    }

    createRipple(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple';
        document.body.appendChild(ripple);

        const rect = {
            top: y - 50,
            left: x - 50,
        };
        
        ripple.style.top = `${rect.top}px`;
        ripple.style.left = `${rect.left}px`;

        const duration = this.isMobile ? 600 : 1000;
        setTimeout(() => {
            ripple.remove();
        }, duration);
    }
}

if ('loading' in document.createElement('img')) {
    document.querySelectorAll('img').forEach(img => {
        img.loading = 'lazy';
    });
}

const isLowEnd = () => {
    const memory = navigator.deviceMemory;
    if (memory && memory <= 4) return true;
    
    const connection = navigator.connection;
    if (connection && (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
        return true;
    }
    
    return false;
};

window.addEventListener('load', () => {
    if (isLowEnd()) {
        const background = new ParticleBackground();
        background.numberOfParticles = Math.floor(background.numberOfParticles * 0.6);
    } else {
        new ParticleBackground();
    }
    new RippleEffect();
});
