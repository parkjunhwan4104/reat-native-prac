import React, {useState} from 'react';
import { 
    Button, 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Test from './test';

const login=() => {
    const ids = [
        'a1234',
        'b1234',
        'c1234',
    ]
    const [success, setSuccess] = useState(false);  // sucess 최초 값 false 로 지정, setSuccess는  success의 값을 변경해준다 
    const[id, setId] = useState("");  // id 최초 값 ""으로 지정
    const login=(id)=>{
    // for 문 또는 find ... 매칭
      // ids.find((e) => e==id)
      if(ids.find((e) => e==id))
          setSuccess(true);
      else
        alert("고유 번호를 다시 입력해주세요")
    }
    return(
      success? // success 한 경우 Test.js로 넘어감
         <Test/>:
        <View style= {styles.container}>
            <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="고유번호"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(e)=>{setId(e)}}
            />    
            {/* <Text>{id}</Text> */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={()=>{login(id)}}
              >
                <Text style={styles.submitButtonText}>Login</Text>
              </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
      },
      input: {
        margin: 15,
        height: 40,
        borderColor: "#7a42f4",
        borderWidth: 1
      },
      submitButton: {
        backgroundColor: "#7a42f4",
        padding: 10,
        margin: 15,
        height: 40
      },
      submitButtonText: {
        color: "white"
      }
});

export default login;