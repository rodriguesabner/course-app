import React, {useLayoutEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import YoutubePlayer, {YoutubeIframeRef} from "react-native-youtube-iframe";
import {useNavigation} from "expo-router";
import {CourseProps} from "../interfaces/course.interface";

const Player = () => {
    const navigation = useNavigation()
    const playerRef = useRef<YoutubeIframeRef>(null);
    const [course, setCourse] = useState({} as CourseProps);
    const [playing, setPlaying] = useState(true)

    useLayoutEffect(() => {
        const currentRoute = navigation
            .getState()
            .routes
            .find((route) => route.name === 'player')

        // @ts-ignore
        const parsedCourse = JSON.parse(currentRoute.params.time) as CourseProps;
        if (playerRef.current != null) {
            setTimeout(() => {
                playerRef.current?.seekTo(parsedCourse.time, true)
                console.log("changing timestamp video");
            }, 2000)
        }

        setCourse(parsedCourse);
    }, []);

    const convertSeconds = (seconds: number) => {
        const hour = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainSeconds = seconds % 60;

        if (hour > 0) {
            return `${hour} hora${hour !== 1 ? 's' : ''}, ${minutes} minuto${minutes !== 1 ? 's' : ''} e ${remainSeconds} segundo${remainSeconds !== 1 ? 's' : ''}`;
        } else if (minutes > 0) {
            return `${minutes} minuto${minutes !== 1 ? 's' : ''} e ${remainSeconds} segundo${remainSeconds !== 1 ? 's' : ''}`;
        } else {
            return `${remainSeconds} segundo${remainSeconds !== 1 ? 's' : ''}`;
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>

            <YoutubePlayer
                ref={playerRef}
                height={300}
                videoId={"euIqptZpe5Q"}
                play={playing}
                initialPlayerParams={{
                    controls: true,
                }}
            />

            <View style={{padding: 20, marginTop: -70}}>
                <Text style={styles.title}>
                    {course.title}
                </Text>
                <Text style={styles.subtitle}>
                    {course.description}
                </Text>

                <View style={{marginTop: 20}}>
                    <Text style={{opacity: .50, fontWeight: '500'}}>Duração</Text>
                    <Text style={{opacity: .50}}>{convertSeconds(course.duration)}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -30
    },
    backButton: {
        padding: 10,
        marginBottom: 10
    },
    backButtonText: {
        opacity: .50,
        fontSize: 18
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        color: "#38434D",
        width: '100%',
    },
    cardModule: {
        borderRadius: 5,
        padding: 14,

        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 3,
    },
    titleModule: {
        fontSize: 18,
    },
    descriptionModule: {
        opacity: .50
    }
});

export default Player;
