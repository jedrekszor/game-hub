import meh from "../assets/emojis/meh.webp";
import thumbs from "../assets/emojis/thumbs-up.webp";
import bullseye from "../assets/emojis/bulls-eye.webp";
import { Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbs, alt: "recommended", boxSize: "25px" },
    5: { src: bullseye, alt: "exceptional", boxSize: "35px" },
  };
  var emoji = meh;
  if (rating >= 80) emoji = bullseye;
  else if (rating >= 65) emoji = thumbs;
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
