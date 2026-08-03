document.querySelectorAll('.character').forEach((character) => {
  character.addEventListener('click', () => {
    character.classList.remove('squish');
    void character.offsetWidth;
    character.classList.add('squish');

    const eyes = character.querySelectorAll('.eye');
    eyes.forEach((e) => e.classList.add('happy'));
    setTimeout(() => {
      eyes.forEach((e) => e.classList.remove('happy'));
    }, 900);

    for (let i = 0; i < 10; i++) {
      const s = document.createElement('span');
      s.className = 'burst';
      const angle = Math.random() * Math.PI * 2;
      const dist = 50 + Math.random() * 70;
      s.style.setProperty('--tx', `${Math.cos(angle) * dist}px`);
      s.style.setProperty('--ty', `${Math.sin(angle) * dist}px`);
      s.style.top = '50%';
      s.style.left = '50%';
      s.style.background = ['#ff6fa5', '#ffd23f', '#3fe0c5', '#fff'][i % 4];
      character.appendChild(s);
      requestAnimationFrame(() => s.classList.add('go'));
      setTimeout(() => s.remove(), 750);
    }
  });
});
