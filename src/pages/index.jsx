import React from 'react'

import Layout from '../sections/Layout'

import {
   StyledWrapper,
   StyledHeading,
   StyledPara,
   StyledSkills,
   StyledSkill,
   StyledName
} from '../styles/index'

const IndexPage = () => {
   const [socials] = React.useState([
      {
         title: '🖼️ Instagram',
         url: 'https://www.instagram.com/ersin_kosar'
      },
      { title: '🐤 Twitter', url: 'https://www.twitter.com/ersinkosar' },
      { title: '🤝🏼 LinkedIn', url: 'https://www.linkedin.com/in/ersinkosar' },
      { title: '👨‍💻 Github', url: 'https://www.github.com/ersinkosar' }
     
   ])
   return (
      <Layout
         meta={{
            title: 'Ersin KOŞAR | Software Engineer',
            description:
               "Hey👋🏼, I’m Praveen, a software engineer based in New Delhi who enjoys building apps from idea to implementation. I've experience with both design & development(front-end & back-end).",
            keywords:
               'front end, back end, design, html, pug, css, scss, javascript, nodejs, reactjs, graphql, expressjs, mongoose, mongodb, gatsby, figma, design, user interface, user experience'
         }}>
         <StyledWrapper>
            <div>
               <StyledName>Ersin KOŞAR</StyledName>
               <StyledHeading>
                  I design
                  <span role="img" aria-label="paint board">
                     🎨
                  </span>
                  & code
                  <span role="img" aria-label="computer">
                     👨‍💻
                  </span>
               </StyledHeading>
               <StyledPara>
                  Hey
                  <span role="img" aria-label="waving hand">
                     👋🏼
                  </span>
                  , I’m a <span>software engineer</span> based in New Delhi who
                  enjoys building products from{' '}
                  <span>idea to implementation</span>. Currently{' '}
                  <span>engineering solutions</span> for mealkit industry by
                  building a ecosystem of interconnected applications.
               </StyledPara>
               <StyledSkills>
                  {socials.map(social => (
                     <StyledSkill key={social.url}>
                        <a
                           href={social.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           title={social.title}>
                           {social.title}
                        </a>
                     </StyledSkill>
                  ))}
               </StyledSkills>
            </div>
         </StyledWrapper>
      </Layout>
   )
}

export default IndexPage
