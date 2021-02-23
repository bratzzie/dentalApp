
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native'
const Group = ({title, items}) => {
    return(
        
<GroupSection>
       <GroupTitle>{title}</GroupTitle>
   
        {items.map((item, index) =>     (<GroupItem key={index}>
         <Avatar
         source={{uri: item.user.avatar}} />
         <View style={{flex: 1}}>
                <FullName>{item.user.fullname}</FullName>
                <Info>{item.diagnosis}</Info>
         </View>
         <GroupDate active={item.active}>{item.time}</GroupDate>
       </GroupItem>
        ))}
     </GroupSection>
    )
};

Group.defaultProps = {
    title: 'Untitled',
    items: []
}

export default Group;


const GroupSection = styled.View`
padding: 0 20px;
margin-bottom: 25px;`

const GroupItem = styled.TouchableOpacity`
padding: 20px 0;
flex-direction: row;
align-items: center;
border-bottom-color: #f3f3f3;
border-bottom-width: 1px;`

const Avatar = styled.Image`
border-radius: 50px;
height: 40px;
width: 40px;
margin-right: 15px;`

const FullName = styled.Text`
font-weight: 600;
font-size: 16px;
`
const Info = styled.Text`
font-size: 16px;
color: #8b979f;
`

const GroupTitle = styled.Text`

font-weight: 800;
font-size: 22px;
color : #000;
`

const GroupDate = styled.Text`
background-color: ${props => (props.active ? '#2A86FF' : '#e9f5ff')};
color: ${props => (props.active ? '#fff' : '#4294ff')};
border-radius: 18px;
font-weight: 600;

font-size: 14px;
width: 70px;
height: 32px;
text-align: center;
line-height: 28px;
`