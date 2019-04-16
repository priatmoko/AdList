import React from 'react';
import {TouchableOpacity, TextInput, StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import {Constants } from 'expo';

export default class App extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {barcode : '', data : []};
        this.buttonPress = this.buttonPress.bind(this);
    }
    
    buttonPress(){
        if (this.state.barcode!=''){
            this.setState((prevData)=>({
                data : prevData.data.concat({key : prevData.data.length==0 || prevData.data.length==1 ?prevData.data.length+'':(prevData.data.length+1)+'', desc:prevData.barcode})
            }));
        }else{
            Alert.alert('Please type word!');
        }
        this.setState((barcode)=>({barcode:''}));
    }

    render() {
        return (
            <View  style={{flex:1}}>
                <View style={styles.statusBar}/>
                <View style={styles.container}>
                    <View style={styles.formContainer}>
                        <Text style={styles.label}>Scan Code</Text>
                        <TextInput placeholder='Type Code here' 
                            onChangeText={(barcode)=>(this.setState({barcode}))}
                            textAlign = 'center' 
                            value={this.state.barcode}
                            style={styles.textInput}/>
                        <TouchableOpacity 
                            style={styles.btnContainer}
                            onPress={this.buttonPress}>
                            <Text style={{color :'#ffffff'}}>Press me</Text>
                        </TouchableOpacity>    
                    </View>        
                    <View style={styles.flatContainer}>
                        <FlatList 
                            data = {this.state.data}
                            renderItem = {({item})=>{
                                return (
                                    <Text style={styles.item}>{item.desc}</Text>
                                )
                            }}
                        />
                    </View>        
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop : 5
    },
    formContainer : {
        flex : 1,
        alignItems : 'center'
    },
    flatContainer : {
        flex : 3,
        backgroundColor : '#f9f4f4'
    },
    label : {
        fontSize : 20,
        color : '#680909',
        marginTop : 12
    },
    statusBar: {
        backgroundColor: "#C2185B",
        height: Constants.statusBarHeight,
    },
    textInput : {
        fontSize : 14,
        borderWidth : 1,
        borderColor : '#cccccc',
        alignSelf :'stretch',
        margin : 5,
        marginTop : 10,
        marginBottom : 10,
        padding : 7,
        paddingLeft : 12,
        paddingRight : 12,
        borderRadius : 20
    },
    btnContainer : {
        padding : 10,
        paddingLeft : 20,
        paddingRight : 20,
        backgroundColor:'#C2185B',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff'
    },
    item : {
        backgroundColor : '#ffffff',
        color : '#000000',
        padding : 10,
        marginLeft:5,
        marginRight:5,
        marginTop : 5,
        borderWidth : 1,
        borderColor : '#e2e0e0',
        borderRadius : 5,
        elevation: 1,
        shadowColor: '#000',
        shadowRadius : 1,
        shadowOffset: { width: 5, height: -5 },
        shadowOpacity: 0.1,
    }
});
