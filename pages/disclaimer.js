import React from 'react';
import DefaultPage from '../components/DefaultPage';
import config from '../config';

export default class Disclaimer extends React.Component {
    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/disclaimer.json');
        const json = await response.json();
        return json;
    }

    render() {

        return (
            <DefaultPage {...this.props} />
        );
    }
}
