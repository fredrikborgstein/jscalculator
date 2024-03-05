import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container className="text-center mt-5">
      <footer>
        <p>
          <strong>Some information about the tests:</strong>
        </p>
        <p>Due to problems with React 18, I had to downgrade to React 17.</p>
        <p>
          Before the downgrade, the calculator failed tests 9, 12, 13 and 14.
        </p>
        <p>These tests, test for the following calculations:</p>
        <ul style={{ listStyle: "none" }}>
          <li>
            <strong>9:</strong> "5 - 9 + 5" should equal 1, which it does, just
            not when the test was running
          </li>
          <br />
          <li>
            <strong>12:</strong> "5 * 5.5" should equal 27.5, which it does,
            just not when the test was running
          </li>
          <br />
          <li>
            <strong>9:</strong> "5 * - + 5" should equal 10, which it does, just
            not when the test was running
          </li>
          <br />
          <li>
            <strong>9:</strong> "5 + 5 = + 3" should equal 13, which it does,
            just not when the test was running
          </li>
        </ul>
        <p>
          The reason these tests failed, was due to known issues with the tests
          and React 18, you can read more{" "}
          <a href="https://github.com/freeCodeCamp/freeCodeCamp/issues/45922">
            here
          </a>
          .{" "}
        </p>
      </footer>
    </Container>
  );
}

export default Footer;
