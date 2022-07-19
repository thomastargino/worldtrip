import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Cities from "../../components/Cities";
import ContentInfo from "../../components/ContentInfo";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";

export default function Europe() {
	return (
		<Flex direction="column">
			<Head>
				<title>WorldTrip - Europe</title>
			</Head>

			<Header />
			<ContinentBanner />

			<Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
				<ContentInfo />
				<Cities />
			</Flex>
		</Flex>
	)
}
