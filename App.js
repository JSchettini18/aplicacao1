import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const technologies = [
  {
    id: '1',
    name: 'Inteligência Artificial',
    description: 'Sistemas que simulam a inteligência humana para tarefas complexas, desde assistentes virtuais até diagnósticos médicos e reconhecimento de imagem.',
    image: 'https://profuturo.education/wp-content/uploads/2024/09/240927_PF-observatorio-IA-web-1.jpg',
    details: 'A inteligência artificial está revolucionando o mundo ao permitir que máquinas realizem tarefas que antes eram exclusivas dos seres humanos. Desde a automação industrial até a análise preditiva de dados, essa tecnologia está presente em diversas áreas. Empresas utilizam IA para personalizar serviços, otimizar processos e criar experiências interativas. No futuro, a inteligência artificial promete impulsionar ainda mais o desenvolvimento de novas tecnologias, tornando-se essencial em setores como saúde, finanças e transporte.',
  },
  {
    id: '2',
    name: 'Computação Quântica',
    description: 'Uso de bits quânticos para resolver problemas impossíveis para computadores clássicos, revolucionando a criptografia e a simulação molecular.',
    image: 'https://img.odcdn.com.br/wp-content/uploads/2021/08/shutterstock_652948648.jpg',
    details: 'A computação quântica utiliza princípios da mecânica quântica para processar informações de maneira exponencialmente mais rápida do que os computadores convencionais. Seus qubits permitem realizar cálculos complexos, trazendo avanços significativos em áreas como segurança digital, inteligência artificial e pesquisa científica. Empresas como Google e IBM investem nessa tecnologia para resolver problemas matemáticos e químicos que levariam séculos para serem resolvidos com métodos tradicionais.',
  },
  {
    id: '3',
    name: '5G',
    description: 'Nova geração de redes móveis com alta velocidade e baixa latência, permitindo avanços na Internet das Coisas e realidade aumentada.',
    image: 'https://teletime.com.br/wp-content/uploads/2020/01/5G_upscaled_illustration_x4.jpg',
    details: 'A tecnologia 5G representa um salto na comunicação móvel, proporcionando velocidades extremamente rápidas e uma latência muito baixa. Isso possibilita o desenvolvimento de cidades inteligentes, veículos autônomos e novas experiências em realidade aumentada e virtual. Além disso, a conectividade aprimorada do 5G suporta um grande número de dispositivos simultaneamente, melhorando a eficiência de redes industriais, médicas e domésticas.',
  },
  {
    id: '4',
    name: 'Blockchain',
    description: 'Tecnologia descentralizada que garante segurança e transparência em transações financeiras e contratos inteligentes.',
    image: 'https://azuton.com/wp-content/uploads/2022/04/Afinal-o-que-e-Blockchain-1170x640-1.jpg',
    details: 'O blockchain é uma tecnologia descentralizada que garante a segurança e transparência de transações digitais. Ele é amplamente utilizado em criptomoedas, mas também tem aplicações em cadeias de suprimentos, contratos inteligentes e autenticação de identidade digital. Sua estrutura à prova de fraudes torna-o um recurso valioso para empresas e governos, permitindo o rastreamento seguro de ativos e a criação de sistemas financeiros mais confiáveis.',
  },
  {
    id: '5',
    name: 'Realidade Aumentada',
    description: 'Tecnologia que sobrepõe elementos virtuais ao mundo real, aprimorando experiências em jogos, varejo, saúde e treinamentos.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQexD3XsvbWVXIAhzcWqmbe2DGI5BFShmo5GA&s',
    details: 'A realidade aumentada transforma a forma como interagimos com o mundo, combinando elementos virtuais com o ambiente físico. Aplicações incluem desde jogos interativos até treinamentos médicos e simulações industriais. Empresas de varejo usam essa tecnologia para proporcionar experiências imersivas aos clientes, permitindo a visualização de produtos antes da compra. No futuro, a RA será fundamental na educação, turismo e assistência remota.',
  }
];

const App = () => {
  const [selectedTech, setSelectedTech] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Catálogo de Tecnologias Emergentes</Text>
      {selectedTech ? (
        <View style={styles.detailsContainer}>
          <Image source={{ uri: selectedTech.image }} style={styles.largeImage} />
          <Text style={styles.name}>{selectedTech.name}</Text>
          <Text style={styles.description}>{selectedTech.details}</Text>
          <TouchableOpacity onPress={() => setSelectedTech(null)} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={technologies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity onPress={() => setSelectedTech(item)} style={styles.detailsButton}>
                  <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  largeImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  detailsButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsContainer: {
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
