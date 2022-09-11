import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useState, useEffect } from 'react';

const Lista = (props) =>{

    
    props.txt("luciana");

    return(
        <View>

            {/* exibindo o valor passado de outro arquivo */}
            <Text >{props.valor} + </Text>
            
        </View>
    );
}

export default Lista;