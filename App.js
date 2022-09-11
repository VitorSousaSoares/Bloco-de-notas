import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text, View, FlatList, Button, TouchableOpacity, TextInput, ScrollView,Image, Modal } from 'react-native';
import React,{ useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import LT from './componemte/LT';
import Style from './stule/style';
import styles from './stule/style';
import MOD from './componemte/Modal';



export default function App() {

  const [pagina,setPagina] = useState('principal');
  const [nome,setNome] = useState ('');
  const [conteudo,setConteudo] = useState('');
  const [di,setDi] = useState('');
  const [lista,setLista] = useState(LT);
  const [corItem,setCorItem] = useState('#000');

  useEffect(()=>{
    (async()=>{
      try{
        let TarefaAtual = await AsyncStorage.getItem('lista');
        if(TarefaAtual == null)
          setLista([]);
        else
          setLista(JSON.parse(TarefaAtual));
      }catch(erro){

      }
    })();
  },[])

  const excluir = (id) =>{
    let newLista = lista.filter(function(val){
      return val.id != id;
    });
    setLista(newLista);

    (async()=>{
      try{
        await AsyncStorage.setItem('lista',JSON.stringify(newLista));
      }catch(error){

      }
    })();

    setPagina('principal');

  }

  const editar = (id,nome,conteudo,cor) => {
    setNome(nome);
    setDi(id);
    setConteudo(conteudo);
    setCorItem(cor)

    excluir(id);
    setPagina('editar');
  }

  function troca() {
    let newLista = {id:di, nome:nome, conteudo:conteudo,cor:corItem};
    setLista([...lista,newLista]);
    (async()=>{
      try{
        await AsyncStorage.setItem('lista', JSON.stringify([...lista,newLista]))
      } catch (error){

      }
    })();
    setPagina('principal');
  }

  function addItem (){
    let id = 0;
    if(lista.length>0){
      id = lista[lista.length-1].id+1;
    }

    let newLista = {id:id, nome:nome, conteudo:conteudo, cor:corItem};
    setLista([...lista,newLista]);

    (async()=>{
      try{
        await AsyncStorage.setItem('lista', JSON.stringify([...lista,newLista]))
      } catch (error){

      }
    })();

    setPagina('principal');
  }

  if (pagina === 'principal') {
    return(
      <View style={Style.container}>
        <View style={Style.titulo}>
          <Text style={Style.txtTitulo}>NOTAS</Text>
          <TouchableOpacity
            onPress={() => setPagina("info")}
          >
            <AntDesign name="infocirlce" size={24} color="black" style={Style.infoTitulo}/>
          </TouchableOpacity>
        </View>
        <FlatList
          data={lista}
          renderItem={({item})=>
            <View style={{
              width:'100%', 
              height:35,
              flexDirection:'row',
              backgroundColor:"#d7d7d9",
              marginTop:5,
              marginLeft:5,
              borderLeftWidth:4,
              borderLeftColor:(item.cor),
            }}>
            <View>
              <TouchableOpacity 
                onPress={()=> editar(item.id,item.nome,item.conteudo,item.cor)}
              >
                <Text style={Style.txtLista}>{item.nome}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={()=> excluir(item.id)} style={Style.btnDelet}>
                <AntDesign name="delete" size={24} color="black" />
              </TouchableOpacity>
            </View>
            </View>
          }
        />
        <TouchableOpacity 
          onPress={()=> setPagina('cadastro')}
          style={{alignItems:'center', marginBottom:5}}
        >
          <Text style={styles.btnCadatro}>CADASTRO</Text>
        </TouchableOpacity>
      
        <StatusBar hidden/>
      </View>
    )    
  }else if (pagina === 'cadastro') {
    return(

      <View style={styles.container}>
        <View style={styles.tituloPaginaCadastro}>
          <Text style={styles.txtTituloPaginaCadastro}>TITULO:</Text>
          <TextInput
            autoFocus={false}
            multiline={false}
            style={styles.inputPaginaCadastro}
            onChangeText={text=> setNome(text)}
          >
            <Text>Digite o titulo</Text>    
          </TextInput>
        
            <View > 
              <MOD setCorItem={setCorItem} corItem={corItem}/>
            </View>
          
        </View>
        <View style={styles.PaginaCadastroConteudo}>
          <TextInput
            autoFocus={true}
            multiline={true}
            onChangeText={text=> setConteudo(text)}
            
          />
        </View>
        <View style={styles.btnPaginaCadastro}>
          <TouchableOpacity
            onPress={()=> addItem()}
          >
            <Text style={styles.btnsPaginaCadastro}>ADICIONAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=> setPagina('principal')}
          >
            <Text style={styles.btnsPaginaCadastro}>VOLTAR</Text>
          </TouchableOpacity>
          </View>
        <StatusBar hidden/>
      </View>
    )
  }else if (pagina === 'editar') {
    return(
      <View style={styles.container}>
        <View style={styles.tituloPaginaCadastro}>
          <Text style={styles.txtTituloPaginaCadastro}>TITULO:</Text>
          <TextInput
            autoFocus={false}
            style={styles.inputPaginaCadastro}
            onChangeText={text => setNome(text)}
          >
            <Text>{nome}</Text>
          </TextInput>
          <View > 
              <MOD setCorItem={setCorItem} corItem={corItem}/>
            </View>
        </View>
        <View style={styles.PaginaCadastroConteudo}>
          <TextInput
            autoFocus={false}
            multiline={true}
            onChangeText={text=> setConteudo(text)}
          >
            <Text>{conteudo}</Text>
          </TextInput>

        </View>
        
        <TouchableOpacity
          onPress={()=> troca()}
        >
          <Text style={styles.btneditar}>VOLTAR</Text>
        </TouchableOpacity>
        <StatusBar hidden/>
      </View>
    )
  }else if (pagina === "info") {
    return(
    <View style={styles.paginaInfo}>
      <Image style={styles.logo} source={require('./componemte/logo.png')}/>
      <Text style={styles.txtPaginaInfo}>VERSÃO 1.0</Text>
      <TouchableOpacity 
        
        onPress={()=> setPagina('principal')}
       
      >
        <Text style={styles.btnPaginaInfo}>VOLTAR</Text>
      </TouchableOpacity>
      <StatusBar hidden/>
    </View>
    )
    
  }

}