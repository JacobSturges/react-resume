import React from 'react';
import {Stack, StackItem, Text} from '@fluentui/react';
import {AdvancedImage} from '@cloudinary/react';
import {max} from '@cloudinary/url-gen/actions/roundCorners';
import {format} from '@cloudinary/url-gen/actions/delivery';
import {thumbnail} from '@cloudinary/url-gen/actions/resize';
import {focusOn} from '@cloudinary/url-gen/qualifiers/gravity';
import {face} from '@cloudinary/url-gen/qualifiers/focusOn';
import {auto} from '@cloudinary/url-gen/qualifiers/format';
import {myCld} from '@core/cloudinary';
import {toWords} from 'number-to-words';
import {useCheckMobileScreen} from '@core/hooks/useCheckMobileScreen';
import {Section} from '@components/section';

export const AboutMe: React.FC = () => {
  const isMobile = useCheckMobileScreen();
  const profile = myCld
    .image('/web-resume/profile.jpg')
    .resize(
      thumbnail().width(300).height(300).zoom(0.8).gravity(focusOn(face())),
    )
    .roundCorners(max())
    .delivery(format(auto()));

  const workStartDate = new Date(Date.parse('01 Feb 2017'));
  const today = new Date();

  const diff = today.getFullYear() - workStartDate.getFullYear();

  const diffWord = toWords(diff);

  return (
    <Section id="about-me" title="About me">
      <Stack
        horizontal={!isMobile}
        horizontalAlign="center"
        tokens={{childrenGap: 60}}
      >
        <StackItem>
          <AdvancedImage cldImg={profile} />
        </StackItem>
        <StackItem align="center">
          <Text>
            I am a Senior Software Engineer based in Amsterdam, Netherlands,
            originally from Australia. I have {diffWord} years of professional
            experience in software development, during which I have acquired
            expertise across a diverse array of technologies. My commitment to
            continuous learning and problem-solving is reflected in my high
            level of technical proficiency. I am driven by a strong passion for
            innovation and am eager to contribute to any team by leveraging my
            skills to address the challenges at hand.
          </Text>
        </StackItem>
      </Stack>
    </Section>
  );
};
