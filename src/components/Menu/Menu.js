import { Box, Heading, Text } from "@chakra-ui/react"

const Menu = () => {
    return (
        <Box bgColor='white'>
            <Heading marginLeft={150} marginTop={20} position='absolute' fontSize={56}>
                Our Products
            </Heading>
            <div>
            <Box marginLeft={232} marginTop={60} height={243} width={190} position='absolute' bgColor={`#D8D8D8;`}>
            </Box>
            <Text fontSize={25} position='absolute' marginTop={490} marginLeft={232}>
            Almond Love Coffee
            </Text>
            <Heading position='absolute'  marginLeft={292} marginTop={530} color={`#FF825B`}>
            $14.50
            </Heading>
            <Box _hover={{
                backgroundColor: `#43476e`
            }} cursor='pointer' marginLeft={228} marginTop={562} bgColor={`#1F2132`} position='absolute' width={184} borderRadius={32} height={14}>
                <Text paddingTop={3.5} paddingLeft={31.5} color='white' fontSize={18} >View product</Text>
            </Box>
            </div>
            <Heading cursor='pointer' _hover={{
                color: `#37c485`
            }} color={`#007E5B`} position='absolute' marginTop={47} marginLeft={1050}>
                See all products
            </Heading>
        </Box>
    )
}

export default Menu