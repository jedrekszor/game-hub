const croppedImageUrl = (url: string) => {
  const target = "/games";
  const index = url.indexOf(target);
  const temp = url.slice(0, index) + "/crop/600/400" + url.slice(index);
  console.log(temp);
  return temp;
};

export default croppedImageUrl;
