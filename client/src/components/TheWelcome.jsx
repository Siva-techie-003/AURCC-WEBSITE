import React from 'react';
import WelcomeItem from './WelcomeItem';
import DocumentationIcon from './icons/IconDocumentation';
import ToolingIcon from './icons/IconTooling';
import EcosystemIcon from './icons/IconEcosystem';
import CommunityIcon from './icons/IconCommunity';
import SupportIcon from './icons/IconSupport';

const TheWelcome = () => {
    return (
        <>
            <WelcomeItem icon={<DocumentationIcon />} heading="Documentation">
                Vue’s{' '}
                <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
                    official documentation
                </a>{' '}
                provides you with all information you need to get started.
            </WelcomeItem>

            <WelcomeItem icon={<ToolingIcon />} heading="Tooling">
                This project is served and bundled with{' '}
                <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener noreferrer">
                    Vite
                </a>
                . The recommended IDE setup is{' '}
                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                    VSCode
                </a>{' '}
                +{' '}
                <a href="https://github.com/johnsoncodehk/volar" target="_blank" rel="noopener noreferrer">
                    Volar
                </a>
                . If you need to test your components and web pages, check out{' '}
                <a href="https://www.cypress.io/" target="_blank" rel="noopener noreferrer">
                    Cypress
                </a>{' '}
                and{' '}
                <a href="https://on.cypress.io/component" target="_blank" rel="noopener noreferrer">
                    Cypress Component Testing
                </a>
                .
                <br />
                More instructions are available in <code>README.md</code>.
            </WelcomeItem>

            <WelcomeItem icon={<EcosystemIcon />} heading="Ecosystem">
                Get official tools and libraries for your project:{' '}
                <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer">
                    Pinia
                </a>
                ,{' '}
                <a href="https://router.vuejs.org/" target="_blank" rel="noopener noreferrer">
                    Vue Router
                </a>
                ,{' '}
                <a href="https://test-utils.vuejs.org/" target="_blank" rel="noopener noreferrer">
                    Vue Test Utils
                </a>
                , and{' '}
                <a href="https://github.com/vuejs/devtools" target="_blank" rel="noopener noreferrer">
                    Vue Dev Tools
                </a>
                . If you need more resources, we suggest paying{' '}
                <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener noreferrer">
                    Awesome Vue
                </a>{' '}
                a visit.
            </WelcomeItem>

            <WelcomeItem icon={<CommunityIcon />} heading="Community">
                Got stuck? Ask your question on{' '}
                <a href="https://chat.vuejs.org" target="_blank" rel="noopener noreferrer">
                    Vue Land
                </a>
                , our official Discord server, or{' '}
                <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener noreferrer">
                    StackOverflow
                </a>
                . You should also subscribe to{' '}
                <a href="https://news.vuejs.org" target="_blank" rel="noopener noreferrer">
                    our mailing list
                </a>{' '}
                and follow the official{' '}
                <a href="https://twitter.com/vuejs" target="_blank" rel="noopener noreferrer">
                    @vuejs
                </a>{' '}
                twitter account for latest news in the Vue world.
            </WelcomeItem>

            <WelcomeItem icon={<SupportIcon />} heading="Support Vue">
                As an independent project, Vue relies on community backing for its sustainability. You can help us by{' '}
                <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener noreferrer">
                    becoming a sponsor
                </a>
                .
            </WelcomeItem>
        </>
    );
};

export default TheWelcome;
