import email from "@/assets/icons/email.png";
import lock from "@/assets/icons/lock.png";
import jobsearch from "@/assets/images/jobsearch.jpg";
import Google from "@/assets/icons/google.png";
import person from "@/assets/icons/person.png";
import onboarding1 from "@/assets/images/onboarding1.jpg";
import onboarding2 from "@/assets/images/onboarding2.jpg";
import onboarding3 from "@/assets/images/onboarding3.jpg";
import profile from "@/assets/icons/profile.png";
import message from "@/assets/icons/message.png";
import explore from "@/assets/icons/explore.png";
import myjobs from "@/assets/icons/myjob.png";
import backArrow from "@/assets/icons/back-arrow.png";
import search from "@/assets/icons/search.png";
import technology from "@/assets/icons/technology.png";
import education from "@/assets/icons/education.png";
import legal from "@/assets/icons/legal.png";
import sales from "@/assets/icons/sales.png";
import healthcare from "@/assets/icons/healthcare.png";
import marketing from "@/assets/icons/marketing.png";
import finance from "@/assets/icons/finance.png";
import support from "@/assets/icons/support.png";
import code from "@/assets/icons/code.png";
import design from "@/assets/icons/design.png";
import product from "@/assets/icons/productmmg.png";
import project from "@/assets/icons/project.png";
import quality from "@/assets/icons/quality.png";
import research from "@/assets/icons/research.png";
import notification from "@/assets/icons/notification.png";
import location from "@/assets/icons/location.png";
import downarrow from "@/assets/icons/downarrow.png";
import profilepic from "@/assets/icons/profile_pic.png";
import filter from "@/assets/icons/filter.png";
import home from "@/assets/icons/home.png";
import laptop_guy from "@/assets/images/laptop_guy.png";
import templogo from "@/assets/images/templogo.jpg";
import locationtarget from "@/assets/icons/locationtarget.png";
import plus from "@/assets/icons/plus.png";
import covid_guy from "@/assets/images/covid_guy.png";
import jobtype from "@/assets/icons/jobtype.png";
import table_guy from "@/assets/images/table_guy.png";
import salary from "@/assets/icons/salary.png";
export const icons = {
  salary,
  email,
  plus,
  lock,
  Google,
  person,
  profile,
  message,
  explore,

  filter,
  myjobs,
  backArrow,
  search,
  jobtype,
  technology,
  home,
  education,
  legal,
  sales,
  healthcare,
  marketing,
  finance,
  support,
  code,
  design,
  product,
  project,
  quality,
  research,
  notification,
  location,
  downarrow,
  profilepic,
  locationtarget,
};
export const images = {
  jobsearch,
  onboarding1,
  onboarding2,
  onboarding3,
  table_guy,
  laptop_guy,
  templogo,
  covid_guy,
};
export const onboarding = [
  {
    id: 1,
    title: "Find Your Dream Job with Ease!",
    description:
      "Discover top job opportunities that match your skills and aspirations.",
    image: images.onboarding2,
  },
  {
    id: 2,
    title: "Apply Effortlessly in Just a Tap",
    description:
      "Browse jobs, submit applications, and track your progress seamlessly.",
    image: images.onboarding1,
  },
  {
    id: 3,
    title: "Grow Your Career with the Right Opportunities",
    description:
      "Connect with top companies and take the next step in your career journey.",
    image: images.onboarding3,
  },
];
export const JobCategory = [
  {
    id: 1,
    title: "Technology",
    icon: icons.technology,
  },
  {
    id: 2,
    title: "Education",
    icon: icons.education,
  },
  {
    id: 3,
    title: "Healthcare",
    icon: icons.healthcare,
  },
  {
    id: 4,
    title: "Finance",
    icon: icons.finance,
  },
  {
    id: 5,
    title: "Marketing",
    icon: icons.marketing,
  },
  {
    id: 6,
    title: "Sales",
    icon: icons.sales,
  },
  {
    id: 7,
    title: "Human Resources",
    icon: icons.education,
  },
  {
    id: 8,
    title: "Engineering",
    icon: icons.education,
  },
  {
    id: 9,
    title: "Design",
    icon: icons.design,
  },
  {
    id: 10,
    title: "Customer Service",
    icon: icons.support,
  },
  {
    id: 11,
    title: "Operations",
    icon: icons.education,
  },
  {
    id: 12,
    title: "Legal",
    icon: icons.legal,
  },
  {
    id: 13,
    title: "Product Management",
    icon: icons.product,
  },
  {
    id: 14,
    title: "Project Management",
    icon: icons.project,
  },
  {
    id: 15,
    title: "Quality Assurance",
    icon: icons.quality,
  },
  {
    id: 16,
    title: "Supply Chain",
    icon: icons.education,
  },
  {
    id: 17,
    title: "Research and Development",
    icon: icons.research,
  },
  {
    id: 18,
    title: "Developer",
    icon: icons.code,
  },
  {
    id: 19,
    title: "Finance",
    icon: icons.finance,
  },
  {
    id: 20,
    title: "Marketing",
    icon: icons.marketing,
  },
  {
    id: 21,
    title: "Sales",
    icon: icons.sales,
  },
  {
    id: 22,
    title: "Human Resources",
    icon: icons.education,
  },
];
// className: "absolute h-60 w-70 right-[-10px] bottom-[-7px]",

