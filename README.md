# Single-Page Web Application with ReactJS

This project is a single-page web application built using ReactJS, which is designed to be responsive and includes a simple form integrated with a provided API. The form includes front-end validations and handles API responses appropriately.

## Project Requirements

### Main Features
1. **Responsive Design**: The application is designed to be responsive across various devices and screen sizes:
    - Mobile View (480p)
    - 720p
    - 1080p
    - iPad (2732x2048)
    - MacBook (1440x823)

2. **Form Integration with API**: The form interacts with the API using a POST request. The form submission includes:
    - **Required Variable**: `email`
    - **API Documentation**: [API Documentation](http://34.225.132.160:8002/docs)
    - **API Endpoint**: [API Link](http://34.225.132.160:8002/api)

### Form Validation
1. **Empty Form Submission**: Prevent empty form submission with front-end validation.
2. **Email Validation**: Validate email format at the front end.
3. **Error Handling**: Display error if the email ends with `@ez.works` (API response code 422).
4. **Success Handling**: Display "Form Submitted" upon successful submission (API response code 200).

### API Integration Use Cases
1. **Empty Form Submission**: Ensure the form is not submitted when the email field is empty.
2. **Email Format Validation**: Validate the email format before submitting the form.
3. **Error Response Handling**: Display the error message in the form field if the API returns an error for emails ending with `@ez.works`.
    - Example:
        - `bhavya@ez.works` → response code 422
        - `bhavya@abc.com` → form submitted successfully
4. **Successful Submission**: Display "Form Submitted" message on successful form submission (response code 200).

## Getting Started

### Prerequisites
- Node.js installed on your system.

### Installation Steps

1. **Clone the Repository**
    ```bash
    git clone git@github.com:pushsontakke/EZ-Assignment.git
    cd EZ-Assignment
    ```

2. **Install Vite and React**
    ```bash
    npm create vite@latest my-react-app --template react
    cd my-react-app
    npm install
    ```

3. **Start the Development Server**
    ```bash
    npm run dev
    ```

### Project Structure
- `src/`: Contains the source code of the React application.
- `src/components/`: Contains React components.
- `src/App.js`: Main application component.
- `src/main.js`: Entry point of the application.

### How to Run
1. Ensure you are in the project directory.
2. Start the development server using `npm run dev`.
3. Open your browser and navigate to `http://localhost:3000` to view the application.

### API Integration
- The form is integrated with the provided API endpoint.
- Ensure the API endpoint is accessible and the server is running to test the form submission and validations.


## Contributing
- Fork the repository.
- Create a new branch (`git checkout -b feature-branch`).
- Commit your changes (`git commit -m 'Add some feature'`).
- Push to the branch (`git push origin feature-branch`).
- Open a Pull Request.

