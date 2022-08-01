import React from 'react';
import { screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import Wallet from '../pages/Wallet';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
const history = createMemoryHistory();

test('Se a página renderiza o campo de e-mail', () => {
    renderWithRouterAndRedux(<Login />);
    // console.log(screen.logTestingPlaygroundURL());
    const email = screen.getByRole('textbox');
    expect(email).toBeInTheDocument();
})

test('Se é renderizado o campo para digitar a senha', () => {
    renderWithRouterAndRedux(<Login />);
    const senha = screen.getByTestId('password-input');
    expect(senha).toBeInTheDocument();
})

test('Se é renderizado um botão de login', () => {
    renderWithRouterAndRedux(<Login />);
    const botaoDeLogin = screen.getByRole('button', { name: /entrar/i });
    expect(botaoDeLogin).toBeInTheDocument();
})

test(`Se a página de carteira é renderizada corretamente`, () => {
    renderWithRouterAndRedux(<Wallet />);
       const usuarioLogado = screen.getByText(/brl/i);
       expect(usuarioLogado).toBeInTheDocument();
})

test(`Se o botão está funcionando`, () => {
    renderWithRouterAndRedux(<Login />);
    const emailInput = screen.getByRole('textbox');
    const senhaInput = screen.getByTestId('password-input');
    const botao = screen.getByRole('button', {
     name: /entrar/i
   })
   userEvent.type(emailInput, 'trybe@test.com');
   userEvent.type(senhaInput, '12345678');
   userEvent.click(botao);
 
   renderWithRouterAndRedux(<Wallet />);
   const descricao = screen.getByTestId('description-input');
    expect(descricao).toBeInTheDocument();
})

test(`Se existe um campo para inserir o valor monetario`, () => {
    renderWithRouterAndRedux(<Wallet />);
     const dinheiro = screen.getByTestId('value-input');
     expect(dinheiro).toBeInTheDocument();
})

test(`Se existe um campo para a descrição`, () => {
    renderWithRouterAndRedux(<Wallet />);
    const descricao = screen.getByTestId('description-input');
    expect(descricao).toBeInTheDocument();
})

test(`Se existe um botão com o texto adicionar despesas`, () => {
    renderWithRouterAndRedux(<Wallet />);  
     const botao = screen.getByRole('button', { name: /adicionar despesa/i })
     expect(botao).toBeInTheDocument();
})

test(`Se existe um campo para inserir pagamentos`, () => {
    renderWithRouterAndRedux(<Wallet />);
     const dinheiros = screen.getByText('Dinheiro');
     expect(dinheiros).toBeInTheDocument();
})
 