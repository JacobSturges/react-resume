import React, {useState} from 'react';
import {
  IconButton,
  IStyle,
  Link,
  Stack,
  StackItem,
  Text,
} from '@fluentui/react';
import {appTheme} from '@core/theme';
import {useCheckMobileScreen} from '@core/hooks/useCheckMobileScreen';
import {useClickOutside} from '@core/hooks/useClickOutside';

const MOBILE_STICKY_SIZE = 70;
const DESKTOP_STICKY_SIZE = 57;

const stickyBarStyles: IStyle = {
  backgroundColor: appTheme.palette.black,
  position: 'fixed',
  top: 0,
  padding: '15px 40px',
  width: '100%',
  'a,button,span': {
    color: appTheme.palette.white,
    ':hover,:active,:focus,:target': {
      color: appTheme.palette.white,
      textDecoration: 'none',
    },
    ':hover': {
      background: 'transparent',
      textShadow: '1px 1px 10px #fff, 1px 1px 10px #ccc',
    },
  },
  i: {
    fontSize: appTheme.fonts.large.fontSize,
  },
  a: {
    display: 'block',
    width: '100%',
  },
};

export const StickyBar: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useCheckMobileScreen();

  const linkClick = (event: React.MouseEvent) => {
    event.preventDefault();
    const {target} = event;
    const {hash} = target as unknown as Record<string, string>;
    const id = hash.replace(/^#/, '');
    const element = document.getElementById(id);
    const stickyBarHeight = isMobile ? MOBILE_STICKY_SIZE : DESKTOP_STICKY_SIZE;
    const y =
      element.getBoundingClientRect().top + window.scrollY - stickyBarHeight;

    setShowMenu(false);
    window.scrollTo({top: y, behavior: 'smooth'});
  };

  const close = () => setShowMenu(false);
  const ref = useClickOutside<HTMLDivElement>(close);

  return (
    <div ref={ref}>
      <Stack
        styles={{root: stickyBarStyles}}
        horizontal={!isMobile}
        horizontalAlign="space-between"
        tokens={{childrenGap: 20}}
      >
        <StackItem>
          <Stack
            horizontal
            horizontalAlign="space-between"
            verticalAlign="center"
          >
            <StackItem>
              <Link href="https://www.jacobsturges.com">
                <Text variant={isMobile ? 'large' : 'medium'}>
                  jacobsturges.com
                </Text>
              </Link>
            </StackItem>
            {isMobile && (
              <IconButton
                onClick={() => setShowMenu(!showMenu)}
                iconProps={{iconName: 'ContextMenu'}}
              />
            )}
          </Stack>
        </StackItem>
        {(!isMobile || showMenu) && (
          <StackItem>
            <Stack horizontal={!isMobile} tokens={{childrenGap: 20}}>
              <StackItem>
                <Link href="#about-me" onClick={linkClick}>
                  about me
                </Link>
              </StackItem>
              <StackItem>
                <Link href="#skills" onClick={linkClick}>
                  skills
                </Link>
              </StackItem>
              <StackItem>
                <Link href="#experience" onClick={linkClick}>
                  experience
                </Link>
              </StackItem>
              <StackItem>
                <Link href="#portfolio" onClick={linkClick}>
                  portfolio
                </Link>
              </StackItem>

              <StackItem>
                <Link href="#contact" onClick={linkClick}>
                  contact
                </Link>
              </StackItem>
            </Stack>
          </StackItem>
        )}
      </Stack>
    </div>
  );
};
