import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const Root = ({ state }) => {
  return (
    <>
      <h1>Frontity Workshop</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
      </nav>
    </>
  );
};

export default connect(Root);
