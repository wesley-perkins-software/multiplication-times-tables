// Lightweight canvas confetti burst for correct answers.
// Respects prefers-reduced-motion and cleans up after itself.
export function launchConfetti() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const COLORS = ['#6366f1', '#f59e0b', '#10b981', '#ef4444', '#3b82f6', '#ec4899', '#84cc16'];
  const DURATION = 1500;
  const COUNT = 72;

  // Burst from the vertical centre of the viewport — roughly where the problem card lives.
  const originX = canvas.width / 2;
  const originY = canvas.height * 0.38;

  const particles = Array.from({ length: COUNT }, () => ({
    x: originX + (Math.random() - 0.5) * 60,
    y: originY,
    vx: (Math.random() - 0.5) * 16,
    vy: -(Math.random() * 12 + 4),
    r: Math.random() * 5 + 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    spin: (Math.random() - 0.5) * 0.35,
    angle: Math.random() * Math.PI * 2,
  }));

  const startTime = performance.now();
  let frame;

  function draw(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / DURATION, 1);

    if (progress >= 1) {
      cancelAnimationFrame(frame);
      canvas.remove();
      return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.45; // gravity
      p.angle += p.spin;

      ctx.save();
      ctx.globalAlpha = Math.max(0, 1 - progress * 1.5);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      ctx.restore();
    });

    frame = requestAnimationFrame(draw);
  }

  frame = requestAnimationFrame(draw);
}
