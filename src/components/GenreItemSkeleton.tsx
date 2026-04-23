import {
  HStack,
  ListItem,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreItemSkeleton = () => {
  return (
    <ListItem paddingY={"5px"}>
      <HStack>
        <SkeletonCircle size="10" />
        <SkeletonText width={"100px"} noOfLines={1} />
      </HStack>
    </ListItem>
  );
};

export default GenreItemSkeleton;
