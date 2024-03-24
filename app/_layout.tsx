import {Stack} from 'expo-router';

export default function Layout() {
    return <Stack
        screenOptions={{
            headerShown: false,
            contentStyle: {
                flex: 1,
                paddingTop: 70,
                backgroundColor: '#F2F4F6',
            }
        }}
    />;
}
