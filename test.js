import React, {useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const test=()=> {
    
  const [count, setCount] = useState(0);
  const arr = [
      {id:"계영1",  pw:1234},
      {id:"계영2",  pw:1234},
      {id:"계영3",  pw:1234},
      {id:"계영4",  pw:1234},]
    return (

    <View style={{margin:"20%",height:200, width:200}}>
      
      <Button onPress={() => setCount(count + 1)} title="test"/>
      
      {
        
        arr.map((e, key)=>{
          return <Text key={key}>{e.id}</Text>
        })
      }
    </View>
  );
}

export default test;