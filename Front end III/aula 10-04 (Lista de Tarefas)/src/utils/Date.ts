export const Data = () => {
  const data = new Date();

  return data.toLocaleDateString("pt-br", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};

export const GerarID = () => {
  return `${new Date().getTime()}`;
};
