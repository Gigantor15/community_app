import React, { Component } from 'react';
import {RadioButtons} from 'react-native-radio-buttons';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

//const register = require ('../Back_End/api/registerUser.js');
const question = require ('../Images/questionmark.png');
const background = require('../Images/blueback.png');


class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
    render(){


            const options = [
                "Where To Eat",
                "Where To Go",
                "What To Wear"
            ];

            function setSelectedOption(selectedOption){
                this.setState({
                selectedOption
                });
            }

            function renderOption(option, selected, onSelect, index){
                const style = selected ? { fontWeight: 'bold'} : {};

                return (
                <TouchableWithoutFeedback onPress={onSelect} key={index}>
                    <Text style={style}>{option}</Text>
                </TouchableWithoutFeedback>
                );
            }

            function renderContainer(optionNodes){
                return <View>{optionNodes}</View>;
            }

            return (

                <Image source={background}>
                <View style={{margin: 20}}>
                <View style={styles.textContainer}>
                          <TextInput
                            style={styles.text}
                            placeholder= "Enter Your Question Here"
                            onChangeText={(text) => this.setState({text})}
                          />
                </View>
                <Text>Categories</Text>
                <RadioButtons
                    options={ options }
                    onSelection={ setSelectedOption.bind(this) }
                    selectedOption={this.state.selectedOption }
                    renderOption={ renderOption }
                    renderContainer={ renderContainer }
                />
                <Text>Selected option: {this.state.selectedOption || 'none'}</Text>



                </View>
                </Image>);

        }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    backgroundColor: 'transparent'
  },

  textContainer:{
    justifyContent:'center',
    flex:2,
    opacity: .6
  },

  categoryContainer:{
    justifyContent:'center',
    flex:1
  },

  buttonContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'stretch',
    backgroundColor: 'burlywood',
    padding: 10
  },


  q:{
    opacity: .6,
  },

  text: {
    flex: 1,
    textAlign: 'left',
    color: 'black',
    marginLeft: 10,
    fontSize:20
  },

  text2: {
    flex:1,
    textAlign:'left',
    color: 'black',
    fontSize:30,
  },


  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
    height: 10,
    width:400,
    padding: 25,
    alignItems: 'center',
    flex: 1,
  },
});
module.exports = Question;