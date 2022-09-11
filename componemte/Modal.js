import React, {useState} from "react";
import { View,Text, Button,Modal,StyleSheet, TouchableOpacity } from "react-native";

export default function (props){
    const [modal,setModal] = useState(false)

    const cor = (c) =>{
        props.setCorItem(c);
        setModal(false)
        
    }

    return(
        <View >
            <Modal
                visible={modal}
                animationType="fade"
                transparent={true}
            >
                <View style={styles.modal}>
                    <TouchableOpacity
                        onPress={()=>cor('red')}
                        style={{height:50,width:50,margin:5,backgroundColor:'red'}}
                    />

                    <TouchableOpacity
                        onPress={()=>cor('#000')}
                        style={{height:50,width:50,margin:5,backgroundColor:'#000'}}
                    />

                    <TouchableOpacity
                        onPress={()=>cor('#ffd700')}
                        style={{height:50,width:50,margin:5,backgroundColor:'#ffd700'}}
                    />

                    <TouchableOpacity
                        onPress={()=>cor('#00ff00')}
                        style={{height:50,width:50,margin:5,backgroundColor:'#00ff00'}}
                    />
                </View>
            </Modal>
            <TouchableOpacity
                style={{
                    marginLeft:5,
                    width:40,
                    height:40,
                    marginTop:10,
                    backgroundColor:props.corItem,
                  }}
                onPress={()=>setModal(true)}
            >

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        backgroundColor: "rgba(50,50,50,0.3)",
        width:'90%',
        height:110,
        marginLeft:'5%',
        marginTop:'40%',
        padding:25,
        flexDirection:'row'
    },
    txtModal:{
        marginTop:15
    }
})