import React from "react";
import PropTypes from "prop-types";

class Item extends React.Component {
    constructor(props){
        super(props);
        this.state = {isCompleted: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({isCompleted: !this.state.isCompleted});
    }
    render(){
        const {name} = this.props;
        const itemWithStatus = this.state.isCompleted ? <strike>{name}</strike> : name; 
        return (
        <span onClick={this.handleClick}>
            {itemWithStatus}
        </span>
        );
    }
};

const List = (props) => {
  const { items } = props;

  return (
    <ul>{items.map((item, index) => <li key={`item_${index}`}><Item name={item}/></li>)} </ul>
  );
};

export class DynamicList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: props.items };
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(e) {
        if (e.key == "Enter") {
            const newItem = e.target.value.length > 0 ? e.target.value : null;
            if (newItem) {
                e.target.value = ""
                this.setState({items: [...this.state.items, newItem]});
            }
        }
        
    }
    render() {
        return (
            <div>
            <List items={this.state.items}></List>
            <input type="text" onKeyDown={this.handleAddItem}></input>
            </div>
        );
    }
};

Item.propTypes = {
    name: PropTypes.string.isRequired
};

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
DynamicList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
