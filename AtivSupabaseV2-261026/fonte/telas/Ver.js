// /fonte/telas/Ver.js
import { Text, View } from 'react-native';
import { supabase } from '../supabase';

// Teste fora do componente (executa uma única vez quando o ficheiro é carregado na app)
async function testarConexao() {
    const { data, error } = await supabase.from('Clientes').select('*');
    if (error) {
        console.log('Erro ao buscar clientes:', error);
    } else { 
        console.log('Resposta do Supabase(Tabela Clientes): ', data); 
    };
}

testarConexao(); // Dispara o teste na inicialização

export default function Ver() {
    return (
        <View>
            <Text>Ver</Text>
        </View>
    );
}