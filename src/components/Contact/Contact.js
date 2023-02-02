import { Box, Heading, Text, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon } from "@chakra-ui/react"
const Contact = () => {
    return (
        <Box>
            <Heading marginLeft={404} marginTop={40} fontSize={56}>
            Frequently ask question
            </Heading>
            <Text marginLeft={420} fontSize={15} marginTop={45}>
            Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum
            </Text>
            <Box>
            <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem marginLeft={217} marginTop={10} width={487} bgColor='black'>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
            <Text color='white' >
          Click
          </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel color='white' pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
</Box>
 </Box>
    )
}

export default Contact