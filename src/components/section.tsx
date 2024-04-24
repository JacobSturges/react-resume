import React from 'react';
import {Stack, StackItem, Text} from '@fluentui/react';

interface SectionProps {
  id: string;
  title: string;
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({id, title, children}) => {
  return (
    <Stack id={id} tokens={{childrenGap: 60}} style={{padding: 60}}>
      <StackItem align="center">
        <Text variant="xxLarge">{title}</Text>
      </StackItem>
      <StackItem>{children}</StackItem>
    </Stack>
  );
};
