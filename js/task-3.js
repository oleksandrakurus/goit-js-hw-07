document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#name-input');
    const output = document.querySelector('#name-output');
  
    input.addEventListener('input', (e) => {
      const name = e.target.value.trim();
      output.textContent = name === '' ? 'Anonymous' : name;
    });
  });