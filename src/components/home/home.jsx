import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class Home extends Component {
  render() {
    return (
      <main>
        <section className="backImg grid-x align-middle" id="headLiner">
          <div className="cell text-center">
            <h1 id="headLine" >
              Imagine social media approvals without all the back & forth.
            </h1>
            <h2 id="subHead">
              A tool to improve social content approvals for social media managers.
            </h2>
          </div>

        </section>
        <section>
          <article className="slander grid-x align-middle align-center">
            <h2 className="cell text-center large-10" id="slander">
              <b>GANDER</b> is an online social media planner build for social media managers.
                Cut delays in client approvals and eliminate redundant tasks.
              </h2>
            </article>


            <article id="dragNdrop" className="grid-x align-middle grid-padding-x">

              <div className="cell large-5">
                <div className="grid-x align-center grid-padding-x">
                  <div className="cell large-9 small-11 medium-10">
                    <h2>
                      <b>Drag & Drop Visual Planner</b>
                    </h2>
                    <h4 style={{padding: '8% 0', fontSize: '225%'}}>
                      No more screenshots or image editors, just let clients preview upcoming content,
                      and ensure they approve of what's being published before it goes live.
                    </h4>
                    <Link to="" className="freeTrialBody" style={{display: "inlineBlock", lineHeight:"1.5"}}><b>FREE TRIAL</b></Link>
                  </div>
                </div>
              </div>
              <div className="cell large-7 align-self-bottom">
                <img src="https://s3-us-west-1.amazonaws.com/gander/calendar-view.png" width="100%"/>
              </div>
            </article>




          </section>
          <section>
            <img src="" />
            <h2>MANAGE MULTIPLE CLIENTS</h2>
            <p>
              Every client recieves a seperate content calender and asset library, where you can organize
              their social content and media assets by tag or category.
            </p>
            <Link to="" id="freeTrialBody">FREE TRIAL</Link>
          </section>
          <section>
            <h2>First 1,000 singups recieve unlimited clients & access!</h2>
            <h4> FOR ONLY </h4>
            <h1> $19 /mo </h1>
            <Link to="" id="freeTrialBody">FREE TRIAL</Link>
          </section>
        </main>
      )
    }

  }

  export default Home
