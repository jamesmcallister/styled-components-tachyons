# tachyons-for-styled-components

Beaware that you need to use `snake_cased` rather than `kebab-cased`

Thanks to :
Adam Morse for http://tachyons.io/
Jon Gold for https://github.com/jongold/tachyons-js
and also https://styled-components.com/

Install with npm i.e

```sh 

npm install styled-components-tachyons
```

Add tachyons css variables somewhere in your project.  Below are some of the default tachyons variables (some excluded for brevity).  Alternatively you could `import` variables.css from this respository via your favorite bundler (webpack etc.).

```html
    <style>
     :root {
        --black: #000;
        --near-black: #111;
        --dark-gray:#333;
        --mid-gray:#555;
        --gray: #777;
        --silver: #999;
        --light-silver: #aaa;
        --moon-gray: #ccc;
        --light-gray: #eee;
        --near-white: #f4f4f4;
        --white: #fff;

        --dark-red: #f00008;
        --red: #ff3223;
        --orange: #f3a801;
        --gold: #f2c800;
        --yellow: #ffde37;
        --purple: #7d5da9;
        --light-purple: #8d4f92;
  
    }
    </style>
```

Example usage

```jsx

import styled from 'styled-components'
import tachyons from 'styled-components-tachyons'

const Article = styled.article`
  ${tachyons}
  font-family: athelas, georgia, serif;
  background-color: var(--yellow);
`
const Main = styled.div`
  ${tachyons}
  background:url(./static/009.jpg) no-repeat center;
`
const Header = styled.header`
  ${tachyons}
`
const Div = styled.div`
  ${tachyons}
  `
const H1 = styled.h1`
  ${tachyons}
  `
const H2 = styled.h2`
  ${tachyons}
  `
const H3 = styled.h3`
  ${tachyons}
  `
const P = styled.p`
  ${tachyons}
  `
const Blockquote = styled.blockquote`
  ${tachyons}
  `
const Cite = styled.cite`
  ${tachyons}
  `
export default () =>
  <Article>
    <Main dt w_100 vh_100 tc bg_dark_gray white cover >
      <Div dtc v_mid >
        <Header white-70 >
          <H2 f6 fw1 ttu tracked mb2 lh_title >Issue Six</H2>
          <H3 f6 fw1 lh_title >Summer MMXVI</H3>
        </Header>
        <H1 f1 f_headline_l fw1 i white_60 >The Chronicles</H1>
        <Blockquote ph0 mh0 measure f4 lh_copy center >
          <P fw1 white_70 >
            It's the space you put between the notes that make the music.
        </P>
          <Cite f6 ttu tracked fs_normal >Massimo Vignelli</Cite>
        </Blockquote>
      </Div>
    </Main>
    <Div center measure_wide f5 pv5 lh_copy ph2 >
      <H1 f1 lh_title>The repercussion of ugliness is endless</H1>
      <p>
        The choice of paper size is one of the  first of any given work to be printed. There are two basic paper size systems in the world: the international A sizes, and the American sizes.
    </p>
      <p>
        The international Standard paper sizes, called the A series, is based
      on a golden rectangle, the divine proportion. It is extremely handsome
      and practical as well. It is adopted by many countries around the world
      and is based on the German DIN metric Standards. The United States uses
      a basic letter size (8 1/2 x 11”) of ugly proportions, and results in
      complete chaos with an endless amount of paper sizes. It is a
      by_product of the culture of free enterprise, competition and waste.
      Just another example of the misinterpretations of freedom.
    </p>
      <p>
        These are the basic DIN sizes in mm. for : A0, 841x1189 _ A1, 594x841 _
      A2, 420x594 _ A3, 297x420 _ A4, 210x297 _ A5, 148x210 _ A6, 105 x148 _
      A7, 74x 105 _ A8, 52x74 _ A9, 37x52 _ A10, 26x37.
    </p>
      <p>
        The A4 is the basic size for stationary. Two thirds of it is a square,
      a nice economical happenstance resulting from the golden rectangle.
      It is one of the reasons we tend to use as much
      as possible the DIN sizes: proportions are always leading to other nice proportions.
    </p>
      <p>
        This does not happen with the American basic size which leads to nothing. I counted 28 different standard sizes in USA!. The only reason we use it is because everybody in USA uses it, all stationary in USA is that size, so are manilla folders,  les and of ce equipment!
      The repercussion of ugliness is endless.
    </p>
    </Div>
  </Article>

      
```
