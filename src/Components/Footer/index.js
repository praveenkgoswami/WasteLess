import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/icons/color.svg'

export default class Footer extends Component {
  render() {
    return (
      <footer className="animation-on show_block animated full-visible">
        <div className="container">
          <div className="flex_row">
            <div className="left">
              <div className="language_picker">
                <Link to={'/'} className="logo">
                  <img src={logo} alt="" />
                </Link>
                <p className="copyright">© Wasteless, 2019</p>
              </div>
              <div className="menu_links">
                <div className="col">

                  <Link className="sub_descr" to={'#'}>
                    Dynamic Pricing
                  </Link>
                  <Link className="sub_descr" to={'#'}>
                    Advantages
                  </Link>
                  <Link className="sub_descr" to={'#'}>
                    Process
                  </Link>
                  <Link className="sub_descr" to={'#'}>
                    Customer Experience
                  </Link>
                  <Link className="sub_descr" to={'#'}>
                    Case Studies
                  </Link>
                  <Link className="sub_descr" to={'#'}>
                    For Suppliers
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer_row">
              <div className="col">

                <Link className="sub_descr" to={'#'}>
                  About Us
                </Link>
                <Link className="sub_descr" to={'#'}>
                  Environment
                </Link>
                <Link className="sub_descr" to={'#'}>
                  Career
                </Link>
                <Link className="sub_descr" to={'#'}>
                  Team
                </Link>
                <Link className="sub_descr" to={'#'}>
                  Press
                </Link>
              </div>
              <div className="col">
                <Link className="sub_descr" to={'#'}>Facebook</Link>
                <Link className="sub_descr" to={'#'}>Instagram</Link>
                <Link className="sub_descr" to={'#'}>Linkedin</Link>
                <Link className="sub_descr" to={'#'}>Twitter</Link>
              </div>
            </div>

          </div>

        </div>
      </footer>
    )
  }
}
