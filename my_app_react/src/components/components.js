import React from "react";
import {Table} from 'reactstrap';


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

    keys.forEach( (key) => element_formated.push( <td>{props.objeto[key]}</td> ));
    
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
