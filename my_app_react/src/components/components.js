import React from "react";
// import {Table} from 'reactstrap';
import lapis from '/home/pedrohenrique/Documentos/Develo/project-html/frontend_learn/my_app_react/src/assets/icons/lapis/lapis.png';
import lixeira from '/home/pedrohenrique/Documentos/Develo/project-html/frontend_learn/my_app_react/src/assets/icons/lixeira/lixeira.png';


class ClickButtonEdit extends React.Component{
    // classe responsável por editar cada campo, passar uma key para o button.
    render(){
        return;
    }
}

class ClickButtonDelete extends React.Component{
    // classe responsável por apagar cada campo, passar uma key para o button.
    render(){
        return;
    }
}

function IsAction(props)
{
    let campo = props.keys_t;

    return( campo=== 'ações' ? <ImageEdit/> : <th>{props.value}</th> );
}

function ImageEdit(props)
{   //avaliar a ideia de um id para cada imagem.

    return(
        <div>
            <button onClick={ClickButtonEdit} className='actButton'><img alt='lapis' type='image' src={lapis} /></button>
            <button onClick={ClickButtonDelete} className='actButton'><img alt='lixeira' type='image' src={lixeira} /></button>
        </div>

    );
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

    let keys = Object.keys(props.objeto);
    let element_formated = [];

    keys.forEach( (key) => 
        element_formated.push( 
            <IsAction value={props.objeto[key]} keys_t={key} /> )
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
        contacts_object_d.forEach( (objeto) => fields.push( <LinhaDeDados objeto={objeto} /> )); 
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
