import React from "react";
import { FaCode, FaTrophy } from "react-icons/fa";
import { FaPaintbrush } from "react-icons/fa6";
import { HiLightningBolt } from "react-icons/hi";
import { LuCpu } from "react-icons/lu";
import {
  MdCoPresent,
  MdSchool,
  MdSearch,
  MdVideogameAsset,
} from "react-icons/md";
import { SiVrchat } from "react-icons/si";

export type Tag = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

export const ClubActivities: Tag[] = [
  {
    label: "Workshops",
    value: "workshops",
    icon: <MdSchool />,
  },
  {
    label: "Research",
    value: "research",
    icon: <MdSearch />,
  },
  {
    label: "Casual Gaming",
    value: "casualGaming",
    icon: <MdVideogameAsset />,
  },
  {
    label: "Competitive E-Sports",
    value: "esports",
    icon: <FaTrophy />,
  },
  {
    label: "Hackathon",
    value: "hackathon",
    icon: <HiLightningBolt />,
  },
  {
    label: "Social VR",
    value: "socialVr",
    icon: <SiVrchat />,
  },
  {
    label: "Research Conference",
    value: "researchConference",
    icon: <MdCoPresent />,
  },
  {
    label: "Hardware Projects",
    value: "hardwareProjects",
    icon: <LuCpu />,
  },
  {
    label: "Software Projects",
    value: "softwareProjects",
    icon: <FaCode />,
  },
  {
    label: "Art & Design Projects",
    value: "DesignProjects",
    icon: <FaPaintbrush />,
  },
];
