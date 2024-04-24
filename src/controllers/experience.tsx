import React from 'react';
import {Link, Stack, StackItem, Text} from '@fluentui/react';
import {myCld} from '@core/cloudinary';
import {Resize} from '@cloudinary/url-gen/actions/resize';
import {AdvancedImage} from '@cloudinary/react';
import {useCheckMobileScreen} from '@core/hooks/useCheckMobileScreen';
import {Section} from '@components/section';

interface ExperiencePlaceProps {
  name: string;
  link: string;
  logo: string;
  title: string;
  timeline: string;
  description: string;
}
const ExperiencePlace: React.FC<ExperiencePlaceProps> = ({
  name,
  link,
  logo,
  title,
  timeline,
  description,
}) => {
  const isMobile = useCheckMobileScreen();
  const logoImg = myCld.image(logo).resize(Resize.scale().width(200));

  return (
    <Stack horizontal={!isMobile} tokens={{childrenGap: 20}}>
      <StackItem align="center">
        <Link href={link}>
          <AdvancedImage cldImg={logoImg} />
        </Link>
      </StackItem>
      <StackItem>
        <Stack>
          <StackItem>
            <Text variant="large">{name}</Text>
          </StackItem>
          <StackItem>
            <Text>{title}</Text>
          </StackItem>
          <StackItem>
            <Text style={{fontStyle: 'italic'}}>{timeline}</Text>
          </StackItem>
          <StackItem>
            <Text>{description}</Text>
          </StackItem>
        </Stack>
      </StackItem>
    </Stack>
  );
};

export const Experience: React.FC = () => {
  return (
    <Section id="experince" title="Experience">
      <Stack tokens={{childrenGap: 60}}>
        <ExperiencePlace
          name="PlaygroundXYZ / Gum Gum"
          link="https://playgroundxyz.com/"
          title="Senior software engineer"
          logo="/web-resume/pxyz"
          timeline="Dec 2020 - present"
          description="While working at PlaygroundXYZ I have made considerable contributions to the development and maintenance of the AIP product. During this time, I have worked across several products, expanding my skill set and demonstrating a high level of agility and reaching the level of skill necessary to achieve the title of senior software engineer."
        />
        <ExperiencePlace
          name="Are Media (Formally Bauer)"
          link="https://www.aremedia.com.au/"
          title="Javascript developer"
          logo="/web-resume/are-media"
          timeline="May 2019 - Dec 2020"
          description="I was employed working primarily in ReactJS. My time at Are Media was critical for the development of my Frontend skills as the tech team is quite small and thus a large amount of personal responsibility was placed on each dev to function effectively and efficiently independently. While at Are Media I have better honed my skills at writing clean code that efficiently conveys it's intent."
        />
        <ExperiencePlace
          name="News Corp Australia"
          link="https://www.newscorpaustralia.com/"
          title="Junior developer"
          logo="/web-resume/newscorp"
          timeline="Feb 2017 - May 2019"
          description="I began at News Corp as an intern, eventually earning my way into a full-time role. It was here that I learned the fundamental skills required to be an effective developer and contribute to the overall goals of a team. While here, I was offered the chance to work with a variety of technologies and found that I particularly enjoyed JavaScript/Node.js."
        />
        <ExperiencePlace
          name="UNSW"
          link="https://www.unsw.edu.au/"
          title="Bachelor's of Computer Science (Database Systems)"
          logo="/web-resume/unsw"
          timeline="2015 - 2021"
          description="I graduated with a bachelor's of computer science (Database Systems) from the high-ranking University of New South Wales. I successfully secured and completed two separate research projects and participated in the prestigious UNSW Co-op Internship Program durring my studies."
        />
      </Stack>
    </Section>
  );
};
