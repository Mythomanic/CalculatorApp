import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({ // Renamed to appStyles

  testText: {
    color: "whitesmoke",
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  },

  headerTop:{
    
   flexDirection: "row",
   height:40,
   
   marginVertical:5,
   

   

  },    

  containerHeader: {
    
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#884A39",
    width:"100%",
  },


  textAreaCalculator:{
    width:"95%",
    height:80,
    padding:5,
    marginVertical:10,
    marginHorizontal:10,
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    justifyContent: "center",
    alignItems:"flex-end",
    backgroundColor:"#FFC26F",

    
  },


  
  calculatorContainer:{
    
    width:"100%",
    height:"80%",
    padding:10,
    justifyContent: "flex-end",
    
  },


  allButtonsContainer:{
    flex: 1,
    flexDirection:"column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical:10,
    width:"100%",
    height:"80%",
    borderWidth:1,
    borderColor:"black",
        borderRadius:10,
        backgroundColor:"#FFC26F",
  },

  calcButtonBorder:{
    width:65,
    height:80,
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"white",
    margin:5,
  },

 calculateButton:{
    fontSize:30,
    color: "darkorange",
  },

  InnerButtonsContainerThreeItems:{
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical:10,
    width:"100%",
    height:100,
  
  },

  InnerButtonsContainerFourItems:{
    
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical:10,
    width:"100%",
    height:"16%",
  

  },

  InnerButtonsContainerZero:{
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical:10,
    width:"75%",
    height:"16%",
  
  },
  

  buttonText:{
    fontSize:30,
    color: "darkorange",
  },


  HorizontalLine:{
    borderWidth:1,
    borderColor:"black",
    width:"75%",
    height:1,
    marginHorizontal:5,
  },

  VerticalLine:{

    borderWidth:1,
    borderColor:"black",
    height:"100%",
    width:1,
    marginHorizontal:5,

  },

  CalculatorText:{
    fontSize:30,
  },

  
});
