"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { useDropzone, type DropzoneOptions } from "react-dropzone"
import {
  FileTextIcon,
  UploadIcon,
  PlusIcon,
  XIcon,
  UserIcon,
  BriefcaseIcon,
  MailIcon,
  CodeIcon,
  LogOutIcon,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("upload")
  const [skills,setSkills]=useState<string[]>([])
  const [files, setFiles] = useState<any[]>([])
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    title: "",
    about: "",
    skills: [""],
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  // PDF Upload functionality
  const onDrop = useCallback(async(acceptedFiles: any[]) => {
    // Filter for PDF files
    const pdfFiles = acceptedFiles.filter((file: any) => file.type === "application/pdf")

    if (pdfFiles.length !== acceptedFiles.length) {
      toast.error("Only PDF files are accepted", {
        description: "Please upload PDF files only",
      })
      console.log("Error: Non-PDF files were rejected")
    }

    if (pdfFiles.length > 0) {
      setFiles(pdfFiles)
      console.log("Files uploaded:", pdfFiles)
      //Make api call here




      toast.success(`${pdfFiles.length} file(s) ready for submission`, {
        description: "Click submit to begin processing",
      })
    }
  }, [])

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxFiles: 1,
    multiple: false,
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions)

  const handleSubmitResume = async() => {
    if (files.length === 0) {
      toast.error("No files selected", {
        description: "Please upload a resume to submit",
      })
      console.log("Error: No files selected for submission")
      return
    }

    // Simulate upload progress
    setIsUploading(true)
    setUploadProgress(0)

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          toast.success("Resume submitted successfully")
          return 100
        }
        return prev + 10
      })
    }, 300)

    // Log the file that would be sent to backend
    console.log("Sending file to backend:", files[0])
    const response = await fetch("", {
      method: "POST",
      body: files[0],
    })
    
    if (!response.ok) {
      toast.error("Error submitting resume", {
        description: "Please try again later",
      })
      console.log("Error: Resume submission failed")
      return
    }
    toast.success("Resume submitted successfully")

    console.log("Resume submission initiated at:", new Date().toISOString())
  }

  const resetUpload = () => {
    setFiles([])
    setUploadProgress(0)
    setIsUploading(false)
    console.log("Upload reset, files cleared")
  }

  // CV Form functionality
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    console.log(`Form field "${name}" updated to: ${value}`)
  }

  const handleSkillChange = (index: number, value: string) => {
    const updatedSkills = [...formData.skills]
    updatedSkills[index] = value
    setFormData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }))
    console.log(`Skill at index ${index} updated to: ${value}`)
  }

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [...prev.skills, ""],
    }))
    console.log("New skill field added")
  }

  const removeSkill = (index: number) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index)
    setFormData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }))
    console.log(`Skill at index ${index} removed`)
  }

  const handleSubmitForm = async(e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
  
    // Filter out empty skills
    const filteredSkills = formData.skills.filter((skill) => skill.trim() !== "")
    if (filteredSkills.length === 0) {
      toast.error("Skills required", {
        description: "Please add at least one skill",
      })
      console.log("Form validation failed: No skills provided")
      return
    }

    setIsSubmitting(true)
    setSkills(filteredSkills);
    console.log("skills: ",filteredSkills);

    // Log the form data that would be sent to backend
    console.log("CV Generation Data:", {
     
      skills: filteredSkills,
    })
    console.log("CV form submission initiated at:", new Date().toISOString())
    const Data={
    
      skills: filteredSkills,
    };

    toast.success("CV generated successfully", {
      description: "Your CV is ready for download",
    })
    setIsSubmitting(false)
    

    
  }

  const handleLogout = () => {
    console.log("User logged out at:", new Date().toISOString())
    toast.success("Logged out successfully")
    // In a real app, you would clear auth state here
    setTimeout(() => {
      router.push("/login")
    }, 1000)
  }

  // Effect to log tab changes
  useEffect(() => {
    console.log(`Tab changed to: ${activeTab}`)
  }, [activeTab])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-500 p-2 rounded-md">
              <FileTextIcon className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-blue-500">Resumaid</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-gray-700">
                Features
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700">
                How It Works
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700">
                For Users
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700">
                For HR
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-700">
                Pricing
              </Button>
            </div>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="John Doe" />
                <AvatarFallback className="bg-blue-100 text-blue-800">JD</AvatarFallback>
              </Avatar>
              <div className="hidden md:block">
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-gray-500">Premium Plan</p>
              </div>
              <Button variant="ghost" size="icon" onClick={handleLogout} title="Log out">
                <LogOutIcon className="h-4 w-4" />
                <span className="sr-only">Log out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Card className="border-gray-200">
              <CardHeader className="pb-3">
                <CardTitle>Dashboard</CardTitle>
                <CardDescription>Manage your resume tools</CardDescription>
              </CardHeader>
              <CardContent className="space-y-1 pt-0">
                <Button
                  variant={activeTab === "upload" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeTab === "upload" ? "bg-blue-500 hover:bg-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("upload")}
                >
                  <UploadIcon className="mr-2 h-4 w-4" />
                  Resume Upload
                </Button>
                <Button
                  variant={activeTab === "generator" ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    activeTab === "generator" ? "bg-blue-500 hover:bg-blue-600" : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("generator")}
                >
                  <FileTextIcon className="mr-2 h-4 w-4" />
                  CV Generator
                </Button>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Storage</span>
                    <Badge variant="outline" className="text-xs">
                      2/10
                    </Badge>
                  </div>
                  <Progress value={20} className="h-2 bg-gray-100" />
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            {activeTab === "upload" && (
              <div className="space-y-6">
                <Card className="overflow-hidden border-gray-200">
                  <CardHeader className="bg-blue-500 text-white">
                    <CardTitle className="text-2xl">Resume Upload</CardTitle>
                    <CardDescription className="text-blue-100">
                      Upload your resume for AI-powered analysis and improvement suggestions
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div
                      {...getRootProps()}
                      className={`border-2 border-dashed rounded-lg p-10 text-center cursor-pointer transition-colors ${
                        isDragActive
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-blue-500/50 hover:bg-blue-50/50"
                      }`}
                    >
                      <input {...getInputProps()} />
                      <div className="flex flex-col items-center gap-4">
                        <div className="bg-blue-100 rounded-full p-4">
                          <UploadIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        {isDragActive ? (
                          <p className="font-medium text-blue-600">Drop your resume here...</p>
                        ) : (
                          <div className="space-y-2">
                            <p className="font-medium">Drop your resume here or click to browse</p>
                            <p className="text-sm text-gray-500">Supports PDF files up to 10MB</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {files.length > 0 && (
                      <div className="mt-6 space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 p-3 rounded-md">
                              <FileTextIcon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">{files[0].name}</p>
                              <p className="text-xs text-gray-500">{(files[0].size / 1024 / 1024).toFixed(2)} MB</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" onClick={resetUpload}>
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>

                        {isUploading && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Uploading resume...</span>
                              <span className="text-xs text-gray-500">{uploadProgress}%</span>
                            </div>
                            <Progress
                              value={uploadProgress}
                              className="h-2 bg-gray-100"
                             
                            />
                          </div>
                        )}

                        <Button
                          onClick={handleSubmitResume}
                          className="w-full bg-blue-500 hover:bg-blue-600"
                          disabled={isUploading}
                        >
                          {isUploading ? "Processing..." : "Submit Resume"}
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === "generator" && (
              <div className="space-y-6">
                <Card className="border-gray-200">
                  <CardHeader className="bg-blue-500 text-white">
                    <CardTitle className="text-2xl">CV Generator</CardTitle>
                    <CardDescription className="text-blue-100">
                      Create a professional CV with our AI-powered generator
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form onSubmit={handleSubmitForm} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                       
                     

                        <div className="space-y-3 md:col-span-2">
                          <Label htmlFor="skills" className="flex items-center gap-2">
                            <CodeIcon className="h-4 w-4 text-blue-500" />
                            Skills
                          </Label>
                          <div className="space-y-3">
                            {formData.skills.map((skill, index) => (
                              <div key={index} className="flex items-center gap-3">
                                <Input
                                  value={skill}
                                  onChange={(e) => handleSkillChange(index, e.target.value)}
                                  placeholder={`Skill ${index + 1} (e.g., JavaScript, Project Management)`}
                                  className="flex-1 border-gray-200 focus-visible:ring-blue-500"
                                />
                                <Button
                                  type="button"
                                  variant="outline"
                                  size="icon"
                                  onClick={() => removeSkill(index)}
                                  className="text-red-500 border-gray-200 hover:bg-red-50 hover:text-red-600"
                                >
                                  <XIcon className="h-4 w-4" />
                                  <span className="sr-only">Remove skill</span>
                                </Button>
                              </div>
                            ))}
                            <Button
                              type="button"
                              variant="outline"
                              onClick={addSkill}
                              className="border-gray-200 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
                            >
                              <PlusIcon className="h-4 w-4 mr-2" />
                              Add Skill
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Generating CV...
                          </>
                        ) : (
                          "Recommmend Jobs"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
