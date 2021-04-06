import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomePage, QuestionListPage } from '../Pages/index';
const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

    navigation.setOptions({ headerTitle: getHeaderTitle(route) });

    return (
        <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
            <BottomTab.Screen
                style={styles.bottom}
                name="Home"
                component={HomePage}
                options={{
                    title: 'ANA EKRAN'
                }}
            />
            <BottomTab.Screen
                style={styles.bottom}
                name="Links"
                component={QuestionListPage}
                options={{
                    title: 'TESTLER'
                }}
            />
        </BottomTab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Home':
            return 'Motivasyon';
        case 'Links':
            return 'Testler';
    }
}

const styles = StyleSheet.create({
    bottom: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#1c1c1e"
    }
});
