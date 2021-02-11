import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import AfterBoardingStack from './AfterBoardingStack';

const Stack = createStackNavigator();
const RootNavigator = (props) => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="AfterBoardingStack" component={AfterBoardingStack} /> 
    </Stack.Navigator>
  );

}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    loginStatus: state.localStates.loginStatus,
    introstatus: state.localStates.introstatus,
  };
}

export default connect(mapStateToProps)(RootNavigator)