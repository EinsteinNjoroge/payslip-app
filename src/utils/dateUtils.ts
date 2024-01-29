export const formatDate = (dateStr: string) => {
  const dateObj = new Date(dateStr);
  return `${dateObj.toLocaleDateString("en-US", {
    month: "long",
  })} ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
};

export const formatMonthAndYear = (dateStr: string) => {
  const date = new Date(dateStr);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  return `${month} ${year}`;
};

export const isNewYear = (date: string) => date.includes("-01");
