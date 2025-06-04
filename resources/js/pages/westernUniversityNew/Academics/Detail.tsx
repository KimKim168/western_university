import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import MyNewLayout from "../layout/MyLayout";
import { Slash } from "lucide-react";

const departments = [
  "African American Studies",
  "African Studies",
  "American Studies",
  "Anthropology",
  "Applied Mathematics",
  "Architecture",
  "Art",
  "Astronomy",
  "Biomedical Engineering",
  "Chemical Engineering",
  "Chemistry",
  "Computer Science",
  "East Asian Languages",
  "Ecology and Biology",
  "Economics",
  "Mathematics",
  "Physics",
  "Political Science",
  "Portuguese ",
  "Psychology",
  "Religious Studies",
  "Sociology",
  "Spanish",
  "Statistics",
];

const Detail = () => {
  return (
    <MyNewLayout>
      {/* Hero Section */}
      <div className="relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20">
        <p className="font-noto-san-extra-light text-3xl md:text-6xl">View Detail</p>
        <div className="mt-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-white">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <Slash className="text-gray-400" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#/ViewDetail" className="text-gray-400">
                  View Detail
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-screen-2xl px-6 py-8 lg:px-16 lg:py-16 flex items-center justify-center">
        <div className="grid flex-col gap-10 md:flex md:gap-12">
          {/* Intro Section */}
          <div>
            <h1 className="font-noto-san-extra-light max-w-[17ch] text-4xl !leading-[1.2] font-bold md:text-5xl lg:text-[2.75rem] xl:text-5xl">
              Undergraduate Study
            </h1>
            <div className="my-10 w-15 border-[1.5px] border-black" />
            <p className="mt-6 text-base text-gray-600">
              Western International School (WIS) first opened its doors on September 1, 2003, and has experienced exponential growth every
              year. In 2003, we recruited 262 students from kindergarten to grade 11 with only 1 campus. For the Academic Year 2019-2020,
              nearly 7,561 students enrolled from Nursery to Grade 12 and we have 16 Campuses in Phnom Penh Takhmao and Sihanouk Branch.
            </p>
          </div>

          {/* Image & Department List */}
          <div className="w-full overflow-hidden md:flex-1">
            <img
              src="/assets/demo-images/Homepage/03_welcome_to_western_2.jpg"
              className="aspect-video w-full rounded-sm object-cover"
              alt="Welcome to Western"
            />
            <h6 className="font-noto-san-extra-light mt-6 text-xl font-semibold">Programs</h6>
            <div className="relative mt-2 mb-4 h-[1px] w-full bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-red-700" style={{ width: "10%" }} />
            </div>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {departments.map((dept, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <span className="text-sm text-gray-600">›</span>
                  <p className="text-sm text-gray-600">{dept}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MyNewLayout>
  );
};

export default Detail;
