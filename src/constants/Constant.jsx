import { AiFillHome } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { RiCommunityFill, RiPlayListFill } from "react-icons/ri";

const catagories = [
  {
    id: 1,
    title: "home",
    icon: <AiFillHome />,
    path: "new",
  },
  {
    id: 2,
    title: "explore",
    icon: <MdExplore />,
    path: "explore",
  },
  {
    id: 3,
    title: "channel",
    icon: <GrChannel />,
    path: "channel",
  },
  {
    id: 4,
    title: "playlist",
    icon: <RiPlayListFill />,
    path: "playlist",
  },
  {
    id: 5,
    title: "commiunity",
    icon: <RiCommunityFill />,
    path: "commiunity",
  },
];

export default catagories;
