import './styles/main.css';
import React from 'react'
import "./App.css"
import {useEffect} from "react";
import AppHeader from "./components/AppHeader/AppHeader";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import {useSelector, useDispatch} from 'react-redux';
import getIngredients from './services/actions/ingredients'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


const API = 'https://norma.nomoreparties.space/api/ingredients'


function App() {

  const storeSelector = useSelector((state) => state)
  console.log(storeSelector)

  const dispatch = useDispatch()
    useEffect(
      () => {
        dispatch(getIngredients());
      },
      [dispatch]
  );
    
  return (
      <>
        <AppHeader/>
          <main style={{ display: 'flex', justifyContent:'center', gap:"24px"}}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients/>
            <BurgerConstructor/>
          </DndProvider>
          </main>
      </>
    )
};

export default App