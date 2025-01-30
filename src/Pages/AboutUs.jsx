import React, { useEffect } from "react";
import "../App.css";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="background-image2"></div>
        <div className="image-text">
          <h1>What We Do</h1>
        </div>
      </div>
      <div className="about-us-2-container">
      <div className="about-us-2-links">
          <a href="/Membership">Membership</a>
          <a href="/Leadership">Leadership</a>
          <a href="/Fundraising">Fundraising</a>
          <a href="/FAQ">FAQ</a>
          

        </div>
      
        <div className="about-us-2-text">
        <p className="hero"> - Strengthening Opportunities for Women at Harvard - </p>
          <p>
          The Seneca, Inc. is a 501(c)(3) non-profit organization that was founded in 1999 by a group of Harvard undergraduate women.  The Seneca’s mission is to create opportunities, resources, and sustainable networks for women in social, educational, and professional environments.

The Seneca’s membership is celebration of diversity: members bring unique backgrounds, interests and goals to the organization.  This creates a dynamic group of women who both complement and challenge one another, resulting in an enriching group experience.

In addition to forming a social community, members of The Seneca collaborate to promote more opportunities and resources for women.  Our work together cements our bonds as a community and promotes our growth as individuals.

Membership in The Seneca is for life, and our network of inspiring alumnae maintains an active presence in the organization, serving as both friends and mentors to younger members.

          </p>
        </div>
       
         </div>
    </div>
  );
};

export default AboutUs;
