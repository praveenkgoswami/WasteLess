import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import {homeNavList} from '../../constants/homeNavList';
import introductionIc from '../../assets/images/icons/introduction.svg';
import summaryIc from '../../assets/images/icons/summary.svg';
import dynamicPricing from '../../assets/images/icons/dynamic_pricing.svg';
import foodWasteActive from '../../assets/images/icons/food_waste_active.svg';
import increasingRevenueActive from '../../assets/images/icons/increasing_revenue_active.svg';
import check from '../../assets/images/icons/check.svg';
import development from '../../assets/images/icons/development.svg';
import store from '../../assets/images/icons/store.svg';
import problem from '../../assets/images/icons/problem.svg';
import nextArrow from '../../assets/images/icons/side_arrow.svg';
import prevArrow from '../../assets/images/icons/side_arrow_left.svg';
// import process from '../../assets/images/icons/process.svg';

import planningProcess from '../../assets/images/planning_process.svg';
import developmentProcess from '../../assets/images/developmentProcess.svg';
import installation from '../../assets/images/installation.svg';
import eslInstallation from '../../assets/images/esl-installation-copy-2-min.jpg';
import marketingPhoto from '../../assets/images/marketing_photo.jpg';
import introductionMin from '../../assets/images/introduction-min.jpg';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log('nextprops', props);
  let classes = [className];
  classes.push('arrow_right_gradient');
  return (
    <div className={classes.join(' ')} style={{...style}} onClick={onClick}>
      <div id="arrow_right_case_studies" style={{backgroundImage: `url(${nextArrow})`}} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  let classes = [className];
  classes.push('arrow_left_gradient');
  return (
    <div className={classes.join(' ')} style={{...style}} onClick={onClick}>
      <div id="arrow_left_case_studies" style={{backgroundImage: `url(${prevArrow})`}} />
    </div>
  );
}

