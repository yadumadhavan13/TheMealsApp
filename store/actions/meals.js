export const TOGGLE_FAVOURITE = "TOGGLE_FAVOURITE";
export const SET_FILERS = "SET_FILERS";

export const toggleFavourite = (id) => {
  return { type: TOGGLE_FAVOURITE, mealId: id };
};

export const setFilters = (filterSettings) => {
  return { type: SET_FILERS, filters: filterSettings };
};
