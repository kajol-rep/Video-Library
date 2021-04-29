export const CheckIfVideoExistsInList = (list, videoid) =>
  list.some(({ id }) => id === videoid);

export const checkIfVideoIsAddedToPlaylist = (list, videoid) =>
  list.some((id) => id === videoid);

export const videoURL = (id) => `https://www.youtube.com/watch?v=${id}`;
export const thumbnailURL = (id) =>
  `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export const iconSize = "1.5rem";

export const formatString = (value) => {
  const str = value;
  return str.length > 54 ? str.substr(0, 54) + "..." : str.substr(0, 54);
};
export const formatNumber = (value) => {
  const num = Number(value);
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "K"
    : Math.sign(num) * Math.abs(num);
};

export const formatDate = (date) => {
  const dateVal = new Date(date);
  return dateVal.toDateString().substring(4);
};
