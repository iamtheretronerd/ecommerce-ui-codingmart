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
import { navigationRef } from '@/Navigators/utils'


const Product = ({navigation}) => {
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
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
                 <Image style={[Common.imageRound,Common.back]} source={require('../Images/back.png')}  />
        </TouchableOpacity>
         <Text style={Common.ei}>Ending in</Text>
         <View style={{width: '45%'}} />
         <Image style={[Common.imageRound,Common.back]} source={require('../Images/heart.png')}  />
      </View>
      <Image style={Common.imageSizebanner2} source={require('../Images/b2.png')}  /> 
      <Text style={{textAlign: 'left', marginTop: 10,fontWeight: 'bold', fontSize: 25, color: 'black', paddingHorizontal: 15, width:'90%'}}>Basketball Shoe Air Jordan XXXV "Sisterhood"</Text>
      <View style={Common.row}>
      <Text style={{textAlign: 'left', marginTop: 10,fontWeight: 'bold', fontSize: 25, color: 'black', paddingHorizontal: 15, width:'70%'}}>⭐4.9(120)</Text>
      <Text style={{textAlign: 'left', marginTop: 10,fontWeight: 'bold', fontSize: 25, color: 'black', paddingHorizontal: 15}}>$99</Text>
      <Text style={{textAlign: 'left',textDecorationLine: 'line-through', marginTop: 12, fontSize: 18, color: 'grey'}}>$120</Text>
        

      </View>
      <View style={{width: '90%', backgroundColor:'lightgrey', height:1, marginHorizontal: 20, marginTop: 20}} />
      <Text style={{textAlign: 'left', marginTop: 10, fontSize: 15, color: 'black', paddingHorizontal: 15, width:'90%'}}>Available Sizes</Text>
      <View style={Common.row}>
          <View style={Common.imageRound2}>
              <Text style={{textAlign: 'center', fontSize: 20}}>3.5</Text>
          </View>
          <View style={Common.imageRound2}>
              <Text style={{textAlign: 'center', fontSize: 20}}>4</Text>
          </View>
          <View style={Common.imageRound2}>
              <Text style={{textAlign: 'center', fontSize: 20}}>4.5</Text>
          </View>
          <View style={Common.imageRoundO}>
              <Text style={{textAlign: 'center', fontSize: 20, color: 'white'}}>5</Text>
          </View>
          <View style={Common.imageRound2}>
              <Text style={{textAlign: 'center', fontSize: 20}}>5.5</Text>
          </View>
          <View style={Common.imageRound2}>
              <Text style={{textAlign: 'center', fontSize: 20}}>6</Text>
          </View>
      </View>
      <Text style={{textAlign: 'left', marginTop: 10, fontSize: 15, color: 'black', paddingHorizontal: 15, width:'90%'}}>Colors</Text>
      <View style={Common.row}>
        <View style={Common.colorsb} />
        <View style={Common.colorsr} />
        <View style={Common.colorsy} />
        <View style={Common.colorsv} />
        <View style={Common.colorsg} />
        <View style={Common.colorsc} />    
      </View>
      <Text style={{textAlign: 'left', marginTop: 10,fontWeight: 'bold', fontSize: 15, color: 'black', paddingHorizontal: 15, width:'90%'}}>Description</Text>
        <Text style={{width:'99%', paddingHorizontal: 10, marginTop:5}}>Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.Use '--warning-mode all' to show the individual deprecation warnings.</Text>
        
        <View style={{height:'10%', backgroundColor:'#172233', borderTopLeftRadius: 40, borderTopRightRadius:40}}>
            <View style={Common.row}>
                    <View style={{borderColor:'teal', borderWidth: 1, paddingVertical: 3, paddingHorizontal: 20, borderRadius:20, flexDirection: 'row', backgroundColor:'#323e51', marginLeft: '8%', marginTop: '4%'}}>
                        <Text style={{marginLeft:-10, color:'white'}}>1</Text>
                            <Image style={{width:15,height:15, marginLeft:20, marginRight:-10, marginTop:5}} source={require('../Images/down.png')}  />
                    </View>
                    <View style={{borderColor:'teal', borderWidth: 1, paddingVertical: 3, paddingHorizontal: 20, borderRadius:20, flexDirection: 'row', backgroundColor:'orange', marginLeft: '13%', marginTop: '4%'}}>
                        <Text style={{marginLeft:-10, color:'white'}}>$270  |</Text>
                        <Text style={{marginLeft:-10, color:'white'}}>     Buy Now</Text> 
                    </View>
                    <View style={Common.imageRound3}>
                    <Image  style={{height:30, width:30}} source={require('../Images/basketG.png')}  />
                    </View>
            </View>
            
        </View>
      
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
    sfl:{
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#e08b73'
    }
});
