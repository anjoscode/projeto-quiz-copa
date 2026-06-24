import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { router } from 'expo-router';

export default function Pergunta4() {
  
  // ATENÇÃO ALUNOS: Lógica de Pontuação e Navegação!
  // A função abaixo recebe 'true' se o aluno apertou o botão certo, ou 'false' se errou.
  const responder = (acertou: boolean) => {
    
    // ======== DESAFIO PARA A TURMA! ========
    // Neste momento, o botão só leva para a próxima tela, mas não salva a pontuação!
    // Como vocês vão fazer para salvar os acertos e enviar para a próxima tela?
    // 
    // DICA MESTRE: Com o expo-router, você pode passar "params" (informações) na navegação!
    // Exemplo de como poderia ser a lógica:
    // let pontosAtuais = 0;
    // if (acertou) { pontosAtuais = 1; }
    // router.push({ pathname: '/pergunta2', params: { acertos: pontosAtuais } });
    // ========================================

    // Lógica funcional: Inicializa os pontos da Pergunta 1 e envia para a Pergunta 2
    let pontosAtuais = 0;
    if (acertou) { 
      pontosAtuais = 1; 
    }
    
    router.push({ 
      pathname: '/pergunta5', 
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>Pergunta 4 de 10</Text>
      
      {/* Imagem Ilustrativa da Pergunta */}
      <Image source={{ uri: 'https://flaticon.com' }} style={styles.imagem} />

      {/* Pergunta 4 do seu Roteiro sobre a Copa */}
      <Text style={styles.pergunta}>Em qual Copa do Mundo a Seleção Brasileira conquistou o seu famoso tricampeonato (3º título)?</Text>
      
      {/* Botão A (Incorreta) - Passa false para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) 1958 (Suécia)</Text>
      </TouchableOpacity>
      
      {/* Botão B (Incorreta) - Passa false para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) 1962 (Chile)</Text>
      </TouchableOpacity>

      {/* Botão C (Correta) - Passa true */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>C) 1970 (México)</Text>
      </TouchableOpacity>

      {/* Botão D (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) 1994 (Estados Unidos)</Text>
      </TouchableOpacity>

      {/* Para as próximas telas de perguntas, vocês vão seguir essa mesma estrutura! */}
    </View>
  );
}

// Estilização da Tela adaptada com uma nova combinação neutra (Azul Noturno e Dourado)
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eff6ff', padding: 20 },
  contador: { fontSize: 16, color: '#1e3a8a', fontWeight: 'bold', marginBottom: 20 },
  imagem: { width: 120, height: 120, marginBottom: 20 },
  pergunta: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#1f2937' },
  botao: { 
    backgroundColor: '#eab308', 
    padding: 18, 
    borderRadius: 30, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#1e3a8a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textoBotao: { color: '#1e293b', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});
