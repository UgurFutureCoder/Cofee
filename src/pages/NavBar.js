import { Box, Heading } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"

const NavBar = () => {
    return (
        <div>
            <Box mt={1} height={79} bgColor={`#ECE0D6`} >
                <Link href='/' cursor='pointer' _hover={{ fontWeight: 'semibold' }} height={99} fontSize={20} marginLeft={86} position="absolute" marginTop={27} marginBottom={27} color={`#1B1D21`}>
                    Coffee
                </Link>
                <Box marginTop={6} marginLeft={211} position='absolute' width={0.5} height={10} bgColor="black"></Box>
                <Link _hover={{ fontWeight: 'semibold' }} href='/Story' marginTop={31} position='absolute' fontSize={14} marginLeft={236} isExternal>
                    Story
                </Link>
                <Link _hover={{ fontWeight: 'semibold' }} href='/Menu' isExternal marginTop={31} position='absolute' fontSize={14} marginLeft={299} >
                    Menu
                </Link>
                <Link _hover={{ fontWeight: 'semibold' }} href='/Rewards' isExternal marginTop={31} position='absolute' fontSize={14} marginLeft={365}>
                    Rewards
                </Link>
                <Link _hover={{ fontWeight: 'semibold' }} href='/Contact' isExternal marginTop={31} position='absolute' fontSize={14} marginLeft={451}>
                    Contact
                </Link>
                <Link _hover={{ fontWeight: 'semibold' }} href='https://chakra-ui.com' isExternal marginTop={31} position='absolute' fontSize={14} marginLeft={535}>
                    Subscriptions
                </Link>
                <Link _hover={{ fontWeight: 'semibold' }} href='https://chakra-ui.com' isExternal marginTop={31} position='absolute' fontSize={14} marginLeft={1189}>

                    Find Store
                </Link>
                <Link _hover={{ fontWeight: 'semibold' }} href='https://chakra-ui.com' isExternal marginTop={31} position='absolute' fontSize={14} marginLeft={1320} >
                    Login
                </Link>
            </Box>
        </div>
    )
}

export default NavBar