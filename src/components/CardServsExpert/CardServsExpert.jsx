import { View, Image, Text, TouchableOpacity } from 'react-native';
// import Star from '../../svg/star.svg';
// import Heart from '../../svg/heart.svg';
import image from '../../images/limpiezaPersona.png';
import tw from 'twrnc';
import { useState, useEffect } from 'react'
import { getProId } from '../../redux/actions'
import { useDispatch } from 'react-redux'





const CardServsExpert = ({ navigation, elem }) =>
{

    const dispatch = useDispatch()


    const onPressId = (e) =>
    {
        dispatch(getProId(e))
    }




    return (

        <>

            <TouchableOpacity style={tw`bg-white rounded-md mr-7 mt-2 flex-row items-center w-80`}

                onPress={() =>
        {
                    navigation.navigate("UserDetails", { name: "UserDetails" })
                    onPressId(elem.id)

                }
                }
            >
                <View >
                    <Image style={tw`h-28 w-28 m-6 mt-7 md:h-80 md:h-80 rounded-md`} source={{ uri: elem.image }} />
                </View>
                <View>
                    <View style={tw`flex flex-row-reverse`}>
                        {/* <Heart height={20} width={20} fill={'#9CA3AF'} /> */}
                    </View>
                    <View style={tw`mt-3`}>
                        <Text style={tw` text-gray-500 mb-1`}>{elem.fullName}</Text>
                        <Text style={tw`font-bold  text-black mb-1`}>Ranting: {elem.rating}</Text>
                        <Text style={tw`text-indigo-400  mb-1`}>$8/hora</Text>

                        <Text style={tw` text-black`}>
                            {/* <Star height={17} width={17} fill={'#818CF8'} /> */}
                            4,7
                        </Text>
                    </View>
                </View>

            </TouchableOpacity></>

    )
}

export default CardServsExpert;