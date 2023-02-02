import { Box, Heading } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
const Home = () => {
    return (
        <Box bgColor={`#ECE0D6`} height={746} width={1440}>
            <Box bgColor='black' height={0.5} width={1364} marginLeft={38} >
            </Box>
            <Text marginLeft={720} position='absolute' marginTop={453} >
                In publishing and graphic design, Lorem ipsum is a placeholder <br />
                text commonly used to demonstrate the visual form.
            </Text>
            <Heading position='absolute' marginLeft={720} marginTop={100} fontSize={72}>
                Serve coffee <br />
                for you  <br />
                on every morning
            </Heading>

            <Box _hover={{
                backgroundColor: `#43476e`
            }} cursor='pointer' marginLeft={720} marginTop={562} bgColor={`#1F2132`} position='absolute' width={184} borderRadius={32} height={14}>
                <Text paddingTop={3.5} paddingLeft={20.5} color='white' fontSize={18} >See all Products</Text>
            </Box>
        </Box>
    )
}

export default Home