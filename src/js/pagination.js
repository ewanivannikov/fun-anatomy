export const pagination = ({total, current}) => {
  const BUTTONS_AMT = 5;
  const totalPages = total/15;
  return {
    pages:[
      {index: 1},
      {index: current <= 2 ? 2 : "..."},
      {index: (current <= 2) ? 3 : current > totalPages - 1 ? totalPages - 2 : current},
      {index: current === totalPages ? totalPages - 1 : "..."},
      {index: totalPages}
    ],
    current,
    totalCount:total,
    totalPages
  };
};
