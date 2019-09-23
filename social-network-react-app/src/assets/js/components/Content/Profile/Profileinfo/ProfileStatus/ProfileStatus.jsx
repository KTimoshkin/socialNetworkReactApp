import React,{Component} from 'react';

export default class ProfileStatus extends Component{
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
    }

    render() {
        return(
            <div>
                {this.state.editMode
                ? <div><input autoFocus={true} onBlur={this.deactivateEditMode} type="text" value={this.props.status}/></div>
                : <div><p onDoubleClick={this.activateEditMode}>{this.props.status}</p></div>}
            </div>
        )
    }
}