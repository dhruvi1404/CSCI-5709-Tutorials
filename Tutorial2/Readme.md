## CSCI-5709 Tutorial 2 Repository

This README file contains all necessary documentation related to the group project and individual tasks for CSCI-5709 (Advanced Topics in Web Development), focusing on Tutorial 2: Code Management and Deployment.

### Course Information
- **Course:** CSCI 4177/5709 - Summer 2024
- **Tutorial 2:** Code Management and Deployment

### Author
- **Dhruvi Shah** - dh368867@dal.ca

### Repository Links

#### Group Main Repository
- **Repository URL:** [Group Main Repository](https://git.cs.dal.ca/gudipalli/csci-5709-grp-13.git)
- **Purpose:** Main repository for the group project. Each group member has individual branches for collaborative development.

#### Individual Branch Repository
- **Branch URL:** [Dhruvi's Branch Repository](https://git.cs.dal.ca/gudipalli/csci-5709-grp-13/-/tree/dhruvi1404?ref_type=heads)
- **Purpose:** My individual branch within the group's main repository.

#### Tutorial 2 Repository
- **Repository URL:** [Dhruvi's Tutorial 2 Repository](https://git.cs.dal.ca/shah14/csci-5709-tutorials/-/tree/main/Tutorial2?ref_type=heads)
- **Purpose:** Contains the code and resources for Tutorial 2 setup.

#### Assignments Repository
- **Repository URL:** [Dhruvi's Assignments Repository](https://git.cs.dal.ca/shah14/csci-5709-assignments)
- **Purpose:** Repository for all assignments related to the course.

#### Tutorials Repository
- **Repository URL:** [Dhruvi's Tutorials Repository](https://git.cs.dal.ca/shah14/csci-5709-tutorials)
- **Purpose:** Central repository for all tutorial-related activities.

### Deployment Information

#### Netlify Deployment
- **Deployment URL:** [Dhruvi's Netlify Deployment](https://main--majestic-basbousa-1c4084.netlify.app)
- **Method:** Deployed using GitHub by mirroring the GitLab repository. Followed the project structure requirements as mentioned in the course guidelines.

### Project Setup and Deployment Process

#### Pre-requisites
- Git
- npm
- Node.js

#### Project Setup
1. **Installation of React:** Utilized Create React App for a quick start.
   npm i create-react-app
   create-react-app testreact
2. **Local Development:** Modified App.js to display "Hello, Deployment Works!" ensuring the setup was correct.
3. **Building the Project:** Building the Project: .
   npm run build
4. **Netlify Setup:**
    - Created a Netlify account using GitHub for authentication.
    - Configured the build settings in Netlify to use:
        - Build Command: npm run build
        - Base Directory: Tutorial2/testreact
        - Publish Directory: Tutorial2/testreact/build
