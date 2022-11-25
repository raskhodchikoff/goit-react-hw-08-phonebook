import { Box } from './../components/Box';

export default function Home() {
  return (
    <Box
      as="div"
      mx="auto"
      width="760px"
      mt={6}
      py={3}
      bg="mainBgr"
      border="m"
      borderRadius="m"
      borderColor="greyBorder"
      boxShadow="shadow"
    >
      <Box fontWeight={700} fontSize={24} textAlign="center">
        Convenient service of your telephone contacts
      </Box>
    </Box>
  );
}
