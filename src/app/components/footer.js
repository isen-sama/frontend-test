import Image from "next/image"

export default function Footer(){
    return(
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-3 mb-2">
              <h5>About</h5>
              <ul className="nav flex-column">
              <form>
                <p class="text-body-secondary">This website is created to promote the anime bocchi the rock.</p>
              </form>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-2">
              <h5>Contact</h5>
              <ul className="nav flex-column">
              <form>
                <p class="text-body-secondary">No : 0123456789 <br />Email : maoanime@eiei.com</p>
              </form>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                  <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2024 MaoAnime Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
            </ul>
          </div>
        </footer>
      </div>


    )
}
