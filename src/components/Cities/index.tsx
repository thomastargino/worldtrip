import { Grid, Heading } from "@chakra-ui/react";
import City from "./City";

export default function Cities() {
	return (
		<>
			<Heading fontWeight="500" fontSize={["2xl","4xl"]} mb="10">Cidades +100</Heading>
			<Grid
				templateColumns={["1fr","1fr 1fr","repeat(3, 1fr)","repeat(4, 1fr)"]}
				gap={["20px","45px"]}
				alignItems="center"
				justifyContent="center"
				px={["30px","0"]}
			>
				<City
					name="Londres"
					country="Reino Unido"
					flag="/uk-flag.svg"
					image="/londres.jpg"
				/>
				<City
					name="Paris"
					country="França"
					flag="/france-flag.svg"
					image="/paris.jpg"
				/>
				<City
					name="Roma"
					country="Itália"
					flag="/italy-flag.svg"
					image="/roma.jpg"
				/>
				<City
					name="Praga"
					country="República Tcheca"
					flag="/czeck-republic-flag.svg"
					image="/praga.jpg"
				/>
				<City
					name="Amsterdã"
					country="Holanda"
					flag="/netherlands-flag.svg"
					image="/amsterda.jpg"
				/>
			</Grid>
		</>
	)
}
