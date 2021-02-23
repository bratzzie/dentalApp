import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native'
import Group from './components/Group';
export default function App() {
  return (
    <Container>
    <Group title="13 October"
    items={[
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
    ]}/>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
flex: 1;
margin-top: 50px;
`
