'use client'
import React, { useState, useCallback } from 'react';
import { FileIcon, UploadCloud, X, AlertCircle, Check, Plus, Trash2 } from 'lucide-react';
import { METHODS } from 'http';

function App() {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [description, setDescription] = useState('');
  const maxFiles = 5;

  const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  }, [isDragging]);

  const validateFiles = (fileList: File[]): File[] => {
    return fileList.filter(file => {
      const isPDF = file.type === 'application/pdf';
      if (!isPDF) {
        alert(`${file.name} is not a PDF file. Only PDF files are accepted.`);
      }
      return isPDF;
    });
  };

  const handleFileDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    const validFiles = validateFiles(droppedFiles);
    const totalCount = files.length + validFiles.length;
    
    if (totalCount > maxFiles) {
      alert(`You can only upload up to ${maxFiles} CVs. ${totalCount - maxFiles} too many.`);
      return;
    }
    
    const newFiles = [...files, ...validFiles];
    setFiles(newFiles);
    console.log('Files set in state:', newFiles);
  }, [files, maxFiles]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    
    const selectedFiles = Array.from(e.target.files);
    const validFiles = validateFiles(selectedFiles);
    const totalCount = files.length + validFiles.length;
    
    if (totalCount > maxFiles) {
      alert(`You can only upload up to ${maxFiles} CVs. ${totalCount - maxFiles} too many.`);
      return;
    }
    
    const newFiles = [...files, ...validFiles];
    setFiles(newFiles);
    console.log('Files set in state:', newFiles);
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    console.log('Files after removal:', newFiles);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleShortlist = async() => {
    console.log('Shortlisting CVs with the following criteria:');
    console.log('Required Skills:', skills);
    console.log('Description:', description);
    console.log('CVs to process:', files);


    


    //make api call here
    // const response = await fetch("/api/upload", {
    //     method: "POST",
       
    //   })

  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-6">
      <main className="container mx-auto flex-1 max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">CV Shortlist Tool</h1>
        <p className="text-gray-600 mb-8">
          Upload candidate CVs (PDF only) and specify required skills to help shortlist the most suitable candidates for your position.
        </p>

        <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
          {/* Skills Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Required Skills</h2>
            <form onSubmit={addSkill} className="flex gap-2 mb-3">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                placeholder="Enter a required skill"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 flex items-center"
              >
                <Plus className="w-5 h-5" />
              </button>
            </form>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {skill}
                  <button
                    onClick={() => removeSkill(skill)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Description Box */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Position Details</h2>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter position description and any additional requirements..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
          </div>

          {/* Upload Area */}
          <div
            className={`border-2 border-dashed rounded-lg p-8 transition-all duration-200 ease-in-out mb-6 flex flex-col items-center justify-center
              ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'}`}
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleFileDrop}
          >
            <UploadCloud 
              className={`w-16 h-16 mb-4 transition-colors ${isDragging ? 'text-blue-500' : 'text-blue-400'}`} 
            />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              {isDragging ? 'Drop CVs here' : 'Drag & Drop CVs Here'}
            </h3>
            <p className="text-gray-500 text-center mb-4">
              PDF files only
            </p>
            <div className="flex items-center gap-2">
              <label 
                className={`px-4 py-2 rounded-md font-medium cursor-pointer transition-colors
                  ${files.length >= maxFiles 
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                    : 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700'}`}
              >
                Browse Files
                <input
                  type="file"
                  multiple
                  accept=".pdf"
                  className="hidden"
                  onChange={handleFileInput}
                  disabled={files.length >= maxFiles}
                />
              </label>
              
              <span className="text-sm text-gray-500">
                {files.length}/{maxFiles} CVs
              </span>
            </div>
          </div>

          {/* File List */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {files.length > 0 ? 'Uploaded CVs' : 'No CVs uploaded yet'}
            </h3>
            
            {files.length === 0 && (
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
                <AlertCircle className="text-gray-400 mr-2 w-5 h-5" />
                <p className="text-gray-500">Upload candidate CVs to begin shortlisting</p>
              </div>
            )}
            
            <ul className="space-y-3">
              {files.map((file, index) => (
                <li 
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between bg-gray-50 rounded-lg p-3 transition-all hover:bg-blue-50"
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 p-2 rounded-md mr-3">
                      <FileIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 truncate max-w-xs">{file.name}</p>
                      <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeFile(index)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
                    aria-label="Remove file"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
            
            {files.length > 0 && (
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500 flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-1" />
                  CVs ready: {files.length}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFiles([])}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-50 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear All
                  </button>
                  <button 
                    className="px-4 py-2 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 flex items-center gap-2"
                    onClick={handleShortlist}
                    disabled={files.length === 0 || skills.length === 0}
                  >
                    <Check className="w-4 h-4" />
                    Start Shortlisting
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;