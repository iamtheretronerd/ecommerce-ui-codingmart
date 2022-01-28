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

import cart from '@/JSON/cart'


const Cart = () => {
    const { t } = useTranslation()
    const { Common, Fonts, Gutters, Layout } = useTheme()
    const dispatch = useDispatch()
  
    let dyndat = cart;

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
      <View style={Common.row}>
         <Image style={[Common.imageRound,Common.back]} source={require('../Images/back.png')}  />
         <View style={{width: '20%'}} />
         <Text style={Common.title}>My Cart</Text>
      </View>
      <View>
          <Text style={{marginHorizontal: 20, marginTop: 20, fontWeight: 'bold', marginBottom: 3}}>3 Items</Text>
          <View style={{width:'90%', backgroundColor: 'black', height: 1, marginHorizontal: 20}} />
      </View>
      <ScrollView > 
                                {dyndat.map(datas => (
                                        <View>
                                            <View style={Common.row}>
                                                <Image style={{height: 122,width: 122}} source={{uri: datas.image}}  />
                                                    <View>
                                                    <Text style={{textAlign: 'left', marginTop: 10, fontSize: 16, color: 'black', paddingHorizontal: 15, width:'90%'}}>{datas.name}</Text>
                                                    <View style={Common.row}>
                                                        <Text style={{textAlign: 'center',fontWeight:'bold', marginTop: 0, fontSize: 25, color: 'black', paddingHorizontal: 15}}>{datas.cost}</Text>
                                                        <View style={{width:'40%'}}/>
                                                            <View style={{borderColor:'teal', borderWidth: 1, paddingVertical: 3, paddingHorizontal: 20, borderRadius:20, flexDirection: 'row'}}>
                                                                <Text style={{marginLeft:-10}}>1</Text>
                                                                <Image style={{width:15,height:15, marginLeft:20, marginRight:-10, marginTop:5}} source={require('../Images/down.png')}  />
                                                            </View>
                                                    </View>
                                                    </View>
                                            

                                            </View>
                                            <View style={Common.row}>
                                                <Text style={Common.remove}>Remove</Text>
                                                <Text style={styles.sfl}>Save for Later</Text>
                                            </View>
                                        </View>
                                ))}
            </ScrollView>
        <View style={{height:'15%', backgroundColor:'#172233', borderTopLeftRadius: 40, borderTopRightRadius:40}}>
                              <View style={Common.row}>
                                  <Text style={{marginLeft:30, marginTop: 10, color: 'white', fontSize: 20}}>Total: </Text>
                                  <View style={{width:'60%'}} />
                                  <Text style={{fontSize: 20, fontWeight:'bold', marginTop: 10, color:'white'}}>$424</Text>
                              </View>
                   <View style={{borderColor:'teal', borderWidth: 1, paddingVertical: 3, paddingHorizontal: 20, borderRadius:20, flexDirection: 'row', backgroundColor:'orange', marginLeft: '0%', marginTop: '4%'}}>
                        <Text style={{marginLeft:-10, color:'white', fontSize:20}}> Buy Now</Text> 
                    </View>
        </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
    sfl:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e08b73'
    }
});
