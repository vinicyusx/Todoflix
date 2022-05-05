import React, {component} from 'react';
import styled from "styled-components"
import logo from "./image/logo.png"
import usuario from "./image/usuario.svg"
import arrow from "./image/arrow.svg"

const Itemlist = styled.ul`
display: flex;
align-item: ;
padding: 6px;
margin-left: 8px;

li {
 list-style-type: none;
 color:#fff;
 padding: 5px;
}
`
const Nav = styled.nav`
background:#000;
height: 60px;
display: flex;

padding: 10px ;
`
const Input = styled.input`
height:32px;
width:400px;
display: flex;
border-radius: 10px;
border: 0px;


`
const Buscar = styled.div`
display: flex;
margin-left: 5rem;

`
const Button = styled.button`
background: #E71B27;
color: #fff;
border-radius: 4px;
width:120px;
height:32px;
align-items:center; 
margin-left:20rem;
display: flex;
justify-content:flex-end;
flex-diretion:row;
`
const Img = styled.nav`
margin-left: 2rem;

`
const List = () =>{
    return(
        
        <Nav>
        <img src={logo} alt="logo"/>
        
            <Itemlist>
                <li>
                Inicio
                </li>
                <li>
                Categorias
                </li>
                
            </Itemlist>
            
            <Buscar>
            <Button>Adicionar filme</Button>
            
            <Input></Input>
            </Buscar>
            <Img>
            <img src={usuario} alt="foto"/>
            <img src={arrow} alt="arrow"/>
            </Img>
            </Nav>
            
    
    )
} 

export default List