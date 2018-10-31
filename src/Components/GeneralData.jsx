import React from "react";
import { IoIosPerson } from "react-icons/io";
import { IoIosLaptop } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { FaUniversity } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

export default class GeneralData extends React.Component {
  render() {
    return (
      <div class="middlepane">
        <div class="vl" />
        <span class="sectionHeaders">
          <IoIosContact /> General info about me
        </span>
        <section class="flex-container">
          <span class="flex-3itemsperLine">
            <IoIosPerson /> 27 years{" "}
          </span>
          <span class="flex-3itemsperLine">
            <FaUniversity /> University of Aveiro
          </span>
          <span class="flex-3itemsperLine">
            <FaMap /> Porto
          </span>
          <span class="flex-3itemsperLine">
            <FaMap /> Porto
          </span>
          <span class="flex-3itemsperLine">
            <IoIosLaptop /> Junior Software Developer{" "}
          </span>
          <span class="flex-3itemsperLine">
            <IoIosContact /> +351 932814073{" "}
          </span>
        </section>

        <span class="sectionHeaders">
          <IoIosContact /> Whats my path till now
        </span>
        <hr />
        <section class="flex-container">
          <figure class="flex-5itemsperLine">
            <img
              id="myDiploma"
              alt="My Diploma"
              src="/getDiploma.jpg"
              width="100"
              heigth="100"
            />

            <figcaption>Finish my MSc</figcaption>
          </figure>
          <div class="flex-5itemsperLine">
            <div class="arrow">
              <div class="head" />
            </div>
          </div>
          <figure class="flex-5itemsperLine">
            <img
              id="getJob"
              alt="getJob"
              src="/GetJob.jpg"
              width="100"
              heigth="100"
            />
            <figcaption width="50px">
              Get a job at Deloitte as Project Manager
            </figcaption>
          </figure>
          <div class="flex-5itemsperLine">
            <div class="arrow">
              <div class="head" />
            </div>
          </div>
          <figure class="flex-5itemsperLine">
            <img
              id="getJob"
              alt="getJob"
              src="/whatsNext.png"
              width="100"
              heigth="100"
            />
            <figcaption>
              Rediscover programming and what awesome things can be done by
            </figcaption>
          </figure>
        </section>

        <section>
          <hr />
          <span class="sectionHeaders">
            <IoIosContact /> Working Experience
          </span>
          <p align="left">Company: Deloitte Start: Sept '15 End: Aug '18</p>
          <p align="left">
            I had worked as a telecommunication engineer consultant, and I’ve
            made several projects mainly focused in Project Management roles on
            several major
          </p>
        </section>
      </div>
    );
  }
}
