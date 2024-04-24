import React from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider, initializeIcons} from '@fluentui/react';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {appTheme, globalStyle} from '@core/theme';
import {Landing} from '@controllers//landing';
import {StickyBar} from '@controllers//stickyBar';
import {AboutMe} from '@controllers/aboutMe';
import {Skills} from '@controllers/skills';
import {Experience} from '@controllers/experience';
import {Footer} from '@controllers/footer';
import {Portfolio} from '@controllers/portfolio';

initializeIcons();
library.add(fab);
library.add(fas);

const App: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <StickyBar />
      <div className={globalStyle.body}>
        <Landing />
        <AboutMe />
        <Skills />
        <Experience />
        <Portfolio />
      </div>
      <Footer />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(<App />);
