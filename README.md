# PDF Generator App

This PDF Generator App provides a seamless two-screen experience for collecting user information and generating downloadable PDF documents. The application features a clean, professional interface with form validation and real-time PDF preview capabilities.

### Key Features

- **Interactive Form Interface**: Clean, user-friendly form with proper validation
- **Real-time Validation**: Instant feedback for required fields and format validation
- **PDF Preview**: Live preview of how the PDF will look before downloading
- **Direct Download**: Option to download PDF directly from the form or preview screen
- **Data Persistence**: Form data is preserved when navigating between screens
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Professional PDF Layout**: Clean, formatted PDF output with proper styling

### Screens

#### Screen 1: Form Page
- Collects user information through validated input fields
- Required fields: Name, Email, Phone Number
- Optional fields: Position, Description
- Two action buttons: "View PDF" and "Download PDF"

#### Screen 2: PDF Preview Page
- Displays entered information in a clean, PDF-style layout
- Shows exactly how the final PDF will appear
- Navigation options: "Back" to form and "Download PDF"

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing for navigation
- **React Hook Form** - Efficient form handling with validation

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Lucide React** - Beautiful, customizable icons

### PDF Generation
- **jsPDF** - Client-side PDF generation library

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing with Autoprefixer
- **TypeScript ESLint** - TypeScript-specific linting rules


### Using the Application

1. **Fill the Form**
   - Enter your personal details in the form
   - Required fields are marked with asterisks (*)
   - Form validation will guide you through any errors

2. **Preview PDF**
   - Click "View PDF" to see how your PDF will look
   - Review all information in the preview screen

3. **Download PDF**
   - Click "Download PDF" from either the form or preview screen
   - PDF will be automatically downloaded to your device

### Project Structure

```
src/
├── components/          # React components
│   ├── FormScreen.tsx   # Main form interface
│   └── PreviewScreen.tsx # PDF preview screen
├── types/              # TypeScript type definitions
│   └── user.ts         # User data interfaces
├── utils/              # Utility functions
│   ├── validation.ts   # Form validation logic
│   └── pdfGenerator.ts # PDF generation utilities
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/codewithdhruba01/PDF-GeneratorWebApp.git
   cd PDF-GeneratorWebApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## Getting Started

### Running the Application

1. **Start Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

2. **Build for Production**
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `dist` folder

3. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Serves the production build locally for testing

   ---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

⭐ **If you find this project useful, please give it a star!**
<br> build with ❤️ by [Dhrubaraj Pati](https://codewithdhruba.netlify.app/) 

