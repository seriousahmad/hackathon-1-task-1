import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/textbook-frontend/__docusaurus/debug',
    component: ComponentCreator('/textbook-frontend/__docusaurus/debug', '329'),
    exact: true
  },
  {
    path: '/textbook-frontend/__docusaurus/debug/config',
    component: ComponentCreator('/textbook-frontend/__docusaurus/debug/config', '1cd'),
    exact: true
  },
  {
    path: '/textbook-frontend/__docusaurus/debug/content',
    component: ComponentCreator('/textbook-frontend/__docusaurus/debug/content', '58a'),
    exact: true
  },
  {
    path: '/textbook-frontend/__docusaurus/debug/globalData',
    component: ComponentCreator('/textbook-frontend/__docusaurus/debug/globalData', '5c8'),
    exact: true
  },
  {
    path: '/textbook-frontend/__docusaurus/debug/metadata',
    component: ComponentCreator('/textbook-frontend/__docusaurus/debug/metadata', 'df1'),
    exact: true
  },
  {
    path: '/textbook-frontend/__docusaurus/debug/registry',
    component: ComponentCreator('/textbook-frontend/__docusaurus/debug/registry', '10f'),
    exact: true
  },
  {
    path: '/textbook-frontend/__docusaurus/debug/routes',
    component: ComponentCreator('/textbook-frontend/__docusaurus/debug/routes', 'd35'),
    exact: true
  },
  {
    path: '/textbook-frontend/docs',
    component: ComponentCreator('/textbook-frontend/docs', '560'),
    routes: [
      {
        path: '/textbook-frontend/docs',
        component: ComponentCreator('/textbook-frontend/docs', 'b1c'),
        routes: [
          {
            path: '/textbook-frontend/docs',
            component: ComponentCreator('/textbook-frontend/docs', 'b62'),
            routes: [
              {
                path: '/textbook-frontend/docs/',
                component: ComponentCreator('/textbook-frontend/docs/', '6d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/textbook-frontend/docs/assessments',
                component: ComponentCreator('/textbook-frontend/docs/assessments', '2e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/textbook-frontend/docs/chapters/ai-robot-brain',
                component: ComponentCreator('/textbook-frontend/docs/chapters/ai-robot-brain', '3f8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/textbook-frontend/docs/chapters/digital-twin',
                component: ComponentCreator('/textbook-frontend/docs/chapters/digital-twin', '4a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/textbook-frontend/docs/chapters/robotic-nervous-system',
                component: ComponentCreator('/textbook-frontend/docs/chapters/robotic-nervous-system', '45c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/textbook-frontend/docs/hardware-requirements',
                component: ComponentCreator('/textbook-frontend/docs/hardware-requirements', '7b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/textbook-frontend/docs/learning-outcomes',
                component: ComponentCreator('/textbook-frontend/docs/learning-outcomes', 'cb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/textbook-frontend/docs/weekly-breakdown',
                component: ComponentCreator('/textbook-frontend/docs/weekly-breakdown', '6f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
