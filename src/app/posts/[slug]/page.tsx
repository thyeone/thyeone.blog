import ChakraMotion from "@/components/ChakraMotion";
import Giscus from "@/components/Giscus";
import PostBodyMDX from "@/components/PostBody";
import { fadeIn, staggerTwo } from "@/constants/motions";
import { getPostDetail } from "@/lib/post";
import Calendar from "@/svgs/Calendar";
import Clock from "@/svgs/Clock";
import { Box, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/react";
import dayjs from "dayjs";
import Image from "next/image";

export const generateMetadata = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const post = await getPostDetail("posts", slug);

  return {
    title: post.title,
    description: post.description,
  };
};

export default async function PostDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const post = await getPostDetail("posts", slug);

  return (
    <ChakraMotion variants={staggerTwo} initial="hidden" animate="visible">
      <ChakraMotion variants={fadeIn}>
        <Stack
          align="center"
          justify="center"
          className="relative backdrop-blur-sm px-36 min-h-250 rounded-xl overflow-hidden h-fit p-24 lg:p-36"
        >
          <Heading as="h2" className="z-10 mb-4 text-center break-all">
            {post.title}
          </Heading>
          <Text
            fontSize="sm"
            zIndex="10"
            fontWeight={600}
            textAlign="center"
            mb={6}
          >
            {post.description}
          </Text>
          <Flex position="absolute" bottom={6} align="center" className="z-10">
            <Calendar width={12} height={12} />
            <Text fontSize="sm" fontWeight={500} zIndex="10" marginX={1}>
              {dayjs(post.date).format("YYYY-MM-DD")} |
            </Text>
            <Clock width={12} height={12} />
            <Text fontSize="sm" fontWeight={500} marginX={1} zIndex="10">
              {post.readingMinutes}분
            </Text>
          </Flex>
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              fill
              objectFit="cover"
              alt=""
              className="blur-[10px] opacity-70"
            />
          ) : (
            <Box
              pos="absolute"
              bg="teal"
              opacity={0.05}
              _dark={{
                bg: "white",
              }}
              className="glass size-full "
            />
          )}
        </Stack>
      </ChakraMotion>
      <ChakraMotion variants={fadeIn}>
        <PostBodyMDX content={post.content} />
      </ChakraMotion>
      <Spacer boxSize={100} />
      <Giscus />
    </ChakraMotion>
  );
}
