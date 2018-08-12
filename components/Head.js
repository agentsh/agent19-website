import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default class Header extends React.PureComponent {
    static propTypes = {
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        keywords: PropTypes.string,
        canonical: PropTypes.string,
        robots: PropTypes.string,
    };

    static defaultProps = {
        title: 'Agent Conf',
    };

    render() {
        return (
            <Head>
                <title>
                    {this.props.title}
                </title>
                <meta charSet="UTF-8" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="googlebot" content="index,follow,noodp" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1" />
                <meta name="title" content={this.props.title} />
                <meta name="description" content={this.props.description} />
                <meta name="keywords" content={this.props.keywords} />
                <meta name="robots" content={this.props.robots} />

                <meta property="language" content="en_US" />
                <meta property="publisher" content="agent.sh" />
                <meta property="author" content="agent.sh" />
                <meta property="copyright" content="agent.sh" />
                <meta property="audience" content="all" />
                <meta property="distribution" content="global" />
                {this.props.image && <meta property="image" content={this.props.image} />}
                <meta property="format-detection" content="telephone=yes" />

                <meta property="og:title" content={this.props.title} />
                <meta property="og:description" content={this.props.description} />
                <meta property="og:url" content="http://www.agent.sh" />
                <meta property="og:locale" content="en_US" />
                {this.props.image && <meta property="og:image" content={this.props.image} />}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Agent.sh" />

                <meta property="DC.Title" content={this.props.title} />
                <meta property="DC.Publisher" content="agent.sh" />
                <meta property="DC.Copyright" content="agent.sh" />

                <meta property="twitter:card" content="summary" />
                <meta property="twitter:url" content="http://www.agent.sh" />
                <meta property="twitter:title" content={this.props.title} />
                <meta property="twitter:description" content={this.props.description} />
                {this.props.image && <meta property="twitter:image" content={this.props.image} />}

                <link rel="apple-touch-icon" sizes="57x57" href="static/favicon/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="static/favicon/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="static/favicon/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="static/favicon/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="static/favicon/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="static/favicon/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="static/favicon/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="static/favicon/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="static/favicon/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="static/favicon/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="static/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="static/favicon/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="static/favicon/favicon-16x16.png" />
                <link rel="manifest" href="static/favicon/manifest.json" />
                <meta name="msapplication-TileImage" content="static/favicon/ms-icon-144x144.png" />

                <script
                    dangerouslySetInnerHTML={{
                        __html: `
(function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
    });
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', 'GTM-NRX7LML');`,
                    }} />

                <link href="https://fonts.googleapis.com/css?family=Open+Sans|Teko" rel="stylesheet" />
                <link href="static/slick.css" rel="stylesheet" />
            </Head>
        );
    }
}
