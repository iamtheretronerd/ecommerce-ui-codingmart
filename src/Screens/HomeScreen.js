import React, { useState, useEffect } from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Pressable
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme } from '@/Store/Theme'

import jsonone from '@/JSON/jsonone'
import flashsale from '@/JSON/flashsale'


const HomeScreen = () => {
    const { t } = useTranslation()
    const { Common, Fonts, Gutters, Layout } = useTheme()
    const dispatch = useDispatch()
  
    let dyndat = jsonone;
    let fs = flashsale;

    const [userId, setUserId] = useState('9')
    const [
      fetchOne,
      { data, isSuccess, isLoading, isFetching, error },
    ] = useLazyFetchOneQuery()
  
    useEffect(() => {
      fetchOne(userId)
    }, [fetchOne, userId])
  
    const onChangeTheme = ({ theme, darkMode }) => {
      dispatch(changeTheme({ theme, darkMode }))
    }
  
  return (
    <View style={{backgroundColor:'white', height: '100%'}}>
      {/* <Text>Home Works</Text> */}
       <View style={Common.inputcontainer}>
                <View style={Common.innerinputcontainer}>

                <View style={Common.sb}>
                <Image style={Common.imageSizeicon} source={require('../Images/search.png')}  />
                <TextInput
                        style={Common.input}
                        placeholder='&nbsp; &nbsp; Search' 
                        // onChangeText={onChangeText}
                        // value={text}      
                    />
                </View>
                  
                     
                     <Pressable >
                        <Image style={Common.imageSizeicon2} source={require('../Images/bell.png')}  />
                     </Pressable>
                    
                </View>
        </View>
        <Image style={Common.imageSizebanner} source={require('../Images/banner.png')}  /> 
        {/* //end one */}
        <View>
            <ScrollView  horizontal={true}> 
                                {dyndat.map(datas => (
                                        <View>
                                            <View style={Common.card}>
                                                <Text style={{textAlign: 'center', marginTop: 0, fontSize: 16, color: 'black', paddingHorizontal: 15}}>{datas.name}</Text>
                                            </View>
                                            
                                        </View>
                                ))}
            </ScrollView>
        </View>
        
        <View style={Common.flashSale}> 
             <Text  style={Common.fstxt}>Flash Sale</Text>
             <View style={{width: '50%'}} />
             <Text>Closing In</Text>
        </View>
        <View>
        <ScrollView  horizontal={true}> 
                                {fs.map(datas => (
                                        <View>
                                            <View style={Common.cardfs}>
                                            <Image style={{height: 122,width: 122}} source={{uri: datas.image}}  />
                                                <Text style={{textAlign: 'center', marginTop: 0, fontSize: 16, color: 'black', paddingHorizontal: 15}}>{datas.name}</Text>
                                                <Text style={{textAlign: 'left',fontWeight:'bold', marginTop: 0, fontSize: 16, color: 'black', paddingHorizontal: 15}}>{datas.cost}</Text>
                                            </View>
                                            
                                        </View>
                                ))}
            </ScrollView>

        </View>
        <View style={Common.flashSale}> 
             <Text  style={Common.fstxt}>Recently Viewed</Text>
        </View>
        <View style={Common.row}>
            <Image style={Common.tst} source={require('../Images/tshirt.jpg')} />
            <Image style={Common.tst} source={require('../Images/tshirt.jpg')} />
        </View>
        
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    
});
