import React from 'react'
import Card from './components/Card'

const jobsData = [
  {
    logo: "https://storage.googleapis.com/gd-prod/images/a910d418-7123-4bc4-aa3b-ef7e25e74ae6.60c498c559810aa0.webp",
    companyName: "Google",
    daysAgo: "2 days ago",
    designation: "Senior Developer",
    role1: "Full Time",
    role2: "Remote",
    location: "San Francisco",
    salary: "90/hour"
  },
  {
    logo: "https://download.logo.wine/logo/Apple_Inc./Apple_Inc.-Logo.wine.png",
    companyName: "Apple",
    daysAgo: "5 days ago",
    designation: "Junior Developer",
    role1: "Part Time",
    role2: "Onsite",
    location: "Cupertino",
    salary: "20/hour"
  },
  {
    logo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
    companyName: "Meta",
    daysAgo: "1 day ago",
    designation: "Senior Engineer",
    role1: "Full Time",
    role2: "Hybrid",
    location: "Menlo Park",
    salary: "120/hour"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j-r0DuB9NSUpqLo3kxUDi66LH_RQDUf9zw&s",
    companyName: "Amazon",
    daysAgo: "3 days ago",
    designation: "Backend Developer",
    role1: "Full Time",
    role2: "Remote",
    location: "Seattle",
    salary: "100/hour"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD54UjzrDIlssURuc9n1CMS28kNcte5Lfz9A&s",
    companyName: "Netflix",
    daysAgo: "7 days ago",
    designation: "Frontend Developer",
    role1: "Contract",
    role2: "Remote",
    location: "Los Angeles"
    , salary: "70/hour"
  },
  {
    logo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/493/small/microsoft-logo-microsoft-icon-transparent-free-png.png",
    companyName: "Microsoft",
    daysAgo: "4 days ago",
    designation: "Software Engineer",
    role1: "Full Time",
    role2: "Hybrid",
    location: "Redmond",
    salary: "170/hour"
  },
  {
    logo: "https://img.icons8.com/win10/1200/tesla-logo.jpg",
    companyName: "Tesla",
    daysAgo: "6 days ago",
    designation: "Junior Engineer",
    role1: "Internship",
    role2: "Onsite",
    location: "Austin",
    salary: "150/hour"
  }
];
let arr = [2, 3, 4]

const App = () => {
  return (
    <div className='parent'>
      {jobsData.map(function (object) {
        return <Card logoo={object.logo} cname={object.companyName} dago={object.daysAgo} desig={object.designation} rl1={object.role1} rl2={object.role2} loc={object.location} sal={object.salary} />
      })}



    </div>
  )
}

export default App
