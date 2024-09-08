import { unknownTrackImageUri } from "@/constants/images";
import { TouchableHighlight, View } from "react-native"
import FastImage from "react-native-fast-image"
import { StyleSheet, Text } from "react-native"
import { colors, fontSize } from "@/constants/tokens";
import { defaultStyles } from "@/styles";

export type TrackListItemProps = {
    track: { title: string; image?: string }
}

export const TrackListItem = ({ track }: TrackListItemProps) => {
    const isActiveTrack = false

    return <TouchableHighlight>
        <View style={styles.trackItemContainer}>
            <View>
                <FastImage
                    source={{
                        uri: track.image ?? unknownTrackImageUri,
                        priority: FastImage.priority.normal
                    }}
                    style={{
                        ...styles.trackArtworkImage,
                        opacity: isActiveTrack ? 0.6 : 1
                    }}
                />
            </View>

            <View style={{ width: "100%" }}>
                <Text
                    numberOfLines={1}
                    style={{
                        ...styles.trackTitleText,
                        color: isActiveTrack ? colors.primary : colors.text
                    }}
                >
                    {track.title}
                </Text>
            </View>
        </View>
    </TouchableHighlight>
}

const styles = StyleSheet.create({
    trackItemContainer: {
        flexDirection: 'row',
        columnGap: 14,
        alignItems: 'center',
        paddingRight: 20
    },
    trackArtworkImage: {
        borderRadius: 8,
        width: 50,
        height: 50,
    },
    trackTitleText: {
        ...defaultStyles,
        fontSize: fontSize.sm,
        fontWeight: '600',
        maxWidth: '90%'
    }
})