class Home extends Component{
  componentDidMount() {
    document.body.classList.add("CaseStudies-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("CaseStudies-page");
  }

  render() {
    let settings = {
      className: 'main_navigation',
      dots: false,
      infinite: false,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <React.Fragment>
        <div className="full_page show_block">
          <section id="case_studies__main" className="case_studies__main">
            {/*<div className="bubbles-container animated">
              <div className="bubbles-container_1" id="bubbles_1">
                  <div className="bubbles-sub-container">
                    <div className="bubble bubble_1"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/4/image.png&quot;); transform: matrix(1, 0, 0, 1, 0, 0);"></div>
                    <div className="bubble bubble_2"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/3/image.png&quot;); transform: matrix(1, 0, 0, 1, 81, 234);"></div>
                    <div className="bubble bubble_3"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/2/image.png&quot;); transform: matrix(1, 0, 0, 1, 234, 51);"></div>
                    <div className="bubble bubble_4"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/1/image.png&quot;); transform: matrix(1, 0, 0, 1, 332, 250);"></div>
                    <div className="bubble bubble_5"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/5/image.png&quot;); transform: matrix(1, 0, 0, 1, 500, 59);"></div>
                    <div className="bubble bubble_6"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/6/image.png&quot;); transform: matrix(1, 0, 0, 1, 568, 233);"></div>
                    <div className="bubble bubble_7"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/7/image.png&quot;); transform: matrix(1, 0, 0, 1, 701, 33);"></div>
                    <div className="bubble bubble_8"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/8/image.png&quot;); transform: matrix(1, 0, 0, 1, 806, 274);"></div>
                    <div className="bubble bubble_9"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/9/image.png&quot;); transform: matrix(1, 0, 0, 1, 958, 48);"></div>
                    <div className="bubble bubble_10"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/10/image.png&quot;); transform: matrix(1, 0, 0, 1, 1031, 275);"></div>
                    <div className="bubble bubble_11"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/11/image.png&quot;); transform: matrix(1, 0, 0, 1, 1200, 106);"></div>
                    <div className="bubble bubble_12"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/12/image.png&quot;); transform: matrix(1, 0, 0, 1, 1308, 254);"></div>
                  </div>
                  <div className="bubbles-sub-container">
                    <div className="bubble bubble_1"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/4/image.png&quot;); transform: matrix(1, 0, 0, 1, 1, 25);"></div>
                    <div className="bubble bubble_2"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/3/image.png&quot;); transform: matrix(1, 0, 0, 1, 94, 212);"></div>
                    <div className="bubble bubble_3"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/2/image.png&quot;); transform: matrix(1, 0, 0, 1, 223, 23);"></div>
                    <div className="bubble bubble_4"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/1/image.png&quot;); transform: matrix(1, 0, 0, 1, 324, 252);"></div>
                    <div className="bubble bubble_5"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/5/image.png&quot;); transform: matrix(1, 0, 0, 1, 513, 84);"></div>
                    <div className="bubble bubble_6"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/6/image.png&quot;); transform: matrix(1, 0, 0, 1, 563, 246);"></div>
                    <div className="bubble bubble_7"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/7/image.png&quot;); transform: matrix(1, 0, 0, 1, 703, 40);"></div>
                    <div className="bubble bubble_8"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/8/image.png&quot;); transform: matrix(1, 0, 0, 1, 808, 296);"></div>
                    <div className="bubble bubble_9"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/9/image.png&quot;); transform: matrix(1, 0, 0, 1, 964, 49);"></div>
                    <div className="bubble bubble_10"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/10/image.png&quot;); transform: matrix(1, 0, 0, 1, 1031, 277);"></div>
                    <div className="bubble bubble_11"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/11/image.png&quot;); transform: matrix(1, 0, 0, 1, 1197, 102);"></div>
                    <div className="bubble bubble_12"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/12/image.png&quot;); transform: matrix(1, 0, 0, 1, 1313, 271);"></div>
                  </div>
                </div>
                <div className="bubbles-container_2" id="bubbles_2">
                  <div className="bubbles-sub-container">
                    <div className="bubble bubble_1"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/4/image.png&quot;); transform: matrix(1, 0, 0, 1, 12, 19);"></div>
                    <div className="bubble bubble_2"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/3/image.png&quot;); transform: matrix(1, 0, 0, 1, 93, 211);"></div>
                    <div className="bubble bubble_3"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/2/image.png&quot;); transform: matrix(1, 0, 0, 1, 234, 47);"></div>
                    <div className="bubble bubble_4"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/1/image.png&quot;); transform: matrix(1, 0, 0, 1, 327, 265);"></div>
                    <div className="bubble bubble_5"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/5/image.png&quot;); transform: matrix(1, 0, 0, 1, 508, 58);"></div>
                    <div className="bubble bubble_6"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/6/image.png&quot;); transform: matrix(1, 0, 0, 1, 569, 234);"></div>
                    <div className="bubble bubble_7"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/7/image.png&quot;); transform: matrix(1, 0, 0, 1, 701, 47);"></div>
                    <div className="bubble bubble_8"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/8/image.png&quot;); transform: matrix(1, 0, 0, 1, 801, 292);"></div>
                    <div className="bubble bubble_9"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/9/image.png&quot;); transform: matrix(1, 0, 0, 1, 960, 47);"></div>
                    <div className="bubble bubble_10"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/10/image.png&quot;); transform: matrix(1, 0, 0, 1, 1023, 290);"></div>
                    <div className="bubble bubble_11"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/11/image.png&quot;); transform: matrix(1, 0, 0, 1, 1198, 76);"></div>
                    <div className="bubble bubble_12"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/12/image.png&quot;); transform: matrix(1, 0, 0, 1, 1309, 261);"></div>
                  </div>
                  <div className="bubbles-sub-container">
                    <div className="bubble bubble_1"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/4/image.png&quot;); transform: matrix(1, 0, 0, 1, 8, 22);"></div>
                    <div className="bubble bubble_2"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/3/image.png&quot;); transform: matrix(1, 0, 0, 1, 91, 209);"></div>
                    <div className="bubble bubble_3"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/2/image.png&quot;); transform: matrix(1, 0, 0, 1, 230, 50);"></div>
                    <div className="bubble bubble_4"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/1/image.png&quot;); transform: matrix(1, 0, 0, 1, 332, 273);"></div>
                    <div className="bubble bubble_5"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/5/image.png&quot;); transform: matrix(1, 0, 0, 1, 504, 63);"></div>
                    <div className="bubble bubble_6"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/6/image.png&quot;); transform: matrix(1, 0, 0, 1, 565, 228);"></div>
                    <div className="bubble bubble_7"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/7/image.png&quot;); transform: matrix(1, 0, 0, 1, 697, 57);"></div>
                    <div className="bubble bubble_8"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/8/image.png&quot;); transform: matrix(1, 0, 0, 1, 812, 288);"></div>
                    <div className="bubble bubble_9"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/9/image.png&quot;); transform: matrix(1, 0, 0, 1, 958, 54);"></div>
                    <div className="bubble bubble_10"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/10/image.png&quot;); transform: matrix(1, 0, 0, 1, 1021, 305);"></div>
                    <div className="bubble bubble_11"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/11/image.png&quot;); transform: matrix(1, 0, 0, 1, 1189, 82);"></div>
                    <div className="bubble bubble_12"
                         style="background-image: url(&quot;/Bs.WebApp.Models.Bubble/12/image.png&quot;); transform: matrix(1, 0, 0, 1, 1310, 283);"></div>
                  </div>
                </div>
            </div>*/}
            <div className="title_row container">
              <h1 className="title case_studies_title visible"><span className="word"><span
                className="letter letter-2">L</span><span className="letter letter-3">e</span><span
                className="letter letter-4">a</span><span className="letter letter-5">d</span><span
                className="letter letter-6">i</span><span className="letter letter-7">n</span><span
                className="letter letter-8">g</span></span> <span className="word"><span
                className="letter letter-9">S</span><span className="letter letter-10">p</span><span
                className="letter letter-11">a</span><span className="letter letter-12">n</span><span
                className="letter letter-13">i</span><span className="letter letter-14">s</span><span
                className="letter letter-15">h</span></span> <span className="word"><span
                className="letter letter-16">r</span><span className="letter letter-17">e</span><span
                className="letter letter-18">t</span><span className="letter letter-19">a</span><span
                className="letter letter-20">i</span><span className="letter letter-21">l</span><span
                className="letter letter-22">e</span><span className="letter letter-23">r</span></span> <span
                className="word"><span className="letter letter-24">c</span><span
                className="letter letter-25">u</span><span className="letter letter-26">t</span><span
                className="letter letter-27">s</span></span> <span className="word"><span
                className="letter letter-28">a</span></span> <span className="word"><span
                className="letter letter-29">t</span><span className="letter letter-30">h</span><span
                className="letter letter-31">i</span><span className="letter letter-32">r</span><span
                className="letter letter-33">d</span></span> <span className="word"><span
                className="letter letter-34">o</span><span className="letter letter-35">f</span></span> <span
                className="word"><span className="letter letter-36">i</span><span
                className="letter letter-37">t</span><span className="letter letter-38">s</span></span> <span
                className="word"><span className="letter letter-39">f</span><span
                className="letter letter-40">o</span><span className="letter letter-41">o</span><span
                className="letter letter-42">d</span></span> <span className="word"><span
                className="letter letter-43">w</span><span className="letter letter-44">a</span><span
                className="letter letter-45">s</span><span className="letter letter-46">t</span><span
                className="letter letter-47">e</span></span> <span className="word"><span
                className="letter letter-48">u</span><span className="letter letter-49">s</span><span
                className="letter letter-50">i</span><span className="letter letter-51">n</span><span
                className="letter letter-52">g</span></span> <span className="word"><span
                className="letter letter-53">W</span><span className="letter letter-54">a</span><span
                className="letter letter-55">s</span><span className="letter letter-56">t</span><span
                className="letter letter-57">e</span><span className="letter letter-58">l</span><span
                className="letter letter-59">e</span><span className="letter letter-60">s</span><span
                className="letter letter-61">s</span></span> <span className="word"><span
                className="letter letter-62">D</span><span className="letter letter-63">y</span><span
                className="letter letter-64">n</span><span className="letter letter-65">a</span><span
                className="letter letter-66">m</span><span className="letter letter-67">i</span><span
                className="letter letter-68">c</span></span> <span className="word"><span
                className="letter letter-69">P</span><span className="letter letter-70">r</span><span
                className="letter letter-71">i</span><span className="letter letter-72">c</span><span
                className="letter letter-73">i</span><span className="letter letter-74">n</span><span
                className="letter letter-75">g</span></span></h1>
              <p className="descr case_studies_descr">Spanish retailer partners with Wasteless, cuts a third of its food
                waste and increases revenue by 6.3%</p>
            </div>
            <div className="navigation_block-wr">
              <div className="navigation_block panel-static"> {/*panel-fixed*/}
                <div className="container">
                  <div className="slider_container">
                    <ul id="case_studies_nav">
                      <Slider {...settings}>
                        {
                          homeNavList && homeNavList.map(listObj=>{
                            return(
                              <li key={listObj.title}>
                                <Link to={`#${listObj.target}`} tabIndex="-1">
                                  {listObj.title}
                                </Link>
                              </li>
                            )
                          })
                        }
                      </Slider>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
          </section>
          <section className="introduction_section container" id="introduction">
            <div className="top_block">
              <div className="icon">
                <img src={introductionIc} alt="ic" />
              </div>
              <h2 className="section_title title visible full-visible"><span className="word"><span
                className="letter letter-2">I</span><span className="letter letter-3">n</span><span
                className="letter letter-4">t</span><span className="letter letter-5">r</span><span
                className="letter letter-6">o</span><span className="letter letter-7">d</span><span
                className="letter letter-8">u</span><span className="letter letter-9">c</span><span
                className="letter letter-10">t</span><span className="letter letter-11">i</span><span
                className="letter letter-12">o</span><span className="letter letter-13">n</span></span></h2>
            </div>
            <div className="text-row">
              <div className="img_block_wrapper">
                <div className="parallax-img">
                  <div className="img-translate animated">
                    <div className="img_block parallax_image" style={{backgroundImage: `url(${introductionMin})`}} />
                  </div>
                </div>
              </div>
              <div className="text_block">
                <h3>
                  In November 2017, an international Spanish retailer selected Wasteless to assess whether Wasteless'
                  Dynamic Pricing technology could help improve the key critical elements in the retailer's operations.
                </h3>
                <div className="issues">
                  <p>The main issues at stake were:</p>
  
                  <div className="issues-item">
                    <img src={problem} alt="" />
                    <p>The retailer's food waste problem in stores.
                    </p>
                  </div>
                  <div className="issues-item">
                    <img src={problem} alt="" />
                    <p>The retailer's lost revenue due to inefficient inventory management.</p>
                  </div>
  
                </div>
              </div>
            </div>
            <p>The pilot included deployment and implementation of the Wasteless system in one of the retailer’s central
              Madrid stores, which launched in January 2018. </p>
            <div className="text_columns block_up block_row">
              <div className="text_block animated-block-1">
                <h3>1. Continuous and seamless pricing of items based on their real-time value (RTV), markdown
                  optimization, and featuring prices to consumers using Electronic Shelf Labels (ESLs).</h3>
              </div>
              <div className="text_block animated-block-2">
                <h3>2. Continuous inventory management (by volume and expiration dates), data collection, product
                  onboarding, store monitoring, and integration with the Point-of-Sale system. </h3>
              </div>
            </div>
            <p>
              The pilot included technical POS integration, ESL system installation, Wasteless Local Server Setup, staff
              training, as well as product, system, and operational feedback and improvements.
              <br /><br />
              Launching the live-in-store system, with minimal impact on IT resources, was made possible within 3
              weeks of the kickoff meeting.
            </p>
  
            <div className="cards">
              <h3>The study resulted with:</h3>
              <div className="text_columns cards_row block_up">
                <div className="card-item animated-block-1">
                  <div className="card-content">
                    <div className="sales_growth">
                      <img src={foodWasteActive} alt="" />
                      <div className="percentage">
                        <h2 className="card_title">
                          A waste decrease of
                        </h2>
                        <h3 className="percent">33 %</h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-item animated-block-2">
                  <div className="card-content">
                    <div className="sales_growth">
                      <img src={increasingRevenueActive} alt="" />
                      <div className="percentage">
                        <h2 className="card_title">
                          A revenue increase of
                        </h2>
                        <h3 className="percent">6.3 %</h3>
                      </div>
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
  
          </section>
          <section className="summary_section current" id="summary">
            <div className="container">
              <div className="top_block">
                <div className="icon">
                  <img src={summaryIc} alt="ic" />
                </div>
                <h2 className="section_title title visible full-visible"><span className="word"><span
                  className="letter letter-2">S</span><span className="letter letter-3">u</span><span
                  className="letter letter-4">m</span><span className="letter letter-5">m</span><span
                  className="letter letter-6">a</span><span className="letter letter-7">r</span><span
                  className="letter letter-8">y</span></span></h2>
              </div>
              <div className="text_reduction">
                <p className="animated-block-1">A leading Spanish retailer and Wasteless conducted a pilot across fresh
                  food products. </p>
                <h3 className="animated-block-2">During the pilot, Wasteless was able to reduce average monthly waste per
                  product from 2.8 units to an average of 2.14 units. Likewise, overall waste in the store decreased by an
                  average of 32.7%, while boosting revenue by an average of 6.3%. </h3>
                <p className="animated-block-3">
                  Moreover, 70% of the sales of pilot products were sold when consumers had a choice between a discounted
                  product with a shorter expiration (i.e., price generated by the Wasteless pricing engine) and the same
                  product for its full price and a longer expiration. (In many cases, three or more possible expiration
                  dates were available on the shelf.) In two-thirds of cases where consumers were faced with a choice,
                  they chose the discounted product, while in one-third of cases, they chose to purchase the product at
                  the full price.
                </p>
                <p className="animated-block-4 hidden-text">Of these instances, when consumers had two price points to
                  choose from and opted for the full-priced product, 45% of the time they didn’t actually choose the
                  longest expiration date available on the shelf.</p>
                <p className="animated-block-5 hidden-text">This could mean they were indifferent toward the new pricing
                  system, or they simply didn’t notice. This revealed that consumers exhibited a variety of attitudes in
                  the store; 70% wanted short expiration dates at a cheaper price, and of the 30% who did not, 55% chose
                  the product with the longest expiration date available whereas 45% chose the product with a middle
                  expiration date, while still paying full price.</p>
                <p className="animated-block-6 hidden-text">
                  The pilot confirmed the presence of a clear customer preference toward discounted products, even with
                  shorter expiration dates, to full product prices with longer expiration dates, when both pricing options
                  were available on the shelf.
                  In a similar manner, Wasteless integrated with the retailer's POS system to receive all transaction
                  information relating to the products included in the pilot. When a participating product was purchased,
                  the POS system would pop up with expiration-date options for the cashier to choose from. Based on the
                  chosen date, the correct price for the product was applied.
                </p>
                <p className="animated-block-7 hidden-text">Marketing and communication efforts regarding the new in-store
                  system were minimal, with the notion of testing the system and customer intuitiveness and interactions
                  conducted in the most authentic manner. Because ESLs were novel to the retailer, we decided only to
                  place a sign that explains the rationale for using Wasteless as a form of responsible consumption. The
                  rest was left to the customer.</p>
                <p className="animated-block-8 hidden-text">The system allowed the retailer to track its inventory for
                  each product per expiration date, as well as the sales data. As part of the pilot, the retailer's
                  employees used the Wasteless Mobile App, with which they onboarded new products arriving daily at the
                  store, including their quantity and expiration date. Likewise, they edited the inventory data presented
                  on the app in real time, deducting any expired or defective products that were removed from the store’s
                  inventory.</p>
  
              </div>
              <Link to={'#'} className="read_more_btn more">
                <span className="btn_text">Read more</span>
                <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     className="injected-svg small_arrow inject-me turned">
                  <title>arrow / down / active</title>
                  <desc>Created with Sketch.</desc>
                  <defs />
                  <g id="arrow-/-down-/-active" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <path
                      d="M9.50828609,12.9478428 L9.50828609,6.94751021 C9.50828609,6.39774869 9.95395586,5.95207892 10.5037174,5.95207892 C10.5278958,5.95207892 10.5520662,5.95295983 10.5761805,5.95471992 L10.5761805,5.95471992 C11.1778772,5.99863737 11.6433265,6.50010205 11.6423605,7.10339865 L11.6311829,14.0845432 C11.6303083,14.6307847 11.1912698,15.0752549 10.6450803,15.0828456 L3.54357511,15.1815383 C2.93476027,15.1899993 2.43435936,14.7033163 2.42589839,14.0945015 C2.42581804,14.0887196 2.42578318,14.0829372 2.4257938,14.0771548 L2.4257938,14.0771548 C2.42693192,13.4580537 2.92869828,12.956546 3.54779993,12.9557271 L9.50828609,12.9478428 Z"
                      id="arrow-/-down" fill="#585894" fillRule="nonzero"
                      transform="translate(7.034077, 10.566863) scale(1, -1) rotate(45.000000) translate(-7.034077, -10.566863) " />
                  </g>
                </svg>
              </Link>
            </div>
  
          </section>
          <section className="kpis_section current" id="kpis">
            <div className="container">
              <div className="top_block">
                <div className="icon">
                  <img src={dynamicPricing} alt="ic" />
                </div>
                <h2 className="section_title title visible full-visible"><span className="word"><span
                  className="letter letter-2">K</span><span className="letter letter-3">P</span><span
                  className="letter letter-4">I</span><span className="letter letter-5">s</span></span></h2>
              </div>
  
              <div className="cards">
                <h3>The pilot’s KPI targets were as follows:</h3>
                <div className="text_columns cards_row block_up animated">
                  <div className="card-item animated-block-1">
                    <div className="card-content">
                      <div className="sales_growth">
                        <img src={foodWasteActive} alt="" />
                          <div className="percentage">
                            <h2 className="card_title">
                              A waste reduction of
                            </h2>
                            <h3 className="percent">20 %</h3>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-item animated-block-2">
                    <div className="card-content">
                      <div className="sales_growth">
                        <img src={increasingRevenueActive} alt="" />
                          <div className="percentage">
                            <h2 className="card_title">
                              A revenue increase of
                            </h2>
                            <h3 className="percent">6 %</h3>
                          </div>
                      </div>
  
                    </div>
                  </div>
                </div>
              </div>
              <p>
                The KPIs were measured on a SKU and at the store level for the products in the pilot. In addition,
                Wasteless measured per SKU out-of-stock and overstock levels as indicators of store ordering efficiency,
                because these factors impact Wasteless' ability to meet its KPI goals and improve operations.
                <br /><br />
                  Waste refers to expired products, and does not include defective products, theft, or any products
                  returned by the store or removed from the shelves due to any other reason.
              </p>
  
            </div>
          </section>
          <div className="blue_background">
            <section className="planning current" id="planning">
              <div className="container">
                <div className="top_block">
                  <div className="icon">
                    <img src={summaryIc} alt="ic" />
                  </div>
                  <h2 className="section_title title visible full-visible"><span className="word"><span
                    className="letter letter-2">P</span><span className="letter letter-3">l</span><span
                    className="letter letter-4">a</span><span className="letter letter-5">n</span><span
                    className="letter letter-6">n</span><span className="letter letter-7">i</span><span
                    className="letter letter-8">n</span><span className="letter letter-9">g</span></span>
                  </h2>
                </div>
  
                <div className="text_columns">
                  <div className="column-item">
                    <div className="img-wr">
                      <img src={planningProcess} alt="" />
                    </div>
                    <p className="diagram_title">Diagram 1: Planning Process</p>
                  </div>
                  <div className="column-item">
                    <p>
                      The main planning stages before the commencement of the pilot included a kickoff meeting where
                      various aspects of the business were reviewed (e.g., logistics, operations, in-store processes, the
                      POS system, and the markdown policy).
                      <br /><br />
                        Likewise, historical waste and revenue data of the store participating in the pilot were reviewed
                        by Wasteless, and the KPIs were set.
                        <br /><br />
                          The retailer selected the products for inclusion in the pilot.
                    </p>
                  </div>
                </div>
  
  
              </div>
            </section>
  
            <section className="development_and_testing" id="dev_n_testing">
              <div className="container">
                <div className="top_block">
                  <div className="icon">
                    <img src={development} alt="ic" />
                  </div>
                  <h2 className="section_title title visible"><span className="word"><span
                    className="letter letter-2">D</span><span className="letter letter-3">e</span><span
                    className="letter letter-4">v</span><span className="letter letter-5">e</span><span
                    className="letter letter-6">l</span><span className="letter letter-7">o</span><span
                    className="letter letter-8">p</span><span className="letter letter-9">m</span><span
                    className="letter letter-10">e</span><span className="letter letter-11">n</span><span
                    className="letter letter-12">t</span></span> <span className="word"><span
                    className="letter letter-13">a</span><span className="letter letter-14">n</span><span
                    className="letter letter-15">d</span></span> <span className="word"><span
                    className="letter letter-16">T</span><span className="letter letter-17">e</span><span
                    className="letter letter-18">s</span><span className="letter letter-19">t</span><span
                    className="letter letter-20">i</span><span className="letter letter-21">n</span><span
                    className="letter letter-22">g</span></span></h2>
                </div>
                <div className="process_block">
                  <h4 className="section__sub_title">Process</h4>
                  <div className="text_columns">
                    <p className="column-item">As depicted in Diagram 2, the standard development and testing process
                      would ideally include various steps, some of which were not fully implemented in the pilot (e.g.,
                      ERP and App integration). This was made possible because Wasteless had an auditor in store daily who
                      could monitor, detect, and report any issues, as well as deliver any missing information received
                      from the ERP system. </p>
                    <p className="column-item">
                      Moreover, instead of integrating with an existing retailer app, Wasteless provided employees with a
                      smartphone and the Wasteless App.<br />
                      At the end of each development stage, Q&amp;A and testing were performed to detect any bugs or
                      issues that should be fixed before launching the pilot. Some of the final testing stages were
                      implemented in the retailer’s laboratory.
                    </p>
                  </div>
                  <div className="list_container">
                    <div className="img-wr ">
                      <img src={developmentProcess} alt="" />
                    </div>
                  </div>
                  <p className="diagram_title">Diagram 2: Development and Testing Process </p>
  
                  <div className="integration_block">
                    <h4 className="section__sub_title">POS Integration</h4>
  
                    <div className="text_columns">
                      <div className="column-item">
                        <p>As part of the preparatory steps for the pilot’s commencement, Wasteless was integrated into
                          the retailer’s POS system. As the owner of the POS system, the retailer assigned a number of
                          personnel on its programming team for the task. </p>
                        <h3>The integration took 2 weeks and involved the retailer’s programmers and the Wasteless tech
                          team. </h3>
                      </div>
                      <div className="column-item">
                        <p>As part of the integration, three APIs were built:</p>
                        <div className="integrations_check">
                          <div className="integrations_check-item">
                            <img src={check} alt="" />
                              <p>Catalogue API: through which the POS sent a daily morning catalogue file, including
                                specific product configuration data, to the Wasteless Server.
                              </p>
                          </div>
                          <div className="integrations_check-item">
                            <img src={check} alt="" />
                              <p>Pricing API: trough which the Wasteless Server sent the POS periodic pricing files for
                                products on the shelf.
                              </p>
                          </div>
                          <div className="integrations_check-item">
                            <img src={check} alt="" />
                              <p>Sales Transaction API: trough which the POS notified the Wasteless Server of every item
                                sold.</p>
                          </div>
                        </div>
                      </div>
                    </div>
  
                  </div>
  
                  <div className="configuration_block">
                    <div className="text_columns">
                      <div className="column-item">
                        <h4 className="section__sub_title">Server Configuration</h4>
                      </div>
                      <div className="column-item">
                        <p>The Server configuration process included:</p>
                        <div className="configurations">
                          <div className="text_columns">
                            <div className="column-item">
                              <div className="configuration-item">
                                <img src={check} alt="" />
                                  <p>Setup of the CMS
                                  </p>
                              </div>
                              <div className="configuration-item">
                                <img src={check} alt="" />
                                  <p>Pricing engine
                                  </p>
                              </div>
                              <div className="configuration-item">
                                <img src={check} alt="" />
                                  <p>APIs
                                  </p>
                              </div>
                            </div>
                            <div className="column-item">
                              <div className="configuration-item">
                                <img src={check} alt="" />
                                  <p>Catalogue service
                                  </p>
                              </div>
                              <div className="configuration-item">
                                <img src={check} alt="" />
                                  <p>Network connection</p>
                              </div>
  
                            </div>
                          </div>
  
                        </div>
                      </div>
                    </div>
  
                  </div>
  
  
                </div>
              </div>
            </section>
  
            <section className="installation-section" id="installation">
              <div className="installation-bg">
                <div className="img_block_wrapper">
                  <div className="parallax-small_img">
                    <div className="img-translate parallax-disable animated">
                      <div className="img_bg_block parallax_image animated"
                           style={{backgroundImage: `url(${eslInstallation})`}} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="text-block">
                  <h4 className="section__sub_title">
                    ESL Installation
                  </h4>
                  <div className="text text_white">
                    <p>
                      Because the retailer currently does not have ESL-enabled stores, Wasteless used Pricer’s ESL system
                      and installed it inside the store as part of the pilot. The ESL design is typically flexible, and
                      depends on each retailer’s requirements and specifications. In this case, two prices were displayed:
                      the catalogue price and the Wasteless discounted price.
                    </p>
                  </div>
                </div>
              </div>
            </section>
  
  
            <section className="deployment">
              <div className="container">
                <div className="text_columns">
                  <div className="column-item">
                    <h4 className="section__sub_title">
                      Wasteless Technology Deployment
                    </h4>
                  </div>
                  <div className="column-item">
                    <p>
                      The following Wasteless technologies were deployed as part
                      of the pilot:</p>
                    <div className="deployment_list">
                      <div className="deployment_list-item">
                        <img src={check} alt="" />
                          <p>Dynamic Pricing Engine - specifically set up with relevant parameters specific to the pilot
                            store. The Dynamic Pricing Engine adapts to each location.
                          </p>
                      </div>
                      <div className="deployment_list-item">
                        <img src={check} alt="" />
                          <p>Wasteless Dashboard - allows the retailer's employees and executive to view inventory, sales,
                            waste, out-of-stock/low stock, and overstock, at the store and product levels.
                          </p>
                      </div>
                      <div className="deployment_list-item">
                        <img src={check} alt="" />
                          <p>Wasteless App - was set up to be used by store employees for onboarding new stock and
                            updating stock and shrinkage. This was done instead of integrating with the retailer App.</p>
                      </div>
  
  
                    </div>
                  </div>
                </div>
              </div>
            </section>
  
            <section id="store_intallation" className="store_installation">
              <div className="container">
                <div className="top_block">
                  <div className="icon">
                    <img src={store} alt="ic" />
                  </div>
                  <h2 className="section_title title visible"><span className="word"><span
                    className="letter letter-2">I</span><span className="letter letter-3">n</span><span
                    className="letter letter-4">-</span><span className="letter letter-5">S</span><span
                    className="letter letter-6">t</span><span className="letter letter-7">o</span><span
                    className="letter letter-8">r</span><span className="letter letter-9">e</span></span> <span
                    className="word"><span className="letter letter-10">I</span><span
                    className="letter letter-11">n</span><span className="letter letter-12">s</span><span
                    className="letter letter-13">t</span><span className="letter letter-14">a</span><span
                    className="letter letter-15">l</span><span className="letter letter-16">l</span><span
                    className="letter letter-17">a</span><span className="letter letter-18">t</span><span
                    className="letter letter-19">i</span><span className="letter letter-20">o</span><span
                    className="letter letter-21">n</span></span></h2>
                </div>
  
                <div className="text_columns">
                  <div className="column-item">
                    <div className="img-wr">
                      <img src={installation} alt="" />
                    </div>
                    <p className="diagram_title">Diagram 3: Production Environment (In-Store) Process</p>
                  </div>
                  <div className="column-item">
                    <p>
                      Once the development and testing stage was complete, the system was ready to be installed and tested
                      in-store.
                      <br />
                        <br />
                          The in-store installation process included the following steps:
                    </p>
                    <div className="store_installation_list">
                      <div className="store_installation_list-item">
                        <img src={check} alt="" />
                          <p>Wasteless Server Setup
                          </p>
                      </div>
                      <div className="store_installation_list-item">
                        <img src={check} alt="" />
                          <p>ESL placement
                          </p>
                      </div>
                      <div className="store_installation_list-item">
                        <img src={check} alt="" />
                          <p>ESL system setup
                          </p>
                      </div>
                      <div className="store_installation_list-item">
                        <img src={check} alt="" />
                          <p>Employee Training on Wasteless App and new POS features
                          </p>
                      </div>
                      <div className="store_installation_list-item">
                        <img src={check} alt="" />
                          <p>Placement of in-store Marketing</p>
                      </div>
  
                    </div>
                    <p className="animated-block-8">
                      After implementation, we performed a dry run to ensure that the system functioned smoothly. The dry
                      run was performed on the day of the installation.
                    </p>
                  </div>
                </div>
  
  
              </div>
            </section>
          </div>
          <section id="marketing" className="marketing current">
            <div className="container">
              <div className="top_block">
                <div className="icon">
                  <img src={dynamicPricing} alt="ic" />
                </div>
                <h2 className="section_title title visible full-visible"><span className="word"><span
                  className="letter letter-2">M</span><span className="letter letter-3">a</span><span
                  className="letter letter-4">r</span><span className="letter letter-5">k</span><span
                  className="letter letter-6">e</span><span className="letter letter-7">t</span><span
                  className="letter letter-8">i</span><span className="letter letter-9">n</span><span
                  className="letter letter-10">g</span></span></h2>
              </div>
              <div className="text_columns">
                <div className="column-item">
                  <div className="img_block_wrapper">
                    <div className="parallax-small_img">
                      <div className="img-translate animated">
                        <div className="img_block parallax_image animated" style={{backgroundImage: `url(${marketingPhoto})`}} />
                      </div>
                    </div>
                  </div>
                  <p className="diagram_title">
                    Picture 1: In-store marketing
                  </p>
                </div>
                <div className="column-item">
                  <p>
                    As part of testing the customer experience, it was crucial to measure interactions with the system in
                    the most authentic manner. Therefore, marketing was kept to a minimum in-store. Because ESL was a
                    novel concept for the retailer, we decided only to place a sign that explains the rationale behind
                    using the Wasteless system as a form of responsible consumption. We left the rest to the customer.
  
                  </p>
                </div>
              </div>
  
            </div>
          </section>
          {/*<section className="case-process-section current" id="case_process">
            <div className="container">
              <div className="top_block">
                <div className="icon">
                  <img src={process} alt="ic" />
                </div>
                <h2 className="section_title title visible full-visible"><span className="word"><span
                  className="letter letter-2">T</span><span className="letter letter-3">h</span><span
                  className="letter letter-4">e</span></span> <span className="word"><span
                  className="letter letter-5">P</span><span className="letter letter-6">r</span><span
                  className="letter letter-7">o</span><span className="letter letter-8">c</span><span
                  className="letter letter-9">e</span><span className="letter letter-10">s</span><span
                  className="letter letter-11">s</span></span></h2>
              </div>
  
              <div className="case-process__tabs">
                <ul className="process-tabs__menu tabs_block">
                  <li className="tabs__menu-item">
                    <a data-index="1" className="tab-btn" href="#">Onboarding </a>
                  </li>
                  <li className="tabs__menu-item">
                    <a data-index="2" className="tab-btn active" href="#">Customer Experience </a>
                  </li>
                  <li className="tabs__menu-item">
                    <a data-index="3" className="tab-btn" href="#">Checkout </a>
                  </li>
                  <li className="tabs__menu-item">
                    <a data-index="4" className="tab-btn" href="#">Process Summary </a>
                  </li>
                </ul>
                <div className="tab-content tabs-wr">
                  <a href="#" data-index="1" className="tab-more-btn more active">
                    <span className="tab-more-btn__text">Onboarding</span>
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         className="injected-svg small_arrow turned inject-me">
                      <title>arrow / down / inactive</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g id="arrow-/-down-/-inactive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                          d="M9.50828609,8.94784282 L9.50828609,2.94751021 C9.50828609,2.39774869 9.95395586,1.95207892 10.5037174,1.95207892 C10.5278958,1.95207892 10.5520662,1.95295983 10.5761805,1.95471992 L10.5761805,1.95471992 C11.1778772,1.99863737 11.6433265,2.50010205 11.6423605,3.10339865 L11.6311829,10.0845432 C11.6303083,10.6307847 11.1912698,11.0752549 10.6450803,11.0828456 L3.54357511,11.1815383 C2.93476027,11.1899993 2.43435936,10.7033163 2.42589839,10.0945015 C2.42581804,10.0887196 2.42578318,10.0829372 2.4257938,10.0771548 L2.4257938,10.0771548 C2.42693192,9.45805369 2.92869828,8.95654597 3.54779993,8.95572705 L9.50828609,8.94784282 Z"
                          id="arrow-/-down" fill="#C0C0CC" fillRule="nonzero"
                          transform="translate(7.034077, 6.566863) rotate(45.000000) translate(-7.034077, -6.566863) " />
                      </g>
                    </svg>
                  </a>
  
                  <div data-index="1" className="single-tab tab-content-item tab-content-item_1">
                    <p>
                      The system flow begins with a store employee using the Wasteless Mobile App to onboard all arriving
                      products included in the pilot to the Wasteless Server inventory. An onboarding process consists of
                      creating a record of the amount of units added, the SKU code (which includes the product's name),
                      and the expiration date of the units.
                      <br />
                        <br />
                          There are several possible onboarding methods:
                    </p>
                    <div className="onboarding-list">
                      <div className="onboarding-list-item">
  
                        <img src={check} alt="" />
                          <p>Scanning the case barcode: A case barcode contains the required information for the
                            onboarding process (Picture 3). If the employee scans the case barcode, all data are
                            identified automatically.
                          </p>
                      </div>
                      <div className="onboarding-list-item">
  
                        <img src={check} alt="" />
                          <p>Scanning the product barcode: If a case barcode is missing, the employee scans the barcode on
                            an item in the case, or alternatively, enters the SKU manually. Once the system has identified
                            the product, the employee inputs the number of units per package and the expiration date. (All
                            items in one case have same expiration date.)</p>
                      </div>
  
                    </div>
                    <p>
                      Any changes, adjustments, or edits are possible in real time throughout the day. The onboarding
                      process occurs once per day, when the products arrive, and is required for any unexpected manual
                      removal or addition of new inventory. The Wasteless Server inventory is immediately updated with the
                      new inventory.
                    </p>
  
                    <div className="text_columns barcode_pictures">
                      <div className="column-item">
                        <div className="img_block_wrapper">
                          <div className="parallax-small_img">
                            <div className="img-translate animated">
                              <div className="img_block parallax_image animated"
                                   style={{backgroundImage: `url(${picture2-min})`}} />
                            </div>
                          </div>
                        </div>
                        <p className="diagram_title">Picture 2: Product on-boarding</p>
                      </div>
                      <div className="column-item">
                        <div className="img_block_wrapper">
                          <div className="parallax-small_img">
                            <div className="img-translate animated">
                              <div className="img_block parallax_image animated"
                                   style={{backgroundImage: `url(${picture3-min})`}} />
                            </div>
                          </div>
                        </div>
                        <p className="diagram_title">Picture 3: Case Barcode</p>
                      </div>
                    </div>
                    <p>
                      For example, if an employee adds three units of Caesar Salad, with an expiration date of June 23
                      (Picture 4), then in the inventory, the Wasteless App (Picture 5) and the Wasteless Dashboard
                      (Picture 6) would display all existing inventory, including the newly onboarded products.
                    </p>
                    <div className="text_columns img_row">
                      <div className="column-item img_row_1">
                        <div className="img_block_wrapper">
                          <div className="parallax-small_img">
                            <div className="img-translate animated">
                              <div className="img_block parallax_image animated"
                                   style={{backgroundImage: `url(${picture_4})`}} />
                            </div>
                          </div>
                        </div>
                        <p className="diagram_title"> Picture 4: Product onboarding</p>
                      </div>
                      <div className="column-item img_row_2">
  
                        <div className="img-wr">
                          <img src="/Bs.WebApp.Models.CmsImage/586/picture_5_new.jpg" alt="" />
                        </div>
  
  
                        <p className="diagram_title">Picture 5: Wasteless App, Existing Inventory</p>
                      </div>
                    </div>
                    <div className="list_container">
                      <div className="img-wr full-width-img">
                        <img src="/Bs.WebApp.Models.CmsImage/587/picture_6_new.jpg" alt="" />
                      </div>
                    </div>
                    <p className="diagram_title">Picture 6: Wasteless Dashboard</p>
                  </div>
  
                  <Link data-index="2" to={'#'} className="tab-more-btn more active">
                    <span className="tab-more-btn__text">Customer Experience</span>
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         className="injected-svg small_arrow inject-me">
                      <title>arrow / down / inactive</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g id="arrow-/-down-/-inactive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                          d="M9.50828609,8.94784282 L9.50828609,2.94751021 C9.50828609,2.39774869 9.95395586,1.95207892 10.5037174,1.95207892 C10.5278958,1.95207892 10.5520662,1.95295983 10.5761805,1.95471992 L10.5761805,1.95471992 C11.1778772,1.99863737 11.6433265,2.50010205 11.6423605,3.10339865 L11.6311829,10.0845432 C11.6303083,10.6307847 11.1912698,11.0752549 10.6450803,11.0828456 L3.54357511,11.1815383 C2.93476027,11.1899993 2.43435936,10.7033163 2.42589839,10.0945015 C2.42581804,10.0887196 2.42578318,10.0829372 2.4257938,10.0771548 L2.4257938,10.0771548 C2.42693192,9.45805369 2.92869828,8.95654597 3.54779993,8.95572705 L9.50828609,8.94784282 Z"
                          id="arrow-/-down" fill="#C0C0CC" fillRule="nonzero"
                          transform="translate(7.034077, 6.566863) rotate(45.000000) translate(-7.034077, -6.566863) " />
                      </g>
                    </svg>
                  </Link>
  
                  <div data-index="2" className="single-tab tab-content-item tab-content-item_2 active">
                    <p>The customer would see two possible prices on the ESL: </p>
                    <div className="text_columns">
                      <div className="column-item">
                        <p>
                          1. The discounted price for the shortest expiration date.
                          <br />
                            <br />
                              2. The full price for all other expiration dates available from the product on the shelf.
                              Once the customer chooses a product, all they’ve got to do is make the purchase, as they
                              usually do. During the pilot, customers encountered a clear and flawless user experience.
                              Consumers came to understand the Wasteless pricing system quickly, and were able to make
                              their pricing decisions easily and proudly.
                        </p>
                      </div>
                      <div className="column-item">
                        <p>
                          3. As shown in Diagram 4, in March, 1,494 units were sold, of which 1,037 units were sold under
                          competitive conditions. In other words, the 1,037 units were sold while the consumer had the
                          option to choose between two price options: the catalogue price (i.e., the product’s standard
                          price) and the product’s discounted price (i.e., the price generated by the Wasteless pricing
                          engine).
                        </p>
                      </div>
                    </div>
                    <div className="customers_img">
                      <div className="customers_img__row list_container">
                        <div className="img-wr">
                          <img src="/Bs.WebApp.Models.CmsImage/588/Picture7_Customer_Experience_1-min.jpg" alt="" />
                        </div>
                        <div className="img-wr">
                          <img src="/Bs.WebApp.Models.CmsImage/589/Customer-Experience_2-copy-min.jpg" alt="" />
                        </div>
                        <div className="img-wr">
                          <img src="/Bs.WebApp.Models.CmsImage/590/Picture7_Customer_Experience_3-min.jpg" alt="" />
                        </div>
                      </div>
                      <p className="diagram_title">Picture 7: Customer Experience</p>
                    </div>
  
                    <div className="text_columns">
                      <div className="column-item">
                        <p>
                          Of the 1,037 units, 692 were sold at a discounted price, while 345 were sold at their full
                          price. Of the 345 units sold at full price, 155 had neither the longest nor the shortest
                          expiration date available on the shelf, but fell somewhere between the two expiration-date
                          extremes. This means that the consumers who purchased these 155 units were most likely
                          indifferent toward the new pricing system, or simply did not notice it.
                        </p>
                      </div>
                      <div className="column-item">
                        <p>
                          These results revealed the clear presence of the customer’s preference toward discounted prices,
                          even with shorter expiration dates, to full product prices with longer expiry dates, when both
                          pricing options were available on the shelf. The consumer is price sensitive, and in the
                          majority of cases, shows a preference toward discounted products.
                        </p>
                      </div>
                    </div>
                    <div id="diagram-scrollable" className="list_container">
                      <div className="img-wr centered_diagram">
                        <img src="/Bs.WebApp.Models.CmsImage/591/customer_exp.svg" alt="" />
                      </div>
                    </div>
                    <p className="diagram_title">Diagram 4: March Sales Breakdown</p>
                  </div>
  
  
                  <Link data-index="3" to={'#'} className="tab-more-btn more active">
                    <span className="tab-more-btn__text">Checkout</span>
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" className="injected-svg small_arrow inject-me">
                      <title>arrow / down / inactive</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g id="arrow-/-down-/-inactive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                          d="M9.50828609,8.94784282 L9.50828609,2.94751021 C9.50828609,2.39774869 9.95395586,1.95207892 10.5037174,1.95207892 C10.5278958,1.95207892 10.5520662,1.95295983 10.5761805,1.95471992 L10.5761805,1.95471992 C11.1778772,1.99863737 11.6433265,2.50010205 11.6423605,3.10339865 L11.6311829,10.0845432 C11.6303083,10.6307847 11.1912698,11.0752549 10.6450803,11.0828456 L3.54357511,11.1815383 C2.93476027,11.1899993 2.43435936,10.7033163 2.42589839,10.0945015 C2.42581804,10.0887196 2.42578318,10.0829372 2.4257938,10.0771548 L2.4257938,10.0771548 C2.42693192,9.45805369 2.92869828,8.95654597 3.54779993,8.95572705 L9.50828609,8.94784282 Z"
                          id="arrow-/-down" fill="#C0C0CC" fillRule="nonzero"
                          transform="translate(7.034077, 6.566863) rotate(45.000000) translate(-7.034077, -6.566863) " />
                      </g>
                    </svg>
                  </Link>
  
                  <div data-index="3" className="single-tab tab-content-item tab-content-item_3">
                    <div className="text_columns">
                      <div className="column-item">
                        <div className="img-wr">
                          <img src="/Bs.WebApp.Models.CmsImage/592/picture8-min.jpg" alt="photo">
                        </div>
                        <p className="diagram_title">Picture 8. Checkout</p>
                      </div>
                      <div className="column-item">
                        <div className="img-wr">
                          <img src="/Bs.WebApp.Models.CmsImage/593/checkout_photo2.jpg" alt="photo">
                        </div>
                        <p className="diagram_title">
                          Picture 9: POS screen date options
                        </p>
                      </div>
                    </div>
  
                    <div className="text_columns">
                      <div className="column-item">
                        <p>The flow continues with the checkout process, when the cashier scans the purchased product at
                          the POS. For the retailer, this produces a few date options, from which the cashier can choose
                          the relevant expiration date for the product. Once the date is chosen, the relevant price is
                          applied. </p>
                      </div>
                      <div className="column-item">
                        <p>In a more integrated setup, the expiration date can be included in the barcode. The GS1
                          Expanded DataBar is an accepted standard that offers this key element for a seamless
                          process.</p>
                      </div>
                    </div>
                  </div>
  
                  <a data-index="4" href="#" className="tab-more-btn more active">
                    <span className="tab-more-btn__text">Process Summary</span>
                    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" className="injected-svg small_arrow inject-me">
                      <title>arrow / down / inactive</title>
                      <desc>Created with Sketch.</desc>
                      <defs />
                      <g id="arrow-/-down-/-inactive" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                          d="M9.50828609,8.94784282 L9.50828609,2.94751021 C9.50828609,2.39774869 9.95395586,1.95207892 10.5037174,1.95207892 C10.5278958,1.95207892 10.5520662,1.95295983 10.5761805,1.95471992 L10.5761805,1.95471992 C11.1778772,1.99863737 11.6433265,2.50010205 11.6423605,3.10339865 L11.6311829,10.0845432 C11.6303083,10.6307847 11.1912698,11.0752549 10.6450803,11.0828456 L3.54357511,11.1815383 C2.93476027,11.1899993 2.43435936,10.7033163 2.42589839,10.0945015 C2.42581804,10.0887196 2.42578318,10.0829372 2.4257938,10.0771548 L2.4257938,10.0771548 C2.42693192,9.45805369 2.92869828,8.95654597 3.54779993,8.95572705 L9.50828609,8.94784282 Z"
                          id="arrow-/-down" fill="#C0C0CC" fillRule="nonzero"
                          transform="translate(7.034077, 6.566863) rotate(45.000000) translate(-7.034077, -6.566863) " />
                      </g>
                    </svg>
                  </a>
  
                  <div data-index="4" className="single-tab tab-content-item tab-content-item_4">
                    <p>As new products are being onboarded to the shelves, and others purchased, the inventory listed on
                      the Wasteless Server changes constantly. This in turn leads to new prices for the changing available
                      expiration dates on the shelves.</p>
                    <div className="process_summary_block">
                      <div className="img-wr">
                        <img src="/Bs.WebApp.Models.CmsImage/594/process_summary.svg" alt="" />
                          <p className="diagram_title diagram_title_mobile">Diagram 5: Process Flow</p>
                      </div>
                      <div className="diagram_block_descr diagram_block_descr_1">
                        <div className="content_wrapper">
                          <h3>01. Product Onboarding</h3>
                          <p>New products are onboarded daily using the Wasteless Mobile App. Store-employees add the
                            product, its expiration date, and the quantity.</p>
                          <div className="line_1 line"
                               style="background-image: url('/Bs.WebApp.Models.CmsImage/595/line_1.svg')"></div>
                        </div>
                      </div>
                      <div className="diagram_block_descr diagram_block_descr_2">
                        <div className="content_wrapper">
                          <h3>02. Inventory Update</h3>
                          <p>The Inventory on the Wasteless Server is being updated as new products are onboarded.</p>
                          <div className="line_2 line"
                               style="background-image: url('/Bs.WebApp.Models.CmsImage/596/line_2.svg')"></div>
                        </div>
                      </div>
                      <div className="diagram_block_descr diagram_block_descr_3">
                        <div className="content_wrapper">
                          <h3>03. Real-Time Dynamic Pricing</h3>
                          <p>
                            The Wasteless Pricing Engine generates new prices in real-time as inventory levels change, and
                            sends them to the ESL system which displays the new updated prices.
                          </p>
                          <div className="line_3 line"
                               style="background-image: url('/Bs.WebApp.Models.CmsImage/597/line_3.svg')"></div>
                        </div>
                      </div>
                      <div className="diagram_block_descr diagram_block_descr_4">
                        <div className="content_wrapper">
                          <h3>
                            04. Checkout
                          </h3>
                          <p>A customer purchasing a product goes through the POS. The cashier swipes the product barcode,
                            which automatically recognizes if the product is in the pilot. The cashier then has to choose
                            a date from the options presented on the POS screen, following that the relevant price is
                            applied.</p>
                          <div className="line_4 line"
                               style="background-image: url('/Bs.WebApp.Models.CmsImage/598/line_4.svg')"></div>
                        </div>
                      </div>
                      <div className="diagram_block_descr diagram_block_descr_5">
                        <div className="content_wrapper">
                          <h3>05. Inventory and Price Update</h3>
                          <p>Inventory levels are automatically updated in the Wasteless Server as products are purchased.
                            The Wasteless Pricing Engine keeps updating prices as needed throughout the day according to
                            the real-time inventory, and other parameters.</p>
                          <div className="line_5 line"
                               style="background-image: url('/Bs.WebApp.Models.CmsImage/599/line_5.svg')"></div>
                        </div>
                      </div>
                    </div>
                    <p className="diagram_title">Diagram 5: Process Flow</p>
                  </div>
                </div>
              </div>
  
            </div>
          </section>*/}
        </div>
        <section className="get_started animation-on show_block">
          <div className="container">
            <div className="flex_row">
              <div className="left">
                <h2 className="title visible full-visible">
                  <span className="word">
                    <span className="letter letter-2">R</span>
                    <span className="letter letter-3">e</span>
                    <span className="letter letter-4">a</span>
                    <span className="letter letter-5">d</span>
                    <span className="letter letter-6">y</span>
                  </span> <span className="word">
                    <span className="letter letter-7">t</span>
                    <span className="letter letter-8">o</span>
                  </span> <span className="word">
                    <span className="letter letter-9">g</span>
                    <span className="letter letter-10">e</span>
                    <span className="letter letter-11">t</span>
                  </span> <span className="word">
                    <span className="letter letter-12">s</span>
                    <span className="letter letter-13">t</span>
                    <span className="letter letter-14">a</span>
                    <span className="letter letter-15">r</span>
                    <span className="letter letter-16">t</span>
                    <span className="letter letter-17">e</span>
                    <span className="letter letter-18">d</span>
                    <span className="letter letter-19">?</span>
                  </span>
                </h2>
              </div>
              <div className="right">
                <Link to={'#'} className="btn">
                <span className="btn_fill" />
                Sign in
              </Link>
              <Link to={'#'} className="btn black_text">
                <span className="btn_fill btn_green" />
                Contact Sales
              </Link>
            </div>
          </div>
          <div className="divider" />
        </div>
      </section>
      </React.Fragment>
    );
  }
}

export default Home;