import { router, useLocalSearchParams } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Pergunta9() {
  // Captura os parâmetros enviados pela tela anterior (Pergunta 8)
  const params = useLocalSearchParams();
  // Converte o valor recebido para número (se for o primeiro, começa em 0)
  const pontosRecebidos = params.acertos ? Number(params.acertos) : 0;
  
  // Lógica de Pontuação e Navegação
  const responder = (acertou: boolean) => {
    // Calcula os novos pontos e envia para a Tela de Resultado
    let pontosAtuais = pontosRecebidos;
    if (acertou) { 
      pontosAtuais = pontosRecebidos + 1; 
    }
    
    // CORRIGIDO: Avança para a pergunta 10 sem a extensão ".tsx"
    router.push({ 
      pathname: '/pergunta10' as any,
      params: { acertos: pontosAtuais } 
    });
  };

  return (
    <View style={styles.container}>
      {/* Atualizado para Pergunta 9 */}
      <Text style={styles.contador}>Pergunta 9 de 10</Text>
      
      {/* Imagem Ilustrativa da Pergunta */}
      <Image source={{ uri: 'https://flaticon.com' }} style={styles.imagem} />

      {/* Nova pergunta sobre o capitão do Penta */}
      <Text style={styles.pergunta}>
        Quem era o capitão que ergueu a taça do pentacampeonato do Brasil na Copa de 2002?
      </Text>
      
      {/* Botão A (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>A) Dunga</Text>
      </TouchableOpacity>
      
      {/* Botão B (Correta) - Passa true */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>B) Roberto carlos</Text>
      </TouchableOpacity>

      {/* Botão C (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(false)}>
        <Text style={styles.textoBotao}>C) Lúcio</Text>
      </TouchableOpacity>

      {/* Botão D (Incorreta) - Passa false */}
      <TouchableOpacity style={styles.botao} onPress={() => responder(true)}>
        <Text style={styles.textoBotao}>D) Cafu</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilização da Tela
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fdf2f8', padding: 20 },
  contador: { fontSize: 16, color: '#be185d', fontWeight: 'bold', marginBottom: 20 },
  imagem: { width: 120, height: 120, marginBottom: 20 },
  pergunta: { fontSize: 22, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#1f2937' },
  botao: { 
    backgroundColor: '#ec4899', 
    padding: 18, 
    borderRadius: 12, 
    width: '100%', 
    marginBottom: 15, 
    alignItems: 'center',
  },
  textoBotao: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
});