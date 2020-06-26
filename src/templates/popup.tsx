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

interface PopupTemplateProps {
  data: { allBuilderModels: { popup: { content: any }[] } };
}

const PopupTemplate: React.SFC<PopupTemplateProps> = ({ data }) => {
  const content = data.allBuilderModels.popup[0]?.content;
  return (
    <>
      <BuilderComponent content={content} />
    </>
  );
};

export default PopupTemplate;
export const pageQuery = graphql`
  query {
    allBuilderModels {
      popup(limit: 1, options: { cachebust: true }) {
        content
      }
    }
  }
`;
