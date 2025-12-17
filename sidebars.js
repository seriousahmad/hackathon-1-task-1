// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'index',
      ],
    },
    {
      type: 'category',
      label: 'Chapters',
      items: [
        'chapters/robotic-nervous-system',
        'chapters/digital-twin',
        'chapters/ai-robot-brain',
      ],
      collapsed: false, // Keep the chapters category expanded by default
    },
    {
      type: 'category',
      label: 'Supplementary Materials',
      items: [
        'learning-outcomes',
        'weekly-breakdown',
        'assessments',
        'hardware-requirements',
      ],
    },
  ],
};

export default sidebars;