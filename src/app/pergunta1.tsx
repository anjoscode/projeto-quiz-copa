import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function Pergunta1() {
  
  // ATENÇÃO ALUNOS: Lógica de Pontuação e Navegação!
  // A função abaixo recebe 'true' se o aluno apertou o botão certo, ou 'false' se errou.
  const responder = (acertou: boolean) => {
    
    // Lógica functional: Inicializa os pontos da Pergunta 1 e envia para a Pergunta 2
    let pontosAtuais = 0;
    if (acertou) { 
      pontosAtuais = 1; 
    }
    
    // Manda o aluno para a próxima tela e leva o placar atual junto
    router.push({ 
      pathname: '/pergunta2', 
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    // Área principal que organiza tudo na tela
    <View style={styles.container}>
      
      {/* Mostra em que pergunta o usuário está */}
      <Text style={styles.contador}>Pergunta 1 de 10</Text>
      
      {/* Imagem Ilustrativa da Pergunta */}
      <Image source={require('../../assets/images/jogadores-uruguai.png')} style={styles.imagem} />

      {/* Pergunta 1 do seu Roteiro sobre a Copa */}
      <Text style={styles.pergunta}>Qual país sediou a primeira Copa do Mundo da FIFA em 1930?</Text>
      
      {/* Botões de resposta: chamam a função passando se a opção é verdadeira ou falsa */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) Brasil</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>B) Uruguai</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Itália</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Argentina</Text>
      </TouchableOpacity>
      
    </View>
  );
}

// Estilização da Tela ajustada para seguir o padrão da Pergunta 4
const styles = StyleSheet.create({
  // Define o fundo e alinhamento dos itens na tela
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5DC', padding: 20 },
  
  // Ajustado para fontSize 24 conforme pedido
  contador: { fontSize: 24, color: '#000000', fontWeight: 'bold', marginBottom: 20 },
  
  // Define o tamanho e como a imagem deve aparecer
  imagem: { width: '95%', height: 350, marginBottom: 30, resizeMode: 'contain' }, 
  
  // Estilo do texto da pergunta
  pergunta: { fontSize: 24, fontWeight: 'bold', marginBottom: 40, textAlign: 'center', color: '#1f2937' },
  
  // Define a aparência e o formato arredondado dos botões
  botao: { 
    backgroundColor: '#eab308', 
    padding: 18, 
    borderRadius: 30, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
    elevation: 3, // Sombra para dar destaque (Android)
    shadowColor: '#166534', // Sombra (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  
  // Estilo do texto dentro dos botões
  textoBotao: { color: '#1e293b', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});