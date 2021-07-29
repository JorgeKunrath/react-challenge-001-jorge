import { useEffect, useState } from "react";
import styled from "styled-components";

import images from "./images";
import theme from "./theme";
import { getFromLS, getRandomInt, setInLS } from "./functions/localStorage";

import Container from "./components/common/Container";
import Item from "./components/common/Item";
import Separator from "./components/common/Separator";
import Spacer from "./components/common/Spacer";
import Hero from "./components/Hero";
import Header from "./components/Header";
import HeroCta from "./components/HeroCta";
import Availability from "./components/Availability";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ShareHost from "./components/ShareHost";
import IconCalendar from "./components/icons/Calendar";

const Main = styled.main`
  @media not all and (min-width: ${theme.size.m}) {
    text-align: center;
  }

  a {
    color: var(--secondary);
    text-decoration: none;
    border-bottom: 1px solid;
    font-weight: 500;
  }
`;

const testAB = {
  1: {
    title: "Easily create or join a local nanny share with Hapu",
    description:
      "Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.",
  },
  2: {
    title: "Create the childcare you need at a price you can afford",
    description:
      "Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.",
  },
};

function App() {
  const [abValue, setAbValue] = useState(null);

  useEffect(() => {
    if (abValue === null) {
      const currentValue = getFromLS("ab-hero");
      if (currentValue) {
        setAbValue(currentValue);
      } else {
        const newValue = getRandomInt(1, 2);
        setInLS("ab-hero", newValue);
        setAbValue(newValue);
      }
    }
  }, [abValue]);

  if (abValue === null) return null;

  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Main>
        <Hero>
          <Item col="s1-5 m1-4 l1-7">
            <h1>{testAB[abValue].title}</h1>
            <Spacer axis="y" size="1rem" when={{ m: "1.5rem" }} />
            <p>{testAB[abValue].description}</p>
            <Spacer axis="y" size="4rem" when={{ m: "2.5rem" }} />
            <HeroCta>See hapu in action (27 seconds)</HeroCta>
          </Item>
          <Item col="s1-5 m5-7 l8-12" hide="s">
            <img src={images.featured} alt="" style={{ marginLeft: "auto" }} />
          </Item>
        </Hero>
        <section>
          <Availability>
            <Container>
              <Item col="s1-5 m2-6 l3-11" className="inner">
                <img src={images.profile} alt="Sarah’s profile pic" />
                <div>
                  <span>
                    <a href="#demo">Sarah’s day care available now in North Sydney</a>
                  </span>
                  <span className="when">Wednesday, Thursday, Friday - 7:30 - 5:30</span>
                </div>
              </Item>
            </Container>
          </Availability>
          <Spacer axis="y" size="4rem" when={{ m: "6rem", l: "8rem" }} />
          <Container align="center">
            <Item col="s1-5 m4-7 l7-13" row="m1">
              <picture>
                <source media="(min-width: 400px)" srcSet={images.macMockupBig} />
                <img src={images.macMockup} alt="" />
              </picture>
            </Item>
            <Item col="s1-5 m1-4 l2-7" row="m1">
              <h2>Share your home, nanny and costs</h2>
              <Spacer axis="y" size="1rem" when={{ m: "1.5rem", l: "2.5rem" }} />
              <p>
                You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half
                be, well, fantastic?! If only it was easy to connect with other parents to share
                your costs? Well now it is, with Hapu. <a href="#demo">Hapu means tribe</a> and it’s
                our foundational 3 tribal principles that empowers you to create and manage your own
                tribe. A tribe that together has the power to create new affordable solutions in
                childcare that work for you and your community.
              </p>
              <Spacer axis="y" size="1.5rem" when={{ l: "2.5rem" }} />
              <a href="#demo">Ready to get started?</a>
            </Item>
          </Container>
          <Separator />
          <Container align="center">
            <Item col="s1-5 m1-7 l2-12" style={{ textAlign: "center" }}>
              <h2>Are you a parent without a nanny and looking to share?</h2>
              <Spacer axis="y" size="1rem" />
              <p>
                Leave us your name and email and we’ll update you as soon as a share becomes
                available in your area!
              </p>
              <Spacer axis="y" size="1rem" when={{ l: "3.5rem" }} />
            </Item>
            <Item col="s1-5 m2-6 l4-10">
              <Form abValue={abValue} />
            </Item>
          </Container>
          <Separator />
          <Container align="center">
            <Item col="s1-5 m1-4 l2-6" row="m1">
              <picture>
                <source media="(min-width: 400px)" srcSet={images.formBig} />
                <img src={images.form} alt="" />
              </picture>
              <Spacer axis="y" size="2rem" when={{ m: "0" }} />
            </Item>
            <Item col="s1-5 m4-7 l7-12" row="m1">
              <h2>Shared payments made simple</h2>
              <Spacer axis="y" size="1rem" when={{ m: "1.5rem", l: "2.5rem" }} />
              <p>
                Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill
                week in, week out and you might encounter more than a few snares. But not with Hapu.
                Simply set your rates and our automated payment system takes care of the rest. You
                need never talk money or who owes what.
              </p>
              <Spacer axis="y" size="1.5rem" when={{ l: "2.5rem" }} />
              <a href="#demo">Read how Bridget’s share (without Hapu) ended over $15</a>
            </Item>
          </Container>
          <Separator />
          <Container align="center">
            <Item col="s1-5 m1-7 l3-11">
              <div style={{ textAlign: "center" }}>
                <h2>A framework built for the long term</h2>
                <Spacer axis="y" size="1rem" when={{ m: "1.5rem", l: "2.5rem" }} />
                <p>
                  Childcare is for the long term. And you need a framework you can count on that
                  gives your share long term viability and success. That’s why we’ve defined Hapu
                  around our three tribal principles; clearly defined process, transparency over
                  money and equality of participation.
                </p>
                <Spacer axis="y" size="1.5rem" when={{ l: "2.5rem" }} />
                <a href="#demo">Read how Hapu’s tribal background defines our app</a>
              </div>
            </Item>
            <Item col="s1-5 m1-7 l2-12" hide="s">
              <Spacer axis="y" size="1.5rem" when={{ l: "2.5rem" }} />
              <img src={images.table} alt="" />
            </Item>
          </Container>
          <Separator />
          <Container align="center">
            <Item col="s1-5 m1-7 l3-11">
              <img src={images.diary} alt="" style={{ margin: "0 auto" }} />
              <Spacer axis="y" size="1.5rem" when={{ l: "2.5rem" }} />
              <div style={{ textAlign: "center" }}>
                <h2>Coming soon: Nanny Share Daily Diary!</h2>
                <Spacer axis="y" size="1rem" when={{ m: "1.5rem", l: "2.5rem" }} />
                <p>
                  With the Hapu daily diary your nanny will be able to update you and your sharers
                  with photos and commentary of the day. You and sharers will receive notifications
                  and you’ll be able to login to view the daily adventures fo your little ones. We
                  can’t wait!
                </p>
              </div>
            </Item>
          </Container>
          <Spacer axis="y" size="4rem" when={{ m: "6rem", l: "8rem" }} />
          <ShareHost>
            <Container>
              <Item col="s1-5 m2-6 l4-10" className="inner">
                <Spacer axis="y" size="2.5rem" when={{ m: "3.5rem", l: "5rem" }} />
                <h2>Become a nanny share host</h2>
                <Spacer axis="y" size="0" when={{ m: "1rem" }} />
                <p>Takes less than 5 minutes to get started</p>
                <Spacer axis="y" size="1rem" when={{ m: "1.5rem" }} />
                <span>
                  <a href="#demo" className="cta">
                    <IconCalendar />
                    <span>
                      Create Your Nanny Share
                      <small>Takes less than 5 minutes</small>
                    </span>
                  </a>
                </span>
                <Spacer axis="y" size="1.5rem" />
                <span>
                  <a href="#demo">Or browse local nanny-shares</a>
                </span>
                <Spacer axis="y" size="1.5rem" when={{ m: "2rem", l: "2.5rem" }} />
              </Item>
            </Container>
          </ShareHost>
        </section>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
