export function formatStartDate(startDate) {
  if (!startDate) return null;
  const [year, month] = startDate.split('-').map(Number);
  return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

export function getDuration(startDate) {
  if (!startDate) return null;
  const start = new Date(startDate + '-01');
  const now = new Date();
  const months =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  if (months < 1) return '< 1 month';
  if (months < 12) return `${months} month${months !== 1 ? 's' : ''}`;
  const years = Math.floor(months / 12);
  const rem = months % 12;
  return rem ? `${years} yr ${rem} mo` : `${years} year${years !== 1 ? 's' : ''}`;
}
