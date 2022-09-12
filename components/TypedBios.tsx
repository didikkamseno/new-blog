import React from 'react'
import Typed from 'typed.js'
// import Twemoji from './Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef(null)

  React.useEffect(() => {
    const options = {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    //   shuffle: true,
    }
    typed.current = new Typed(el.current, options)
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden text-base">
        <li>
          You can discuss with me about <b className="font-medium">Coding.</b>
          {/* <Twemoji emoji="india-flag" /> */}
        </li>
        <li>
          You can discuss with me about <b className="font-medium">NextJs and Jekyll.</b>
        </li>
        <li>
          You can discuss with me about <b className="font-medium">Mathematics.</b>
        </li>
        {/* <li>
          You can discuss with me about <b className="font-medium">L.</b>
        </li> */}
        {/* <li>
        I'm passionate about maths and occasionally coding.
        </li>
        <li>I'm a learner and reader.</li>
        <li>
          I'm currently working on <b className="font-medium">Fractional-order dynamical systems</b>
          .
        </li> */}
        <li>
          You can discuss with me about <b className="font-medium">Epidemiology.</b>
        </li><li>
          You can discuss with me about <b className="font-medium">Fractional-order derivatives.</b>
        </li><li>
          You can discuss with me about <b className="font-medium">Linear Algebra.</b>
        </li><li>
          You can discuss with me about <b className="font-medium">Harmonic Analysis.</b>
        </li><li>
          You can discuss with me about <b className="font-medium">Numerical Methods.</b>
        </li>
        {/* <li>I'm focusing on epidemiology now.</li>
        <li>I work mostly with Caputo , Atangana-Baleanu derivatives.</li>
        <li>I'm also interested in Linear Algebra, Harmonic Analysis and Numerical Methods.</li> */}
        <li>
          I'm a <b className="font-medium">tea person.</b> 
          {/* <Twemoji emoji="coffee" /> */}
        </li>
        <li>
          I love <b className="font-medium">cricket, football and kabaddi.</b> I'm a <b className="font-medium">sport-guy.</b> 
          {/*<span className="ml-1">
            <Twemoji emoji="volleyball" />
          </span> */}
        </li>
        <li>I love watching <b className="font-medium">cricket.</b>
            {/* <Twemoji emoji="cricket" /></li> */}
        </li>
         <li> I love listening <b className="font-medium">flute and guitar.</b>
          {/* <Twemoji emoji="guitar" /> */}
        </li>
        <li>I love <b className="font-medium">punjabi music.</b>
        </li>
        <li>
          I love playing <b className="font-medium">video games.</b> 
          {/* <Twemoji emoji="video-game" /> */}
        </li>
      </ul>
      <span ref={el} className="text-gray-600 dark:text-gray-400" />
    </div>
  )
}

export default TypedBios