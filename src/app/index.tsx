import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// O 'router' é a ferramenta do Expo que usamos para navegar de uma tela para outra!
import { router } from 'expo-router'; 

export default function TelaInicial() {
  
  // Essa função é executada quando o usuário clica no botão "Começar"
  const comecarQuiz = () => {
    // Aqui estamos mandando o aplicativo ir para a tela chamada "pergunta1"
    router.push('/pergunta1');
  };

  return (
    // A View é o container principal, como se fosse o 'body' ou uma 'div' grande do HTML
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Copa do Mundo 🏆</Text>
      
      <Text style={styles.subtitulo}>Teste seus conhecimentos e veja se você conhece mesmo sobre a Copa do Mundo!</Text>
      
      {/* TouchableOpacity é o botão do React Native (ele dá um efeito de clique) */}
      <TouchableOpacity style={styles.botao} onPress={comecarQuiz}>
        <Text style={styles.textoBotao}>INICIAR JOGO</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// O StyleSheet é onde criamos o design, bem parecido com CSS!
const styles = StyleSheet.create({
  container: { 
    flex: 1, // Faz a View ocupar a tela inteira
    justifyContent: 'center', // Centraliza os elementos no meio da tela (vertical)
    alignItems: 'center', // Centraliza os elementos (horizontal)
    backgroundColor: '#f0fdf4', // Fundo verde bem suave (tom de gramado limpo)
    padding: 24
  },
  titulo: { 
    fontSize: 40, // Aumentado levemente para dar mais impacto
    fontWeight: 'bold', 
    marginBottom: 16,
    color: '#166534', // Verde floresta mais escuro para melhor contraste
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitulo: { 
    fontSize: 16, 
    lineHeight: 24,
    marginBottom: 60,
    color: '#334155', // Tom cinza mais legível sobre o fundo verde
    textAlign: 'center',
    maxWidth: '85%', // Evita que o texto encoste nas bordas
  },
  botao: { 
    backgroundColor: '#eab308', // Amarelo/Dourado Premium
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30, // Botão em formato de pílula (mais moderno)
    width: '85%', // Ajustado levemente para encaixar melhor em telas menores
    alignItems: 'center',
    // Sombra para dar profundidade (funciona em iOS e Android)
    elevation: 4,
    shadowColor: '#166534', // Sombra esverdeada para combinar com o fundo
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  textoBotao: { 
    color: '#1e293b', // Letra escura no botão claro para dar contraste
    fontSize: 18, // Aumentado para melhor leitura
    fontWeight: 'bold',
    letterSpacing: 1.2, // Letras levemente espaçadas para um ar esportivo
  },
});
