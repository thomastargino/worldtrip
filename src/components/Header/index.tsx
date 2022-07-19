import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import { RiArrowLeftSLine } from 'react-icons/ri'
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
	const { asPath } = useRouter()
	const notHomePage = asPath !== '/'

	return (
		<Flex bg="white" as="header" w="100%" h={["50px","100px"]} mx="auto" px="1rem" justifyContent="center" alignItems="center">
			<Grid
				w="100%"
				h="100%"
				mx="auto"
				maxW="1160px"
				alignItems="center"
				justifyContent="center"
				alignSelf="start"
				templateColumns="repeat(3, 1fr)"
			>
				{notHomePage && (
					<Link href="/">
						<a>
							<Icon as={RiArrowLeftSLine} fontSize={[20,40]} justifySelf="start" />
						</a>
					</Link>
				)}
				<Image
					w={["81px","184px"]}
					justifySelf="center"
					gridColumn="2"
					src="/Logo.svg"
					alt="Logo WorldTrip"
				/>
			</Grid>
		</Flex>
  	);
}
