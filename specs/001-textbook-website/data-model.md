# Data Model: AI/Spec-Driven Professional Textbook Frontend

## Content Entities

### Textbook
- **Description**: The main textbook entity representing "Physical AI & Humanoid Robotics: The Future of Embodied Intelligence"
- **Attributes**:
  - title: string (Physical AI & Humanoid Robotics: The Future of Embodied Intelligence)
  - subtitle: string (optional)
  - description: string (powerful introduction)
  - chapters: array of Chapter references
  - supplementaryPages: array of SupplementaryPage references

### Chapter
- **Description**: A main chapter of the textbook
- **Attributes**:
  - id: string (unique identifier)
  - title: string (e.g., "The Robotic Nervous System (ROS 2)")
  - content: MDX content (500-650 words)
  - wordCount: number (between 500-650)
  - sections: array of Section references
  - position: number (chapter sequence)

### Section
- **Description**: A section within a chapter
- **Attributes**:
  - id: string (unique identifier)
  - title: string
  - content: MDX content
  - position: number (section sequence within chapter)
  - chapterId: string (reference to parent chapter)

### SupplementaryPage
- **Description**: Additional pages with specific content types
- **Types**:
  - Learning Outcomes
  - Weekly Breakdown
  - Assessments
  - Hardware Requirements
- **Attributes**:
  - id: string (unique identifier)
  - type: enum (LEARNING_OUTCOMES, WEEKLY_BREAKDOWN, ASSESSMENTS, HARDWARE_REQUIREMENTS)
  - title: string
  - content: MDX content
  - data: object (structured data for tables, timelines, etc.)

### HardwareRequirement
- **Description**: Hardware specifications for different categories
- **Attributes**:
  - id: string (unique identifier)
  - category: enum (WORKSTATIONS, EDGE_KITS, ROBOT_LABS, CLOUD_OPTIONS)
  - name: string
  - specifications: object (structured specification data)
  - cost: number (optional)
  - expandable: boolean (for expandable sections)

### WeeklyBreakdown
- **Description**: Structured timeline of the 10-week course
- **Attributes**:
  - week: number (1-10)
  - title: string
  - content: MDX content
  - learningObjectives: array of strings
  - activities: array of strings

## User Interface Components

### Theme
- **Description**: Color and styling theme (light/dark mode)
- **Attributes**:
  - mode: enum (LIGHT, DARK)
  - primaryGradient: string (indigo-to-fluorescent-blue)
  - typography: object (font settings)

### Navigation
- **Description**: Navigation structure for the textbook
- **Attributes**:
  - toc: array of TOCItem references
  - currentPage: string (current page identifier)
  - previousPage: string (optional)
  - nextPage: string (optional)

### TOCItem
- **Description**: Table of Contents item
- **Attributes**:
  - id: string (unique identifier)
  - title: string
  - level: number (hierarchy level)
  - pageId: string (reference to page)
  - children: array of TOCItem references (for nested structure)

## Validation Rules

### Content Validation
- Each Chapter must have a word count between 500-650 words
- All content must be unique and not duplicated
- Content must meet accessibility standards (WCAG 2.1 AA)
- Typography must follow specified guidelines (Lexend/Calibri for body, bold sans for headings)

### Layout Validation
- Reading width must not exceed 65ch
- Line height must be between 1.7-1.8
- Page margins must be 4-6rem on desktop
- Responsive design must work on all device sizes

### Navigation Validation
- Sidebar TOC must be collapsible
- Dark/light mode toggle must persist across sessions
- All navigation elements must be keyboard accessible