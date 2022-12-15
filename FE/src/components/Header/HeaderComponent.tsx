import { Text, FreeNowArrowIcon } from "@freenow/wave"

const HeaderMain = () => {
  return (
    <div>
      <div className='logoStyle'>
        <Text
          fontWeight='semibold'
          style={{ color: `#FF0A2B` }}
        >
          FREE
        </Text>
        <Text
          fontWeight='semibold'
          style={{ color: `#005478` }}
        >
          NOW
        </Text>
        <FreeNowArrowIcon
          size='large'
          style={{ color: `#005478` }}
        />
      </div>
    </div>
  )
}

export default HeaderMain
