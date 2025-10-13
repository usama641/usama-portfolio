// utils/experienceCalculator.js
export const calculateExperience = () => {
  const startDate = "2022-02-01";
  const today = new Date();
  const start = new Date(startDate);

  let years = today.getFullYear() - start.getFullYear();
  let months = today.getMonth() - start.getMonth();
  let days = today.getDate() - start.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += previousMonth.getDate();
    months--;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return `${years}.${months}`;
};
