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
        <button onClick={this.handleClick}>
            {itemWithStatus}
        </button>
        );
    }
};

export class DynamicList extends React.Component {
    constructor(props){
        super(props);
        this.state = { items: props.items };
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    handleAddItem(e) {
        if (e.key == "Enter") {
            const event_target = e.target
            const newItem = event_target.value.length > 0 ? event_target.value : null;
            if (newItem) {
                event_target.value = ""
                this.setState(prevState => ({ items: [...prevState.items, newItem] }));
            }
        }
        
    }
    render() {
        return (
            <div>
            <ul>
            {
                this.state.items.map((item, index) =>
                    <li key={`item_${index}`}>
                    <Item name={item}/>
                    </li>
                )
            }
            </ul>
            <input type="text" onKeyDown={this.handleAddItem}></input>
            </div>
        );
    }
};

Item.propTypes = {
    name: PropTypes.string.isRequired
};
DynamicList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
DynamicList.defaultProps = {
    items: []
};
