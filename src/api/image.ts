const apiImage = 'https://coffee.alexflipnote.dev/random.json';

const getImage = async () => {
  const response = await fetch(apiImage);
  const data = await response.json();
  return data;
};

export default {
  getImage,
};
