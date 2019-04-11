import React from 'react';
import { StyleSheet,FlatList, Text, TextInput, View, Button } from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {textInput : '', data : []};
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={styles.label}>AdList</Text>
                    </View>
                    <TextInput placeholder="Type list here" style={styles.text} onChangeText={(textInput)=>{this.setState({textInput})}} value={this.state.textInput}/>
                    <Button title="Add" onPress={()=>{
                        // let newData = new Array;
                        // newData.push({key : this.state.textInput});
                        this.setState((prevData)=>({data : 
                                prevData.data.push({key : (prevData.data.length==0?0:prevData.data.length+1), desc : prevData.textInput})
                            }));
                            this.setState((textInput)=>({textInput:''}));    
                    }} />
                </View>    
                <View style={styles.listContainer}>
                    <FlatList 
                        data={this.state.data}
                        renderItem = {({item})=>{
                            return (<Text>{item.desc}</Text>);
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    formContainer : {
        flex : 1,
        padding : 5
    },
    listContainer : {
        flex : 4,
        padding : 5,
        backgroundColor : '#cccccc'
    },
    text : {padding : 5, height : 50, fontSize:15},
    label : {paddingLeft : 5, height : 20, fontSize:18}
});