export const mainPage = [
  {
    id: 0,
    title: "Find Your Dream Job",
    description:
      "Find jobs that match your passion here,update daily and apply easssssily",
    image: images.laptop_guy,
    style: { height: 300, width: 150 },
  },
  {
    id: 1,
    title: "Connect with Top Companies",
    description:
      "Network with industry leaders and get noticed by top employers.",
    image: images.table_guy,
    // className: "w-[200px] h-[280px]",
    style: { height: 310, width: 230, marginBottom: -10 },
  },
  {
    id: 2,
    title: "Track Your Applications",
    description:
      "Keep track of your job applications and stay updated on their status.",
    image: images.laptop_guy,
    style: { height: 300, width: 150 },
  },
];

export const recommendedJob = [
  {
    id: 1,
    company: "Pensieve",
    role: "Senior UI Developer",
    location: "Bangalore, India",
    minSalary: "12K",
    maxSalary: "15K",
    type: "Remote",
    description:
      "As a Senior UI Developer at Pensieve, you will be responsible for creating visually stunning and highly interactive user interfaces. You will collaborate with designers and developers to build seamless web and mobile experiences.",
    companyDetails:
      "Pensieve is a fast-growing tech company specializing in AI-driven solutions for enterprises. We focus on creating intuitive and data-driven applications that enhance user experiences.",
    reviews: [
      { rating: 4.5, comment: "Great work-life balance and amazing projects." },
      {
        rating: 4.2,
        comment: "Supportive team and great learning opportunities.",
      },
    ],
  },
  {
    id: 2,
    company: "TechCorp",
    role: "Backend Developer",
    location: "San Francisco, USA",
    minSalary: "100K",
    maxSalary: "120K",
    type: "Full-time",
    description:
      "We are looking for an experienced Backend Developer to design, develop, and maintain scalable backend systems. You will work on RESTful APIs, microservices, and cloud-based architectures.",
    companyDetails:
      "TechCorp is an industry leader in cloud computing and AI-driven analytics, providing cutting-edge solutions to Fortune 500 companies.",
    reviews: [
      { rating: 4.8, comment: "Excellent tech stack and great team culture!" },
      { rating: 4.6, comment: "Challenging but rewarding work environment." },
    ],
  },
  {
    id: 3,
    company: "InnovateX",
    role: "Data Scientist",
    location: "Berlin, Germany",
    minSalary: "80K",
    maxSalary: "100K",
    type: "On-site",
    description:
      "As a Data Scientist, you will analyze large datasets, build predictive models, and develop AI solutions that drive business decisions.",
    companyDetails:
      "InnovateX is a research-driven company focused on AI, ML, and big data analytics. We help businesses transform their data into actionable insights.",
    reviews: [
      {
        rating: 4.3,
        comment: "Highly innovative company with great research focus.",
      },
      { rating: 4.1, comment: "Great benefits and supportive colleagues." },
    ],
  },
  {
    id: 4,
    company: "WebWorks",
    role: "Frontend Developer",
    location: "London, UK",
    minSalary: "50K",
    maxSalary: "70K",
    type: "Hybrid",
    description:
      "Join WebWorks as a Frontend Developer and work on building engaging and responsive web applications using React and modern UI frameworks.",
    companyDetails:
      "WebWorks is a digital agency that creates user-friendly and high-performance web applications for global clients.",
    reviews: [
      {
        rating: 4.2,
        comment: "Flexible work environment and exciting projects.",
      },
      { rating: 4.0, comment: "Good career growth opportunities." },
    ],
  },
  {
    id: 5,
    company: "Appify",
    role: "Mobile App Developer",
    location: "Toronto, Canada",
    minSalary: "90K",
    maxSalary: "110K",
    type: "Remote",
    description:
      "As a Mobile App Developer, you will develop high-quality mobile applications for iOS and Android platforms, ensuring smooth user experiences.",
    companyDetails:
      "Appify is a leading mobile development company known for building scalable and feature-rich mobile applications.",
    reviews: [
      { rating: 4.7, comment: "Great remote work culture and talented team." },
      { rating: 4.5, comment: "Challenging yet rewarding projects." },
    ],
  },
  {
    id: 6,
    company: "CyberSecure",
    role: "Cybersecurity Analyst",
    location: "Sydney, Australia",
    minSalary: "85K",
    maxSalary: "105K",
    type: "Full-time",
    description:
      "We are hiring a Cybersecurity Analyst to identify vulnerabilities, implement security measures, and protect our infrastructure from cyber threats.",
    companyDetails:
      "CyberSecure is a top cybersecurity firm providing advanced security solutions and risk assessments for businesses worldwide.",
    reviews: [
      {
        rating: 4.6,
        comment: "Cutting-edge security projects and great team support.",
      },
      {
        rating: 4.3,
        comment: "Good training programs and growth opportunities.",
      },
    ],
  },
];
