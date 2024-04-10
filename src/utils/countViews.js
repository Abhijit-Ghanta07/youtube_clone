const countViews = (k) => {
  const divid = parseInt(k) / 1000;
  return Math.ceil(divid);
};

export { countViews };
