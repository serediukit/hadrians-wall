# Memory Bank Index

This document serves as a guide to understanding and utilizing each file in the memory bank. Each file contains specific information about different aspects of the project and should be referenced when working on related features or seeking project context.

## Files Overview

### 1. project_overview.md
**Purpose**: High-level project description and objectives
**When to use**: 
- When you need to understand the overall project goals
- For onboarding new team members
- When explaining the project to stakeholders
- As a reference for maintaining project scope and vision

### 2. game_development_roadmap.md
**Purpose**: Development timeline, milestones, and planned features
**When to use**:
- For sprint planning and task prioritization
- When estimating project timelines
- To track development progress against planned milestones
- For identifying dependencies between features
- When communicating progress to stakeholders

### 3. game_design_documentation.md
**Purpose**: Detailed game mechanics, rules, and design specifications
**When to use**:
- When implementing game logic and mechanics
- For understanding game flow and user interactions
- When designing UI/UX components
- For testing game scenarios and edge cases
- When making design decisions that affect gameplay

### 4. hadrians_wall_game_mechanics.md
**Purpose**: Specific mechanics and rules for the Hadrian's Wall board game
**When to use**:
- When implementing core game mechanics
- For understanding scoring systems and game progression
- When validating game state and moves
- For creating game tutorials or help documentation
- When debugging game logic issues

### 5. backend_go_project_structure.md
**Purpose**: Backend architecture, API design, and Go project organization
**When to use**:
- When setting up or modifying backend services
- For understanding API endpoints and data structures
- When implementing new backend features
- For database schema design and modifications
- When troubleshooting backend issues

### 6. frontend_react_project_structure.md
**Purpose**: Frontend architecture, React components, and UI organization
**When to use**:
- When developing or modifying React components
- For understanding the frontend architecture
- When implementing new UI features
- For styling and layout decisions
- When optimizing frontend performance

### 7. project_status_and_development_plan.md
**Purpose**: Current project status, completed features, and next steps
**When to use**:
- For daily standups and progress tracking
- When planning upcoming development cycles
- To understand what's been completed vs. what's remaining
- For identifying blockers and dependencies
- When updating stakeholders on project status

## How to Use This Memory Bank

### For Development Tasks
1. **Start with** `project_overview.md` to understand the context
2. **Check** `project_status_and_development_plan.md` for current status
3. **Reference** specific files based on your task:
   - Backend work → `backend_go_project_structure.md`
   - Frontend work → `frontend_react_project_structure.md`
   - Game logic → `hadrians_wall_game_mechanics.md` and `game_design_documentation.md`

### For Planning Sessions
1. **Review** `game_development_roadmap.md` for timeline and milestones
2. **Check** `project_status_and_development_plan.md` for current progress
3. **Reference** `game_design_documentation.md` for feature requirements

### For Documentation Updates
- Always update the relevant memory bank files when making significant changes
- Keep `project_status_and_development_plan.md` current with completed features
- Update `game_development_roadmap.md` when timelines or priorities change

### Best Practices
- Read the relevant memory bank files before starting any new feature
- Update documentation as you implement features
- Use these files as the single source of truth for project decisions
- Reference specific sections when asking questions or reporting issues
- Keep all team members informed of updates to these documents

## Maintenance Notes
- Review and update all files regularly during sprint retrospectives
- Ensure consistency between related files (e.g., roadmap vs. status)
- Archive or remove outdated information
- Add new files as the project grows in complexity
