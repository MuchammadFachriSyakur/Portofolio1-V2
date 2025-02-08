const startYear = 2023;
const currentYear = new Date().getFullYear();
document.getElementById("year-range").textContent =
  currentYear > startYear ? `${startYear} - ${currentYear}` : startYear;
