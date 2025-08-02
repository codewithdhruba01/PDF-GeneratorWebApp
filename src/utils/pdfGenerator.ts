import jsPDF from 'jspdf';
import { UserData } from '../types/user';

export const generatePDF = (userData: UserData): void => {
  const doc = new jsPDF();
  
  // Set font and colors
  doc.setFont('helvetica');
  
  // Title
  doc.setFontSize(20);
  doc.setTextColor(40, 40, 40);
  doc.text('User Information', 20, 30);
  
  // Add a line under title
  doc.setLineWidth(0.5);
  doc.setDrawColor(100, 100, 100);
  doc.line(20, 35, 190, 35);
  
  // User details
  doc.setFontSize(12);
  doc.setTextColor(60, 60, 60);
  
  let yPosition = 55;
  const lineHeight = 15;
  
  // Name
  doc.setFont('helvetica', 'bold');
  doc.text('Name:', 20, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.text(userData.name, 60, yPosition);
  
  yPosition += lineHeight;
  
  // Email
  doc.setFont('helvetica', 'bold');
  doc.text('Email:', 20, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.text(userData.email, 60, yPosition);
  
  yPosition += lineHeight;
  
  // Phone Number
  doc.setFont('helvetica', 'bold');
  doc.text('Phone Number:', 20, yPosition);
  doc.setFont('helvetica', 'normal');
  doc.text(userData.phoneNumber, 60, yPosition);
  
  yPosition += lineHeight;
  
  // Position
  if (userData.position) {
    doc.setFont('helvetica', 'bold');
    doc.text('Position:', 20, yPosition);
    doc.setFont('helvetica', 'normal');
    doc.text(userData.position, 60, yPosition);
    yPosition += lineHeight;
  }
  
  // Description
  if (userData.description) {
    doc.setFont('helvetica', 'bold');
    doc.text('Description:', 20, yPosition);
    yPosition += 8;
    
    doc.setFont('helvetica', 'normal');
    const splitDescription = doc.splitTextToSize(userData.description, 150);
    doc.text(splitDescription, 20, yPosition);
  }
  
  // Add footer
  doc.setFontSize(8);
  doc.setTextColor(120, 120, 120);
  doc.text('Generated on ' + new Date().toLocaleDateString(), 20, 280);
  
  // Save the PDF
  doc.save(`${userData.name.replace(/\s+/g, '_')}_details.pdf`);
};