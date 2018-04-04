import React, { Component } from 'react'
// import {Link} from 'react-router-dom'



class Home extends Component {

  getMobileOperatingSystem(gucci) {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
      if (/windows phone/i.test(userAgent)) {
          // return "Windows Phone";
          console.log('Windows phone')
          return gucci = 'Windows phone'
      }

      if (/android/i.test(userAgent)) {
          // return "Android";
          console.log('Android')
          return gucci = 'Android'
      }

      // iOS detection from: http://stackoverflow.com/a/9039885/177710
      if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          // return "iOS";
          console.log('iphone')
          return gucci = 'iphone'
      }
      // return "unknown";
      console.log('unknown')
      return gucci = 'unknown'
  }


  render() {
    let phoneType;
    return (
      <main>
        {this.getMobileOperatingSystem(phoneType)}
        {phoneType}
      </main>
      )
    }

  }

  export default Home
