import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  var color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge size="lg" paddingX={2} colorPalette={color} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default CriticScore;
