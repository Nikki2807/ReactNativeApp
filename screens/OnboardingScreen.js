import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({selected}) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View 
            style={{
                width:6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16,color:"#ffffff"}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16,color:"#ffffff"}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16,color:"#ffffff"}}>Done</Text>
    </TouchableOpacity>
);


const OnboardingClass = ({navigation}) => {
    // const { colors } = useTheme();

    return (
        <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate('SignInScreen')}
        pages={[
          {
            backgroundColor: '#E63859',
            image: <Image source={require('../assets/invest.png')} />,
            title: 'Connect to the World',
            subtitle: 'A New Way To Connect With The World',
          },
          {
            backgroundColor: '#E63859',
            image: <Image source={require('../assets/mover-truck.png')} />,
            title: 'Share Your Favorites',
            subtitle: 'Share Your Thoughts With Similar Kind of People,Let The Spot Light Capture Your credit card details are encrypted using the Secure Socket Layer protocol and are never transmitted in clear text over the network. Payment is made directly',
          },
          {
            backgroundColor: '#E63859',
            image: <Image source={require('../assets/payment.png')} />,
            title: 'Become The Star',
            subtitle: 
            "Let The Spot Light Capture Your credit card details are encrypted using the Secure Socket Layer protocol and are never transmitted in clear text over the network. Payment is made directly",
          },
        ]}
      />
    );
};

export default OnboardingClass;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
});
