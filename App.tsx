import React from 'react';
import logo from './logo.svg';
import blackKing from './resources/Chess_kdt45.svg'
import whiteKing from './resources/Chess_klt45.svg'
import blackKnight from './resources/Chess_ndt45.svg'
import whiteKnight from './resources/Chess_nlt45.svg'
import blackPawn from './resources/Chess_pdt45.svg'
import whitePawn from './resources/Chess_plt45.svg'
import blackBishop from './resources/Chess_bdt45.svg'
import whiteBishop from './resources/Chess_blt45.svg'
import blackQueen from './resources/Chess_qdt45.svg'
import whiteQueen from './resources/Chess_qlt45.svg'
import blackRook from './resources/Chess_rdt45.svg'
import whiteRook from './resources/Chess_rlt45.svg'

import './App.css';

interface SquareProps {
    isWhite: boolean,
    figure: string
}

interface BoardProps {
}

interface BoardState {
}
const startingPostion = [
    [whiteRook,whiteKnight,whiteBishop,whiteKing,whiteQueen,whiteBishop,whiteKnight,whiteRook],
    [whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn,whitePawn],
    [],[],[],[],
    [blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn,blackPawn],
    [blackRook,blackKnight,blackBishop,blackKing,blackQueen,blackBishop,blackKnight,blackRook]

];

function Square(props: SquareProps) {
    return (
        <button className={props.isWhite ? 'white-square' : 'black-square'}>{<img src={props.figure}/>} </button>
    )
};

class Board extends React.Component<BoardProps, BoardState> {
    renderSquare(isWhite: boolean, figure: string) {
        return (<Square
            isWhite={isWhite}
            figure={figure}
        />)
    }

    renderRow(isFirstWhite: boolean, figures: string[]) {
        /*for (let i = 0; i < 8; i++) {
            this.renderSquare(isFirstWhite)
            isFirstWhite = !isFirstWhite;
        }*/
        return <div className={'board-row'}>
            {this.renderSquare(isFirstWhite, figures[0])}
            {this.renderSquare(!isFirstWhite, figures[1])}
            {this.renderSquare(isFirstWhite, figures[2])}
            {this.renderSquare(!isFirstWhite, figures[3])}
            {this.renderSquare(isFirstWhite, figures[4])}
            {this.renderSquare(!isFirstWhite, figures[5])}
            {this.renderSquare(isFirstWhite, figures[6])}
            {this.renderSquare(!isFirstWhite, figures[7])}
        </div>
    }

    render() {
        return (
            <div>
                <div className={'board-row'}>
                    {this.renderRow(true,startingPostion[0])}
                    {this.renderRow(false,startingPostion[1])}
                    {this.renderRow(true,startingPostion[2])}
                    {this.renderRow(false,startingPostion[3])}
                    {this.renderRow(true,startingPostion[4])}
                    {this.renderRow(false,startingPostion[5])}
                    {this.renderRow(true,startingPostion[6])}
                    {this.renderRow(false,startingPostion[7])}
                </div>
            </div>);
    }
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button className="black-square"></button>
            </header>
        </div>
    );
}

export default Board;
