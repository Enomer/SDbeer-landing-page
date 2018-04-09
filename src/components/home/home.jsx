import React, { Component } from 'react'
import ReactPlayer from 'react-player'


function getMobileOperatingSystem() {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    console.log('Windows phone')
    return 'Windows phone'
  }

  if (/android/i.test(userAgent)) {
    console.log('Android')
    return 'Android'
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    console.log('iphone')
    return 'iphone'
  }
  console.log('unknown')
  return 'unknown'
}




class Home extends Component {

  render() {
    const phoneType = getMobileOperatingSystem()
    return (
      <main style={{backgroundColor: '#9abfc5'}}>
        <section id="sdbeer-head" className="grid-x text-center align-center align-middle">
          <h2 className="appHeaderText cell">SD BEER MOBILE APP</h2>
        </section>
        <section id="sdbeer-app-header" className="grid-x">
          <div
            className="cell large-6 grid-x align-middle align-center small-12">
              <div className="cell large-6" >
                <h3 style={{fontWeight: 'bold'}}> Get the SD Beer App, available today for Android and iOS! </h3>
              </div>
            <div className="cell grid-x align-middle align-center large-8">
                <div
                  style={{height: '70px', borderRadius: '5px'}}
                  className="appleStore cell large-5">
                </div>
                <div
                  style={{height: '70px', borderRadius: '3px'}}
                  className="androidStore cell large-5">
                </div>
              </div>
            </div>

              { phoneType === 'Android' ?

              <div id="vidPlayer-android" className="align-middle align-center cell large-6 small-12">
                <div class="marvel-device s5 black">
                  <div class="top-bar"></div>
                  <div class="sleep"></div>
                  <div class="camera"></div>
                  <div class="sensor"></div>
                  <div class="speaker"></div>
                  <div class="screen">
                    <ReactPlayer
                      id="app-vid-android"
                      loop='true'
                      playing='true'
                      url='https://s3-us-west-1.amazonaws.com/sdbeer/ScreenRecording_04-03-2018+15-08-58.MP4'
                    />
                  </div>
                  <div class="home"></div>
                </div>
              </div>
              :
              <div id="vidPlayer" className="align-middle align-center cell large-6 small-12">
                <div id ="iphoneDisplay" class="marvel-device iphone8 silver large-6">
                  <div class="sleep"></div>
                  <div class="volume"></div>
                  <div class="camera"></div>
                  <div class="sensor"></div>
                  <div class="speaker"></div>
                  <div class="screen">
                    <ReactPlayer
                      id="app-vid"
                      loop='true'
                      playing='true'
                      url='https://s3-us-west-1.amazonaws.com/sdbeer/ScreenRecording_04-03-2018+15-08-58.MP4'
                      height="620px"
                    />
                  </div>
                  <div class="home"></div>
                  <div class="bottom-bar"></div>
                </div>
              </div>

            }

            </section>
          </main>
        )
      }

    }

    export default Home
