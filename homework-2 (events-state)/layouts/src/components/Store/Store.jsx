import IconSwitch from "../IconSwitch/IconSwitch.jsx";
import {Component} from "react";
import listProductData from "../../../assets/data.json";
import ListView from "../ListView/ListView.jsx";
import CardsView from "../CardsView/CardsView.jsx";
import "./Store.css"

export default class Store extends Component {
    products  = listProductData;
    state = {
        activeView: "view_module"
    }
    render() {
        const otherView = this.state.activeView === "view_module" ? "view_list" : "view_module"
        return (
            <div className="store">
                <IconSwitch icon={otherView} onSwitch={() => this.setState({activeView:otherView})}/>
                {this.state.activeView === "view_module"? <CardsView cards = {this.products}/> : <ListView items = {this.products}/>}
            </div>
        )
    }
}
