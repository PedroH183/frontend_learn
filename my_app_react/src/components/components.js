import React from "react";
// import {Table} from 'reactstrap';
import lapis from '../assets/icons/lapis/lapis.png';
import lixeira from '../assets/icons/lixeira/lixeira.png';
import { contacts } from '../App';

function IsAction(props)
{
    let json = props.json;
    let id = props.id;
    let campo = props.keys_t;

    return( campo=== 'ações' ? <ImageEdit json={json} id={id}/> : <th>{props.value}</th> );
}

class ImageEdit extends React.Component
{   //avaliar a ideia de um id para cada imagem.
    constructor(props){
        super(props);
        this.state = {allObj: contacts}

        this.ClickButtonDelete = this.ClickButtonDelete.bind(this);
        this.ClickButtonEdit = this.ClickButtonEdit.bind(this);
    }

    ClickButtonDelete(){ // classe responsável por editar cada campo, passar uma key para o button.
        // Vamos usar a lista inteira aqui para deletar um índice
        let newJson = [];
        let origin_json = this.props.json;

        for(let i = 0; i < origin_json.length; ++i){
            if(origin_json[i].id === this.props.id){
                continue;
            }
            newJson[i] = origin_json[i];
        }
        console.log(newJson);
        console.log(origin_json);
        this.setState({allObj: newJson});
        this.render();
    }

    ClickButtonEdit(){ // classe responsável por apagar cada campo, passar uma key para o button.
        //Vamos usar só um indice aqui para editar
    }

    render(){ 
    return(
        <div>
            <button onClick={() => this.ClickButtonEdit()} className='actButton' ><img alt='lapis' type='image' src={lapis} /></button>
            <button onClick={() => this.ClickButtonDelete()} className='actButton'><img alt='lixeira' type='image' src={lixeira} /></button>
        </div>

    );
    }
}

function Coluna(props)
{   // montando o cabeçalho da tabela.
    
    let column = props.campos.map( (campo) =>  <th>{campo}</th> );

    return (
        <tr>{column}</tr>
    );
}
  
function LinhaDeDados(props)
{   // passando cada objeto

    let json = props.json;
    let id = props.objeto.id;
    let keys = Object.keys(props.objeto);
    let element_formated = [];

    keys.forEach( (key) => 
        element_formated.push( 
            <IsAction value={props.objeto[key]} keys_t={key} json={json} id={id}/> )
    );

    //let element_formated = props.objeto.forEach( (key, value) => <ImageEdit key={key} value={value}/>)

    return (
        <tr>{element_formated}</tr>
    );
}
  
export class Tabela extends React.Component {
    // classe responsavel por renderizar toda a tabela.

    render(){
    let contacts_object_d = this.props.contacts; // lista de objetos
    let fields = []; // é cada linha de dados.
    let colunas = Object.keys(contacts_object_d[0]); // pegando todas as colunas da tabela.

    if(contacts_object_d)// definindo linhas de dados.
    {
        contacts_object_d.forEach( (objeto) => fields.push( <LinhaDeDados objeto={objeto} json={contacts_object_d} /> )); 
    }
    
    return (
        <table>
            <thead>
                <Coluna campos={colunas}/>
            </thead>
            
            <tbody>
                {fields}
            </tbody>

        </table>

    );
    }
    
}
