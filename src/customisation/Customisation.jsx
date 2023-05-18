import React, { useEffect, useState } from "react";
import { list, wallpaper } from "../recoil/description_atoms/DescriptionAtoms";
import { useRecoilState } from "recoil";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PhotoIcon from "@mui/icons-material/Photo";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import AssistantIcon from "@mui/icons-material/Assistant";
import style from "./Customisation.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import {
  studentPreDefinedData,
  studentDefaultBG,
  ProfessionalDefaultBG,
  professionalPreDefinedData,
  companiesImg,
  instituteImg,
} from "./customisationData";
import PricingCard from "./PricingCard";
function Customisation() {
  let location = useLocation();
  const [listData, setListData] = useRecoilState(list);
  const navigate = useNavigate();
  const [linkOfWallpaper, setLinkOfWallpaper] = useState("");
  const [currentWallpaper, setCurrentWallpaper] = useRecoilState(wallpaper);
  const image = [
    "https://wallpaperaccess.com/full/4545909.jpg",
    "https://wallpapercave.com/wp/wp6940885.jpg",
    "https://a-static.besthdwallpaper.com/fantasy-world-wallpaper-2880x1620-29897_52.jpg",
    "https://static1.squarespace.com/static/5fe4caeadae61a2f19719512/5fe5c3a9d85eb525301180ed/5ff082ae17af6f5d1930e6bf/1610530333403/Wallpaper+engine+4k.png?format=1500w",
    "https://downloadhdwallpapers.in/wp-content/uploads/2017/12/Code-in-Laptop-Computer-1366x768.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/images6/Laptop-Wallpaper-4K-High-Resolution.jpg",
    "https://www.pixel4k.com/wp-content/uploads/2018/09/minato-japan-night-city-bridge-4k_1538065305.jpg.webp",
    "https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1609949775007-FKI50MYWWQG9KZHEA06W/35.jpg",
  ];

  function handleBackground(ele) {
    setCurrentWallpaper(ele);
    localStorage.setItem("userWallpaper", `${ele}`);
    navigate("/kanban");
  }
  function handleLinkOfWallpaper(e) {
    setLinkOfWallpaper(e.target.value);
  }
  function handleSendLinkOfWallpaper() {
    if (linkOfWallpaper !== "") {
      setCurrentWallpaper(linkOfWallpaper);
      localStorage.setItem("userWallpaper", `${linkOfWallpaper}`);
      navigate("/kanban");
    } else {
      alert("select any background");
    }
  }

  useEffect(() => {
    if (location.hash === "#customisation") {
      window.scroll(0, 3600);
    }
  }, []);

  function handleStudentBoard() {
    setListData(studentPreDefinedData);
    localStorage.setItem("userWallpaper", studentDefaultBG);
    navigate("/kanban");
  }
  function handleProfessionalBoard() {
    setListData(professionalPreDefinedData);
    localStorage.setItem("userWallpaper", ProfessionalDefaultBG);
    navigate("/kanban");
  }
  return (
    <div id="top" className={style.mainDiv}>
      <div className={style.introPage}>
        <nav className={style.introNav}>
          <div>
            <img
              className={style.introNavLogo}
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/kanban-board-4185955-3461987.png"
              alt=""
            />

            <a style={{ textDecoration: "none" }} href="#top">
              <h1 style={{ color: "rgba(7, 79, 187, 0.459)" }}>Monday.com</h1>
            </a>
          </div>

          <div className={style.btnDiv}>
            <a href="#features">
              <Button variant="contained" endIcon={<AssistantIcon />}>
                Features
              </Button>
            </a>
            <a href="#teams">
              <Button variant="contained" endIcon={<GroupsIcon />}>
                For Teams
              </Button>
            </a>
            <a href="#students">
              <Button variant="contained" endIcon={<EmojiPeopleIcon />}>
                For Students
              </Button>
            </a>
            <a href="#customisation">
              <Button variant="contained" endIcon={<PhotoIcon />}>
                Background
              </Button>
            </a>

            <a
              href="#videoDiv"
            >
              <Button variant="contained" endIcon={<YouTubeIcon />}>
                Tutorial
              </Button>
            </a>
            <Button id={style.introNavBlankButtons} variant="contained" />
            <a href="#pricing">
              <Button variant="contained" endIcon={<CurrencyRupeeIcon />}>
                Pricing
              </Button>
            </a>
            <Button
              onClick={() => navigate("/kanban")}
              id={style.introNavGreenButtons}
              color="success"
              variant="contained"
              endIcon={<MoneyOffIcon />}
            >
              Start For Free
            </Button>
          </div>
        </nav>
        <div className={style.centerText}>
          <h1 style={{ fontSize: "60px" }}>
            Organize your Work and Life , finally
          </h1>
          <h2>
            Become focused , organized and calm with Todoist. The worlds #1 task
            manager and to-do list website{" "}
          </h2>
        </div>

      </div>
     
      <h1 style={{ color: "white" }} id="features">
        .
      </h1>
      <br />
      <div className={style.features}>
        <div>
          <img src="/home.png " alt="" />
          <div className={style.featureText}>
            <h1>The KanBan Board </h1>
            <h3>
              Here you can add Cards Task and also you can drag and drop froom
              card to another card
            </h3>
          </div>
        </div>
      </div>

      <div className={style.descDiv}>
        <div className={style.DecpText}>
          <h1>The Description</h1>
          <h3>
            Worry about the minor details or pinpoint to be added to the task
            here is the Description for you to add any details
          </h3>
        </div>

        <img src="/Desc.png " alt="" />
      </div>

      <div className={style.custShow}>
        <img src="/chooseBG.png " alt="" />
        <div className={style.custShowText}> <h1>Customisation on the go</h1>
          <h3>
            Bored of all the old plain boring ToDo-List Websited and KanBan
            board{" "}
          </h3>
          <h3>
            We are here to give you the customisation that you want now you can
            make any background that you like just by pasting the link of the
            image{" "}
          </h3>
        </div>
      </div>

      <div id="teams" className={style.forTeams}>
        <h1>Are you a working Professional?</h1>
        <h2>
          Here is a Template that is specially Designed for the Working
          Professionals
        </h2>
        <h2>
          That template is specially designed for the working professionals in
          that we have special card for arranging task accoring to the required
        </h2>
        <Button onClick={handleProfessionalBoard} variant="contained">
          Get started{" "}
        </Button>
        <h1>Companies that are using our Board</h1>
        <div className={style.companiesIcon}>
          {companiesImg.map((ele, i) => (
            <img src={ele} key={i} alt="alt" />
          ))}
        </div>
      </div>

      <div id="students" className={style.forStudent}>
        <br />
        <br />
        <h1>Are you a Student?</h1>
        <h2>
          We understand now a days how hard it is for a student to track all the
          task they have to complete{" "}
        </h2>
        <h2>
          We have created a Template for you that is designed specially for
          students so that it will make it easier for you to manage your tasks,
          click on the button below to get started.
        </h2>
        <Button onClick={handleStudentBoard} variant="contained">
          Get started{" "}
        </Button>
        <h1>Institutes that are using our Board</h1>
        <div className={style.companiesIcon}>
          {instituteImg.map((ele, i) => (
            <img src={ele} key={i} alt="alt" />
          ))}

          <img src="" alt="" />
        </div>
      
      </div>
      <div className={style.videoDiv} id="videoDiv">
        <div>
          
       </div>
        
        <h1>Confused! how to use <span>Kanban Board?</span> Check out our Video below</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6drUzoeHZkg?start=63" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </div>
      <div id="customisation" className={style.heading}>
        <h1>Choose Background</h1>
      </div>
      <div className={style.inpDiv}>
        <TextField
          color="success"
          onChange={handleLinkOfWallpaper}
          className={style.textField}
          label="Enter the link of your favourite background"
          variant="filled"
        />
        <Button onClick={handleSendLinkOfWallpaper} variant="contained">
          Apply This Image
        </Button>
      </div>
      <div className={style.imageDiv}>
        {image.map((ele, index) => (
          <img
            className={style.perImg}
            key={index}
            onClick={() => {
              handleBackground(ele);
            }}
            alt="alt"
            src={ele}
          />
        ))}
      </div>
      <div id="pricing" className={style.pricing}>
        <h1 style={{color:'transparent'}}>.</h1>
        <h1>Become our Premium User</h1>
        <div>
          <PricingCard
            plan="Professional "
            price="69₹/M"
            desc="Unlimited boards
            Advanced checklists
            Admin and security features
            Unlimited automations
            And more!"
          />
          <PricingCard
            plan="Bussiness"
            price="169₹/M"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus."
          />
          <PricingCard
            plan="Elite"
            price="696₹/M"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at posuere eros. Interdum et malesuada fames ac ante ipsum primis in faucibus."
          />
        </div>
      </div>

      <footer className={style.footer}>
        <div className="cards">
          <div className="card madewith">
            <p
              onClick={() => {
                alert("hey");
              }}
              className="tip"
            >
              Made with ❤️ by
            </p>
          </div>
          <div className="card laxmi">
            <a
              href="http://www.linkedin.com/in/lakshmiprasannanarapureddy"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tip">Lakshmi</p>
            </a>
          </div>
          <div className="card chandra">
            <a
              href="https://www.linkedin.com/in/chandra-bhan-prajapati-5bb668211/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tip">Chandra</p>
            </a>
          </div>
          <div className="card samad">
            <a
              href="https://www.linkedin.com/in/samadrahman"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tip">Samad</p>
            </a>
          </div>
          <div className="card rohan">
            <a
              href="https://www.linkedin.com/in/therohanmehta/"
              target="_blank"
              rel="noreferrer"
            >
              <p className="tip">Rohan</p>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Customisation;
