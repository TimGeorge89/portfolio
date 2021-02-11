<template>
  <div class="home">
    <!-- NAVIGATION -->
    <nav>
      <div class="nav-wrapper wrapper">
        <div class="menu">
          <!-- hamburger -->
          <div @click="toggle()" :class="showMenu ? 'rotate-menu hamburger' : 'hamburger'">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <!-- navigation -->
          <div :class="showMenu ? 'show-menu navigation' : 'navigation'">
            <ul>
              <!-- <li><a>Home</a></li> -->
              <li><a @click="toggle()" href="#about-sec" v-smooth-scroll>About</a></li>
              <li><a @click="toggle()" href="#projects-sec" v-smooth-scroll>Projects</a></li>
              <li><a @click="toggle()" href="mailto:timdev89@gmail.com">Contact</a></li>
              <li><a href="/Timothy-George.pdf" download>Resume</a></li>
            </ul>
          </div>
        </div>
        <!-- social media logos -->
        <div class="social-container">
          <div class="social-wrapper">
            <a
              href="https://github.com/TimGeorge89"
              target="_blank"
              rel="noopener">
              <img src="/images/github-logo.png" alt=""/>
            </a>
          </div>
          <div class="social-wrapper">
            <a
              href="https://www.linkedin.com/in/tim-george-31bab01b8/"
              target="_blank"
              rel="noopener"
              ><img src="/images/linkedin-logo.png" alt=""
            /></a>
          </div>
          <!-- <div class="social-wrapper">
          <img src="/images/github-logo.png" alt="">
        </div> -->
        </div>
      </div>
    </nav>

    <!-- MAIN HEADER -->
    <div class="header-wrapper wrapper">
      <div class="header-content">
        <h1>Hey, I'm <span>Tim George</span>.</h1>
        <h1>A front end developer.</h1>
        <!-- button -->
        <div class="button">
          <a href="#about-sec" v-smooth-scroll><button>Wait, who?</button></a>
        </div>
      </div>
    </div>

    <!-- ABOUT TIM -->
    <div id="about-sec" class="about-wrapper">
      <div class="wrapper">
        <div class="about">
          <h1>WHO?</h1>
          <p>
            My name is Tim, I am a front end developer living in sunny South
            Florida. I enjoy building clean, responsive web
            experiences with up to date HTML5, CSS3, SASS, and
            JavaScript. I am a people person and work well in team
            oriented environments. And I'm excited to further my skills in this
            evolving industry.
          </p>
          <div class="button">
            <a href="#projects-sec" v-smooth-scroll><button>Sounds cool</button></a>
          </div>
        </div>
        <!-- image -->
        <div class="bust-image">
          <img src="/images/tim-bust.png" alt="" />
        </div>
      </div>
    </div>

    <!-- PORTFOLIO -->
    <div id="projects-sec" class="portfolio">
      <!-- RANDOM HEX -->
      <div class="wrapper">
          <div class="info">
            <!-- project info -->
            <h2>RANDOM HEX APP</h2>
            <p>
              Random hex is an incredibly small and simple tool
              that will always generate a random hexadecimal color value. 
            </p>
            <div class="button">
              <a href="https://randomhexi.netlify.app" target="_blank" rel="noopener"><button>Visit</button></a>
              <a href="https://github.com/TimGeorge89/random-hex" target="_blank" rel="noopener"><button>Github</button></a>
            </div>
          </div>
          <!-- image -->
          <div class="project-image">
            <img src="/images/tiny-hex.png" alt="" />
          </div>
      </div>

      <!-- NASA -->
      <div class="wrapper">
          <div class="info">
            <!-- project info -->
            <h2>NASA IMAGE APP</h2>
            <p>
              Love space? Have a research project to do? This app leverages the
              NASA Image Database API and shows you any image related to a key
              word. It's like Google... But for space!
            </p>
            <div class="button">
              <a href="https://nasa-search-app.netlify.app/" target="_blank" rel="noopener"><button>Visit</button></a>
              <a href="https://github.com/TimGeorge89/nasa-search-app" target="_blank" rel="noopener"><button>Github</button></a>
            </div>
          </div>
          <!-- image -->
          <div class="project-image">
            <img src="/images/nasa-tiny.jpeg" alt="" />
          </div>
      </div>

      <!-- LCC&D -->
      <div class="wrapper">
          <div class="info">
            <!-- project info -->
            <h2>LCC&D</h2>
            <p>
              Concrete cutting and demolition site for a client. Maade with Wordpress and Elementor!
            </p>
            <div class="button">
              <a href="https://lewisconcretecutting.com/" target="_blank" rel="noopener"><button>Visit</button></a>
              <!-- <a href="https://github.com/TimGeorge89/nasa-search-app" target="_blank" rel="noopener"><button>Github</button></a> -->
            </div>
          </div>
          <!-- image -->
          <div class="project-image">
            <img src="/images/lccd-tiny.jpeg" alt="" />
          </div>
      </div>

      <!-- EMPLOYEET -->
      <div class="wrapper">
          <div class="info">
            <!-- project info -->
            <h2>EMPLOYEET</h2>
            <p>
              Looking for new employees? Employeet will yeet someone into that open position
              faster than your retina can actually track.
            </p>
            <div class="button">
              <a href="https://dreamy-mahavira-6c2215.netlify.app/" target="_blank" rel="noopener"><button>Visit</button></a>
              <a href="https://github.com/TimGeorge89/employeet" target="_blank" rel="noopener"><button>Github</button></a>
            </div>
          </div>
          <!-- image -->
          <div class="project-image">
            <img src="/images/employeet-tiny.jpeg" alt="" />
          </div>
      </div>

      <!-- WEATHER -->
      <div class="wrapper">
          <div class="info">
            <!-- project info -->
            <h2>WEATHER APP</h2>
            <p>
              This is a very simple application that allows you to search your city or zip code
              and return your current local weather.
            </p>
            <div class="button">
              <a href="https://vue-weather-app-demo.netlify.app/" target="_blank" rel="noopener"><button>Visit</button></a>
              <a href="https://github.com/TimGeorge89/weather-app" target="_blank" rel="noopener"><button>Github</button></a>
            </div>
          </div>
          <!-- image -->
          <div class="project-image">
            <img src="/images/weather-tiny.jpeg" alt="" />
          </div>
      </div>

      <!-- JUNOS DRY CLEANING -->
      <div class="wrapper">
          <div class="info">
            <!-- project info -->
            <h2>JUNO'S</h2>
            <p>
              Just a funny Drycleaning website for a dog that loves to lick stains out of 
              clothing. This website was made with the stock version of Worpress.
            </p>
            <div class="button">
              <a href="https://gtonma.com/" target="_blank" rel="noopener"><button>Visit</button></a>
              <!-- <a href="" target="_blank" rel="noopener"><button>Github</button></a> -->
            </div>
          </div>
          <!-- image -->
          <div class="project-image">
            <img src="/images/junos-tiny.jpeg" alt="" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu
    },
  }
};
</script>

