import React from "react"
import { FlatList, Text, View } from "react-native"
import { FloatingAction } from "../shared/floating-action";
import { Consumable } from "../../model/consumable"
import { routes } from "../../App";

export const Fixtures = ({ navigation }) => {
    const data: any[] = [{ name: 'Test' }];

    const onPress = () => {
        navigation.navigate(routes.addFitting);
    }
    return <>
        <FloatingAction onPress={onPress} />
        <FlatList data={data} style={{ flex: 1 }}
            renderItem={({ item }) => <ListItem fixture={item} />}
        />
    </>
}

interface FixtureListItem {
    fixture: Consumable
}

const ListItem = ({ fixture }: FixtureListItem) => {
    return <View>
        <Text>{fixture.name}</Text>
    </View>
}