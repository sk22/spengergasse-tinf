document.addEventListener('DOMContentLoaded', () => {
  const buttons = Array.from(document.getElementsByTagName('input'));
  const output = document.getElementById('display');

  const clear = () => output.textContent = '';
  const addText = value => output.textContent += value;
  const setText = value => output.textContent = value;

  const getFunction = func => {
    switch (func) {
      case 'ln': return 'log';
      default: return func;
    }
  }

  const getStatement = (func, value) => {
    const mathFunc = getFunction(func);
    if (func === 'pow') return `Math.${mathFunc}(${value}, ${value})`;
    return `Math.${mathFunc}(${value})`;
  }

  const calculate = func => {
    if (!output.textContent.length) return clear();
    const result = eval(output.textContent);
    setText(result);
    if (func) {
      setText(getStatement(func, output.textContent));
      calculate();
    }
  }

  const clickButton = event => {
    if (!(event.srcElement instanceof HTMLInputElement)) return;
    const value = event.srcElement.getAttribute('value');
    if (value === 'C') return clear();
    if (value === '=') return calculate();
    if (['sqrt', 'pow', 'ln'].includes(value)) return calculate(value);
    addText(value);
  }

  buttons.forEach(button => addEventListener('click', clickButton));
});
