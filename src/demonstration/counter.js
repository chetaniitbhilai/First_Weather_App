import React,{useState,useEffect} from "react";
import { View,Text,Button,StyleSheet } from "react-native";

const Counter = () => {
    const [count , setCount]=useState(0) 
    const [newCount,setnewCount]=useState(0)
    /*for passing the value of set Count or initial value we add the value in parenthesis after usestate can also be a string or char 
     we upadte the value of the variable by using the second varibale in our further code
        To use state we pass the initial value of the variable 
        eg can be const [isflooded,setisflooded]= useState(false)
        The square backets are using array destructuring
        the firts value is the piece of state and second is teh function to update the state 

        Hooks:
        Earlier stateful components used class and stateless used a function .
        Using class we can know about the life cycle methods that are the updates that occurs during the life cycle of components
        
        From class we moved to hooks (In 16.8)
        Hooks mean we no longer have to depend on the class components for state and lifecycle methods 
        Hooks are special functions containing reuseable logic 
        Every hook starts with a word hook

        Some things to know about hooks 
        You can only call hooks from inside of React functions 
        Hooks must be called at the top level of a component(before return keyword)

        useEffect hook 
        What is a side effect?
        When we use something not inside of react within our component
        Data fetching and using timers are exapmles

    */
    useEffect(() => {
        console.log(`Count changed`);
        return () => {
            console.log('useeffect cleanup ') //cleaup is called before re rendering wiht other function 
        }
    },[count])
    // We pass in the dependencies it means the code will only run if the values in the dependencies have changed rather than running after every render
    // cleanup function - We can use a clean up function to stop any of our side effects before the component unmounts

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{`count: ${count}`}</Text>
            <Button 
            color={'red'} 
            title="increase the count" 
            onPress={() => {
                setCount(count+1)
            }}
            />
            <Button 
            color={'green'} 
            title="decrease the count" 
            onPress={() => {
                setCount(count-1)
            }}
            />
            <Button 
            color={'red'} 
            title="increase the count" 
            onPress={() => {
                setnewCount(count+1)
            }}
            />
            <Button 
            color={'green'} 
            title="decrease the count" 
            onPress={() => {
                setnewCount(count-1)
            }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'orange'
    },
    title: {
        alignSelf:'center',
        fontSize: 25,
        marginTop:25
    }
})

export default Counter
