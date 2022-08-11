import React, { Component } from 'react'

export default class Collapse extends Component {
    state = {
        showContent: false
    }

    
    showMore = () => {
        if (this.state.showContent === false) {
            this.setState({ showContent: true })
        }
        else if (this.state.showContent === true) {
            this.setState({ showContent: false })
        }
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={this.showMore}>
                    {this.props.linkTitle}
                </button>

                {
                    this.state.showContent ? (
                        <div class="collapse show">
                            <div class="card card-body">
                                {this.props.children}
                            </div>
                        </div>
                    ) : null
                }

            </div>
        );
    }
}


