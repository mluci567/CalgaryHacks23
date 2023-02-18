import "../Login.css";

const Login = () => {
  return (
    <div>
      <div className="leftSide">
        <div className="centered">
          <h1>Let's start studying.</h1>
          <p>Find a space to study that works for you.</p>
          <br />

          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="email" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
