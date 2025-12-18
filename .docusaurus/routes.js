import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/textbook-frontend/docs',
    component: ComponentCreator('/textbook-frontend/docs', '904'),
    routes: [
      {
        path: '/textbook-frontend/docs',
        component: ComponentCreator('/textbook-frontend/docs', 'e46'),
        routes: [
          {
            path: '/textbook-frontend/docs',
            component: ComponentCreator('/textbook-frontend/docs', 'd0c'),
            routes: [
              {
                path: '/textbook-frontend/docs',
                component: ComponentCreator('/textbook-frontend/docs', '12e'),
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
    path: '/textbook-frontend/',
    component: ComponentCreator('/textbook-frontend/', 'cda'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
