import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Item, Input } from 'native-base';
import { Entypo, MaterialIcons } from '@expo/vector-icons';

const height = Dimensions.get('window').height;

export default function SelectAge({ navigation }) {
  const sex = navigation.state.params.sex;
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientBackground}
        colors={['#004EFF', '#88CCF1']}
      >
        <View style={styles.contentContainer}>
          <Entypo
            name='chevron-thin-up'
            size={36}
            color='white'
            onPress={() => navigation.goBack()}
          />
          <View style={styles.childContainer}>
            <Text style={styles.title}>Age</Text>
            <MaterialIcons name='cake' size={48} color='white' />
            <Item style={styles.input}>
              <Input
                placeholder='55'
                style={styles.input}
                onChangeText={text => setAge(text)}
              />
            </Item>
          </View>
          {age !== '' && (<Entypo
            name='chevron-thin-down'
            size={36}
            color='white'
            onPress={() => navigation.push('Location', { sex, age })}
          />)}
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: height * 0.06,
    marginTop: height * 0.06,
  },
  container: {
    flex: 1
  },
  gradientBackground: {
    alignItems: 'center',
    flex: 1
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold'
  },
  input: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    width: '20%'
  },
  childContainer: {
    alignItems: 'center',
    flex: 0.75,
    justifyContent: 'space-evenly'
  }
});
