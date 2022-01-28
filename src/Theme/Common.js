/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native'
import buttonStyles from './components/Buttons'
/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ Colors, ...args }) {
  return {
    button: buttonStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      imageSizebanner:{
        width: '90%',
        height: '20%',
        borderRadius: 30,
        marginHorizontal: 20
    },
    imageSizebanner2:{
      width: '90%',
      height: 200,
      borderRadius: 30,
      marginHorizontal: 20,
      marginTop: 10
  },
    sb:{
      width: '87%',
      borderRadius: 60,
      backgroundColor: '#fafafa',
      flexDirection: 'row'
  },
  inputcontainer:{
      paddingVertical: 10,
      paddingHorizontal:10,
      width: '100%',
      flexDirection: 'row',
      
  },
  flashSale:{
    flexDirection: 'row',
    height: '4%',
    marginTop: 10
  },
  fstxt:{
    fontSize: 20,
    color: 'black',
    marginLeft: 30
  },
  innerinputcontainer:{
      width: '98%',
      flexDirection: 'row',
      paddingTop: 8,
      marginHorizontal: 7,
      marginBottom: 8,
      alignItems: 'center',

  },
  input:{
      marginLeft: -15,
      width: '98%',
  },
  imageSizeicon:{
      width:40,
      height: 40,
      marginHorizontal: 10,
      marginTop: 7
  },
  imageSizeicon2:{
      width:40,
      height: 40,
      marginHorizontal: 10,
      marginTop: 0
  },
  imageSizeicon3:{
    width:40,
    height: 40,
    marginHorizontal: 10,
    marginTop: 60
},
  
  card:{
      borderWidth: 1,
      borderColor: 'lightgrey',
      marginLeft: 20,
      marginTop: 20,
      padding: 11,
      borderRadius: 30
  },
  cardfs:{
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 5
},
row:{
  flexDirection: 'row'
},
tst:{
  height: 300,
  width: 177,
  marginLeft: 20,
  borderRadius: 10
},
imageRound:{
  width:50,
  height:50,
  marginHorizontal: 5,
  borderRadius: 400/ 2
},
imageRound2:{
  paddingTop: 9,
  width:50,
  height:50,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  borderWidth: 1,
  borderColor: 'lightgrey'
},
imageRound3:{
  paddingTop: 1,
  paddingBottom: 3,
  paddingLeft: 2,
  width:40,
  height:40,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  borderWidth: 1,
  borderColor: 'orange',
  marginTop: 10,
  marginLeft: '15%'
},
imageRoundO:{
  paddingTop: 9,
  width:50,
  height:50,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  backgroundColor: 'orange'
},
colorsb:{
  marginTop:10,
  paddingTop: 9,
  width:30,
  height:30,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  backgroundColor: 'blue'
},
colorsr:{
  marginTop:10,
  paddingTop: 9,
  width:30,
  height:30,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  backgroundColor: 'red'
},
colorsy:{
  marginTop:10,
  paddingTop: 9,
  width:30,
  height:30,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  backgroundColor: 'yellow'
},
colorsv:{
  marginTop:10,
  paddingTop: 9,
  width:30,
  height:30,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  backgroundColor: 'violet'
},
colorsg:{
  marginTop:10,
  paddingTop: 9,
  width:30,
  height:30,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  backgroundColor: 'grey'
},
colorsc:{
  marginTop:10,
  paddingTop: 9,
  width:30,
  height:30,
  marginHorizontal: 5,
  borderRadius: 400/ 2,
  backgroundColor: 'cyan'
},
back:{
  marginTop: 50,
  marginLeft: 20
},
ei:{
  marginTop: 60,
  marginLeft: 20,
},
title:{
  marginTop: 60,
  fontSize: 30,
  color: 'black'
},
remove:{
  marginLeft: 20,
  fontWeight: 'bold',
  fontSize: 15,
  color: 'red'
},
textInput: {
        borderWidth: 1,
        borderColor: Colors.text,
        backgroundColor: Colors.inputBackground,
        color: Colors.text,
        minHeight: 50,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
      },
    }),
  }
}
