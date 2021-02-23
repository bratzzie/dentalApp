import React from 'react'


import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'

import { SectionList } from 'react-native'
import Group from '../components/Group'
import GroupTitle from '../components/Group/GroupTitle'

const DATA = [
  {
    title: '12 October',
    data: [
      {
        time: '14:30',
        diagnosis: 'пульпит',
        active: true,
        user: {
          fullname: 'Анжела Пупкина',
          avatar: 'https://images.ctfassets.net/cnu0m8re1exe/36MdW2llEXZwp6KrecbbaK/7ccd1f3503ba936d423bac41bc885c32/Binaural-Beats.jpg?w=650&h=433&fit=fill'
        }
      },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_W7AlEkvpGjY_0GTIifEs2VeoD8_rvue8-g&usqp=CAU'
          }
      }
    ]
  },
  {
    title: '16 October',
    data: [
      {
        time: '14:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Анжела Пупкина',
          avatar: 'https://images.ctfassets.net/cnu0m8re1exe/36MdW2llEXZwp6KrecbbaK/7ccd1f3503ba936d423bac41bc885c32/Binaural-Beats.jpg?w=650&h=433&fit=fill'
        }
      },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_W7AlEkvpGjY_0GTIifEs2VeoD8_rvue8-g&usqp=CAU'
          }
      },

      {
        time: '14:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Анжела Пупкина',
          avatar: 'https://images.ctfassets.net/cnu0m8re1exe/36MdW2llEXZwp6KrecbbaK/7ccd1f3503ba936d423bac41bc885c32/Binaural-Beats.jpg?w=650&h=433&fit=fill'
        }
      },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_W7AlEkvpGjY_0GTIifEs2VeoD8_rvue8-g&usqp=CAU'
          }
      },

      {
        time: '14:30',
        diagnosis: 'пульпит',
        user: {
          fullname: 'Анжела Пупкина',
          avatar: 'https://images.ctfassets.net/cnu0m8re1exe/36MdW2llEXZwp6KrecbbaK/7ccd1f3503ba936d423bac41bc885c32/Binaural-Beats.jpg?w=650&h=433&fit=fill'
        }
      },
        {
          time: '18:00',
          diagnosis: 'удаление зуба',
          user: {
            fullname: 'Иван Иванов',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_W7AlEkvpGjY_0GTIifEs2VeoD8_rvue8-g&usqp=CAU'
          }
      }

      
    ]
  }
]

const HomeScreen = ({navigation}) =>{
    return (
            <Container>
    
            <SectionList sections={DATA}
            keyExtractor={(item, index) => index}
            renderItem={({item}) => <Group navigate={navigation.navigate} {...item} />}
            renderSectionHeader={({ section: {title} }) => (
              <GroupTitle>{title}</GroupTitle>
            )}
            />
            <Button style={{
              shadowColor: '#2A86FF',
              shadowOffset: {
                width: 0,
                height: 2
              },
              shadowOpacity: 0.7,
              shadowRadius: 3.5,
              elevation: 5
            }}
            ><Ionicons name="ios-add" size={36} color="white"/></Button>
             </Container> 
        );
        
}
 


HomeScreen.navigationOptions = {
  title: 'Пациенты',
  headerTintColor: '#2A86FF',
  headerStyle: {
      elevation: 0.8, //android
      shadowOpacity: 0.8 // IOS
  }
};

export default HomeScreen


const Container = styled.View`
flex: 1;
`
const Button = styled.TouchableOpacity`
border-radius: 50px;
width: 64px;
height: 64px;
background-color: #2a86ff;
align-items: center;
justify-content: center;
position: absolute;
right: 25px;
bottom: 25px;
`
