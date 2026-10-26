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
    const nav = useNavigation();
    const [clientes, setClientes] = useState([]); useEffect(() => {
        const buscarDados = async () => {
            <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row'}}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginRight: 10 }}>Clientes</Text>
                    <Button title="Novo Cliente" onPress={() => nav.navigate('Cadastro')}/>
                </View>
                <FlatList
                    data={clientes}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={{ padding: 20, borderBottomWidht: 1, borderColor: '#eee' }}>
                            <Text></Text>
                            <Text></Text>
                        </View>
                    )}
                />
            </SafeAreaView>
            </SafeAreaProvider>
        };
    });
}
