import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url: string) => {
  if (url === null || url === "") return noImage;

  const target = "/media";
  const firstIndex = url.indexOf(target) + "/media".length;
  const secondIndex = url.indexOf(target, firstIndex + 1) + "/media".length;
  return url.slice(0, secondIndex) + "/crop/600/400" + url.slice(secondIndex);
};

export default getCroppedImageUrl;
