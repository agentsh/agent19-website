import React from 'react';

import ContentPage from '../components/ContentPage';
import config from '../config';

import fetch from 'isomorphic-fetch';

export default class Lech extends React.Component {
    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/lech.json');
        const json = await response.json();
        return json;
    }
    render() {

        return (
            <ContentPage {...this.props} />
        );
    }
}
