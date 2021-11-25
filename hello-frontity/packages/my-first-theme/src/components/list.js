import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <>
            <Link key={item.id} link={post.link}>
              {post.title.rendered}
              <br />
            </Link>
            <Description>
              <Html2React html={post.excerpt.rendered} />
            </Description>
            <hr />
          </>
        );
      })}
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous);
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next);
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </Items>
  );
};

export default connect(List);

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`;

const PrevNextNav = styled.div`
  padding-top: 1.5em;
  button {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  button:hover {
    cursor: pointer;
  }
`;

const Description = styled.div`
  p {
    color: #4a4a4a;
  }
`;