<style lang="scss">
@import "src/scss/main";

html {
  height: 100vh;
}

body {
  background: $bg-grey;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  // NAVIGATION
  .nav-wrapper {
    display: flex;
    position: relative;
    
    //hamburger
    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 60px;
      width: 60px;
      background: $bg-grey;
      border: 2px $easy-blue solid;
      border-radius: 100px;
      margin: 20px;
      cursor: pointer;
      transition: all 0.3s ease;

      span {
        display: block;
        margin: 0 auto;
        height: 3px;
        width: 30px;
        background: white;
      }

      span:nth-child(2) {
        margin: 5px auto;
      }
    }
    // hamburger nav
    .navigation {
      display: flex;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 110px;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease;
      @media screen and (max-width: 1000px) {
        top: 80px;
        left: -10px;
        padding: 10px;
        z-index: 999;
      }
      ul {
        display: flex;
        margin: auto;
        list-style: none;
        @media screen and (max-width: 1000px) {
          display: block;
          background: darken($bg-grey, 5%);
          padding: 0 30px;
        }
        li {
          margin: 5px 0;
          a {
            display: block;
            text-decoration: none;
            color: $easy-blue;
            font-size: 20px;
            padding: 10px;
            cursor: pointer;
            transition: 0.15s;
            &:hover {
              color: darken($easy-blue, 20%);
            }
          }
        }
      }
    }
    .show-menu {
      display: flex;
      opacity: 1;
      visibility: visible;
    }
    .rotate-menu {
      transform: rotate(90deg);
    }
    // social media
    .social-container {
      display: flex;
      align-items: center;
      margin-left: auto;
      .social-wrapper {
        margin-left: 20px;
        a {
          display: block;
          background: $bg-grey;
          border: 2px $easy-blue solid;
          border-radius: 100px;
          padding: 8px;
          img {
            display: block;
            max-width: 30px;
          }
        }
      }
    }
  }
}
// MAIN HEADER
.header-wrapper {
  min-height: 100vh;
  display: flex;
  .header-content {
    margin: auto;
    text-align: center;
    h1 {
      font-size: 50px;
      letter-spacing: 1.5px;
      font-weight: 400;
      padding: 0;
      margin: 0;
      color: white;
      span {
        color: $easy-blue;
      }
    }

    .button {
      display: flex;
      justify-content: center;
      margin-top: 35px;
      a {
        button {
          font-size: 23px;
          color: white;
          text-decoration: none;
          letter-spacing: 2px;
          background: $bg-grey;
          padding: 13px 15px;
          outline: none;
          border: 2px white solid;
          transition: all 0.3s ease;

          &:hover {
            cursor: pointer;
            background: $easy-blue;
            border: 2px $easy-blue solid;
            border-radius: 5px;
          }

          &:active {
            transform: scale(0.9);
            transition: all 0.1s;
          }
        }
      }
    }
  }
}
// ABOUT
.about-wrapper {
  background: white;
  padding: 198px 0;
  @media screen and (max-width: 1000px) {
      padding: 70px 0;
  }
  .wrapper {
    display: flex;
    .about {
      width: 50%;
      margin: 50px;
      h1 {
        text-align: center;
        margin: 40px 0;
        font-size: 100px;
        color: $bg-grey;
        letter-spacing: 2px;
        @media screen and (max-width: 1000px) {
          margin-top: 0;
        }
      }
      p {
        color: $bg-grey;
        letter-spacing: 2px;
      }
      .button {
        display: flex;
        justify-content: center;
        margin-top: 35px;
        a {
          button {
            font-size: 23px;
            color: $bg-grey;
            text-decoration: none;
            letter-spacing: 2px;
            background: white;
            padding: 13px 15px;
            outline: none;
            border: 2px $bg-grey solid;
            transition: all 0.3s ease;

            &:hover {
              cursor: pointer;
              background: $easy-blue;
              border: 2px $easy-blue solid;
              border-radius: 5px;
            }

            &:active {
              transform: scale(0.9);
              transition: all 0.1s;
            }
          }
        }
      }
    }
    .bust-image {
      display: flex;
      justify-content: center;
      width: 50%;
      margin: auto;
      // margin-left: 50px;
      img {
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .wrapper {
      flex-wrap: wrap;
      justify-content: center;
      .about {
        text-align: center;
        width: 100%;
      }
      .bust-image {
        width: 100%;
        img {
          display: none;
        }
      }
    }
  }
}
// PORTFOLIO
.portfolio {
  .wrapper {
    display: flex;
    padding: 70px 0;
    margin: 50px;
    justify-content: space-between;
    @media screen and (max-width: 1000px) {
      flex-wrap: wrap;

      > div {
        width: 100% !important;
      }
    }
      .info {
        width: 48%;
        @media screen and (max-width: 1000px) {
          order: 1;
        }
        h2 {
          text-align: center;
          margin: 40px 0;
          font-size: 50px;
          color: white;
          letter-spacing: 2px;
        }
        p {
          text-align: center;
          color: white;
          letter-spacing: 2px;
          // padding: 0 40px;
          margin-bottom: 20px;
        }
        .button {
          display: flex;
          justify-content: center;
          // margin-top: 35px;
          a {
            button {
              font-size: 20px;
              color: white;
              text-decoration: none;
              letter-spacing: 2px;
              background: $bg-grey;
              padding: 13px 26px;
              margin-right: 30px;
              outline: none;
              border: 2px white solid;
              transition: all 0.3s ease;

              &:hover {
                cursor: pointer;
                background: $easy-blue;
                border: 2px $easy-blue solid;
                border-radius: 5px;
              }

              &:active {
                transform: scale(0.9);
                transition: all 0.1s;
              }
            }
          }
        }
      }
      .project-image {
      width: 48%;
      img {
        width: 100%;
      }
    }
  }
}
</style>

