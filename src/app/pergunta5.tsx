import { router } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pergunta5() {
  
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
      pathname: '/pergunta6' as any,
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>Pergunta 5 de 10</Text>
      
      {/* Imagem Ilustrativa da Pergunta */}
      <Image source={{ uri: 'https://flaticon.com' }} style={styles.imagem} />

      {/* Pergunta 5 do seu Roteiro sobre a Copa */}
      <Text style={styles.pergunta}>Qual país é o maior vencedor de Copas do Mundo na Europa, possuindo 4 títulos mundiais ao lado da Alemanha?</Text>
      
      {/* Botão A (Incorreta) - Passa false para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) França</Text>
      </TouchableOpacity>
      
      {/* Botão B (Correta) - Passa true para a função */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>B) Itália</Text>
      </TouchableOpacity>

      {/* Botão C (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Inglaterra</Text>
      </TouchableOpacity>

      {/* Botão D (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>D) Espanha</Text>
      </TouchableOpacity>

      {/* Para as próximas telas de perguntas, vocês vão seguir essa mesma estrutura! */}
    </View>
  );
}

// Estilização da Tela adaptada com uma nova combinação neutra (Rosa Claro e Grafite)
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fce7f3', padding: 20 },
  contador: { fontSize: 16, color: '#9d174d', fontWeight: 'bold', marginBottom: 20 },
  imagem: { width: 120, height: 120, marginBottom: 20 },
  pergunta: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#1f2937' },
  botao: { 
    backgroundColor: '#334155', 
    padding: 18, 
    borderRadius: 30, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#9d174d',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textoBotao: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});
