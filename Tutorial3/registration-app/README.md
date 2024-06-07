**Date Created**: June 4, 2024\
**Last Modified**: June 6, 2024\
**Author**: Dhruvi Shah

**Project Repository**: [CSCI 5709 Tutorials - Registration App](https://git.cs.dal.ca/shah14/csci-5709-tutorials/-/tree/main/Tutorial3/registration-app?ref_type=heads)\
**Netlify Deployment Link**: [Registration Form App Deployment](https://main--cool-centaur-2f7b58.netlify.app/register)

#### Overview

This application is a registration form built as part of Tutorial 3 for CSCI 5709 at Dalhousie University. The form includes validation for inputs such as name, email, and password, ensuring data integrity and security.

#### Technology Used

-   **React**: Used for building the user interface with state management for form handling.
-   **NPM**: Package manager for managing the project's dependencies.
-   **Bootstrap**: For styling the form and ensuring it is responsive across different devices.
-   **Validator Library**: Utilized for robust validation of email addresses.
-   **ESLint**: Integrated into the development environment to enforce code quality standards.

#### Code Snippets and Modifications

The core functionality of the form, including input validation and state management, leverages common React patterns. The email validation regex used is adapted from widely accepted standards and further customized to ensure it meets the specific requirements of this application:


`if (!validator.isEmail(formData.email)) {
    newErrors.email = 'Invalid email format.';
}`

This approach was chosen for its balance between complexity and performance, providing a user-friendly validation feedback system.

#### Justification

React and Bootstrap were chosen for their widespread use and reliability in developing responsive web applications. The Validator library is employed to handle complex validations efficiently, reducing the effort needed to implement custom validation logic.

#### Deployment

The application is deployed on Netlify, providing a live version accessible via the internet. This allows for easy access and testing of the application's functionality in a production-like environment.

#### Sources Used

The validation patterns were inspired by various community resources, including Stack Overflow and the Mozilla Developer Network (MDN), ensuring adherence to best practices in web development.

#### Acknowledgements

Thanks to the contributors of the open-source libraries used in this project and the instructors of CSCI 5709 for providing the guidance and requirements necessary to complete this tutorial.