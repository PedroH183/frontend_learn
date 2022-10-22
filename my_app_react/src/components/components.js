import React from "react";
import {Table} from 'reactstrap';
import lapis from '/home/pedroparker/Documentos/Develo/Front-end/frontend_learn/my_app_react/src/assets/icons/lapis/lapis.png';
import lixeira from '/home/pedroparker/Documentos/Develo/Front-end/frontend_learn/my_app_react/src/assets/icons/lixeira/lixeira.png';

function IsAction(props)
{
    let campo = props.keys_t;

    return(campo==='ações'? <ImageEdit/> : <th>{props.value}</th>);
}

function ImageEdit(props){
    //avaliar a ideia de um id para cada imagem.
    return(
        <div className="GroupImages">
            <img alt='lapis' src={lapis}/>
            <img alt='lixeira' src={lixeira}/>
        </div>
        
    );
}

function Coluna(props){
    // montando o cabeçalho da tabela.

    let column = props.campos.map( (campo) =>  <th>{campo}</th> );

    return (
        <tr>
            {column}
        </tr>
    );
}
  
function LinhaDeDados(props)
{
    // passando cada objeto
    let keys = Object.keys(props.objeto);
    let element_formated = [];

    keys.forEach( (key)=> 
        element_formated.push( 
            <IsAction value={props.objeto[key]} keys_t={key} /> )
    );

    //let element_formated = props.objeto.forEach( (key, value) => <ImageEdit key={key} value={value}/>)
    
    return (
    <tr>
        {element_formated}
    </tr>
    );
}
  
export class Tabela extends React.Component {

    render(){
    let contacts_object_d = this.props.contacts; // objeto inteiro 
    let fields = []; // é cada linha de dado.
    let colunas = Object.keys(contacts_object_d[0]); // pegando todas as colunas da tabela.

    if(contacts_object_d)
    {
        this.props.contacts.forEach( (objeto) => fields.push( <LinhaDeDados objeto={objeto} /> )); 
    }
    
    return (
        <Table bordered borderless dark hover >
        
            <thead>
                <Coluna campos={colunas}/>
            </thead>
            
            <tbody>
                {fields}
            </tbody>

        </Table>
    );
    }
    
}
