import React from "react";

export default ({data}) => (
  <div style={{ display: "inline-block" }}>
    <h1>{data.site.siteMetadata.title}</h1>
    <div style={{ display: "block" }}>
   <p>
     We're the only site running on your computer dedicated to showing the best
     photos and videos of pandas eating lots of food.
   </p>
   <img
     src="https://i.pinimg.com/564x/1f/f8/93/1ff893b57eef73666bf27339616e46d5.jpg"
     alt="a smilling man surrounded by very cute baby pandas"
   />
    </div>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
