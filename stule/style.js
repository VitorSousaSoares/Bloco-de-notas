import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    titulo:{
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"#734743",
        width:'100%',
        flexDirection:'row',
    },
    txtTitulo:{
        fontSize:30,
        width:'50%',
        marginLeft:25,
        flexGrow:3
    },
    infoTitulo:{
        textAlignVertical:'center',
        flexGrow:1,
        marginRight:10
    },
    listaNotas:{
        width:'100%', 
        height:35,
        flexDirection:'row',
        backgroundColor:"#d7d7d9",
        marginTop:5,
        marginLeft:5,
        borderLeftWidth:4,
        borderLeftColor:'#000',
        
    },
    btnDelet:{
        marginTop:5,
    },
    txtLista:{
        width:250,
        color:"#734743",
        fontSize:24,
        paddingLeft:5        
    },
    btnCadatro:{
        marginTop:5,
        backgroundColor:"#253e54",
        width:160,
        height:40,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:18,
        borderRadius:20,
        color: '#fff'
    },
    paginaInfo:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    },
    logo:{
        width:150,
        height:150,
    },
    txtPaginaInfo:{
        marginTop:10
    },

    btnPaginaInfo:{
        marginTop:15,
        backgroundColor:"#253e54",
        width:120,
        height:40,
        textAlign:'center',
        textAlignVertical:'center',
        fontSize:18,
        borderRadius:20,
        color: '#fff'
    },
    tituloPaginaCadastro:{
        flexDirection:'row',
        backgroundColor:'#734743',
        height:60,
    },
    txtTituloPaginaCadastro:{
        textAlignVertical:'center',
        marginLeft:10,
        fontSize:20
    },
    inputPaginaCadastro:{
        marginLeft:5,
        paddingLeft:5,
        backgroundColor:'#fff',
        width:'50%',
        height:40,
        marginTop:10
    },
    PaginaCadastroConteudo:{
        flex:1,
        margin:8
    },
    btnPaginaCadastro:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:8,
    },
    btnsPaginaCadastro:{
       backgroundColor:"#253e54",
       width: 120,
       height:40,
       fontSize:15,
       textAlignVertical:'center',
       textAlign:'center',
       color:"#fff",
       borderRadius:20,

    },

    btneditar:{
        backgroundColor:"#253e54",
        width: 120,
        height:40,
        fontSize:15,
        textAlignVertical:'center',
        textAlign:'center',
        color:"#fff",
        borderRadius:20,
        alignSelf:'center',
        marginBottom:5
    },
    colorDAnota:{
        marginLeft:5,
        width:40,
        height:40,
        backgroundColor:'red',
        marginTop:10,
    },






    
});

export default styles;