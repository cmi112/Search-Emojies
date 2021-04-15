import React from 'react'
import GitHubButton from 'react-github-btn'

export default function Header() {
    return (
        <div style={{textAlign:"center"}}>
        <h1> Search Emoji &#x26F0;</h1>
     
        <p>A simple emoji search tool made with ReactJS.</p>
        <p>
            <GitHubButton href="https://github.com/nrcool" data-icon="octicon-star" data-text="star" data-show-count={true} data-size="large"/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <GitHubButton href="https://github.com/nrcool" data-icon="octicon-repo-forked" data-text="fork" data-show-count={true} data-size="large"/>
            </p>
        </div>
    )
}


