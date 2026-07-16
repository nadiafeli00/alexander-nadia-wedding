export const formatDate = (date: Date, format: string = 'MMM DD, YYYY'): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  return date.toLocaleDateString('en-US', options);
};

export const getWeddingCountdown = (weddingDate: Date) => {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  return days > 0 ? days : 0;
};
