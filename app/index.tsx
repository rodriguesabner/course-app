import React from "react";
import {LogBox, ScrollView, StyleSheet, Text, View} from "react-native";
import {Link} from "expo-router";
import {CourseProps} from "../interfaces/course.interface";

LogBox.uninstall();

export default function App() {
    const times = JSON.parse("[{\"time\":271,\"title\":\"Verbo to be\",\"duration\":974,\"description\":\"Aprenda sobre o verbo 'to be' em inglês.\"},{\"time\":2175,\"title\":\"Possessive Adjectives\",\"duration\":1051,\"description\":\"Explore os adjetivos possessivos e seu uso.\"},{\"time\":3886,\"title\":\"Question Words\",\"duration\":706,\"description\":\"Descubra as palavras interrogativas em inglês.\"},{\"time\":5951,\"title\":\"Preposições I\",\"duration\":589,\"description\":\"Entenda o uso das preposições em inglês.\"},{\"time\":7540,\"title\":\"Plural dos Substantivos\",\"duration\":359,\"description\":\"Aprenda a formar o plural de substantivos em inglês.\"},{\"time\":8029,\"title\":\"Pronomes Demonstrativos\",\"duration\":529,\"description\":\"Explore o uso dos pronomes demonstrativos em inglês.\"},{\"time\":8528,\"title\":\"Simple Present\",\"duration\":1977,\"description\":\"Aprenda sobre o presente simples em inglês.\"},{\"time\":11037,\"title\":\"Preposições II\",\"duration\":650,\"description\":\"Continue estudando as preposições em inglês nesta parte.\"},{\"time\":12210,\"title\":\"Advérbios de frequência\",\"duration\":407,\"description\":\"Descubra o uso de advérbios de frequência em inglês.\"},{\"time\":12551,\"title\":\"Question Words + Simple Present\",\"duration\":846,\"description\":\"Veja como combinar palavras interrogativas com o presente simples em inglês.\"},{\"time\":13747,\"title\":\"Verbo Can\",\"duration\":811,\"description\":\"Entenda o uso do verbo 'can' para expressar habilidade em inglês.\"},{\"time\":14858,\"title\":\"Verbo no Imperativo\",\"duration\":410,\"description\":\"Aprenda a usar verbos no imperativo para dar comandos em inglês.\"},{\"time\":15348,\"title\":\"Presente Progressivo\",\"duration\":1747,\"description\":\"Explore o presente progressivo e sua formação em inglês.\"},{\"time\":17275,\"title\":\"Question Words + Presente Progressivo\",\"duration\":685,\"description\":\"Veja como formular perguntas usando o presente progressivo em inglês.\"},{\"time\":17561,\"title\":\"Pronomes Possessivos\",\"duration\":929,\"description\":\"Continue aprendendo sobre pronomes, desta vez, os possessivos em inglês.\"},{\"time\":18582,\"title\":\"Verbo to be no passado\",\"duration\":686,\"description\":\"Aprenda a usar o verbo 'to be' no passado em inglês.\"},{\"time\":19695,\"title\":\"Verbo to be no passado na interrogação\",\"duration\":461,\"description\":\"Explore a formulação de perguntas usando o verbo 'to be' no passado em inglês.\"},{\"time\":20766,\"title\":\"Question Words + To be no passado\",\"duration\":454,\"description\":\"Veja como usar palavras interrogativas com o verbo 'to be' no passado em inglês.\"},{\"time\":21320,\"title\":\"Passado Simples\",\"duration\":1032,\"description\":\"Aprenda sobre o passado simples em inglês.\"},{\"time\":22452,\"title\":\"Passado Simples na negação e interrogação\",\"duration\":1302,\"description\":\"Explore como negar e formular perguntas usando o passado simples em inglês.\"},{\"time\":23723,\"title\":\"Question Words + Passado Simples\",\"duration\":839,\"description\":\"Combine palavras interrogativas com o passado simples em inglês.\"},{\"time\":24059,\"title\":\"How Long\",\"duration\":612,\"description\":\"Descubra como fazer perguntas sobre a duração de eventos em inglês.\"},{\"time\":24691,\"title\":\"Adjetivos comparativos\",\"duration\":684,\"description\":\"Aprenda a comparar coisas usando adjetivos comparativos em inglês.\"},{\"time\":25435,\"title\":\"Adjetivos superlativos\",\"duration\":456,\"description\":\"Explore como expressar o máximo usando adjetivos superlativos em inglês.\"},{\"time\":25959,\"title\":\"Some, any, no\",\"duration\":619,\"description\":\"Entenda o uso de 'some', 'any' e 'no' em diferentes contextos em inglês.\"},{\"time\":26619,\"title\":\"Every\",\"duration\":400,\"description\":\"Descubra como usar 'every' para se referir a todos os membros de um grupo em inglês.\"},{\"time\":27119,\"title\":\"Have to\",\"duration\":815,\"description\":\"Aprenda a expressar obrigações usando 'have to' em inglês.\"},{\"time\":28234,\"title\":\"Gerúndio\",\"duration\":553,\"description\":\"Explore o gerúndio e sua utilização em inglês.\"},{\"time\":29187,\"title\":\"Verbo + Gerúndio (ing)\",\"duration\":713,\"description\":\"Descubra a estrutura do verbo + gerúndio (ing) em inglês.\"},{\"time\":29936,\"title\":\"Be going to (futuro)\",\"duration\":828,\"description\":\"Entenda o uso de 'be going to' para expressar o futuro em inglês.\"},{\"time\":31264,\"title\":\"Will (futuro)\",\"duration\":1010,\"description\":\"Aprenda sobre o futuro com o uso do 'will' em inglês.\"},{\"time\":33253,\"title\":\"Primeira condicional\",\"duration\":892,\"description\":\"Explore a primeira condicional em inglês.\"},{\"time\":34886,\"title\":\"Present Perfect (afirmação e negação)\",\"duration\":1028,\"description\":\"Entenda o presente perfeito e sua forma afirmativa e negativa em inglês.\"},{\"time\":36714,\"title\":\"Present Perfect X Simple Past\",\"duration\":752,\"description\":\"Compare o presente perfeito com o passado simples em inglês.\"},{\"time\":37568,\"title\":\"Present Perfect + Yet + Already\",\"duration\":749,\"description\":\"Veja como usar 'yet' e 'already' com o presente perfeito em inglês.\"},{\"time\":39291,\"title\":\"Past Progressive\",\"duration\":1018,\"description\":\"Aprenda sobre o passado progressivo em inglês.\"},{\"time\":41208,\"title\":\"Past Progressive X Simple Past\",\"duration\":921,\"description\":\"Compare o passado progressivo com o passado simples em inglês.\"},{\"time\":42129,\"title\":\"Relative Pronouns\",\"duration\":296,\"description\":\"Entenda o uso de pronomes relativos em inglês.\"},{\"time\":42425,\"title\":\"Infinitive of Purpose\",\"duration\":482,\"description\":\"Descubra o uso do infinitivo de propósito em inglês.\"},{\"time\":34517,\"title\":\"Can X Could (permission)\",\"duration\":1138,\"description\":\"Compreenda a diferença entre 'can' e 'could' em expressar permissão.\"},{\"time\":35955,\"title\":\"Be Allowed to\",\"duration\":614,\"description\":\"Aprenda a usar 'be allowed to' para expressar permissão.\"},{\"time\":36653,\"title\":\"Used to\",\"duration\":806,\"description\":\"Entenda o uso do 'used to' para falar sobre hábitos passados.\"},{\"time\":38003,\"title\":\"Past Perfect\",\"duration\":866,\"description\":\"Explore a formação e o uso do 'past perfect' em inglês.\"},{\"time\":39485,\"title\":\"Past Perfect + Simple Past\",\"duration\":892,\"description\":\"Veja como usar o 'past perfect' em conjunto com o 'simple past'.\"},{\"time\":41218,\"title\":\"Past Tenses\",\"duration\":825,\"description\":\"Revise os tempos verbais passados para fortalecer sua compreensão.\"},{\"time\":43284,\"title\":\"Should\",\"duration\":694,\"description\":\"Aprenda a usar 'should' para dar conselhos e fazer sugestões.\"},{\"time\":44228,\"title\":\"Second Conditional\",\"duration\":673,\"description\":\"Compreenda a estrutura e o uso da segunda condição em inglês.\"},{\"time\":46234,\"title\":\"Should Have\",\"duration\":579,\"description\":\"Entenda o uso de 'should have' para expressar arrependimento.\"},{\"time\":47113,\"title\":\"Third Conditional\",\"duration\":153,\"description\":\"Explore a terceira condição e seu uso em situações hipotéticas passadas.\"}]");

    function convertSeconds(seconds: number) {
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
            <ScrollView
                style={styles.scrollView}
            >
                <View style={{flex: 1, paddingBottom: 120, gap: 20}}>
                    <View>
                        <Text style={styles.subtitle}>
                            Bem vindo novamente,
                        </Text>
                        <Text style={styles.title}>
                            Abner
                        </Text>
                    </View>

                    <View>
                        <Text style={styles.title}>
                            Acesse o conteúdo da aula
                        </Text>
                    </View>

                    {times.map((time: CourseProps) => (
                        <View style={styles.cardModule}>
                            <Link
                                href={{
                                    pathname: '/player',
                                    params: {time: JSON.stringify(time)},
                                }}
                            >
                                <View>
                                    <Text style={styles.titleModule}>
                                        {time.title}
                                    </Text>
                                    <Text style={styles.descriptionModule}>
                                        {time.description}
                                    </Text>

                                    <View style={{marginTop: 10}}>
                                        <Text style={{opacity: .50, fontWeight: '500'}}>Duração</Text>
                                        <Text style={{opacity: .50}}>{convertSeconds(time.duration)}</Text>
                                    </View>
                                </View>
                            </Link>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    scrollView: {
        flex: 1,
        marginTop: -80,
        padding: 24
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    subtitle: {
        fontSize: 16,
        color: "#38434D",
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
        width: '100%',
        overflow: 'hidden',
    },
    titleModule: {
        fontSize: 18,
        width: '100%',
    },
    descriptionModule: {
        opacity: .50,
        width: 250,
        whiteSpace: "pre-line"
    }
});
