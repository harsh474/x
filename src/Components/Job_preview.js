import React from "react";
import atlassian from "../Components/atlasian.png";
import figma from "../Components/figma.png";
import adobex from "../Components/adobex.png";
import adobei from "../Components/adobei.png";

function Job_preview() {
  return (
    <div className="flex">
      <div className="left pl-[120px]  border w- ">
        <div className="flex items-center gap-4 font-sans text-[20px] text-[#888888] font-medium border-y-2  border-[#FFFFF] h-[47px] ">
          <h1 className="text-red-600 border-b-2 border-red-500">Job preview</h1>
          <h1>Applicants</h1>
          <h1>Match</h1>
          <h1>Messages</h1>
        </div>

        <div className="job_title font-sans h-[127px] border-b-2 border-[#E7E7E7] pt-3">
          <div className="flex   items-center gap-7 mb-3   ">
            <h1 className="font-sans font-bold text-[35px]  ">
              Senior Product Designer
            </h1>
            <h3 className=" text-[14px]  text-[#888888] font-medium">
              posted 2 days ago
            </h3>
            <h3 className="flex text-green-400 font-medium  items-centre justify-center   gap-1 border-2 rounded-lg px-1 bg-green-100 border-green-400">
              <p>.</p> Open
            </h3>
          </div>
          <div className="flex gap-[72px] font-sans text-[#5D5D5D]">
            <div className="flex">
              <span className="material-symbols-outlined">location_on</span>
              <p>Delaware, USA</p>
            </div>
            <div>
              <i></i>
              <p>$300k-$400k</p>
            </div>
          </div>
        </div>

        <div className="skills flex gap-9 py-4 font-sans border-b-2 border-[#E7E7E7]">
          <div className=" flex flex-col gap-y-2">
            <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
              Skills Required
            </h1>

            <div className="flex gap-2 border-[D0D5DD] border-[1px] rounded-lg items-center px-1 py-1 ">
              <img src={figma} alt="atlassian" className="w-7 h-6"></img>
              <p className="text-[#344054]  text-[12px] font-medium ">Figma</p>
            </div>
            <div className="flex gap-2 border-[D0D5DD] border-[1px] rounded-lg items-center px-2 py-1 ">
              <img src={adobei} alt="atlassian" className="w-7 h-6"></img>
              <p className="text-[#344054]  text-[12px] font-medium ">
                Adobe ILLustrator
              </p>
            </div>
            <div className="flex gap-2 border-[D0D5DD] border-[1px] rounded-lg items-center px-2 py-1 ">
              <img src={adobex} alt="atlassian" className="w-7 h-6"></img>
              <p className="text-[#344054]  text-[12px] font-medium ">
                Adobe XD
              </p>
            </div>
          </div>

          <div className="font-sans flex flex-col gap-y-2 ">
            <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
              Preferred Language
            </h1>
            <p className="font-semibold text-[16px] leading-5">English</p>
          </div>

          <div className="font-sans flex flex-col gap-y-2 ">
            <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">Type</h1>
            <p className="font-semibold text-[16px] leading-5  text-[#3D3D3D]">
              Full time
            </p>
          </div>

          <div className="font-sans flex flex-col gap-y-2 ">
            <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
              Year of Experience
            </h1>
            <p className="font-semibold text-[16px] leading-5">
              3+ Year of Experience
            </p>
          </div>
        </div>

        <div className="about_the_jo border-b-2 border-[#E7E7E7] pb-9">
          <div className="flex flex-col font-sans gap-3  justify-between">
            <h1 className="text-[#6E6D6D] font-medium text-[16px]">
              About the job
            </h1>
            <p className="font-medium text-[16px] leading-5">
              1. Handle the UI/UX research design
            </p>
            <p className="font-medium text-[16px] leading-5">
              2. Work on researching on latest web applications designs & trends
            </p>
            <p className="font-medium text-[16px] leading-5">
              3. Work on conceptualizing and visualizing
            </p>
            <p className="font-medium text-[16px] leading-5">
              4. Work on creating graphics content and other graphic-related
              works
            </p>
            <p className="font-medium text-[16px] leading-5">Benefits:</p>
            <p className="font-medium text-[16px] leading-5 before:content-['•'] before:ml-2 before:mr-1">
              Health Insurance
            </p>
            <p className="font-medium text-[16px] leading-5 before:content-['•'] before:ml-2 before:mr-1">
              Provided Funds
            </p>
            <p className="font-medium text-[16px] leading-5">Schedule:</p>
            <p className="font-medium text-[16px] leading-5 before:content-['•'] before:ml-2 before:mr-1">
              Day shifts
            </p>
            <p className="font-medium text-[16px] leading-5">
              Supplemental pay types:
            </p>
            <p className="font-medium text-[16px] leading-5 before:content-['•'] before:ml-2 before:mr-1">
              Performance bonus
            </p>
            <p className="font-medium text-[16px] leading-5 before:content-['•'] before:ml-2 before:mr-1">
              Yearly bonus
            </p>
            <p className="font-medium text-[16px] leading-5">
              Work Location: In person
            </p>
          </div>
        </div>

        <div className="about_company py-4 border-b-2 border-[#E7E7E7] ">
          <div className="flex gap-2 mb-4">
            <img src={atlassian} alt="atlassian" className="w-7 h-6"></img>
            <h3>Atlassian</h3>
          </div>
          <div className="flex gap-[183px]">
            <div className="flex flex-col gap-4">
              <div className="font-sans flex flex-col gap-2 ">
                <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
                  Company Size
                </h1>
                <p className="font-semibold text-[16px] leading-5">
                  1k - 2k Employess
                </p>
              </div>
              <div className="font-sans flex flex-col gap-2 ">
                <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
                  Sector
                </h1>
                <p className="font-semibold text-[16px] leading-5">
                  Information Technology, Infrastructure
                </p>
              </div>
              <div className="font-sans flex flex-col gap-2 ">
                <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
                  Founded In
                </h1>
                <p className="font-semibold text-[16px] leading-5">2019</p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="font-sans flex flex-col gap-2 ">
                <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
                  Type
                </h1>
                <p className="font-semibold text-[16px] leading-5">Private</p>
              </div>
              <div className="font-sans flex flex-col gap-2 ">
                <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
                  Funding
                </h1>
                <p className="font-semibold text-[16px] leading-5">
                  Bootstrapped
                </p>
              </div>
              <div className="font-sans flex flex-col gap-2 ">
                <h1 className=" text-[#6E6D6D]  font-medium text-[16px]">
                  Founded By
                </h1>
                <p className="font-semibold text-[16px] leading-5">
                  Scott Farquhar, Mike Cannon-Brookes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right py-5 px-5">
        <div>
         <div className="buttons flex justify-between w-[322px]  "> 
         <button className="flex gap-2 text-red-500 border-red-600 bg-red-100 border-1 py-2 px-3 rounded-lg items-center">
            <span className="material-symbols-outlined">Delete</span>
            Delete Job
          </button>
          <button className="flex gap-2 text-white border-red-600 bg-red-500 border-1 py-2 px-5 rounded-lg items-center">
            <span className="material-symbols-outlined">Edit</span>
            Edit Job
          </button>
         </div>
          <div className=" flex justify-between border-b-2 border-[#E7E7E7] w-[322px] items-center">
          <p className="flex items-center gap-2 py-3  ">  <span class="material-symbols-outlined">group</span> Applicants</p>  
          <p>400</p>
 </div>
          <div className=" flex justify-between border-b-2 border-[#E7E7E7] w-[322px] items-center">
          <p className="flex items-center gap-2 py-3  ">  <span class="material-symbols-outlined">person_add</span>Matches</p><p>100</p>
          </div>
          <div className=" flex justify-between border-b-2 border-[#E7E7E7] w-[322px] items-center">
          <p className="flex items-center gap-2 py-3  ">  <span class="material-symbols-outlined">Message</span>Messages</p>  
          <p>147</p>
          </div>
          <div className=" flex justify-between border-b-2 border-[#E7E7E7] w-[322px] items-center">
          <p className="flex items-center gap-2 py-3  ">  <span class="material-symbols-outlined">Visibility</span>Views</p>  
          <p>800</p>
          </div>
          
         
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Job_preview;
