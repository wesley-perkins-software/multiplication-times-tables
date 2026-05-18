export function launchConfetti(): void {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) { canvas.remove(); return; }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#ec4899', '#84cc16'];
  const DURATION = 1000;
  const COUNT = 28;

  const originX = canvas.width / 2;
  const originY = canvas.height * 0.38;

  interface Particle {
    x: number; y: number;
    vx: number; vy: number;
    r: number; color: string;
    spin: number; angle: number;
  }

  const particles: Particle[] = Array.from({ length: COUNT }, () => ({
    x: originX + (Math.random() - 0.5) * 30,
    y: originY,
    vx: (Math.random() - 0.5) * 7,
    vy: -(Math.random() * 5 + 2),
    r: Math.random() * 3 + 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)]!,
    spin: (Math.random() - 0.5) * 0.2,
    angle: Math.random() * Math.PI * 2,
  }));

  const startTime = performance.now();
  let frame: number;

  function draw(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / DURATION, 1);

    if (progress >= 1) {
      cancelAnimationFrame(frame);
      canvas.remove();
      return;
    }

    ctx!.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45;
      p.angle += p.spin;

      ctx!.save();
      ctx!.globalAlpha = Math.max(0, 1 - progress * 1.5);
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.angle);
      ctx!.fillStyle = p.color;
      ctx!.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      ctx!.restore();
    });

    frame = requestAnimationFrame(draw);
  }

  frame = requestAnimationFrame(draw);
}
