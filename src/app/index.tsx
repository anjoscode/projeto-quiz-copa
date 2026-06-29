// Importação dos componentes necessários para a interface e navegação
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function TelaInicial() {
  
  // Função que direciona o usuário para a primeira pergunta do quiz
  const comecarQuiz = () => {
    router.push('/pergunta1');
  };

  return (
    // Define a imagem de fundo utilizando o componente ImageBackground
    <ImageBackground 
      source={require('../../assets/images/copadomundo2026.png')} 
      style={styles.container}
      // Ajusta o estilo da imagem para preencher todo o componente
      imageStyle={styles.imagemFundo} 
      resizeMode="cover" 
    >
      
      {/* Título principal do aplicativo */}
      <Text style={styles.titulo}>Copa do Mundo</Text>
      
      {/* Descrição do objetivo do quiz */}
      <Text style={styles.subtitulo}>Teste seus conhecimentos e veja se você conhece mesmo sobre a Copa do Mundo!</Text>
      
      {/* Botão de navegação que chama a função de início do jogo */}
      <TouchableOpacity style={styles.botao} onPress={comecarQuiz}>
        <Text style={styles.textoBotao}>INICIAR JOGO</Text>
      </TouchableOpacity>
      
    </ImageBackground>
  );
}

// Estilos aplicados à tela
const styles = StyleSheet.create({
  container: { 
    flex: 1, // Faz o container ocupar todo o espaço da tela
    justifyContent: 'center', // Centraliza os elementos verticalmente
    alignItems: 'center', // Centraliza os elementos horizontalmente
    backgroundColor: '#000000',
    padding: 24
  },
  imagemFundo: {
    // Configurações para a imagem ocupar a tela inteira com opacidade
    width: '100%',
    height: '100%',
    opacity: 0.65,
  },
  titulo: { 
    fontSize: 44, 
    fontWeight: 'bold', 
    marginBottom: 16,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.8,
    // Aplica sombra para melhorar a visibilidade do texto sobre a imagem
    textShadowColor: '#000000', 
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  subtitulo: { 
    fontSize: 18, 
    lineHeight: 26,
    marginBottom: 60,
    color: '#ffffff',
    textAlign: 'center',
    maxWidth: '85%', 
    fontWeight: '600', 
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  botao: { 
    backgroundColor: '#eab308', // Cor de destaque do botão
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30, // Arredonda as bordas do botão
    width: '85%', 
    alignItems: 'center',
    // Adiciona efeitos de sombra para dar profundidade
    elevation: 4,
    shadowColor: '#000000', 
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  textoBotao: { 
    color: '#1e293b', 
    fontSize: 18, 
    fontWeight: 'bold',
    letterSpacing: 1.2, 
  },
});