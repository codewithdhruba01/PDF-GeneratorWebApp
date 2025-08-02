import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import { UserData } from '../types/user';
import { generatePDF } from '../utils/pdfGenerator';

interface PreviewScreenProps {
  userData: UserData;
}

const PreviewScreen: React.FC<PreviewScreenProps> = ({ userData }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const handleDownload = () => {
    generatePDF(userData);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="font-medium">Back</span>
          </button>
        </div>

        {/* PDF Preview */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* PDF Content */}
          <div className="p-8 bg-white" style={{ minHeight: '600px' }}>
            <div className="border border-gray-200 rounded-lg p-8 bg-white shadow-sm">
              <h1 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-200">
                User Information
              </h1>
              
              <div className="space-y-4">
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">Name:</span>
                  <span className="text-gray-900">{userData.name}</span>
                </div>
                
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">Email:</span>
                  <span className="text-gray-900">{userData.email}</span>
                </div>
                
                <div className="flex">
                  <span className="font-semibold text-gray-700 w-32">Phone Number:</span>
                  <span className="text-gray-900">{userData.phoneNumber}</span>
                </div>
                
                {userData.position && (
                  <div className="flex">
                    <span className="font-semibold text-gray-700 w-32">Position:</span>
                    <span className="text-gray-900">{userData.position}</span>
                  </div>
                )}
                
                {userData.description && (
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-700 mb-2">Description:</span>
                    <p className="text-gray-900 leading-relaxed whitespace-pre-wrap">
                      {userData.description}
                    </p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Generated on {new Date().toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="px-8 py-6 bg-gray-50 border-t border-gray-200">
            <button
              onClick={handleDownload}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewScreen;