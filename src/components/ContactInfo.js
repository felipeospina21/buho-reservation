import React from "react"
import { Text, Center, Icon } from "@chakra-ui/react"
import { GrLocation, GrPhone } from "react-icons/gr"


const ContactInfo = () => {
  return (
    <Center flexDir="row" h="100%" mt="1rem">
      <Text mx="1rem"> <Icon as={GrLocation}/>Medellín, Colombia</Text>
      <Text mx="1rem"> <Icon as={GrPhone}/> 512 93 28 - 512 18 07</Text>
    </Center>
  )
}

export default ContactInfo
