import { Box, Slider, SliderFilledTrack, SliderThumb, SliderTrack, useDisclosure } from "@chakra-ui/react"
import { useState } from "react"
import HeadModal from "./HeadModal"


function HeadInterface() {
    const [slider, setSlider] = useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display="flex" w="90%" justifyContent="center" mt="25px">
        <Box w="full" display="flex" flexDirection="column" alignItems="center" placeContent="center">
          <Box
            textColor="#e61e4d"
            fontSize="28px"
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Evinizi Airbnb'ye taşıyın.
          </Box>
          <Box
            fontSize="28px"
            fontWeight="600"
            fontFamily="Circular, -apple-system, BlinkMacSystemFont, Roboto,  sans-serif;"
          >
            Tahmini kazancınız
          </Box>
          <Box w="full" justifyContent="center">
            <Box fontSize="14px">{slider}₺</Box>
            <Box fontSize="14px" fontWeight="450">
              {slider / 1091} gece (tahmini olarak gecelik 1.091 ₺ üzerinden)
            </Box>
            <Box>
              <Slider
                defaultValue={1091 * 5}
                min={1091}
                max={32730}
                step={1091}
                onChange={(val) => setSlider(val)}
              >
                <SliderTrack bg="red.100">
                  <SliderFilledTrack bg="#e61e4d" />
                </SliderTrack>
                <SliderThumb boxSize={3} />
              </Slider>
            </Box>
          </Box>
          <Box
            fontWeight="600"
            textDecoration="underline"
            cursor="pointer"
            onClick={onOpen}
          >
            Tahmini kazançlarınızı nasıl hesapladığımızı öğrenin
          </Box>
          <Box w="full" fontSize="14px">
            GoogleMaps
          </Box>
        </Box>
        <HeadModal isOpen={isOpen} onClose={onClose}/>
      </Box>
  )
}

export default HeadInterface
