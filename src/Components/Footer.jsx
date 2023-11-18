import Button from "react-bootstrap/Button";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }

  return (
    <>
      <footer>
        <div className="card">
          <div className="card-body">
            <center>
              <h6 className="card-title">
                Developed by S K Sahil Mandal
                <span></span>
                <br />
                <br />
                Copyright © {year}
                <br />
                All Rights Reserved.
              </h6>
            </center>
            <Button
              variant="warning"
              onClick={scrollToTop}
              id="scrollToTopBtn"
              title="Go to top"
              style={{ float: "right" }}
            >
              🔝
            </Button>
          </div>
        </div>
      </footer>
    </>
  );
}
