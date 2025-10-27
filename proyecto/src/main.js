window.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.value;
      const action = button.dataset.action;

      if (action === 'clear') {
        display.value = '';
      } 
      else if (action === 'delete') {
        display.value = display.value.slice(0, -1);
      } 
      else if (action === 'calculate') {
        try {
          display.value = eval(display.value) || '';
        } catch {
          display.value = 'Error';
        }
      } 
      else if (value) {
        display.value += value;
      }
    });
  });
});
