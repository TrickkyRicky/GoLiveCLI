import {VStack, HStack, Center, Heading, Text} from 'native-base';
import React from 'react';

const Comments = ({name, comment, width}) => {
  return (
    <VStack>
      <HStack pl={3} py={3} alignItems="center">
        <Center bg={`#2B6FFF`} width={9} height={9} borderRadius={100} />
        <VStack alignItems="flex-start" ml={2}>
          <Heading
            color="#6C757D"
            size="sm"
            fontWeight={800}
            isTruncated={true}
            w={width * 0.4}>
            {name}
          </Heading>
          <Text color="#ADB5BD" fontSize="sm" fontWeight={300}>
            {comment}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Comments;
