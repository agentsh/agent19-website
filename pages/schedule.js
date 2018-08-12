import React from 'react';
import fetch from 'isomorphic-fetch';

import SchedulePage from '../components/SchedulePage';
import config from '../config';

export default class CodeOfConduct extends React.Component {
    static async getInitialProps() {
        const response = await fetch(config.baseUrl + '/schedule.json');
        const responseSpeakers = await fetch(config.baseUrl + '/.json');
        const indexJson = await responseSpeakers.json();
        const json = await response.json();
        json.speakers = indexJson.speakers;
        return json;
    }
    render() {
        return <SchedulePage {...this.props} />;
    }
}
