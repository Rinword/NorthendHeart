import React, { Component } from 'react';

import { Row } from './uxComponent/UxBox';
import Main from './main';
import HeaderMenu from './headerMenu';

import './index.css';

//routing here
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: '',
        };

        this.oneMenuSelect = item => {
            // console.log('menu', item);
            this.setState({ activePage: item });
        };
        this.onMouseSelect = item => {
            // console.log('scroll', item);
            this.setState({ activePage: item });
        };
    }

    componentDidMount() {
        this.setState({ activePage: 'slide0' });
    }

    render() {
        return (
            <div className="app" id="app">
                <HeaderMenu activePage={this.state.activePage} onSelectItem={this.oneMenuSelect} cls="app__header" />
                <Row cls="app__body">
                    <Main activePage={this.state.activePage} onSelectPage={this.onMouseSelect} />
                </Row>
                <Row cls="app__footer">
                    <div>
                        Icons made by
                        <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">
                            Smashicons
                        </a>
                        from{' '}
                        <a href="https://www.flaticon.com/" title="Flaticon">
                            www.flaticon.com
                        </a>{' '}
                        is licensed by
                        <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0">
                            CC 3.0 BY
                        </a>
                    </div>
                </Row>
            </div>
        );
    }
}

export default App;
