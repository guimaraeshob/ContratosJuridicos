window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('popup').classList.remove('hidden');
    }, 300); // atraso leve para suavidade
  });

  function closePopup() {
    document.getElementById('popup').classList.add('hidden');
  }