import React from 'react';
import {Stack, StackItem, Text} from '@fluentui/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {Section} from '@components/section';

interface SkillProps {
  name: string;
  text: string;
  icon: IconProp;
}

const skillStyles = {
  height: 400,
  width: 360,
  border: '1px solid black',
  borderRadius: 20,
  padding: 30,
  textAlign: 'center',
};

const Skill: React.FC<SkillProps> = ({name, text, icon}) => {
  return (
    <Stack
      styles={{root: skillStyles}}
      horizontalAlign="center"
      tokens={{childrenGap: 12}}
    >
      <StackItem>
        <FontAwesomeIcon icon={icon} size="3x" />
      </StackItem>
      <StackItem>
        <Text variant="large">{name}</Text>
      </StackItem>
      <StackItem>
        <Text>{text}</Text>
      </StackItem>
    </Stack>
  );
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Skills">
      <Stack
        horizontal
        tokens={{childrenGap: 40}}
        wrap
        horizontalAlign="center"
      >
        <StackItem>
          <Skill
            name="ReactJS"
            text="The front-end web framework I am most experienced in is React. I have built and maintained numerous web apps in this framework."
            icon={['fab', 'react']}
          />
        </StackItem>
        <StackItem>
          <Skill
            name="Typescript"
            text="Typescript is an iteration of JavaScript that allows for typing. This language is extremely flexible and can be used to solve just about any software problem. I am most proficient in this language as well as plain JavaScript."
            icon={['fab', 'js']}
          />
        </StackItem>
        <StackItem>
          <Skill
            name="Database's"
            text="While undertaking my degree in Computer Science, I majored in Database systems. My high degree of competence with this technology has proven an asset many times during my professional career. I am experienced with both relational and non-relational databases."
            icon={['fas', 'database']}
          />
        </StackItem>
        <StackItem>
          <Skill
            name="Kotlin"
            text="I have spent the last couple of years working on an Android app for Playground XYZ and have thus developed strong skills in Kotlin Android development."
            icon={['fab', 'android']}
          />
        </StackItem>
        <StackItem>
          <Skill
            name="Python"
            text="For many years, I have enjoyed working in Python. In particular, I have used it for several personal data/analytics projects. The power and ease of use make this language the perfect tool for data-focused projects."
            icon={['fab', 'python']}
          />
        </StackItem>
      </Stack>
    </Section>
  );
};
