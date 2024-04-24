import React from 'react';
import {Link, Stack, StackItem, Text} from '@fluentui/react';
import {AdvancedImage} from '@cloudinary/react';
import {myCld} from '@core/cloudinary';
import {Resize} from '@cloudinary/url-gen/actions/resize';
import {Section} from '@components/section';

interface ProjectProps {
  title: string;
  text: string;
  image: string;
  link: string;
}

const projectStyles = {
  height: 580,
  width: 520,
  border: '1px solid black',
  borderRadius: 20,
  padding: 30,
  textAlign: 'center',
};

const Project: React.FC<ProjectProps> = ({title, text, link, image}) => {
  const img = myCld.image(image).resize(Resize.scale().height(180));

  return (
    <Link
      href={link}
      style={{textDecoration: 'none'}}
      styles={{
        root: {
          selectors: {':hover .title': {textDecoration: 'underline'}},
        },
      }}
    >
      <Stack
        styles={{root: projectStyles}}
        horizontalAlign="center"
        verticalAlign="space-around"
        tokens={{childrenGap: 20}}
      >
        <StackItem>
          <Stack tokens={{childrenGap: 20}}>
            <StackItem>
              <Text className="title" variant="large">
                {title}
              </Text>
            </StackItem>
            <StackItem>
              <Text>{text}</Text>
            </StackItem>
          </Stack>
        </StackItem>
        <StackItem>
          <AdvancedImage cldImg={img} />
        </StackItem>
      </Stack>
    </Link>
  );
};

export const Portfolio: React.FC = () => {
  return (
    <Section id="portfolio" title="Portfolio">
      <Stack
        horizontal
        tokens={{childrenGap: 20}}
        wrap
        horizontalAlign="center"
      >
        <Project
          title="AIP Vision project"
          link="https://play.google.com/store/apps/details?id=com.playgroundxyz.vision_project&pcampaignid=web_share"
          text="A product needed to be built for panelist users' to be able to complete the in-app studies so that we can measure user attention. This product was built in GO a technology I taught myself on the fly. The development team was very small, just me and my team lead, so there was a very high level of responsibility."
          image="web-resume/aip-vision-project"
        />
        <Project
          title="AIP Measuremeant portal"
          link="https://playgroundxyz.com/aip"
          text="While working at PXYZ one of my responsibilities was the building and maintenance of the measurement portal. This is a portal where both internal and external users can build and manage their AIP campaigns. During my time working on this product, several major initiatives were undertaken to expand the functionality of this page, notably the implementation of analytics pages that significantly reduced the overhead for our campaign majors."
          image="web-resume/measurement-portal"
        />
        <Project
          title="Are Media Sites"
          link="https://www.homestolove.com.au/"
          text="At Are Media me and my team where responsible for the development and maintenance of our brands sites. This includes brands like Now to Love, Home to Love & Elle. These sites are built in React and are styled in SASS."
          image="web-resume/now-to-love"
        />
        <Project
          title="This Site"
          link="https://github.com/JacobSturges/react-resume"
          text="This site was designed and complete by myself in my spare time. It was built in ReactJS and use's the Fluent UI UX framework."
          image="web-resume/web-resume"
        />
        <Project
          title="Newsconnect 2.0"
          link="https://www.newsconnect.com.au/"
          text="This was a major project I worked on as part of a team at Newscorp. The front-end was built in angular and the CMS was built using keystoneJS. The team both designed and built this site from the ground up."
          image="web-resume/newsconnect"
        />
      </Stack>
    </Section>
  );
};
