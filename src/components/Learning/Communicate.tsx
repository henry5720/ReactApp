import React from 'react';
import ReactDOM, { render } from 'react-dom';

interface Props1 {
    fatherText: string,
}
interface Props2 {
    changeFatherText(text: string): void
}

function Child1(props: Props1){
    return (
        <div className='child'>
            <p>{`子組件接收到來自父組件的文北內容: [${props.fatherText}]`}</p>
        </div>
    )
}

class Child2 extends React.Component<Props2>{
    state = {
        text: "子組件文本"
    };
    changeText=()=>{
        this.props.changeFatherText(this.state.text)
    }
    render(): React.ReactNode {
        return (
            <div className='child'>
                <button onClick={this.changeText}>
                    點擊更新父組件文本
                </button>
            </div>
        )
    }
}

class FatherComponent extends React.Component{
    state={
        text: "初始化父組件的文本"
    }
    changeText1=()=>{
        this.setState({
            text: "改變後的父組件文本"
        })
    }
    changeText2=(nextText: string)=>{
        this.setState({
            text: nextText
        })
    }
    render(): React.ReactNode {
        return (
            <div className="father">
                {/*
                <button onClick={this.changeText1}>
                    點擊修改父組件傳入子組件的文本
                </button>
                引入子組件 > 通過props下發具體狀態值 > 實現父-子通信
                <Child1 fatherText={this.state.text}/>
                */}
                {/* 引入子組件 > 通過props下發可的函數 > 實現子-父通信 */}
                <p>{`父組件的文本內容: ${this.state.text}`}</p>
                <Child1 fatherText={this.state.text}/>
                <Child2 changeFatherText={this.changeText2}/>
            </div>
        )
    }
}

export { FatherComponent }