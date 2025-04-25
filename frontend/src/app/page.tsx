import { Button } from "@/components/ui/button"
import { FileTextIcon, SearchIcon, UserCheckIcon, SparklesIcon, CheckIcon, XIcon } from "lucide-react"
import Link from "next/link"

import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="container mx-auto py-4 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileTextIcon className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Resumaid</span>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="#for-users" className="hover:text-primary transition-colors">
            For Users
          </Link>
          <Link href="#for-hr" className="hover:text-primary transition-colors">
            For HR
          </Link>
          <Link href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </Link>
          
          <Button>Sign Up</Button>
        </div>
       
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unlock Your Career Potential with <span className="text-primary">AI-Powered</span> Resume Tools
          </h1>
          <p className="text-lg text-muted-foreground">
            Resumaid helps job seekers optimize their resumes and assists HR professionals in finding the perfect
            candidates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="font-semibold">
              Analyze My Resume
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              HR Solutions
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative z-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl p-6 shadow-xl border border-primary/20">
            <Image
              src="/test2.avif"
              alt="Resume analysis dashboard"
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-tr from-secondary/30 to-secondary/10 rounded-2xl -z-10"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="text-muted-foreground">Resume Improvement</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">10,000+</p>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">75%</p>
              <p className="text-muted-foreground">Interview Success Rate</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">HR Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Features</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our advanced AI technology provides comprehensive resume solutions for both job seekers and HR
              professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FileTextIcon className="h-10 w-10" />}
              title="Resume Analysis"
              description="Get detailed insights and scores on your resume's effectiveness and areas for improvement."
            />
            <FeatureCard
              icon={<SparklesIcon className="h-10 w-10" />}
              title="Smart Recommendations"
              description="Receive personalized suggestions to enhance your resume and stand out to employers."
            />
            <FeatureCard
              icon={<SearchIcon className="h-10 w-10" />}
              title="Job Scraping"
              description="Discover relevant job opportunities matched to your skills and experience."
            />
            <FeatureCard
              icon={<UserCheckIcon className="h-10 w-10" />}
              title="CV Shortlisting"
              description="HR tools to efficiently filter and identify the most promising candidates."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Resumaid Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our simple process helps you optimize your resume and land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div className="pt-16 text-center px-4">
                <div className="rounded-lg shadow-md mb-4 overflow-hidden h-48">
                  <Image
                    src="/test2.avif"
                    alt="Upload your resume"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Resume</h3>
                <p className="text-muted-foreground">
                  Simply upload your existing resume or create a new one using our templates.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div className="pt-16 text-center px-4">
                <div className="rounded-lg shadow-md mb-4 overflow-hidden h-48">
                  <Image
                    src="/ai.avif"
                    alt="AI analyzes your resume"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your resume against industry standards and job requirements.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div className="pt-16 text-center px-4">
                <div className="rounded-lg shadow-md mb-4 overflow-hidden h-48">
                  <Image
                    src="/test1.avif"
                    alt="Get personalized results"
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Results</h3>
                <p className="text-muted-foreground">
                  Receive detailed feedback, suggestions, and matching job opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Users Section */}
      <section id="for-users" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative">
                <div className="bg-gradient-to-tr from-primary/10 to-primary/5 rounded-2xl p-6 shadow-lg border border-primary/10">
                  <Image
                    src="/test2.avif"
                    alt="Resume optimization"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -z-10 -bottom-4 -left-4 w-full h-full bg-gradient-to-bl from-secondary/20 to-secondary/5 rounded-2xl"></div>
              </div>
            </div>
            <div className="flex-1 space-y-6 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold">For Job Seekers</h2>
              <div className="space-y-4">
                <FeatureItem
                  title="AI Resume Analysis"
                  description="Get detailed feedback on your resume's strengths and weaknesses."
                />
                <FeatureItem
                  title="Smart Resume Generation"
                  description="Create professional resumes tailored to specific job descriptions."
                />
                <FeatureItem
                  title="Personalized Recommendations"
                  description="Receive custom suggestions to improve your resume's impact."
                />
                <FeatureItem title="Job Matching" description="Discover jobs that match your skills and experience." />
              </div>
              <Button className="mt-4">Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* For HR Section */}
      <section id="for-hr" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">For HR Professionals</h2>
              <div className="space-y-4">
                <FeatureItem
                  title="CV Shortlisting"
                  description="Automatically filter and rank candidates based on job requirements."
                />
                <FeatureItem
                  title="Skill Matching"
                  description="Identify candidates with the exact skills your position requires."
                />
                <FeatureItem
                  title="Batch Processing"
                  description="Analyze hundreds of resumes simultaneously to save time."
                />
                <FeatureItem
                  title="Bias Reduction"
                  description="Objective analysis helps reduce unconscious bias in hiring."
                />
              </div>
              <Button className="mt-4">HR Solutions</Button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="bg-gradient-to-tl from-primary/10 to-primary/5 rounded-2xl p-6 shadow-lg border border-primary/10">
                  <Image
                    src="/hr.avif"
                    alt="HR dashboard"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that works best for your needs, with no hidden fees or commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Free Plan */}
            <div className="bg-background rounded-xl p-6 shadow-md border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <p className="text-4xl font-bold">
                  $0<span className="text-lg text-muted-foreground">/month</span>
                </p>
                <p className="text-muted-foreground mt-2">For individuals just starting out</p>
              </div>
              <div className="space-y-4 mb-8">
                <PricingFeature included={true} feature="Basic Resume Analysis" />
                <PricingFeature included={true} feature="1 Resume Template" />
                <PricingFeature included={true} feature="Limited Job Matching" />
                <PricingFeature included={false} feature="Advanced AI Recommendations" />
                <PricingFeature included={false} feature="Keyword Optimization" />
                <PricingFeature included={false} feature="Priority Support" />
              </div>
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </div>

            {/* Basic Plan */}
            <div className="bg-background rounded-xl p-6 shadow-md border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Basic</h3>
                <p className="text-4xl font-bold">
                  $9.99<span className="text-lg text-muted-foreground">/month</span>
                </p>
                <p className="text-muted-foreground mt-2">For active job seekers</p>
              </div>
              <div className="space-y-4 mb-8">
                <PricingFeature included={true} feature="Full Resume Analysis" />
                <PricingFeature included={true} feature="5 Resume Templates" />
                <PricingFeature included={true} feature="Unlimited Job Matching" />
                <PricingFeature included={true} feature="Basic AI Recommendations" />
                <PricingFeature included={false} feature="Keyword Optimization" />
                <PricingFeature included={false} feature="Priority Support" />
              </div>
              <Button className="w-full">Subscribe</Button>
            </div>

            {/* Pro Plan */}
            <div className="bg-background rounded-xl p-6 shadow-md border-2 border-primary relative transition-all hover:shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Pro</h3>
                <p className="text-4xl font-bold">
                  $19.99<span className="text-lg text-muted-foreground">/month</span>
                </p>
                <p className="text-muted-foreground mt-2">For career professionals</p>
              </div>
              <div className="space-y-4 mb-8">
                <PricingFeature included={true} feature="Advanced Resume Analysis" />
                <PricingFeature included={true} feature="All Resume Templates" />
                <PricingFeature included={true} feature="Premium Job Matching" />
                <PricingFeature included={true} feature="Advanced AI Recommendations" />
                <PricingFeature included={true} feature="Keyword Optimization" />
                <PricingFeature included={true} feature="Priority Support" />
              </div>
              <Button className="w-full">Subscribe</Button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-background rounded-xl p-6 shadow-md border border-border hover:border-primary/50 transition-all hover:shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                <p className="text-4xl font-bold">
                  $99<span className="text-lg text-muted-foreground">/month</span>
                </p>
                <p className="text-muted-foreground mt-2">For HR departments</p>
              </div>
              <div className="space-y-4 mb-8">
                <PricingFeature included={true} feature="Unlimited Resume Analysis" />
                <PricingFeature included={true} feature="CV Shortlisting Tools" />
                <PricingFeature included={true} feature="Candidate Matching" />
                <PricingFeature included={true} feature="Team Collaboration" />
                <PricingFeature included={true} feature="API Access" />
                <PricingFeature included={true} feature="Dedicated Support" />
              </div>
              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about Resumaid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FaqItem
              question="How does the AI analyze my resume?"
              answer="Our AI uses natural language processing to analyze your resume against industry standards, job descriptions, and successful resume patterns. It evaluates content, format, keywords, and more to provide comprehensive feedback."
            />
            <FaqItem
              question="Is my resume data secure?"
              answer="Yes, we take data security seriously. All resume data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent."
            />
            <FaqItem
              question="Can I cancel my subscription anytime?"
              answer="Absolutely. You can cancel your subscription at any time with no questions asked. You'll continue to have access until the end of your billing period."
            />
            <FaqItem
              question="How accurate is the job matching?"
              answer="Our job matching algorithm has a 92% accuracy rate in identifying relevant positions based on your skills, experience, and preferences. We continuously improve our matching algorithm with machine learning."
            />
            <FaqItem
              question="Do you offer refunds?"
              answer="Yes, we offer a 14-day money-back guarantee if you're not satisfied with our service. Simply contact our support team within 14 days of your purchase."
            />
            <FaqItem
              question="Can HR teams process multiple resumes at once?"
              answer="Yes, our Enterprise plan allows HR teams to batch process hundreds of resumes simultaneously, significantly reducing the time spent on initial candidate screening."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from people who have transformed their job search with Resumaid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Resumaid helped me identify key weaknesses in my resume that I had overlooked for years. After implementing the suggestions, I got three interviews in one week!"
              author="Sarah J."
              role="Marketing Professional"
              image="/t1.avif"
            />
            <TestimonialCard
              quote="As an HR manager, Resumaid has cut our CV review time by 70%. The quality of candidates we interview has improved dramatically."
              author="Michael T."
              role="HR Director"
              image="/t2.avif"
            />
            <TestimonialCard
              quote="The job matching feature found me opportunities I wouldn't have discovered otherwise. I'm now working at my dream company thanks to Resumaid."
              author="Alex K."
              role="Software Engineer"
              image="/t3.avif"
            />
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="I was skeptical about AI resume tools, but Resumaid exceeded my expectations. The keyword optimization feature helped my resume get past ATS systems and into human hands."
              author="Jennifer L."
              role="Financial Analyst"
               image="/t4.avif"
            />
            <TestimonialCard
              quote="Our recruitment agency has been using Resumaid's Enterprise plan for 6 months, and it's revolutionized our workflow. We can process more candidates with better results in less time."
              author="David R."
              role="Recruitment Agency Owner"
               image="/t5.avif"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Resume Experience?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of users who have improved their job prospects with Resumaid's AI-powered tools.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="font-semibold">
                Try For Free
              </Button>
              <Button size="lg" variant="outline" className="font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

    
      

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <FileTextIcon className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Resumaid</span>
              </div>
              <p className="text-muted-foreground">
                AI-powered resume analysis and optimization for job seekers and HR professionals.
              </p>
              <div className="flex space-x-4 pt-2">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Resume Analysis
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Resume Generation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Job Scraping
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    CV Shortlisting
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Keyword Optimization
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    GDPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Resumaid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }:any) {
  return (
    <div className="bg-background rounded-xl p-6 shadow-md border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
      <div className="text-primary mb-4 group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

function FeatureItem({ title, description }:any) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 bg-primary/20 text-primary rounded-full p-1 h-fit">
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
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

function TestimonialCard({ quote, author, role, image }:any) {
  return (
    <div className="bg-background rounded-xl p-6 shadow-md border border-border">
      <div className="mb-4 text-primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
        </svg>
      </div>
      <p className="mb-4 italic">{quote}</p>
      <div className="flex items-center gap-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={author}
          width={48}
          height={48}
          className="rounded-full object-cover w-12 h-12"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}

function PricingFeature({ included, feature }:any) {
  return (
    <div className="flex items-center gap-2">
      {included ? <CheckIcon className="h-5 w-5 text-primary" /> : <XIcon className="h-5 w-5 text-muted-foreground" />}
      <span className={included ? "" : "text-muted-foreground"}>{feature}</span>
    </div>
  )
}

function FaqItem({ question, answer }:any) {
  return (
    <div className="bg-background rounded-xl p-6 shadow-sm border border-border">
      <h3 className="text-lg font-semibold mb-2">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  )
}

