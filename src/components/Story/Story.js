import { Box, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const Story = () => {
    return (
        <Box bgColor='white' width={1440} height={531}>
            <Heading marginLeft={150} marginTop={98} color={`#6B6867`} >
                ABOUT US
            </Heading>
            <Heading marginLeft={150} fontSize={58}>
                We serve the coffee. <br />
                You chill in the hommy
            </Heading>
            <Text marginLeft={150}>
                Everything we do is rooted in that basic concept. It’s <br />
                what drives us. It’s what moves us, motivates us and keeps us excited about every <br />
                decision we make about our products, our services and all that we do <br />
                in the community. We are coffee passionate.
            </Text>
            <Heading cursor='pointer' _hover={{
                color: `#37c485`
            }} color={`#007E5B`} position='absolute' marginTop={47} marginLeft={150}>
                Read Full Story
            </Heading>
        </Box>
    )
}

export default Story