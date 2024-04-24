import React from 'react';
import {Link, Stack, StackItem, Text} from '@fluentui/react';
import {appTheme} from '@core/theme';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const Footer: React.FC = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Stack
      id="contact"
      styles={{
        root: {
          textAlign: 'center',
          padding: 40,
          backgroundColor: appTheme.palette.black,
          color: appTheme.palette.white,
          selectors: {
            'span, a, :hover a': {
              color: appTheme.palette.white,
            },
            a: {
              textDecoration: 'underline',
            },
            'a:hover': {
              textDecoration: 'none',
            },
          },
        },
      }}
      tokens={{childrenGap: 12}}
      horizontalAlign="center"
    >
      <StackItem>
        <Text variant="large">Get in Contact</Text>
      </StackItem>
      <StackItem>
        <Text>
          Email Address:{' '}
          <Link href="mailto:jacob.sturges96@gmail.com">
            jacob.sturges96@gmail.com
          </Link>
        </Text>
      </StackItem>
      <StackItem>
        <Stack horizontal tokens={{childrenGap: 12}}>
          <Link href="https://github.com/JacobSturges">
            <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
          </Link>
          <Link href="https://www.linkedin.com/in/jacob-sturges/">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </Link>
        </Stack>
      </StackItem>
      <StackItem>
        <Text>© {year} Jacob Sturges. All rights reserved.</Text>
      </StackItem>
    </Stack>
  );
};
