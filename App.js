
import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const technologies = [
  {
    id: '1',
    name: 'Inteligência Artificial',
    description: 'Sistemas que simulam a inteligência humana para tarefas complexas.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAO3UTZKb24tsTSkhjfpwmrVJFIGQbuA5uLg&s',
  },
  {
    id: '2',
    name: 'Computação Quântica',
    description: 'Uso de bits quânticos para resolver problemas impossíveis para computadores clássicos.',
    image: 'https://geobot.org/wp-content/uploads/2023/08/Inteligencia-artificial-criar-imagens-com-IA-1.png',
  },
  {
    id: '3',
    name: '5G',
    description: 'Nova geração de redes móveis com alta velocidade e baixa latência.',
    image: 'https://s2-techtudo.glbimg.com/gqtopOlJaRFxb1Z9nbCwYed1pDM=/84x0:928x502/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/m/B/TpaifBRRut9I7YWx7xjg/1000-f-277911478-8uic7ehexx2eqg8zmdwvfriqwvugd9ac.jpg',
  },
  {
    id: '4',
    name: 'Biotecnologia',
    description: 'Uso da biologia para desenvolver novas tecnologias e produtos.',
    image: 'https://www.ufrgs.br/cincolinhajr/wp-content/uploads/2022/08/biotec.png',
  },
  {
    id: '5',
    name: 'Carros Autônomos',
    description: 'Veículos que utilizam IA para navegar sem intervenção humana.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStcCjP38XXRWfeJVj0DwOG_BHLAkg5tQDfZg&s',
  },
  {
    id: '6',
    name: 'Blockchain',
    description: 'Tecnologia descentralizada que garante segurança e transparência em transações.',
    image: 'https://blog.peduti.com.br/wp-content/uploads/2023/01/11.png',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Tecnologias Emergentes</Text>
      <FlatList
        data={technologies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
