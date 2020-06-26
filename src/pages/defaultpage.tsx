import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, StaticQuery, graphql } from 'gatsby';

import { BuilderComponent, builder } from '@builder.io/react';
import '@builder.io/widgets';

import Layout from '../components/Layout'

// TODO: enter your public API key - Done
builder.init('44b093e300534e7b9bfdfc34cb1189b5')

/**
 * Example of rendering a page with Builder.io content and other content.
 * E.g. a custom component model in Builder called "header"
 */
export default class ExamplePage extends React.Component<any> {
  render() {
    const { defaultpage } = this.props.data.allBuilderModels;
    return defaultpage[0] ? (
      <Layout>
        <Helmet>
          <title>title</title>
        </Helmet>
        <div>
          {/* Optionally render a default from Builder.io, or render your <Header /> instead */}
          <BuilderComponent model="defaultpage" content={defaultpage[0]?.content} />
        </div>
      </Layout>
    ) : (
      'Page not found for this URL'
    );
  }
}

// See https://builder.io/c/docs/graphql-api for more info on our
// GraphQL API and our explorer
export const query = graphql`
  query {
    allBuilderModels {

      # Manually grab the page content matching "/dpage"
      # For Gatsby content, we want to make sure to always get fresh (cachebusted) content
      defaultpage(limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`;
