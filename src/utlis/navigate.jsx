// utils/navigate.js
let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (to, options) => {
  if (navigator) {
    navigator(to, options);
  }
};
