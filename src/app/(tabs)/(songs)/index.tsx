import { TrackList } from "@/components/TrackList"
import { defaultStyles } from "@/styles"
import { View, ScrollView } from "react-native"

const SongsScreen = () => {
    return <View style={defaultStyles.container}>
        <ScrollView>
            <TrackList scrollEnabled={false}/>
        </ScrollView>
    </View>
}

export default SongsScreen