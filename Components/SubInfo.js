import { View, Text, Image } from 'react-native'
import React from 'react'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const Title = ({ title, subTitle, titleSize, subTitleSize }) => {
  return (
    <View>
      <Text style={{
        fontFamily: FONTS.semiBold,
        fontSize: titleSize,
        color: COLORS.primary
        }}>{title}</Text>

      <Text style={{
        fontFamily: FONTS.regular,
        fontSize: subTitleSize,
        color: COLORS.primary
        }}>{subTitle}</Text>
    </View>
  )
}

export const Price = ({ price }) => {
    return (
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Image
            source={assets.eth}
            resizeMode='contain'
            style={{width: 20, height: 20, marginRight: 2}}
        />
        <Text style={{
            fontFamily: FONTS.medium,
            fontSize: SIZES.font,
            color: COLORS.primary
        }}>{price}</Text>
      </View>
    )
}

export const ImageCmp = ({ imgUrl, index }) => {
    return (
      <Image
        source={imgUrl}
        resizeMode='contain'
        style={{
            height: 48,
            width: 48,
            marginLeft: index === 0 ? 0 : -SIZES.font
        }}
      />
    )
}
  
export const People = ({data}) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {data.bids.map((person, index) => <ImageCmp key={`People-${index}`} imgUrl={person.image} index={index}/>)}
      </View>
    )
}

export const EndDate = () => {
    return (
      <View style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: '50%'
        
      }}>
        <Text style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.primary
        }}>
            Ending in
        </Text>
        <Text style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary
        }}>
            20h 16m
        </Text>
      </View>
    )
}

export const SubInfo = ({ data }) => {
    return (
      <View style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        <People data={data}/>
        <EndDate />
      </View>
    )
}
  
  