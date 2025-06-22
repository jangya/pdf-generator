# PDF Generator

This project provides a serverless function (using Firebase Functions) to generate PDF documents, such as resumes, using customizable templates.

## Features
- Generate PDFs dynamically from templates
- Easily customizable resume template (`resumeTemplate.js`)
- Designed for deployment on Firebase Functions

## Project Structure
```
functions/
  index.js            # Main entry point for Firebase Functions
  resumeTemplate.js   # Resume PDF template logic
  package.json        # Node.js dependencies for functions
  debug.log           # Debug logs
firebase.json         # Firebase project configuration
LICENSE               # License file
ui-debug.log          # UI debug logs
```

## Getting Started

### Prerequisites
- Node.js (v14 or later recommended)
- Firebase CLI (`npm install -g firebase-tools`)
- A Firebase project

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd pdf-generator
   ```
2. Install dependencies:
   ```sh
   cd functions
   npm install
   ```

### Deployment
1. Log in to Firebase:
   ```sh
   firebase login
   ```
2. Deploy the functions:
   ```sh
   firebase deploy --only functions
   ```

### Usage
- Customize the `resumeTemplate.js` file to change the PDF template.
- Trigger the deployed function via HTTP request or as configured in your Firebase project.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
