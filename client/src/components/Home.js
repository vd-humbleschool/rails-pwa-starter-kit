import React from 'react';

import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';

function Home() {
  return (
    <Article>
      <Section>
        <Heading>Welcome!</Heading>
        <Paragraph>This is the Rails PWA Starter Kit</Paragraph>
      </Section>
    </Article>
  );
}

export default Home;
