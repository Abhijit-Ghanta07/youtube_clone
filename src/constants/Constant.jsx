import {
  MdExplore,
  MdCastForEducation,
  MdLiveTv,
  MdOutlineSportsCricket,
} from "react-icons/md";
import { SiApplepodcasts } from "react-icons/si";
import { GrChannel } from "react-icons/gr";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdMusicalNotes } from "react-icons/io";
import { BiSolidCameraMovie } from "react-icons/bi";
import { IoGameController } from "react-icons/io5";
import { TbHanger } from "react-icons/tb";
import { GiBeanstalk } from "react-icons/gi";

const catagories = [
  {
    id: 2,
    title: "New",
    icon: <MdExplore />,
    path: "new",
  },
  {
    id: 3,
    title: "Trending",
    icon: <FaArrowTrendUp />,
    path: "trending",
  },
  {
    id: 4,
    title: "Live",
    icon: <MdLiveTv />,
    path: "live",
  },
  {
    id: 5,
    title: "Music",
    icon: <IoMdMusicalNotes />,
    path: "music",
  },
  {
    id: 6,
    title: "Sport",
    icon: <MdOutlineSportsCricket />,
    path: "sport",
  },
  {
    id: 7,
    title: "Educational",
    icon: <MdCastForEducation />,
    path: "educational",
  },
  {
    id: 8,
    title: "Podcast",
    icon: <SiApplepodcasts />,
    path: "podcast",
  },
  {
    id: 9,
    title: "Movie",
    icon: <BiSolidCameraMovie />,
    path: "movies",
  },
  {
    id: 10,
    title: "Gaming",
    icon: <IoGameController />,
    path: "gaming",
  },
  {
    id: 11,
    title: "Fashion",
    icon: <TbHanger />,
    path: "fashion",
  },
  {
    id: 12,
    title: "Beauty",
    icon: <GiBeanstalk />,
    path: "beauty",
  },
];

export default catagories;
