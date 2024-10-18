import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="#">Company name</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"></a>
            </li>
          </ul>
          <form class="d-flex" role="search">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Features</a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Enterprise</a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Support</a>
            </li>
          </ul>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Pricing</a>
            </li>
          </ul>
            <button class="btn btn-outline-primary" type="submit">Sign up</button>
          </form>
        </div>
        </div>
      </nav>
      <div class="container-sm text-center mt-5">
        <h1>Pricing</h1>
        <h6 class="mt-5">Quickly build an effective pricing table for your potential customers with this <br/> Bootstrap example. It's built with default Bootstrap components and utilities <br/> with little customization.</h6>
        <div class="row d-flex justify-content-around mt-5">
        <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Free</div>
          <div className="card-body">
            <h5 className="card-title">$0 / mo</h5>
            <p className="card-text">10 users included</p>
            <p className="card-text">2GB of storage</p>
            <p className="card-text">Email support</p>
            <p className="card-text">Help center access</p>
            <button type="button" class="btn btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Pro</div>
          <div className="card-body">
            <h5 className="card-title">$15 / mo</h5>
            <p className="card-text">20 users included</p>
            <p className="card-text">10GB of storage</p>
            <p className="card-text">Priority email support</p>
            <p className="card-text">Help center access</p>
            <button type="button" class="btn btn-outline-primary">Get started</button>
          </div>
        </div>
        <div className="card text-bg-light mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-header">Enterprise</div>
          <div className="card-body">
            <h5 className="card-title">$29 / mo</h5>
            <p className="card-text">30 users included</p>
            <p className="card-text">15GB of storage</p>
            <p className="card-text">Phone and Email support</p>
            <p className="card-text">Help center access</p>
            <button type="button" class="btn btn-outline-primary">Contact us</button>
          </div>
        </div>
        </div>
      </div>
      <footer class="py-4">
        <div class="container ml-5 text-center">    
          <div class="row">
            <div class="col-md-3">
              <h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bootstrap" viewBox="0 0 16 16">
                <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
                <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
                </svg>
              </h5>
              <ul class="list-unstyled">
                <li><a href="#" class="text-dark text-decoration-none">© 2017-2018</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Features</h5>
              <ul class="list-unstyled">
                <li><a href="#" class="text-dark text-decoration-none">Cool stuff</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Random feature</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Team feature</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Resources</h5>
              <ul class="list-unstyled">
                <li><a href="#" class="text-dark text-decoration-none">Resource</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Resource name</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Another resource</a></li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>About</h5>
              <ul class="list-unstyled">
                <li><a href="#" class="text-dark text-decoration-none">Team</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Locations</a></li>
                <li><a href="#" class="text-dark text-decoration-none">Privacy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;


