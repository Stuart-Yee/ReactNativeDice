import {View, Text} from 'react-native'

const Greeting = ({children}) => {
    return(
        <View>
            <Text>
                {children}
            </Text>
        </View>
    )
}

export default Greeting;