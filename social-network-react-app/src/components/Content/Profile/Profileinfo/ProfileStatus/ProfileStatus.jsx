import React,{Component} from 'react';

export default class ProfileStatus extends Component{
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return(
            <div>
                {this.state.editMode
                ? <div><input autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} type="text" value={this.props.status}/></div>
                : <div><p onDoubleClick={this.activateEditMode}>{this.props.status != null ? this.props.status : '"Double click" to change status'}</p></div>}
            </div>
        )
    }
}