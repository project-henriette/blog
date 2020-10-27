import React from "react"

const About = () => (
  <div
    id="about" 
    style={{
      margin: `0px auto`,
      padding: `1rem`,
      maxWidth: `960px`,
      }}
  >
    <h4>About me</h4>
    <div style={{ display: `flex`, flexDirection: `row`, justifyContent: `space-between`}}>
      <p>I live to create. I already have too much stuff, so I get more and more conscious about the materials I use and what impact I create on my environment. But I can't help myself, I need to keep my hands busy.</p>
      <p>I work as a software engineer. I still hope I will eventually save the world with some awesome application.</p>
    </div> 
  </div>
);

export default About