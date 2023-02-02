import { Box, Heading, Text } from "@chakra-ui/react"
const Rewards = () => {
    return (
        <Box bgColor={`#FAFAFA`}>
            <Heading fontSize={16} marginTop={30} marginLeft={600} position='absolute' color={`#6B6867`}>
            THE BENEFITS
            </Heading>
            <Heading position='absolute' fontSize={56} marginLeft={372} marginTop={50} color={`#1F2132`}>
            Why buy coffee from us 
            </Heading>


                <Box  _hover={{
                    transition: '1s',
                    boxShadow: '1px 5px 15px  black'
                    }} position='absolute' marginLeft={150} marginTop={400} width={555} height={164} bgColor={`#1F2132`}>
                    <Heading marginTop={38} marginLeft={180} position='absolute' color='white'>
                    Original coffee
                    </Heading>
                    <Text marginTop={70} marginLeft={180} position='absolute' color='white'>
                    Lorem ipsum is typically a corrupted <br />
version of 'De finibus bonorum et malorum
                    </Text>
                    <Box  width={100} height={100} marginLeft={10} bgColor={`#007E5B`} marginTop={7} borderRadius={50}>
                    </Box>
                </Box>
        </Box>
    )
}

export default Rewards