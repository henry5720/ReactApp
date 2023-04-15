import React from 'react';
import ReactDOM, { render } from 'react-dom';

// 父組件傳遞過來的屬性對象的類型
interface Props {
    text: string;
}
interface State {
    text: string;
}
// 定義子組件
class LifeCircle extends React.Component<Props, State>{
    constructor(props: Props){
        super(props);
        console.log("[constructor] 進入");
        // state 可以在 constructor 裡初始化
        this.state={text: "子組件的文本"};
    };
    // 初始化渲染時調用
    componentWillMount(): void {
        console.log("[componentWillMount] 方法執行");
    };
    // 初始化渲染時調用
    componentDidMount(): void {
        console.log("[componentDidMount] 方法執行");
    };
    // 父組件修改組件的props時會調用
    componentWillReceiveProps(nextProps: Props): void {
        console.log("[componentWillReceiveProps] 方法執行");
    };
    // 組件更新時調用
    shouldComponentUpdate(nextProps: Props, nextState: State, nextContext: any): boolean {
        console.log("[shouldComponentUpdate] 方法執行");
        return true;
    };
    // 組件更新時調用
    componentWillUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void {
        console.log("[componentWillUpdate] 方法執行");
    };
    // 組件更新後調用
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("[componentDidUpdate] 方法執行");
    };
    // 組件卸載時調用
    componentWillUnmount(): void {
        console.log("[componentWillUnmount] 子組件方法執行");
    };
    // 點擊按鈕, 修改子組件文本內容的方法
    changeText=()=>{
        this.setState({
            text: "修改後的子組件文本"
        });
    };
    render(){
        console.log("[render] 方法執行");
        return (
            <div className="container">
                <button onClick={this.changeText} className='changeText'>
                    修改子組件文本內容
                </button>
                <p className='textContent'>{this.state.text}</p>
                <p className='fatherContent'>{this.props.text}</p>
            </div>
        );
    }
}

class LifeCircleContainer extends React.Component{
    // state 也可以使用屬性聲明的形式初始化
    state = {
        text: "父組件的文本",
        hideChild: false
    };
    // 點擊按鈕, 修改父組件文本內容的方法
    changeText=()=>{
        this.setState({
            text: "修改後的父組件文本"
        });
    }
    // 點擊按鈕, 隱藏(卸載)LifeCircle組件的方法
    hideChild=()=>{
        this.setState({
            hideChild: true
        })
    }
    render(): React.ReactNode {
        return (
            <div className='fatherContent'>
                <button onClick={this.changeText} className='changeText'>
                    修改父組件文本內容
                </button>
                <button onClick={this.hideChild} className='hideChild'>
                    隱藏子組件
                </button>
                {this.state.hideChild?null:<LifeCircle text={this.state.text}/>}
            </div>
        )
    }
}

export { LifeCircleContainer }