import React from 'react';
import {Stack, StackItem, Text} from '@fluentui/react';
import {appTheme} from '@core/theme';

const baseStyle = {
  height: '100vh',
  width: '100%',
  backgroundImage:
    'url(https://res.cloudinary.com/jacob-sturges/image/upload/f_auto/v1539734430/web-resume/museum.jpg)',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  span: {
    textAlign: 'center',
    color: appTheme.palette.white,
  },
  paddingBottom: 120,
};
export const Landing: React.FC = () => {
  return (
    <Stack
      styles={{root: baseStyle}}
      horizontalAlign="center"
      verticalAlign="center"
    >
      <StackItem>
        <Text variant="mega" style={{color: appTheme.palette.white}}>
          Jacob Sturges
        </Text>
      </StackItem>
      <StackItem>
        <Text variant="xxLarge">Senior software engineer</Text>
      </StackItem>
    </Stack>
  );
};
