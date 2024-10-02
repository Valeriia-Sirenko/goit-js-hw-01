function getElementWidth(content, padding, border) {
  // Витягуємо числові значення з рядків
  const contentWidth = parseFloat(content); // Ширина контенту
  const paddingWidth = parseFloat(padding) * 2; // Подвоюємо для обох сторін
  const borderWidth = parseFloat(border) * 2; // Подвоюємо для обох сторін

  // Обчислюємо загальну ширину
  const totalWidth = contentWidth + paddingWidth + borderWidth;

  return totalWidth; // Повертаємо загальну ширину
}

// Перевірка
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
