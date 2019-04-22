import React from 'react';
import { View, Text,TouchableOpacity} from 'react-native';
import { Camera, Permissions } from 'expo';
import {Ionicons ,Entypo} from '@expo/vector-icons';
import {Thumbnail} from 'native-base';
import {Rouer,Scene, Actions } from 'react-native-router-flux';

export default class App extends React.Component{
  constructor(){
    super()
      

    this.state ={
      hasPersmission:null,
      camType: Camera.Constants.Type.back,
      formCam:'https://www.toulouscope.fr/wp-content/themes/15zine/library/images/placeholders/placeholder-360x240@2x.png'
    }
  }
  render(){

    return (
      <View style={{flex:1}}>
        <Camera 
          style={{flex:1}}
          type={this.state.camType}
          ref = {ref => this.camera = ref}
        >
        
        <View style={{
          position:'absolute',
          height:100,
          width: '100%',
          bottom:0,
          flexDirection:'row',
          borderColor:'#fff'
          
        }}>

        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <Ionicons onPress={() => this.switchCam()} name='ios-reverse-camera'  size={40} color={'#fff'} />
        </View>
        
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <Entypo onPress={() => this.takephoto()} name='circle' size={60} color={'#fff'}/>
        </View>

        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <Thumbnail 
            small
            source={{uri: this.state.formCam}}
          />

        </View>

        </View>
        
        </Camera>
      </View>
    )
  }

  async takephoto(){
    if(this.camera){
      let photo = await this.camera.takePictureAsync();
      this.setState({formCam: photo.uri})
    }
  }

  switchCam(){
    this.setState({
      camType: this.state.camType === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back
    })
  }
}