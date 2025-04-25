import { FileTextIcon, ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import SignupForm from "@/components/signup-form"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileTextIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Resumaid</span>
        </div>
        <Link href="/" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Home
        </Link>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Join Resumaid</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Get started with AI-powered resume analysis and optimization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 bg-background rounded-xl p-6 shadow-md border border-border">
              <SignupForm />
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="bg-background rounded-xl p-6 shadow-md border border-border">
                <h3 className="text-lg font-semibold mb-4">Why Join Resumaid?</h3>
                <ul className="space-y-3">
                  <ServiceItem title="AI Resume Analysis" description="Get detailed feedback on your resume" />
                  <ServiceItem
                    title="Smart Recommendations"
                    description="Receive personalized improvement suggestions"
                  />
                  <ServiceItem title="Job Matching" description="Find jobs that match your skills and experience" />
                  <ServiceItem title="CV Shortlisting" description="For HR: Efficiently filter candidates" />
                </ul>
              </div>

              <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Premium Features</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Upgrade to access advanced features and get more from Resumaid
                </p>
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-primary/20 text-primary rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 12 2 2 4-4"></path>
                      <path d="M12 3c-1.1 0-2 .9-2 2v.1A5 5 0 0 0 5 10c0 2.2 1.8 4 4 4h2"></path>
                      <path d="M17 8h.01"></path>
                      <path d="M17 12h.01"></path>
                      <path d="M13 16h.01"></path>
                      <path d="M13 20h.01"></path>
                      <path d="M17 16h.01"></path>
                      <path d="M17 20h.01"></path>
                    </svg>
                  </div>
                  <span className="text-sm">Advanced Keyword Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 text-primary rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="text-sm">ATS-Proof Resume Templates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Resumaid. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-2">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Help Center
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceItem({ title, description }:any) {
  return (
    <li className="flex gap-3">
      <div className="mt-1 bg-primary/20 text-primary rounded-full p-1 h-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </li>
  )
}
