import { createClient } from "@supabase/supabase-js"; 

const supabaseUrl = 'https://yljxprpujodcryuqwkld.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlsanhwcnB1am9kY3J5dXF3a2xkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTIzODQyMDAsImV4cCI6MjEwNzk2MDIwMH0.YgDkMirhUoGJ8bu_I70HbxuODoV5vLAu83iMXp8ttZU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testarConexao(Clientes) {
  try {
    const { data, error } = await supabase
      .from(Clientes)
      .select('*');

    if (error) {
      console.error(`Erro de acesso à tabela '${Clientes}':`, error.message);
    } else {
      console.log(`Acesso anônimo à tabela '${Clientes}' funcionou! Data:`, data);
    }
  } catch (err) {
    console.error('Erro inesperado na requisição: ', err);
  }
}

testarConexao('Clientes')
