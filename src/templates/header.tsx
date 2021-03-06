import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent, builder } from '@builder.io/react';
import { Helmet } from 'react-helmet';
import '@builder.io/widgets';
/**
 * Hero is an example of a custom component that you can use in the builder.io editor
 * https://www.builder.io/c/docs/custom-react-components
 * import '../components/Hero/Hero.builder';
 */


// TODO: enter your public API key - Done
builder.init('44b093e300534e7b9bfdfc34cb1189b5');

interface PageTemplateProps {
  data: { allBuilderModels: { header: { content: any }[] } };
}

const PageTemplate: React.SFC<PageTemplateProps> = ({ data }) => {
  const content = data.allBuilderModels.header[0]?.content;
  return (
    <>
      <Helmet>
        <title>{content?.data.title}</title>
      </Helmet>

      <BuilderComponent content={content} />
    </>
  );
};

export default PageTemplate;
export const pageQuery = graphql`
  query($path: String!) {
    allBuilderModels {
      header(target: { urlPath: $path }, limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`;
