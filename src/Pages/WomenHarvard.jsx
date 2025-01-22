import React, { useEffect } from "react";
import "../app.css";

const WomenHarvard = () => {
  const timelineData = [
    {
      year: 1636,
      description: "The Massachusetts Bay Colony founds a small college in Massachusetts.",
    },
    {
      year: 1638,
      description:
        "Reverend John Harvard donates an estate, a generous amount of money, and a collection of 250 books to support the institution, and in his honor, the school is renamed Harvard College.",
    },
    {
      year: 1879,
      description:
        "The Society for the Collegiate Instruction of Women is founded, with the aim of providing women with an education equal to that at Harvard. The first president is Elizabeth Cary Agassiz. The school is quickly nicknamed 'The Harvard Annex.'",
    },
    {
      year: 1894,
      description:
        "The Annex is chartered as Radcliffe College by the Commonwealth of Massachusetts. The Society is renamed in honor of the first woman to donate money and establish a scholarship at Harvard College, Anne Radcliffe.",
    },
    {
      year: 1943,
      description:
        "During World War II, Harvard and Radcliffe reached a formal agreement, allowing Radcliffe students to enroll in all courses at Harvard College. Women students are allowed into Harvard classrooms for the first time.",
    },
    {
      year: 1956,
      description:
        "Cecilia Payne-Gaposchkin, a professor of Astronomy, became the first female in the Faculty of Arts and Sciences to be promoted to full professor.",
    },
    {
      year: 1963,
      description:
        "Radcliffe students are granted Harvard diplomas signed by both presidents upon completion of their required course of study. Radcliffe Graduate School is closed down and women are first accepted to Harvard's Graduate School of Arts and Sciences.",
    },
    {
      year: 1970,
      description:
        "Coeducation living begins as an experiment in the spring. The first joint Harvard and Radcliffe commencement is held in Harvard Yard.",
    },
    {
      year: 1971,
      description:
        "All Harvard and Radcliffe houses become coed.",
    },
    {
      year: 1972,
      description:
        "Harvard Yard is opened to female residents.",
    },
    {
      year: 1975,
      description:
        "Limits on the number of women undergraduates are abolished.",
    },
    {
      year: 1977,
      description:
        "Harvard and Radcliffe come to an agreement reaffirming the financial and corporate independence of Radcliffe College, but delegating to Harvard the responsibility for women's undergraduate education in return for all tuition and financial aid funds from Radcliffe students. Radcliffe students become Harvard students with all the rights, responsibilities and privileges thereof.",
    },
    {
      year: 1978,
      description:
        "Dean Henry Rosovsky established the Committee on Women's Studies (CWS), in response to petitions by both students and faculty members. In 2003, CWS changed its name and mandate to become the current Committee on Degrees in the Studies of Women, Gender, and Sexuality (WGS). ",
    },
    {
      year: 1999,
      description:
        "Radcliffe College and Harvard University officially merged, establishing the Radcliffe Institute for Advanced Study at Harvard.",
    },
    {
      year: 2006,
      description:
        "In Fall 2006 Harvard opened a Women's Center, which aims to promote awareness of gender issues. ",
    },
    {
      year: 2007,
      description:
        "Dr. Drew Gilpin Faust is appointed as the first female president of Harvard University, marking a historic milestone in the university’s leadership.",
    },
    {
      year: 2008,
      description:
        "Drew Gilpin Faust delivers her inaugural address as Harvard's president, emphasizing diversity, inclusion, and accessibility in higher education.",
    },
    {
      year: 2013,
      description:
        "Harvard celebrates the 60th anniversary of the Schlesinger Library, which continues to document the history of women in America.",
    },
    {
      year: 2014,
      description:
        "Harvard launches its first Women in Computer Science (WiCS) conference, aimed at increasing female representation in tech fields.",
    },
    {
      year: 2016,
      description:
        "Harvard implements a policy restricting membership in single-gender social organizations, including all-male and all-female final clubs, to promote gender inclusivity.",
    },
    {
      year: 2018,
      description:
"Drew Gilpin Faust steps down, and Harvard announces Claudine Gay as the first woman of color to become the dean of the Faculty of Arts and Sciences."
    },
    {
      year: 2021,
      description:
"Harvard creates the Gender Equity Action Fund to support initiatives addressing gender inequity across the university."
    },
    {
      year: 2023,
      description:
"Claudine Gay is announced as Harvard’s 30th president, becoming the second woman and the first Black president in Harvard’s history."
    },
    {
      year: 2024,
      description:
"Harvard’s Radcliffe Institute for Advanced Study expands its research on women and gender studies, hosting its largest-ever conference on women's leadership and empowerment."
    },

  ];

  return (
    <div className="women-container">
      <div className="women-image"></div>
      <div className="image-text6">
        <h1>WOMEN & HARVARD</h1>
      </div>
      <div className="title1">
        <h2>History of Women at Harvard</h2>
      </div>
      
      
    <section className="timeline">
      {timelineData.map((item, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-year">{item.year}</div>
          <div className="timeline-content">
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </section>
    </div>
  );
};

export default WomenHarvard;


