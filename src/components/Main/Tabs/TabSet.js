import { Tabs, TabList, Image, Box, Tab } from '@chakra-ui/react'

const tabData = [
  {
    name: 'Küçük Evler',
    image:
      'https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg',
    id: 1,
  },
  {
    name: 'Denize Sıfır',
    image:
      'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
    id: 2,
  },
  {
    name: 'Olağanüstü',
    image:
      'https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg',
    id: 3,
  },
  {
    name: 'Göl Kenarı',
    image:
      'https://a0.muscache.com/pictures/8a43b8c6-7eb4-421c-b3a9-1bd9fcb26622.jpg',
    id: 4,
  },
  {
    name: 'Kulübeler',
    image:
      'https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg',
    id: 5,
  },
  {
    name: 'Özel Odalar',
    image:
      'https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg',
    id: 6,
  },
  {
    name: 'Güzel Manzaralar',
    image:
      'https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg',
    id: 7,
  },
  {
    name: 'Tekneler',
    image:
      'https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg',
    id: 8,
  },
  {
    name: 'Popüler',
    image:
      'https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg',
    id: 9,
  },
  {
    name: 'Şatolar',
    image:
      'https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg',
    id: 10,
  },
  {
    name: 'Malikaneler',
    image:
      'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
    id: 11,
  },
  {
    name: 'Üçgen Evler',
    image:
      'https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg',
    id: 12,
  },
  {
    name: 'Luxe',
    image:
      'https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg',
    id: 13,
  },
  {
    name: 'Muhteşem Havuzlar',
    image:
      'https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg',
    id: 14,
  },
  {
    name: 'Kulübeler',
    image:
      'https://a0.muscache.com/pictures/89faf9ae-bbbc-4bc4-aecd-cc15bf36cbca.jpg',
    id: 15,
  },
  {
    name: 'Çiflikler',
    image:
      'https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg',
    id: 16,
  },
  {
    name: 'Kayak',
    image:
      'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg',
    id: 17,
  },
  {
    name: 'Tasarım',
    image:
      'https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg',
    id: 18,
  },
  {
    name: 'Kırsal',
    image:
      'https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg',
    id: 19,
  },
]

function TabSet() {
  return (
    <Tabs overflow="hidden">
      <TabList
        alignItems="center"
        h="min-content"
        border="none"
        style={{
          overflowY: 'hidden',
          overflowX: 'scroll',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {tabData?.map((tab) => {
          return (
            <Tab
              key={tab?.id}
              _hover={{ borderBottom: '3px solid red', pb: '3px' }}
            >
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                colorScheme="none"
                textColor="black"
                fontWeight="400"
                fontSize="12px"
                p="0"
                m="0"
              >
                <Image h="24px" w="24px" src={tab?.image} />
                <Box>{tab?.name}</Box>
              </Box>
            </Tab>
          )
        })}
      </TabList>
    </Tabs>
  )
}

export default TabSet
