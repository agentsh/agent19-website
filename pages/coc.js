import React from 'react';
import DefaultPage from '../components/DefaultPage';
import config from '../config';
import fetch from 'isomorphic-fetch';

export default class CodeOfConduct extends React.Component {
    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/coc.json');
        const json = await response.json();
        return json;
    }
    render() {

        return (
            <DefaultPage {...this.props} />
        );
    }
}
