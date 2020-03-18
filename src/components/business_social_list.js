import React from "react"

export default function BusinessSocialList({ instagram, twitter }) {
  return (
    <>
      <h2>Social links</h2>
      <p>
        If you don't have much money or can't get help by the direct means on
        this page, one way to lend a hand is to boost the business's social
        accounts.
      </p>
      <p>Like, retweet, share and follow them wherever you can:</p>
      <ul>
        {instagram && (
          <li>
            Instagram{" "}
            <a href={`https://www.instagram.com/${instagram}/`}>@{instagram}</a>
          </li>
        )}
        {twitter && (
          <li>
            Twitter{" "}
            <a href={`https://www.twitter.com/${twitter}/`}>@{twitter}</a>
          </li>
        )}
      </ul>
    </>
  )
}
